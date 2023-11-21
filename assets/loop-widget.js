"use strict";

const APP_ID = "5284869";
const CREATE_BUNDLE_TRANSACTION_API = "https://api-service.loopwork.co/bundleTransaction";
const FILTER_BUNDLE_SP_API = "https://apiv2.loopwork.co/bundleStorefront/filterBundleSellingPlanIds";
const GET_PRODUCT_BUNDLE_DATA_API = "https://apiv2.loopwork.co/bundleStorefront/getChildVariants?id=";
const PRODUCT_QUANTITY_SELECTOR = ".quantity__input";

//dev
// const APP_ID = "5186329";
// const CREATE_BUNDLE_TRANSACTION_API = "https://dev-api-service.loopwork.co/bundleTransaction";
// const FILTER_BUNDLE_SP_API = "https://dev-apiv2.loopwork.co/bundleStorefront/filterBundleSellingPlanIds";
// const GET_PRODUCT_BUNDLE_DATA_API = "https://dev-apiv2.loopwork.co/bundleStorefront/getChildVariants?id=";

//prod
// const APP_ID = "5284869";
// const CREATE_BUNDLE_TRANSACTION_API = "https://api-service.loopwork.co/bundleTransaction";
// const FILTER_BUNDLE_SP_API = "https://apiv2.loopwork.co/bundleStorefront/filterBundleSellingPlanIds";
// const GET_PRODUCT_BUNDLE_DATA_API = "https://apiv2.loopwork.co/bundleStorefront/getChildVariants?id=";

const productDataClass = "loopProductQuickJson",
    loopSubscriptionContainerId = "loop-subscription-container",
    oneTimePurchaseOptionClass = "loop-one-time-purchase-option",
    subscriptionGroupClass = "loop-subscription-group",
    purchaseOptionName = "loop_purchase_option",
    sellingPlanSelectorClass = "loop-selling-plan-selector";

/**
 * start application
 */
async function main(productId) {
    try {
        log(`start application: ${productId}`);
        const productData = getProductData(productId);
        setupDomListeners(productId);
        initializeWindowLoopProps();
        const loopSellingPlanGroups = getLoopSellingPlanGroups(
            productData?.selling_plan_groups
        );
        productData.selling_plan_groups = loopSellingPlanGroups;
        const loopProductVariants = getLoopProductVariants(
            productData.variants,
            loopSellingPlanGroups
        );
        productData.variants = loopProductVariants;
        window.loopProps[productId] = {
            product: productData,
        };
        await setLoopUIProperties(Shopify.shop);
        showSellingPlanFieldset(productId);
        showLoopPurchaseOptionsLabel(productId);
        initializeLoopUI(productData);
        await processBundleProduct(productId);
        // uncomment below function call to listen for cart events
        listenLoopCustomEvent();
        await getBundleSpgs(productId);
        displayLoopWidget(productId);
        observeFormChanges(productData);
    } catch (error) {
        logError(error);
    }
}

/**
 * setup DOM listeners to update values like selling_plan, price etc.
 * @param {number} productId
 */
function setupDomListeners(productId) {
    log(`setup dom listeners for ${productId}`);
    const parentContainer = getLoopSubscriptionContainer(productId);
    const oneTimeOptions = parentContainer.querySelectorAll(
        `.${oneTimePurchaseOptionClass}`
    );
    const sellingPlanGroupOptions = parentContainer.querySelectorAll(
        `.${subscriptionGroupClass}`
    );
    const purchaseOptions = parentContainer.querySelectorAll(
        `input[name=${purchaseOptionName}]`
    );
    const deliveryOptions = parentContainer.querySelectorAll(
        `.${sellingPlanSelectorClass}`
    );

    for (const option of oneTimeOptions) {
        option.addEventListener("click", clickOnSellingPlanGroupContainer);
    }

    for (const option of sellingPlanGroupOptions) {
        option.addEventListener("click", clickOnSellingPlanGroupContainer);
    }

    for (const option of purchaseOptions) {
        option.addEventListener("click", changeInSellingPlanGroupLoop);
    }

    for (const option of deliveryOptions) {
        option.addEventListener("change", changeInDeliveryOptionLoop);
    }
    log(`setup dom listeners complete for ${productId}`);
}

/**
 * initialize props to use at multiple places
 */
function initializeWindowLoopProps() {
    if (!window.loopProps) {
        window.loopProps = {};
    }
}

/**
 * returns loop subscriptions selling plan groups
 * @param {Array} sellingPlanGroups
 * @returns
 */
function getLoopSellingPlanGroups(sellingPlanGroups) {
    if (Array.isArray(sellingPlanGroups)) {
        return sellingPlanGroups.filter((s) => s.app_id === APP_ID);
    }
    return [];
}

/**
 * returns product variants with loop selling plan groups
 * @param {Array} variants
 * @param {Array} loopSellingPlanGroups
 * @returns
 */
function getLoopProductVariants(variants, loopSellingPlanGroups) {
    const loopSpgSet = new Set(loopSellingPlanGroups.map((s) => s.id));
    return variants.map((v) => {
        return {
            ...v,
            selling_plan_allocations: v.selling_plan_allocations.filter((s) =>
                loopSpgSet.has(s.selling_plan_group_id)
            ),
        };
    });
}

async function setLoopUIProperties(shopifyDomain) {
    const loopUIProps = await fetchLoopUIProperties(shopifyDomain);
    window.loopPropsUI = {
        ...loopUIProps,
    };
}

async function fetchLoopUIProperties(shopifyDomain) {
    log(`fetch loop subscription UI props: ${shopifyDomain}`);
    const endpoint = `https://d217z8zw4dqir.cloudfront.net/${shopifyDomain}.json`;
    const response = await fetch(endpoint);
    return (await response.json()) ?? {};
}

// for showing fieldset where selling plans are present
function showSellingPlanFieldset(productId) {
    const loopSubscriptionWidget = getLoopSubscriptionContainer(
        productId
    ).querySelector("#loop-selling-plan-fieldset");
    if (loopSubscriptionWidget) {
        loopSubscriptionWidget.classList.remove(
            "loop-display-none",
            "loop-display-none-by-variant"
        );
    }
}

// show Purchase Option label
function showLoopPurchaseOptionsLabel(productId) {
    const elements = getLoopSubscriptionContainer(productId).querySelectorAll(
        ".loop-purchase-options-label"
    );
    if (elements) {
        for (const e of elements) {
            e.classList.remove(
                "loop-display-none",
                "loop-display-none-by-variant"
            );
        }
    }
}

function initializeLoopUI(productData) {
    let variantId = getVariantIdFromURL(productData.variants);
    if (!variantId) {
        variantId = getFirstAvailableVariantVariantId(productData.id);
    }
    loopInit({ productId: productData.id, product: productData, variantId });
}

function getVariantIdFromURL(variants) {
    const currentPageUrl = document.URL;
    const url = new URL(currentPageUrl);
    const variantIdFromUrl = url.searchParams.get("variant") || "";
    const variantIdSet = new Set(variants?.map((v) => v.id));

    return variantIdSet.has(Number(variantIdFromUrl)) ? variantIdFromUrl : null;
}

function getFirstAvailableVariantVariantId(productId) {
    const productData = getProductData(productId);
    const v = productData?.variants.find((v) => v.available);
    const variantId = v?.id;
    return variantId;
}

function displayLoopWidget(productId) {
    const loopWidget = getLoopSubscriptionContainer(productId);
    if (loopWidget) {
        loopWidget.classList.remove("loop-display-none");
    }
}

function observeFormChanges(productData) {
    document.querySelectorAll("form").forEach((form) => {
        const variantElement = form.querySelector('[name="id"]');
        const loopVariantElement = form.querySelector(
            '[name="loop_variant_id"]'
        );
        if (loopVariantElement && variantElement?.value) {
            loopVariantElement.value = variantElement.value;
        }

        const variantIdSet = new Set(productData?.variants?.map((v) => v.id));
        if (
            variantElement?.value &&
            variantIdSet.has(Number(variantElement?.value))
        ) {
            const config = {
                attributes: true,
                childList: true,
                subtree: true,
            };

            const callback = (mutationsList, observer) => {
                const variantId = variantElement?.value ?? "";
                const loopVariantElementId = loopVariantElement?.value ?? "";
                if (
                    variantId &&
                    loopVariantElement &&
                    variantId !== loopVariantElementId
                ) {
                    loopVariantElement.value = variantId;
                    variantChanged({ loopProduct: productData, variantId });
                }
            };

            const observer = new MutationObserver(callback);
            observer.observe(form, config);
        }
    });
}

/// *********************************** Legacy functions ***********************************************

//Global functions

// classes for showing price
const loopPriceSelectors = [
    ".price:not(.price--on-sale) .price__regular .price-item--regular",
    ".price.price--on-sale .price__sale .price-item--sale",
    ".product-single__prices .product__price:not(.product__price--compare)",
    ".product-pricing .product--price .price--main .money",
    "[data-zp-product-discount-price]",
    ".product-single__header .product__price",
    ".modal_price .current_price",
    ".product-area__col--price .current-price.theme-money",
    '[data-product-type="price"][data-pf-type="ProductPrice"]',
    ".product__price .fs-heading-4-base[data-price]",
    "#product-price .money[data-product-price]",
    "#ProductPrice",
    ".product-single__price",
    ".price:not(.price--on-sale) span.price-item--regular",
    ".product-price .price .money:not(.original)",
    ".price-box #price .price",
    ".product__price span[data-product-price]",
    ".product-form--price-wrapper .product-form--price",
    ".product-page--pricing--variant-price #price-field",
    ".price-reviews .product-price",
];

// makes a map object of instances of a key
const arrToInstanceCountObj = (arr) =>
    arr.reduce((obj, e) => {
        obj[e] = (obj[e] || 0) + 1;
        return obj;
    }, {});

/**
 * returns variant from from window loop props
 * if selected then returns selected variant else first variant from loop props
 * @param {*} productId
 * @param {*} variantId
 * @returns
 */
function findSelectedVariantLoop(productId, variantId) {
    const product =
        getProductFromLoopProps(productId) || getProductData(productId);
    const selectedVariantId = determineSelectedVariantId(
        variantId,
        productId,
        product
    );
    return findVariantById(product, selectedVariantId);
}

function getProductFromLoopProps(productId) {
    return window.loopProps?.[productId]?.product;
}

function determineSelectedVariantId(variantId, productId, product) {
    if (variantId) return variantId;
    if (window.loopProps?.[productId]?.selectedVariantId)
        return window.loopProps[productId].selectedVariantId;
    return product.variants?.[0]?.id;
}

function findVariantById(product, variantId) {
    return product.variants?.find(
        (variant) => Number(variant.id) === Number(variantId)
    );
}

/**
 * clicking the selected variant after 300ms
 * @param {*} variant
 * @param {*} productId
 */
function defaultSelectFirstSellingPlanLoop(variant, productId) {
    const loopPurchaseOptionsContainer = getLoopSubscriptionContainer(
        productId
    );
    const loopPurchaseOptions =
        loopPurchaseOptionsContainer.querySelectorAll(
            "input[name=loop_purchase_option]"
        ) || [];

    let isFirstOption = true;

    loopPurchaseOptions.forEach((element) => {
        if (
            Number(element.dataset.variantId) === Number(variant.id) &&
            isFirstOption
        ) {
            isFirstOption = false;
            element.checked = true;

            setTimeout(() => {
                if (isTouchDevice()) {
                    const { dataset } = element;
                    changeInSellingPlanGroupLoopMobile(
                        dataset.id,
                        dataset.name,
                        dataset.productId
                    );
                }
                element.click();
            }, 300);
        }
    });
}

// hides Purchase Option label
function hideLoopPurchaseOptionsLabel(productId) {
    const elements = getLoopSubscriptionContainer(productId).querySelectorAll(
        ".loop-purchase-options-label"
    );
    if (elements) {
        for (const e of elements) {
            e.classList.add(
                "loop-display-none",
                "loop-display-none-by-variant"
            );
        }
    }
}

// adds Purchase Option label text
function addLoopPurchaseOptionLabelText(productId) {
    let elements = getLoopSubscriptionContainer(productId).querySelectorAll(
        ".loop-purchase-options-label"
    );
    if (elements) {
        elements.forEach((element) => {
            if (element) {
                element.innerHTML = `${
                    window.loopPropsUI.loopPurchaseOptionslabel ||
                    "Purchase Options"
                }`;
            }
        });
    }
}

// One time purchase label text
function addLoopOneTimePurchaseOptionLabelText(productId) {
    let elements = getLoopSubscriptionContainer(productId).querySelectorAll(
        ".loop-one-time-purchase-option-label"
    );
    if (elements) {
        elements.forEach((element) => {
            if (element) {
                element.innerHTML = `${
                    window.loopPropsUI.loopOneTimePurchaselabel ||
                    "One time Purchase"
                }`;
            }
        });
    }
}

/**
 * Renders One time purchase option at bottom
 * @param {*} productId
 */
function showOneTimePurchaseOptionAtBottom(productId) {
    const loopContainer = getLoopSubscriptionContainer(productId);

    const elementAtTop = loopContainer.querySelector(
        "#loop-one-time-purchase-option-at-top"
    );
    const elementAtBottom = loopContainer.querySelector(
        "#loop-one-time-purchase-option-at-bottom"
    );

    if (elementAtTop && elementAtBottom && elementAtTop.innerHTML) {
        elementAtBottom.innerHTML = elementAtTop.innerHTML;
        elementAtTop.innerHTML = "";
    }

    const loopSubscriptionGroupElements = loopContainer.querySelectorAll(
        ".loop-subscription-group"
    );
    loopSubscriptionGroupElements.forEach((element) => {
        element.classList.remove("loop-subscription-group-border-top");
        element.classList.add("loop-subscription-group-border-bottom");
    });
}

/**
 * Hides "Each" label in Price
 */
function hideEachLabelForPrice() {
    const selectors = [
        ".loop-subscription-group-price-quantity",
        ".loop-one-time-purchase-option-price-quantity",
    ];

    selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.add("loop-display-none");
        });
    });
}

/**
 * for displaying tooltip => removes loop-display-none class
 * @param {*} productId
 * @returns
 */
function displayTooltip(productId) {
    const loopContainer = getLoopSubscriptionContainer(productId);
    const tooltipElement = loopContainer.querySelector("#loop-tooltip");

    if (!tooltipElement) return;

    tooltipElement.classList.remove("loop-display-none");

    updateTooltipContent(
        loopContainer,
        "#loop-tooltip-label",
        window.loopPropsUI.subscriptionPopupLabel
    );
    updateTooltipContent(
        loopContainer,
        "#loop-tooltip-description",
        window.loopPropsUI.subscriptionPopupDescription
    );

    const label = loopContainer.querySelector("#loop-tooltip-label");
    const description = loopContainer.querySelector(
        "#loop-tooltip-description"
    );

    if (label && description) {
        label.style.fill = window.getComputedStyle(description).color;
    }
}

function updateTooltipContent(container, selector, content) {
    const element = container.querySelector(selector);
    if (element && content) {
        element.innerHTML = content;
    }
}

/**
 * for hiding tooltip => adds loop-display-none class
 * @param {*} productId
 */
function hideTooltip(productId) {
    const element = getLoopSubscriptionContainer(productId).querySelector(
        "#loop-tooltip"
    );
    if (element) {
        element.classList.add("loop-display-none");
    }
}

// adds extra css styles and classes on loop-style
function addExtraLoopStyles() {
    if (window && window.loopPropsUI && window.loopPropsUI.style) {
        let classList = {
            purchase_option_label: [".loop-purchase-options-label"],
            widget_feildset: [".loop-selling-plan-fieldset"],
            selling_plan_group_container: [
                ".loop-one-time-purchase-option",
                ".loop-subscription-group",
            ],
            selling_plan_group_label: [
                ".loop-one-time-purchase-option-label",
                ".loop-subscription-group-label",
            ],
            selling_plan_label: [".loop-selling-plan-selector-label"],
            selling_plan_selector: [".loop-selling-plan-selector"],
            selling_plan_price_label: [
                ".loop-one-time-purchase-option-price-amount",
                ".loop-subscription-group-price-amount",
            ],
            selling_plan_price_subtitle_label: [
                ".loop-one-time-purchase-option-price-quantity",
                ".loop-subscription-group-price-quantity",
            ],
            selling_plan_description_label: [
                ".loop-selling-plan-selector-description",
            ],
            selling_plan_discount_badge_style: [
                ".loop-subscription-group-discount-badge",
            ],
            subscription_details_label: [".loop-tooltip-label"],
            subscription_details_popup: [
                ".loop-tooltiptext",
                ".loop-container-arrow",
                ".loop-tooltip-description",
            ],
            selling_plan_group_selected: [".loop-selected-selling-plan-group"],
            selling_plan_group_radio: [
                ".loop-subscription-group-radio",
                ".loop-one-time-purchase-option-radio",
            ],
        };

        const getProperties = ({ id, data }) => {
            if (data) {
                let keys = Object.keys(data);
                let properties = "";
                keys.forEach((key) => {
                    let value = data[key];
                    properties = ` ${properties} ${key}: ${value} !important;`;
                });
                return properties;
            } else {
                return "";
            }
        };

        const getClassName = ({ id, data }) => {
            return classList[id] || [];
        };

        let extraClasses = ``;
        const { style } = window.loopPropsUI;
        style.map((st) => {
            let classNames = getClassName(st);
            classNames.map((className) => {
                extraClasses =
                    extraClasses +
                    `
                 ${className} {
                     ${getProperties(st)}
                 }
             `;
            });
        });

        let loopStyles = document.querySelectorAll(".loop-style");
        if (loopStyles) {
            loopStyles.forEach((element) => {
                element.innerHTML = `${element.innerHTML}
                 ${extraClasses}
             `;
            });
        }
    }

    if (window && window.loopPropsUI && window.loopPropsUI.cssClassess) {
        let loopStyles = document.querySelectorAll(".loop-style");
        if (loopStyles) {
            loopStyles.forEach((element) => {
                element.innerHTML = `${element.innerHTML}
                 ${window.loopPropsUI.cssClassess}
             `;
            });
        }
    }
}

// for hiding fieldset where selling plans are present
function hideSellingPlanFieldset(productId) {
    const loopSubscriptionWidget = getLoopSubscriptionContainer(
        productId
    ).querySelector("#loop-selling-plan-fieldset");
    if (loopSubscriptionWidget) {
        loopSubscriptionWidget.classList.add(
            "loop-display-none",
            "loop-display-none-by-variant"
        );
    }
}

// Changes based on loopPropsUI
function applySettings({ productId }) {
    let product = window.loopProps[productId].product;
    const variant = findSelectedVariantLoop(productId);
    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.displayLoopPurchaseOptionLabel === false
    ) {
        hideLoopPurchaseOptionsLabel(productId);
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.loopPurchaseOptionslabel
    ) {
        addLoopPurchaseOptionLabelText(productId);
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.loopOneTimePurchaselabel
    ) {
        addLoopOneTimePurchaseOptionLabelText(productId);
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.displayOneTimePurchaseOptionAtBottom
    ) {
        showOneTimePurchaseOptionAtBottom(productId);

        const loopOneTimeOptions = getLoopSubscriptionContainer(
            productId
        ).querySelectorAll(".loop-one-time-purchase-option");
        loopOneTimeOptions.forEach((option) => {
            option.addEventListener("click", clickOnSellingPlanGroupContainer);
        });
        const loopPurchaseOptions = getLoopSubscriptionContainer(
            productId
        ).querySelectorAll("input[name=loop_purchase_option]");
        loopPurchaseOptions.forEach((option) => {
            option.addEventListener("click", changeInSellingPlanGroupLoop);
        });
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.displayEachLabelForPrice === false
    ) {
        hideEachLabelForPrice();
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.hidePlanSelectorIfOnlyOne
    ) {
        const { availableSellingPlanAllocations = [] } = window.loopProps[
            productId
        ];
        let ids = [];
        availableSellingPlanAllocations.map((a) => {
            ids.push(a.selling_plan_group_id);
        });

        let idCount = arrToInstanceCountObj(ids);
        Object.keys(idCount).forEach((key) => {
            let plan = idCount[key];
            if (plan === 1) {
                let id = `#loop-selling-plan-container-${variant.id}-${key}`;
                let parentElement = document.querySelector(id);
                if (parentElement) {
                    let label = parentElement.querySelector(
                        ".loop-selling-plan-selector-label"
                    );
                    let labelPlan = parentElement.querySelector(
                        `#loop-selling-plan-first-delivery-options-${variant.id}-${key}`
                    );
                    let planSelector = parentElement.querySelector(
                        ".loop-selling-plan-selector"
                    );
                    if (label) {
                        label.classList.add("loop-display-none");
                    }
                    if (labelPlan) {
                        labelPlan.classList.add("loop-display-none");
                    }
                    if (planSelector) {
                        planSelector.classList.add("loop-display-none");
                    }
                }
            }
        });
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.showPlanSelectorAsTextIfOnlyOnePlan &&
        !window.loopPropsUI.hidePlanSelectorIfOnlyOne
    ) {
        const { availableSellingPlanAllocations = [] } = window.loopProps[
            productId
        ];
        let ids = [];
        availableSellingPlanAllocations.map((a) => {
            ids.push(a.selling_plan_group_id);
        });

        let idCount = arrToInstanceCountObj(ids);
        Object.keys(idCount).forEach((key) => {
            let plan = idCount[key];
            if (plan === 1) {
                let id = `#loop-selling-plan-first-delivery-options-${variant.id}-${key}`;
                let element = document.querySelector(id);
                if (element && element.classList) {
                    element.classList.remove("loop-display-none");
                }
                id = `#loop-select-${variant.id}-${key}`;
                element = document.querySelector(id);
                if (element) {
                    element.classList.add("loop-display-none");
                }
            }
        });
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.hideWholeWidgetIfOnlyOnePlan
    ) {
        if (product.requires_selling_plan) {
            //check if only for selling plan
            if (
                variant.selling_plan_allocations &&
                variant.selling_plan_allocations.length === 1
            ) {
                //has only 1 selling plan
                hideSellingPlanFieldset(productId);
                hideLoopPurchaseOptionsLabel(productId);
            }
        }
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.hideRadioButtonIfOnlyOnePlan
    ) {
        if (product.requires_selling_plan) {
            //check if only for selling plan

            const { availableSellingPlanAllocations } = window.loopProps[
                productId
            ];
            let ids = [];
            availableSellingPlanAllocations.map((a) => {
                ids.push(a.selling_plan_group_id);
            });
            let idCount = arrToInstanceCountObj(ids);
            let onlyOneSellingPlanGroup = false;
            if (Object.keys(idCount).length === 1) {
                onlyOneSellingPlanGroup = true;
            } else {
                onlyOneSellingPlanGroup = false;
            }

            if (onlyOneSellingPlanGroup) {
                //has only 1 selling plan

                let loopSubscriptionGroupRadio = getLoopSubscriptionContainer(
                    productId
                ).querySelectorAll(".loop-subscription-group-radio");
                if (loopSubscriptionGroupRadio) {
                    loopSubscriptionGroupRadio.forEach((element) => {
                        element.classList.add("loop-display-none");
                    });
                }
                let elements = getLoopSubscriptionContainer(
                    productId
                ).querySelectorAll(
                    `.loop-subscription-group-selling-plans-container`
                );
                if (elements) {
                    elements.forEach((element) => {
                        element.classList.add("loop-left-margin-0");
                    });
                }
            }
        }
    }

    addExtraLoopStyles();

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.displaySubscriptionPopup &&
        variant &&
        variant.selling_plan_allocations &&
        variant.selling_plan_allocations.length
    ) {
        displayTooltip(productId);
    } else {
        hideTooltip(productId);
    }

    if (
        product &&
        product.requires_selling_plan &&
        Array.isArray(variant.selling_plan_allocations) &&
        variant.selling_plan_allocations.length
    ) {
        let parentId = `#loop-product-variant-${variant.id}`;
        let parentElement = getLoopSubscriptionContainer(
            productId
        ).querySelector(parentId);

        if (
            window &&
            window.loopPropsUI &&
            window.loopPropsUI.displayOneTimePurchaseOptionAtBottom
        ) {
            let id = `.loop-subscription-group`;
            let elements = parentElement.querySelectorAll(id);
            if (elements && elements.length) {
                let last = elements[elements.length - 1];
                last.style.borderBottom = "0";
                last.classList.remove("loop-subscription-group-border-bottom");
            }
        } else {
            let id = `.loop-subscription-group`;
            let elements = parentElement.querySelectorAll(id);
            if (elements && elements.length) {
                let first = elements[0];
                first.style.borderTop = "0";
                first.classList.remove("loop-subscription-group-border-top");
            }
        }
    }

    if (
        window &&
        window.loopPropsUI &&
        window.loopPropsUI.displayDiscountBadge
    ) {
        displayDiscountBadge({ productId });
    } else {
        let loopSubscriptionDiscountBadge = document.querySelectorAll(
            ".loop-subscription-group-discount-badge"
        );
        if (loopSubscriptionDiscountBadge) {
            loopSubscriptionDiscountBadge.forEach((element) => {
                if (element) {
                    element.classList.add("loop-display-none");
                }
            });
        }
    }

    if (window && window.loopPropsUI && window.loopPropsUI.translationData) {
        let translationData = window.loopPropsUI.translationData || {};
        let mapElements = {
            widget_price_label_text: [
                ".loop-one-time-purchase-option-price-quantity",
                ".loop-subscription-group-price-quantity",
            ],
        };

        Object.keys(mapElements).forEach((key) => {
            if (translationData && translationData[key]) {
                let elementIds = mapElements[key];
                elementIds.map((id) => {
                    let elements = document.querySelectorAll(id);
                    if (elements) {
                        elements.forEach((element) => {
                            element.innerText = translationData[key];
                        });
                    }
                });
            }
        });
    }
}

/**
 * clicking the first purchase option on selling plan group change
 * @param {*} event
 * @returns
 */
function clickOnSellingPlanGroupContainer(event) {
    const container =
        event.target.closest(".loop-subscription-group") ||
        event.target.closest(".loop-one-time-purchase-option");

    if (!container) return;

    const radio = container.querySelector('input[type="radio"]');
    const selectedPlanGroupId =
        window.loopProps[radio.dataset.productId]?.sellingPlanGroupId;

    if (radio?.dataset?.id !== selectedPlanGroupId) {
        radio.click();
    }
}

// on variant change
function variantChanged({ loopProduct, variantId }) {
    loopInit({
        productId: loopProduct.id,
        product: JSON.parse(JSON.stringify(loopProduct)),
        variantId,
    });
}

// hides or shows loop-widget
function checkVariantsSellingPlanAllocation(variant, productId) {
    const hasSellingPlans = variant?.selling_plan_allocations?.length > 0;
    if (hasSellingPlans) {
        //display loop widget
        showSellingPlanFieldset(productId);
        showLoopPurchaseOptionsLabel(productId);
    } else {
        //hide loop widget
        hideSellingPlanFieldset(productId);
        hideLoopPurchaseOptionsLabel(productId);
    }
}

/**
 * makes one time purchase option selected
 * @param {*} variant
 * @param {*} productId
 */
function defaultSelectOneTimePurchaseOption(variant, productId) {
    const onetimeCheckRadioLoop = getLoopSubscriptionContainer(
        productId
    ).querySelector(`#loop-one-time-purchase-${productId}`);

    if (onetimeCheckRadioLoop) {
        onetimeCheckRadioLoop.checked = true;
        onetimeCheckRadioLoop.click();

        if (isTouchDevice()) {
            const { dataset } = onetimeCheckRadioLoop;
            changeInSellingPlanGroupLoopMobile(
                dataset.id,
                dataset.name,
                dataset.productId
            );
        }
    } else {
        defaultSelectFirstSellingPlanLoop(variant, productId);
    }
}

/**
 * handles variant display and apply loop settings
 * @param {Object} param0
 */
function loopInit({ productId, product, variantId }) {
    updateLoopProperties({ product, productId, variantId });
    const selectedVariant = findSelectedVariantLoop(productId, variantId);
    toggleVariantDisplay(product, selectedVariant.id);
    checkVariantsSellingPlanAllocation(selectedVariant, productId);
    applyDefaultSelectionBasedOnSettings(selectedVariant, productId);
    applySettings({ productId });
}

function toggleVariantDisplay(product, selectedVariantId) {
    product.variants.forEach((variant) => {
        const displayStyle =
            variant.id === selectedVariantId ? "block" : "none";
        document.querySelector(
            `#loop-product-variant-${variant.id}`
        ).style.display = displayStyle;
    });
}

function applyDefaultSelectionBasedOnSettings(selectedVariant, productId) {
    const shouldDefaultToSubscription =
        window.loopPropsUI?.byDefaultChooseSubscriptionOption;

    if (shouldDefaultToSubscription) {
        defaultSelectFirstSellingPlanLoop(selectedVariant, productId);
    } else {
        defaultSelectOneTimePurchaseOption(selectedVariant, productId);
    }
}

// makes the chosen selling plan selected
function updateSelectDropDownDefaultValues({
    productId,
    variant,
    sellingPlanGroupId,
}) {
    const sellingPlanGroups =
        window.loopProps[productId].product.selling_plan_groups;

    if (!Array.isArray(sellingPlanGroups) || !sellingPlanGroups.length) {
        return;
    }

    sellingPlanGroups.forEach((spg) => {
        if (sellingPlanGroupId !== spg.id) {
            resetSelectDropdown(variant.id, spg.id);
        }
    });
}

function resetSelectDropdown(variantId, sellingPlanGroupId) {
    const selectTag = document.getElementById(
        `loop-select-${variantId}-${sellingPlanGroupId}`
    );
    if (selectTag) {
        selectTag.options[0].selected = true;
    }
}

//for touch devices
function changeInSellingPlanGroupLoopMobile(
    sellingPlanGroupId,
    sellingPlanGroupName,
    productId
) {
    const variant = findSelectedVariantLoop(
        productId,
        window.loopProps[productId].selectedVariantId
    );
    let sellingPlans =
        variant.selling_plan_allocations.filter(
            (spa) => spa.selling_plan_group_id === sellingPlanGroupId
        ) || [];
    let sellingPlan =
        sellingPlans && sellingPlans.length ? sellingPlans[0] : {};
    let sellingPlanId = sellingPlan.selling_plan_id;
    updateLoopProperties({
        productId,
        variantId: variant.id,
        sellingPlanGroupId,
        sellingPlanGroupName,
        sellingPlanId,
        sellingPlan,
    });
    updateSelectDropDownDefaultValues({
        productId,
        variant,
        sellingPlanGroupId: sellingPlanGroupId,
    });
    updatePriceInParentElements({ productId });
    updateSellingPlanDescriptionUI({ productId });
    displayDiscountBadge({ productId });
    updateCartButtonText({ productId });
    updatePriceInUI({ productId });
    applyBundleDiscount(productId);
    checkAllowCheckoutIfBundle(productId);
    let removeElementId = ".loop-selected-selling-plan-group";
    let elements = getLoopSubscriptionContainer(productId).querySelectorAll(
        removeElementId
    );
    if (elements) {
        elements.forEach((element) => {
            if (element) {
                element.classList.remove("loop-selected-selling-plan-group");
            }
        });
    }
    if (sellingPlanGroupId === "loop-one-time-purchase") {
        let elements = getLoopSubscriptionContainer(productId).querySelectorAll(
            ".loop-one-time-purchase-option"
        );
        if (elements) {
            elements.forEach((element) => {
                element.classList.add("loop-selected-selling-plan-group");
            });
        }
    } else {
        let elementId = `#loop-${variant.id}-${sellingPlanGroupId}`;
        let element = getLoopSubscriptionContainer(productId).querySelector(
            elementId
        );
        if (element) {
            element.classList.add("loop-selected-selling-plan-group");
        }
    }
}

// on change of selling plan group
function changeInSellingPlanGroupLoop(option) {
    let sellingPlanGroupId = option.target.dataset.id;
    let sellingPlanGroupName = option.target.dataset.name;
    let productId = option.target.dataset.productId;
    const variant = findSelectedVariantLoop(
        productId,
        window.loopProps[productId].selectedVariantId
    );
    let sellingPlans =
        variant.selling_plan_allocations.filter(
            (spa) => spa.selling_plan_group_id === sellingPlanGroupId
        ) || [];
    let sellingPlan =
        sellingPlans && sellingPlans.length ? sellingPlans[0] : {};
    let sellingPlanId = sellingPlan.selling_plan_id;
    updateLoopProperties({
        productId,
        variantId: variant.id,
        sellingPlanGroupId,
        sellingPlanGroupName,
        sellingPlanId,
        sellingPlan,
    });
    updateSelectDropDownDefaultValues({
        productId,
        variant,
        sellingPlanGroupId: option.target.dataset.id,
    });
    updatePriceInParentElements({ productId });
    updateSellingPlanDescriptionUI({ productId });
    displayDiscountBadge({ productId });
    updateCartButtonText({ productId });
    updatePriceInUI({ productId });
    applyBundleDiscount(productId);
    checkAllowCheckoutIfBundle(productId);

    let removeElementId = ".loop-selected-selling-plan-group";
    let elements = getLoopSubscriptionContainer(productId).querySelectorAll(
        removeElementId
    );
    if (elements) {
        elements.forEach((element) => {
            if (element) {
                element.classList.remove("loop-selected-selling-plan-group");
            }
        });
    }
    if (sellingPlanGroupId === "loop-one-time-purchase") {
        let elements = getLoopSubscriptionContainer(productId).querySelectorAll(
            ".loop-one-time-purchase-option"
        );
        if (elements) {
            elements.forEach((element) => {
                element.classList.add("loop-selected-selling-plan-group");
            });
        }
    } else {
        let elementId = `#loop-${variant.id}-${sellingPlanGroupId}`;
        let element = getLoopSubscriptionContainer(productId).querySelector(
            elementId
        );
        if (element) {
            element.classList.add("loop-selected-selling-plan-group");
        }
    }
}

function changeInDeliveryOptionLoop(option) {
    let sellingPlanId = option.target.value;
    let productId = option.target.dataset.productId;
    updateLoopProperties({ productId, sellingPlanId });
    updatePriceInParentElements({ productId });
    updateSellingPlanDescriptionUI({ productId });
    displayDiscountBadge({ productId });
    updatePriceInUI({ productId });
    applyBundleDiscount(productId);
    checkAllowCheckoutIfBundle(productId);
}

// discount badge handling
function displayDiscountBadge({ productId }) {
    const variant = findSelectedVariantLoop(productId);
    const { selling_plan_groups } = window.loopProps[productId].product;
    if (window && window.loopProps && window.loopPropsUI.displayDiscountBadge) {
        selling_plan_groups.map((spg) => {
            const { selling_plans } = spg;
            let discountList = [];
            selling_plans.map((sp) => {
                const { price_adjustments } = sp;
                let priceAdj = price_adjustments.length
                    ? price_adjustments[0]
                    : {};
                discountList.push({
                    value: priceAdj.value,
                    value_type: priceAdj.value_type,
                    amount:
                        priceAdj.value_type === "fixed_amount"
                            ? priceAdj.value
                            : (Number(variant.price) * priceAdj.value) / 100,
                });
            });
            let selectedDiscount = discountList.reduce((prev, current) =>
                prev.amount > current.amount ? prev : current
            );
            let id = `#loop-discount-badge-${variant.id}-${spg.id}`;
            let element = getLoopSubscriptionContainer(productId).querySelector(
                id
            );

            if (
                window.loopProps[productId] &&
                spg.id === window.loopProps[productId].sellingPlanGroupId
            ) {
                let ssp =
                    selling_plans.find(
                        (sp) =>
                            sp.id ===
                            Number(window.loopProps[productId].sellingPlanId)
                    ) || {};
                selectedDiscount = ssp.price_adjustments[0];
            }
            if (element) {
                let discountText = "";
                if (
                    selectedDiscount &&
                    selectedDiscount.value_type === "fixed_amount"
                ) {
                    discountText = loopFormatMoney(
                        selectedDiscount.value,
                        true
                    );
                } else if (
                    selectedDiscount &&
                    selectedDiscount.value_type === "percentage"
                ) {
                    discountText = `${selectedDiscount.value}%`;
                }

                let text = window?.loopPropsUI?.discountBadgeText || " ";
                let matchText = "{{discount_value}}";
                let discountLabelText = text.replace(
                    `{discount_value}`,
                    discountText
                );
                element.innerHTML = `${discountLabelText}`;
                if (
                    !selectedDiscount?.value &&
                    !Number(selectedDiscount?.value)
                ) {
                    element.classList.add("loop-display-none");
                } else {
                    element.classList.remove("loop-display-none");
                }
            }
        });
    } else {
        selling_plan_groups.map((spg) => {
            let id = `#loop-discount-badge-${variant.id}-${spg.id}`;
            let element = document.querySelector(id);
            if (element) {
                element.classList.add("loop-display-none");
            }
        });
    }
}

/**
 * returns the current selling plan
 * @param {*} param0
 * @returns
 */
function calculateCurrentSellingPlanLoop({
    productId,
    availableSellingPlanAllocations,
}) {
    const loopProductProps = window.loopProps[productId];
    const { sellingPlanId, sellingPlanGroupId } = loopProductProps;

    return (
        availableSellingPlanAllocations.find((sellingPlan) => {
            if (sellingPlan.selling_plan_group_id !== sellingPlanGroupId) {
                return false;
            }
            if (sellingPlanId) {
                return (
                    Number(sellingPlan.selling_plan_id) ===
                    Number(sellingPlanId)
                );
            }
            return true;
        }) || {}
    );
}

function updateLoopProperties({
    product,
    productId,
    variantId,
    sellingPlanGroupId,
    sellingPlanGroupName,
    sellingPlanId,
}) {
    let loopProperties = getLoopSubscriptionContainer(productId).querySelector(
        "#loop-selling-plan-fieldset"
    );
    if (variantId) {
        if (
            Number(variantId) !==
            Number(loopProperties.dataset.selectedVariantId)
        ) {
            loopProperties.dataset.sellingPlanGroupId = "";
            loopProperties.dataset.sellingPlanGroupName = "";
            loopProperties.dataset.sellingPlanId = "";
        }
        loopProperties.dataset.selectedVariantId = variantId;
    }

    if (sellingPlanGroupId) {
        loopProperties.dataset.sellingPlanGroupId = sellingPlanGroupId;
    }
    if (sellingPlanGroupName) {
        loopProperties.dataset.sellingPlanGroupName = sellingPlanGroupName;
    }

    if (product) {
        loopProperties.dataset.product = JSON.stringify(product);
    }

    if (sellingPlanId) {
        loopProperties.dataset.sellingPlanId = sellingPlanId;
    } else if (sellingPlanGroupId === "loop-one-time-purchase") {
        loopProperties.dataset.sellingPlanId = "";
        loopProperties.dataset.sellingPlan = {};
        loopProperties.dataset.sellingPlan = {};
    }
    if (!window.loopProps) {
        window.loopProps = {};
        window.loopProps[productId] = { product, productId };
    }
    const productBundleData = window.loopProps[productId]["productBundleData"];
    window.loopProps[productId] = { ...loopProperties.dataset, productId };
    window.loopProps[productId]["productBundleData"] = productBundleData;

    if (loopProperties.dataset && loopProperties.dataset.product) {
        window.loopProps[productId] = {
            ...window.loopProps[productId],
            product: JSON.parse(window.loopProps[productId].product),
        };
    }

    let variant = findSelectedVariantLoop(productId);
    let availableSellingPlanAllocations =
        variant && Array.isArray(variant.selling_plan_allocations)
            ? variant.selling_plan_allocations
            : [];
    window.loopProps[
        productId
    ].availableSellingPlanAllocations = availableSellingPlanAllocations;
    window.loopProps[productId].variant = variant;

    let sellingPlan = calculateCurrentSellingPlanLoop({
        availableSellingPlanAllocations,
        productId,
    });
    let selectedSellingPlanId = sellingPlan.selling_plan_id || "";
    window.loopProps[productId].sellingPlan = sellingPlan;

    let sellingPlanAllocation = availableSellingPlanAllocations.find((aspa) => {
        if (selectedSellingPlanId) {
            if (
                Number(aspa.selling_plan_id) === Number(selectedSellingPlanId)
            ) {
                return true;
            }
        }
    });
    window.loopProps[productId].sellingPlanAllocation = sellingPlanAllocation;

    const { selling_plan_groups } = window.loopProps[productId].product;
    window.loopProps[productId].sellingPlanDefination = {};
    window.loopProps[productId].sellingPlanPriceAdjustments = [];
    if (selling_plan_groups && Array.isArray(selling_plan_groups)) {
        selling_plan_groups.map((spg) => {
            if (spg.id === window.loopProps[productId].sellingPlanGroupId) {
                const { selling_plans } = spg;
                selling_plans.map((sp) => {
                    if (
                        sp.id ===
                        Number(window.loopProps[productId].sellingPlanId)
                    ) {
                        window.loopProps[productId].sellingPlanDefination = sp;
                        window.loopProps[
                            productId
                        ].sellingPlanPriceAdjustments = sp.price_adjustments;
                    }
                });
            }
        });
    }

    let sellingPlanRadio = getLoopSubscriptionContainer(
        productId
    ).querySelector('[name="selling_plan"]');
    if (sellingPlanRadio) {
        sellingPlanRadio.value = selectedSellingPlanId;
    }
    //insert selling plan value in all the product from whose id is productId
    document
        .querySelectorAll(`form[data-loop-product-id="${productId}"]`)
        .forEach((form) => {
            const existingInput = form.querySelector(
                'input[name="selling_plan"]'
            );
            if (existingInput) {
                existingInput.remove();
            }

            const hiddenInput = document.createElement("input");
            hiddenInput.type = "hidden";
            hiddenInput.name = "selling_plan";
            hiddenInput.value = selectedSellingPlanId;
            form.appendChild(hiddenInput);
        });
    hideBundleSPG(productId);
}

function updateCartButtonText({ productId }) {
    const parentElement =
        document.querySelector(`[data-loop-product-id="${productId}"]`) ||
        document;
    const isOneTimeOrder = determineOneTimeOrder(productId);
    const addToCartButton = getAddToCartButton(parentElement);
    if (!addToCartButton) return;

    const buttonText = getButtonText(isOneTimeOrder, productId);
    updateButtonInnerHTML(addToCartButton, buttonText);
}

function determineOneTimeOrder(productId) {
    const sellingPlanGroupId = window?.loopProps[productId]?.sellingPlanGroupId;
    return (
        !sellingPlanGroupId || sellingPlanGroupId === "loop-one-time-purchase"
    );
}

function getAddToCartButton(parentElement) {
    const selectors = [
        "button[type='submit'][name='add']",
        "button[type='button'][name='add']",
    ];
    // return selectors.find((selector) => parentElement.querySelector(selector));
    let addToCartBtn = null;
    selectors.map((selector) => {
        if (!addToCartBtn) {
            addToCartBtn = parentElement.querySelector(selector);
        }
    });

    return addToCartBtn;
}

function getButtonText(isOneTimeOrder, productId) {
    if (!isOneTimeOrder) {
        return (
            window?.loopPropsUI?.translationData
                ?.widget_add_to_cart_button_for_subscription ||
            "Add subscription to cart"
        );
    } else if (!window.loopProps[productId]["variant"]["available"]) {
        return (
            window?.loopPropsUI?.translationData?.widget_out_of_stock_text ||
            "Out of Stock"
        );
    } else {
        return (
            window?.loopPropsUI?.translationData
                ?.widget_add_to_cart_button_for_one_time_purchase ||
            "Add to cart"
        );
    }
}

function updateButtonInnerHTML(button, text) {
    if (button.firstElementChild) {
        button.firstElementChild.innerHTML = text;
    } else {
        button.innerHTML = text;
    }
}

/**
 * formats value based on money/money_without_currency filter of shopify
 * @param {*} price
 * @param {*} removeEach
 * @returns
 */
function loopFormatMoney(price, removeEach) {
    const moneyFormat = document.querySelector("#loop-price-money-format")
        .innerText;
    const moneyWithoutCurrency = document.querySelector(
        "#loop-price-money_without_currency-format"
    ).innerText;

    let formattedPrice = formatPrice(price, moneyFormat, moneyWithoutCurrency);

    if (removeEach) {
        formattedPrice = formattedPrice.replace("each", "");
    }
    return formattedPrice.trim();
}

function formatPrice(price, moneyFormat, moneyWithoutCurrency) {
    const priceValue = price / 100;

    if (moneyFormat.includes("0.00")) {
        return moneyFormat.replace("0.00", priceValue.toFixed(2));
    } else if (moneyFormat.includes("0,00")) {
        return moneyFormat.replace(
            "0,00",
            priceValue.toFixed(2).replace(".", ",")
        );
    } else if (moneyFormat.includes("0")) {
        const wholeNumberValue = Number(
            moneyWithoutCurrency.replace("0", priceValue)
        ).toFixed(0);
        return moneyFormat.replace("0", wholeNumberValue);
    }
    return moneyFormat;
}

/**
 * saved price label in percentage/fixed value
 * @param {} priceAdjustments
 * @returns
 */
function getSavedPriceLabel(priceAdjustments) {
    if (!Array.isArray(priceAdjustments) || !priceAdjustments.length) {
        return "";
    }

    const pa = priceAdjustments[0];
    if (pa.value_type === "percentage") {
        return `Save ${pa.value}%`;
    } else {
        return `Save ${loopFormatMoney(pa.value, true)}`;
    }
}

/**
 * hide/show of selling plan description
 * @param {*} param0
 * @returns
 */
function updateSellingPlanDescriptionUI({ productId }) {
    const variant = findSelectedVariantLoop(productId);
    const loopPropsProduct = window.loopProps?.[productId];

    if (!loopPropsProduct?.sellingPlanGroupId) {
        return;
    }

    const descriptionValue =
        loopPropsProduct?.sellingPlanDefination?.description || "";
    const descriptionElement = document.querySelector(
        `#loop-selling-plan-description-${variant.id}-${loopPropsProduct.sellingPlanGroupId}`
    );

    updateSellingPlanDescriptionElement(descriptionElement, descriptionValue);
}

function updateSellingPlanDescriptionElement(
    descriptionElement,
    descriptionValue
) {
    if (!descriptionElement) return;

    descriptionElement.innerHTML = descriptionValue;
    if (!descriptionValue) {
        descriptionElement.classList.add("loop-display-none");
    } else {
        descriptionElement.classList.remove("loop-display-none");
    }
}

function updatePriceInParentElements({ productId }) {
    const currentPath = getCurrentPath();
    const productHandle = window?.loopProps[productId]?.product?.handle;

    if (productHandle !== currentPath) {
        return;
    }

    const variant = findSelectedVariantLoop(productId);
    const price = determinePrice(productId, variant);

    loopPriceSelectors.push(`.loop-product-${productId}`);
    updatePricesInUI(price);
}

function determinePrice(productId, variant) {
    const sellingPlanPrice =
        window?.loopProps[productId]?.sellingPlanAllocation?.price;

    if (sellingPlanPrice) {
        return loopFormatMoney(sellingPlanPrice, true);
    }
    return loopFormatMoney(variant.price, true);
}

function updatePricesInUI(price) {
    loopPriceSelectors.forEach((selector) => {
        const priceElement = document.querySelector(selector);
        if (priceElement) {
            priceElement.innerHTML = `${price}`;
        }
    });
}

function updatePriceInUI({ productId }) {
    let variant = findSelectedVariantLoop(
        productId,
        window.loopProps[productId].selectedVariantId
    );

    let sellingPlan =
        window.loopProps && window.loopProps[productId]
            ? window.loopProps[productId].sellingPlan
            : {};
    const product = window.loopProps[productId]?.product || {};
    const { selling_plan_groups } = product;
    const { selling_plan_allocations } = variant;
    selling_plan_groups.map((spg) => {
        if (Array.isArray(spg.selling_plans) && spg.selling_plans.length) {
            let firstSellingPlan = spg.selling_plans[0];
            let sellingPlanAllcotion =
                selling_plan_allocations.find(
                    (a) =>
                        Number(a.selling_plan_id) ===
                        Number(firstSellingPlan.id)
                ) || {};
            const {
                selling_plan_group_id,
                per_delivery_price,
            } = sellingPlanAllcotion;
            let element = document.querySelector(
                `#loop-price-${variant.id}-${selling_plan_group_id}`
            );
            if (element) {
                element.innerHTML = loopFormatMoney(per_delivery_price, true);
            }
        }
    });

    if (sellingPlan && sellingPlan.selling_plan_group_id) {
        const { selling_plan_group_id, per_delivery_price } = sellingPlan;
        let element = document.querySelector(
            `#loop-price-${variant.id}-${selling_plan_group_id}`
        );
        if (element) {
            element.innerHTML = loopFormatMoney(per_delivery_price, true);
        }
    }

    let loopOneTimePrice = getLoopSubscriptionContainer(
        productId
    ).querySelector("#loop-price-one-time");
    if (loopOneTimePrice) {
        loopOneTimePrice.innerHTML = loopFormatMoney(variant.price, true);
    }
}

/**
 *************** Utility functions ********************
 */

/**
 * log a message
 * @param {string} message
 */
function log(message) {
    console.log(message);
}

/**
 * log error message
 * @param {Error} error
 */
function logError(error) {
    console.error(error);
}

/**
 * initialize global loop data object
 * @param {number} productId
 */
function initializeLoopData(productId) {
    if (!window.LoopSubscriptions) {
        window.LoopSubscriptions = {};
    }
    window.LoopSubscriptions[productId] = getProductData(productId);
}

/**
 * get product data from html element
 * @param {number} productId
 * @returns
 */
function getProductData(productId) {
    const textData = document.querySelector(`.${productDataClass}-${productId}`)
        .textContent;
    return JSON.parse(textData);
}

/**
 *
 * @param {number} productId
 * @returns
 */
function getLoopSubscriptionContainer(productId) {
    return document.querySelector(
        `#${loopSubscriptionContainerId}-${productId}`
    );
}

/**
 *
 * @returns get current path
 */
function getCurrentPath() {
    const pathParts = window.location.pathname.split("/");
    return pathParts[pathParts.length - 1];
}

/**
 *
 * @returns if touch device
 */
function isTouchDevice() {
    return "ontouchstart" in document.documentElement;
}

/**
 **************** Bundle Functions Start ****************
 */

async function getBundleSpgs(productId) {
    const spgs = window.loopProps[productId][
        "availableSellingPlanAllocations"
    ].map((spg) => ({
        selling_plan_group_id: spg.selling_plan_group_id,
        selling_plan_id: spg.selling_plan_id,
    }));
    const sps = window.loopProps[productId][
        "availableSellingPlanAllocations"
    ].map((spg) => spg.selling_plan_id);

    const body = {
        domain: window.Shopify.shop,
        sellingPlanIds: sps,
        product_shopify_id: productId,
    };
    try {
        const res = await fetch(FILTER_BUNDLE_SP_API, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resJSON = await res.json();
        const sps = resJSON.data;

        let bundleSellingPlanGroupIds = [];
        let nonBundleSellingPlanGroupIds = [];

        for (const spg of spgs) {
            if (sps.includes(spg.selling_plan_id)) {
                bundleSellingPlanGroupIds.push(spg.selling_plan_group_id);
            } else {
                nonBundleSellingPlanGroupIds.push(spg.selling_plan_group_id);
            }
        }

        window.loopProps[productId]["bundleSPGS"] = [
            ...new Set(bundleSellingPlanGroupIds),
        ];
        window.loopProps[productId]["nonBundleSPGS"] = [
            ...new Set(nonBundleSellingPlanGroupIds),
        ];
        hideBundleSPG(productId);
    } catch (error) {
        console.error("getBundleSpgs", error);
    }
}

function hideBundleSPG(productId) {
    if (
        window.loopProps?.[productId]?.["productBundleData"]?.[
            "isBundleProduct"
        ] === false
    ) {
        const loopProps = window.loopProps[productId];
        const loopContainer = getLoopSubscriptionContainer(productId);
        if (loopContainer) {
            const bspgs = loopProps["bundleSPGS"];
            if (bspgs?.length) {
                bspgs.forEach((spgId) => {
                    const bundlespg = loopContainer.querySelectorAll(
                        `#loop-selling_plan_group-${spgId}`
                    );
                    if (bundlespg?.length) {
                        bundlespg.forEach((spg) => {
                            spg.classList.add("loop-display-none");
                        });
                    }
                });
                clickUpdatedSPG(productId);
            }
        }
    }
}

function clickUpdatedSPG(productId) {
    showSellingPlanFieldset(productId);
    showLoopPurchaseOptionsLabel(productId);
    const selectedVariant = window.loopProps[productId].selectedVariantId;
    const nonBundleSpgs = window.loopProps[productId]["nonBundleSPGS"] ?? [];

    if (
        nonBundleSpgs.length !== 0 &&
        window.loopPropsUI.byDefaultChooseSubscriptionOption
    ) {
        const firstAvailableNonBundleSpg = nonBundleSpgs[0];
        const spgDiv = getLoopSubscriptionContainer(productId).querySelectorAll(
            `#loop-selling_plan_group-${firstAvailableNonBundleSpg}`
        );
        spgDiv.forEach((node) => {
            const childNodes = node.querySelectorAll(
                `#loop-allocation-${firstAvailableNonBundleSpg}`
            );
            childNodes.forEach((ele) => {
                const targetNodes = ele.querySelectorAll(
                    `#loop-${selectedVariant}-${firstAvailableNonBundleSpg}`
                );
                targetNodes.forEach((targetNode) => {
                    targetNode.click();
                });
            });
        });
    } else {
        //chose one time purchase option
        defaultSelectOneTimePurchaseOption(selectedVariant, productId);
    }
}

async function getBundleDataByProductId(productId) {
    const res = await fetch(`${GET_PRODUCT_BUNDLE_DATA_API}${productId}`);
    const bundle = await res.json();
    return bundle.data;
}

function handleBundleWidgetVisibility(productId) {
    if (
        window.loopProps[productId].productBundleData.purchaseType ===
        "SUBSCRIPTION"
    ) {
        hideOneTimePurchaseOption(productId);
    } else if (
        window.loopProps[productId].productBundleData.purchaseType === "ONETIME"
    ) {
        // hide widget
        hideSellingPlanFieldset(productId);
        hideLoopPurchaseOptionsLabel(productId);
        defaultSelectOneTimePurchaseOption(null, productId);
    }
}

// override product page btn
async function processBundleProduct(productId) {
    // api call to check if it is a bundle or not
    try {
        const bundleData = await getBundleDataByProductId(productId);
        if (bundleData) {
            window.loopProps[productId]["productBundleData"] = bundleData;
            if (bundleData.isBundleProduct) {
                // get the data-loop-product-id and add custom add to cart function
                overrideAddToCartButton(productId, bundleData.mapping);
                handleBundleWidgetVisibility(productId);
                applyBundleDiscount(productId);
                checkAllowCheckoutIfBundle(productId);
            }
        }
    } catch (error) {
        console.error("processBundleProduct", error);
    }
}

function checkAllowCheckoutIfBundle(productId) {
    enableAddToCartBtn(productId);
    const selectedVariantId = window.loopProps[productId].selectedVariantId;
    if (window.loopProps[productId]?.productBundleData?.isBundleProduct) {
        const selectedVariant =
            window.loopProps[productId].productBundleData.mapping[
                selectedVariantId
            ];
        const allowCheckout = selectedVariant?.allowCheckout;
        const outOfStock = selectedVariant?.outOfStock;

        if (outOfStock) {
            const buttonText =
                window?.loopPropsUI?.translationData
                    ?.widget_out_of_stock_text || "Out of Stock";
            const parentElement =
                document.querySelector(
                    `[data-loop-product-id="${productId}"]`
                ) || document;
            const addToCartButton = getAddToCartButton(parentElement);
            if (addToCartButton) {
                setTimeout(() => {
                    updateButtonInnerHTML(addToCartButton, buttonText);
                }, 500);
            }
        }

        if (!allowCheckout || outOfStock) {
            disableAddToCartBtn(productId);
        }
    }
}

function applyBundleDiscount(productId) {
    if (!window.loopProps[productId]?.productBundleData?.isBundleProduct) {
        return;
    }

    const productBundleData = window.loopProps[productId].productBundleData;
    let variant = findSelectedVariantLoop(
        productId,
        window.loopProps[productId].selectedVariantId
    );
    let selectedVariantId = window.loopProps[productId].selectedVariantId;
    const selectedVariantBundleDiscountData =
        productBundleData.productVariantDiscountMapping?.[selectedVariantId];
    if (!selectedVariantBundleDiscountData) {
        return;
    }

    const selectedVariantChildProducts =
        productBundleData.mapping?.[selectedVariantId].childProducts;
    const totalChildQuantities = selectedVariantChildProducts.reduce(
        (acc, prev) => {
            acc = acc + prev.quantity;
            return acc;
        },
        0
    );

    const conversionRate = window.Shopify.currency.rate;
    const oneTimeBundleDiscount = selectedVariantBundleDiscountData.find(
        (e) => e.purchaseType == "ONETIME"
    );
    const subscriptionBundleDiscount = selectedVariantBundleDiscountData.find(
        (e) => e.purchaseType == "SUBSCRIPTION"
    );
    let oneTimeDiscountValue = 0;
    let subscriptionDiscountValue = 0;
    const variantWithPriceSp = window.loopProps[
        productId
    ]?.sellingPlanDefination?.price_adjustments?.find(
        (e) => e.value_type == "price"
    );

    let sellingPlan =
        window.loopProps && window.loopProps[productId]
            ? window.loopProps[productId].sellingPlan
            : {};
    const product = window.loopProps[productId]?.product || {};
    const { selling_plan_groups } = product;
    const { selling_plan_allocations } = variant;
    selling_plan_groups.map((spg) => {
        if (Array.isArray(spg.selling_plans) && spg.selling_plans.length) {
            let firstSellingPlan = spg.selling_plans[0];
            let sellingPlanAllocation =
                selling_plan_allocations.find(
                    (a) =>
                        Number(a.selling_plan_id) ===
                        Number(firstSellingPlan.id)
                ) || {};
            const {
                selling_plan_group_id,
                per_delivery_price,
            } = sellingPlanAllocation;
            let element = document.querySelector(
                `#loop-price-${variant.id}-${selling_plan_group_id}`
            );
            if (element) {
                let val = per_delivery_price;
                if (subscriptionBundleDiscount) {
                    if (
                        subscriptionBundleDiscount.bundleDiscountType ===
                        "FIXED"
                    ) {
                        subscriptionDiscountValue =
                            Number(
                                subscriptionBundleDiscount.bundleDiscountValue
                            ) * conversionRate;
                        val = val - subscriptionDiscountValue * 100;
                    } else {
                        subscriptionDiscountValue =
                            (Number(
                                subscriptionBundleDiscount.bundleDiscountValue
                            ) /
                                100) *
                            val;
                        val = val - subscriptionDiscountValue;
                    }
                }
                element.innerHTML = loopFormatMoney(val, true);
            }
        }
    });

    if (sellingPlan && sellingPlan.selling_plan_group_id) {
        const { selling_plan_group_id, per_delivery_price } = sellingPlan;
        let element = document.querySelector(
            `#loop-price-${variant.id}-${selling_plan_group_id}`
        );
        if (element) {
            let val = per_delivery_price;
            if (subscriptionBundleDiscount) {
                if (subscriptionBundleDiscount.bundleDiscountType === "FIXED") {
                    subscriptionDiscountValue =
                        Number(subscriptionBundleDiscount.bundleDiscountValue) *
                        conversionRate;
                    subscriptionDiscountValue = variantWithPriceSp
                        ? subscriptionDiscountValue * totalChildQuantities
                        : subscriptionDiscountValue;
                    val =
                        (variantWithPriceSp
                            ? val * totalChildQuantities
                            : val) -
                        subscriptionDiscountValue * 100;
                } else {
                    subscriptionDiscountValue =
                        (Number(
                            subscriptionBundleDiscount.bundleDiscountValue
                        ) /
                            100) *
                        val;
                    subscriptionDiscountValue = variantWithPriceSp
                        ? subscriptionDiscountValue * totalChildQuantities
                        : subscriptionDiscountValue;
                    val =
                        (variantWithPriceSp
                            ? val * totalChildQuantities
                            : val) - subscriptionDiscountValue;
                }
            }
            element.innerHTML = loopFormatMoney(val, true);
        }
    }

    let loopOneTimePrice = getLoopSubscriptionContainer(
        productId
    ).querySelector("#loop-price-one-time");
    if (loopOneTimePrice) {
        let val = variant.price;
        if (oneTimeBundleDiscount) {
            if (oneTimeBundleDiscount.bundleDiscountType === "FIXED") {
                oneTimeDiscountValue =
                    Number(oneTimeBundleDiscount.bundleDiscountValue) *
                    conversionRate;
                val = val - oneTimeDiscountValue * 100;
            } else {
                oneTimeDiscountValue =
                    (Number(oneTimeBundleDiscount.bundleDiscountValue) / 100) *
                    val;
                val = val - oneTimeDiscountValue;
            }
        }
        loopOneTimePrice.innerHTML = loopFormatMoney(val, true);
    }

    const currentPath = getCurrentPath();
    const productHandle = window?.loopProps[productId]?.product?.handle;

    if (productHandle !== currentPath) {
        return;
    }

    const sellingPlanPrice =
        window?.loopProps[productId]?.sellingPlanAllocation?.price;
    let price = variant.price;
    if (oneTimeBundleDiscount) {
        if (oneTimeBundleDiscount.bundleDiscountType === "FIXED") {
            oneTimeDiscountValue =
                Number(oneTimeBundleDiscount.bundleDiscountValue) *
                conversionRate;
            oneTimeDiscountValue = variantWithPriceSp
                ? oneTimeDiscountValue * totalChildQuantities
                : oneTimeDiscountValue;
            price =
                (variantWithPriceSp ? price * totalChildQuantities : price) -
                oneTimeDiscountValue * 100;
        } else {
            oneTimeDiscountValue =
                (Number(oneTimeBundleDiscount.bundleDiscountValue) / 100) *
                price;
            oneTimeDiscountValue = variantWithPriceSp
                ? oneTimeDiscountValue * totalChildQuantities
                : oneTimeDiscountValue;
            price =
                (variantWithPriceSp ? price * totalChildQuantities : price) -
                oneTimeDiscountValue;
        }
    }
    if (sellingPlanPrice) {
        price = sellingPlanPrice;
        if (subscriptionBundleDiscount) {
            if (subscriptionBundleDiscount.bundleDiscountType === "FIXED") {
                subscriptionDiscountValue =
                    Number(subscriptionBundleDiscount.bundleDiscountValue) *
                    conversionRate;
                subscriptionDiscountValue = variantWithPriceSp
                    ? subscriptionDiscountValue * totalChildQuantities
                    : subscriptionDiscountValue;
                price =
                    (variantWithPriceSp
                        ? price * totalChildQuantities
                        : price) -
                    subscriptionDiscountValue * 100;
            } else {
                subscriptionDiscountValue =
                    (Number(subscriptionBundleDiscount.bundleDiscountValue) /
                        100) *
                    price;
                subscriptionDiscountValue = variantWithPriceSp
                    ? subscriptionDiscountValue * totalChildQuantities
                    : subscriptionDiscountValue;
                price =
                    (variantWithPriceSp
                        ? price * totalChildQuantities
                        : price) - subscriptionDiscountValue;
            }
        }
    }

    loopPriceSelectors.push(`.loop-product-${productId}`);
    updatePricesInUI(loopFormatMoney(price, true));
}

function listenLoopCustomEvent() {
    document.addEventListener("loopAddToCartSuccessEvent", function (event) {
        const productId = event.detail.productId;
        const response = event.detail.response;
        window.location.href = "/cart";
        console.log(
            `Loop Product ${productId} added to cart. Response:`,
            response
        );
    });
}

function removeAllEventListeners(element) {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
    return clone;
}

function overrideAddToCartButton(productId, bundleVariants) {
    const productForms = document.querySelectorAll(
        `[data-loop-product-id="${productId}"]`
    );
    productForms.forEach((form) => {
        const submitButtons = form.querySelectorAll("button");
        submitButtons.forEach((btn) => {
            btn = removeAllEventListeners(btn);
            btn.addEventListener("click", (event) => {
                const clickedProductId = form.getAttribute(
                    "data-loop-product-id"
                );
                const quantity = document.querySelector(
                    PRODUCT_QUANTITY_SELECTOR
                );
                loopHandleAddToCart(
                    event,
                    clickedProductId,
                    quantity.value,
                    bundleVariants
                );
            });
        });
    });
}

async function applyShopifyDiscount(discountCodes) {
    try {
        const endpoint = `${window?.Shopify?.routes?.root}discount/${discountCodes}`;
        await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        enableAddToCartBtn(productId);
    }
}

async function createBundleTransaction(payload) {
    try {
        const response = await fetch(CREATE_BUNDLE_TRANSACTION_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const bundleTransactionId = await response.json();
        return bundleTransactionId.loopBundleGuid;
    } catch (error) {
        console.error("createBundleTransaction", error);
        throw error;
    }
}

function hideOneTimePurchaseOption(productId) {
    document
        .querySelectorAll(`form[data-loop-product-id="${productId}"]`)
        .forEach((form) => {
            form.querySelectorAll(".loop-one-time-purchase-option").forEach(
                (option) => {
                    option.classList.add("loop-display-none");
                }
            );
        });
}

function disableAddToCartBtn(productId) {
    const productForms = document.querySelectorAll(
        `[data-loop-product-id="${productId}"]`
    );
    productForms.forEach((form) => {
        const submitButtons = form.querySelectorAll("button");
        submitButtons.forEach((btn) => {
            btn.disabled = true;
        });
    });
}

function enableAddToCartBtn(productId) {
    const productForms = document.querySelectorAll(
        `[data-loop-product-id="${productId}"]`
    );
    productForms.forEach((form) => {
        const submitButtons = form.querySelectorAll("button");
        submitButtons.forEach((btn) => {
            btn.disabled = false;
        });
    });
}

function createBundleTransactionPayload(
    productId,
    quantity,
    selectedSellingPlan
) {
    const selectedVariant = window.loopProps[productId].selectedVariantId;
    const bundleData = window.loopProps[productId]["productBundleData"];
    let bundleDiscountId = null;
    let bundleVariantDiscount = {};
    if (selectedSellingPlan) {
        let disc = bundleData?.["productVariantDiscountMapping"]?.[
            selectedVariant
        ]?.find((d) => d.purchaseType === "SUBSCRIPTION");
        if (disc) {
            bundleVariantDiscount = disc;
            bundleDiscountId = disc.bundleDiscountId;
        }
    } else {
        let disc = bundleData?.["productVariantDiscountMapping"]?.[
            selectedVariant
        ]?.find((d) => d.purchaseType !== "SUBSCRIPTION");
        if (disc) {
            bundleVariantDiscount = disc;
            bundleDiscountId = disc.bundleDiscountId;
        }
    }

    if (!bundleDiscountId) {
        return { payload: null, bundleVariantDiscount: null };
    }

    return {
        payload: {
            bundleId: bundleData["bundleId"],
            bundleVariantId:
                bundleData?.productVariantMapping?.[selectedVariant],
            bundleDiscountId: bundleDiscountId,
            sellingPlanId:
                bundleData?.productVariantSellingPlanMapping?.[
                    selectedSellingPlan
                ],
            productsQuantity: Number(quantity),
        },
        bundleVariantDiscount,
    };
}

async function handleBundleTransaction(
    productId,
    quantity,
    selectedSellingPlan
) {
    try {
        const {
            payload,
            bundleVariantDiscount,
        } = createBundleTransactionPayload(
            productId,
            quantity,
            selectedSellingPlan
        );
        const bundleTransactionId = await createBundleTransaction(payload);
        if (!bundleTransactionId) enableAddToCartBtn(productId);
        return { bundleTransactionId, bundleVariantDiscount };
    } catch (error) {
        enableAddToCartBtn(productId);
    }
}

function getSelectedSellingPlan(productId) {
    let sp = null;
    document
        .querySelectorAll(`form[data-loop-product-id="${productId}"]`)
        .forEach((form) => {
            const existingInput = form.querySelector(
                'input[name="selling_plan"]'
            );
            if (existingInput?.value) {
                sp = Number(existingInput.value);
            }
        });
    return sp;
}

async function getBundleDiscountAttributes() {
    const url = `https://${Shopify.shop}/cart.json`;
    const res = await (await fetch(url)).json();
    if (res.attributes?._loopBundleDiscountAttributes) {
        return JSON.parse(res.attributes._loopBundleDiscountAttributes);
    }
    return {};
}

async function createAddToCartPayload(
    bundleTransactionId,
    bundleVariantDiscount,
    selectedSellingPlan,
    selectedBundleVariantId,
    quantity,
    bundleData
) {
    const formData = {
        items: [],
        attributes: {
            _loopBundleDiscountAttributes: {},
        },
    };

    const oldAttr = await getBundleDiscountAttributes();
    const currentDiscountAttribute = {};
    currentDiscountAttribute[bundleTransactionId] = {
        discountType: bundleVariantDiscount.bundleDiscountType,
        discountValue: bundleVariantDiscount.bundleDiscountValue,
        discountComputedValue: bundleVariantDiscount
            ? selectedSellingPlan
                ? bundleVariantDiscount.spbpDiscount[selectedSellingPlan] *
                  quantity
                : bundleVariantDiscount.bundleDiscountComputedValue * quantity
            : 0,
    };
    formData.attributes._loopBundleDiscountAttributes = JSON.stringify({
        ...oldAttr,
        ...currentDiscountAttribute,
    });

    const selectedBundleVariantProducts =
        bundleData.mapping?.[selectedBundleVariantId].childProducts ??
        bundleVariants[selectedBundleVariantId].childProducts;
    if (selectedBundleVariantProducts?.length) {
        selectedBundleVariantProducts.forEach((product) => {
            formData.items.push({
                id: product.childVariantId,
                quantity: product.quantity * quantity,
                selling_plan: selectedSellingPlan,
                properties: {
                    _bundleId: bundleTransactionId,
                    _isPresetBundleProduct: true,
                },
            });
        });
    }
    return formData;
}

async function shopifyAddToCartByLoop(payload, productId) {
    const endpoint = `${window.Shopify.routes.root}cart/add.js`;
    fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            return response.json();
        })
        .then(async (response) => {
            // Emit a custom event
            await dispatchLoopAddCartEvent(productId, response, null);
        })
        .catch((error) => {
            console.error("shopifyAddToCartByLoop", error);
            enableAddToCartBtn(productId);
        });
}

async function loopHandleAddToCart(event, productId, quantity, bundleVariants) {
    event.preventDefault();
    event.stopPropagation();
    disableAddToCartBtn(productId);

    const selectedBundleVariantId =
        window.loopProps[productId].selectedVariantId;
    if (!bundleVariants[selectedBundleVariantId]["allowCheckout"]) {
        console.warn("cannot checkout bundle product");
        disableAddToCartBtn(productId);
        return;
    }
    const bundleData = window.loopProps[productId]["productBundleData"];
    // make the payload for add to cart and emit an event
    let selectedSellingPlan = getSelectedSellingPlan(productId);

    // handle bundle transaction
    const {
        bundleTransactionId,
        bundleVariantDiscount,
    } = await handleBundleTransaction(productId, quantity, selectedSellingPlan);
    if (!bundleTransactionId) {
        return;
    }

    const payload = await createAddToCartPayload(
        bundleTransactionId,
        bundleVariantDiscount,
        selectedSellingPlan,
        selectedBundleVariantId,
        quantity,
        bundleData
    );
    await shopifyAddToCartByLoop(payload, productId);
}

async function dispatchLoopAddCartEvent(
    productId,
    response,
    commaSeparatedDiscountString
) {
    // const res = await applyShopifyDiscount(commaSeparatedDiscountString);
    const addToCartEvent = new CustomEvent("loopAddToCartSuccessEvent", {
        detail: {
            productId: productId,
            response: response,
        },
    });
    document.dispatchEvent(addToCartEvent);
}

/**
 **************** Bundle Functions Ends ****************
 */
