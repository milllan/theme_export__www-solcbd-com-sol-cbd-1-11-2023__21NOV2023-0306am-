window.theme = window.theme || {};
window.slate = window.slate || {};

/* ========================================= */
/* ================ _VENDORS =============== */
/* ========================================= */

/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
  Zoom 1.7.21
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);

/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
  u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
}return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
  f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
  var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
  !r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
  return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
  var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
  return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
  for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
  var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
  thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
  return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
  n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
  n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
  return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
}),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
  r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
  return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
  a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);

/*
 * Debounce function
 * based on unminified version from http://davidwalsh.name/javascript-debounce-function
 */
theme.debounce = function(n,t,u){var e;return function(){var a=this,r=arguments,i=function(){e=null,u||n.apply(a,r)},o=u&&!e;clearTimeout(e),e=setTimeout(i,t),o&&n.apply(a,r)}};

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-csstransforms-csstransforms3d-touch-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_pointerevents-cssclassprefix:supports!
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return w("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!G("transform")},q.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.fontface=function(){var a;return w('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" supports-"+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.mq=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" supports-js supports-"+t.join(" supports-"):""),e}(this,this.document),Modernizr.addTest("pointerevents",function(){var a=document.createElement("x"),b=document.documentElement,c=window.getComputedStyle,d;return"pointerEvents"in a.style?(a.style.pointerEvents="auto",a.style.pointerEvents="x",b.appendChild(a),d=c&&c(a,"").pointerEvents==="auto",b.removeChild(a),!!d):!1});


/* ========================================= */
/* ================ _SLATE ================= */
/* ========================================= */
window.theme = window.theme || {};

theme.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr("data-section-id");
    var type = $container.attr("data-section-type");

    constructor = constructor || this.constructors[type];

    if (_.isUndefined(constructor)) {
      return;
    }

    var instance = _.assignIn(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];

    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    this.instances = _.filter(this.instances, function(instance) {
      var isEventInstance = instance.id === evt.originalEvent.detail.sectionId;

      if (isEventInstance) {
        if (_.isFunction(instance.onUnload)) {
          instance.onUnload(evt);
        }
      }

      return !isEventInstance;
    });
  },

  _onSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
      instance.onDeselect(evt);
    }
  },

  _onBlockSelect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    // eslint-disable-next-line no-shadow
    var instance = _.find(this.instances, function(instance) {
      return instance.id === evt.originalEvent.detail.sectionId;
    });

    if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(
      function(index, container) {
        this._createInstance(container, constructor);
      }.bind(this)
    );
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 * Alternatives
 * - Accounting.js - http://openexchangerates.github.io/accounting.js/
 *
 */

theme.Currency = (function() {
  var moneyFormat = "$\{\{ amount \}\}";

  function formatMoney(cents, format) {
    if (typeof cents === "string") {
      cents = cents.replace('.', '');
    }

    var value = "";
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = format || moneyFormat;

    function formatWithDelimiters(number, precision, thousands, decimal) {
      thousands = thousands || ',';
      decimal = decimal || '.';

      if (isNaN(number) || number === null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split(".");
      var dollarsAmount = parts[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1' + thousands
      );

      var centsAmount = parts[1] ? decimal + parts[1] : "";

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case "amount":
        value = formatWithDelimiters(cents, 2);
        break;
      case "amount_no_decimals":
        value = formatWithDelimiters(cents, 0);
        break;
      case "amount_with_comma_separator":
        value = formatWithDelimiters(cents, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        value = formatWithDelimiters(cents, 0, ".", ",");
        break;
      case "amount_no_decimals_with_space_separator":
        value = formatWithDelimiters(cents, 0, " ");
        break;
      case "amount_with_apostrophe_separator":
        value = formatWithDelimiters(cents, 2, "'");
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

theme.visibilitySettings = (function() {
  function sortVisibilityTypes(parentSelector, childSelector) {
    const listOfTemplates = parentSelector.querySelectorAll(childSelector);
    const sortedTemplates = new Map();

    sortedTemplates.set("all", []);
    sortedTemplates.set("collection", []);
    sortedTemplates.set("type", []);
    sortedTemplates.set("tag", []);
    sortedTemplates.set("product", []);

    listOfTemplates.forEach((template) => {
      const templateType = template.dataset.visibilityType;

      if (sortedTemplates.has(templateType)) {
        const currentTemplates = sortedTemplates.get(templateType);

        currentTemplates.push(template);
        sortedTemplates.set(templateType, currentTemplates);
      }
    });

    return sortedTemplates;
  }

  function checkForVisibility(productJson, templateOptions, addTemplateCallback) {
    if (!productJson) {
      return null;
    }

    // Collections
    const productCollections = productJson.collections;
    const addOnCollection = templateOptions.collection;

    const isCollectionInProductCollections = productCollections.length && productCollections.some((collection) => {
      return collection.handle === addOnCollection;
    });

    // Tags
    const productTags = productJson.tags;
    const addOnTags = templateOptions.tags;

    const lowerProductTags = productTags.length && productTags.map((tag) => {
      return tag.toLowerCase();
    });

    const lowerAddOnTags = addOnTags && addOnTags.split(",")
      .filter((tag) => {
        return tag;
      }).map((tag) => {
        return tag.trim().toLowerCase();
      });

    const isTagInProductTags = lowerProductTags.length && lowerProductTags.some((tag) => {
      return lowerAddOnTags.includes(tag);
    });

    // Types
    const productType = productJson.type;
    const addOnTypes = templateOptions.types;

    const lowerAddOnTypes = addOnTypes && addOnTypes.split(",")
      .filter((type) => {
        return type;
      })
      .map((type) => {
        return type.trim().toLowerCase();
      });

    const isTypeInProductType = lowerAddOnTypes.length && lowerAddOnTypes.some((type) => {
      const lowerProductType = productType.toLowerCase();

      return type === lowerProductType;
    });

    // Set visibility
    const productId = productJson.id;
    const addOnProductId = +templateOptions.productId;

    if (templateOptions.visibility === "all") {
      addTemplateCallback();
    } else {
      if (templateOptions.visibility === "product" && productId === addOnProductId) {
        addTemplateCallback();
      } else if (templateOptions.visibility === "collection" && isCollectionInProductCollections) {
        addTemplateCallback();
      } else if (templateOptions.visibility === "tag" && isTagInProductTags) {
        addTemplateCallback();
      } else if (templateOptions.visibility === "type" && isTypeInProductType) {
        addTemplateCallback();
      }
    }
  }

  return {
    checkForVisibility: checkForVisibility,
    sortVisibilityTypes: sortVisibilityTypes
  };
})();

theme.cartModal = (function () {
  const cartModal = $("#CartModal");

  function initCartIconClick(callback) {
    if (document.cartInitClick) {
      return;
    }

    document.cartInitClick = true;

    const $openBtn = $('[aria-controls="CartModal"]');

    $openBtn.attr("aria-expanded", "false");

    $openBtn.on("click", function (e) {
      e.preventDefault();

      if (theme.settings.enableCartMessage && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
        window.initNotificationToast = false;
      }

      if (typeof callback === "function") {
        theme.ajaxCart.load();
        theme.modal.open(cartModal);
      }
    });
  }

  function initCartModal() {
    theme.loadScript(theme.variables.jQueryExitIntentPluginLink, initPopup);

    function initPopup() {
      theme.modal.open(cartModal);
    }
  }

  return {
    init: initCartModal,
    initCartIconClick: initCartIconClick
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

theme.Images = (function() {
  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === "string") {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];

      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Swaps the src of an image for another OR returns the imageURL to the callback function
   * @param image
   * @param element
   * @param callback
   */
  function switchImage(image, element, callback) {
    var size = this.imageSize(element.src);
    var imageUrl = this.getSizedImageUrl(image.src, size);

    if (callback) {
      callback(imageUrl, image, element); // eslint-disable-line callback-return
    } else {
      element.src = imageUrl;
    }
  }

  /**
   * +++ Useful
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(
      /.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[.@]/
    );

    if (match !== null) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * +++ Useful
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === "master") {
      return this.removeProtocol(src);
    }

    var match = src.match(
      /\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i
    );

    if (match !== null) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(`${prefix[0]}_${size}${suffix}`);
    }

    return null;
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, "");
  }

  return {
    preload: preload,
    loadImage: loadImage,
    switchImage: switchImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist.  Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {
  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on(
      "change",
      this._onSelectChange.bind(this)
    );
  }

  Variants.prototype = _.assignIn({}, Variants.prototype, {
    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = _.map(
        $(this.singleOptionSelector, this.$container),
        function(element) {
          var $element = $(element);
          var type = $element.attr("type");
          var currentOption = {};

          if (type === "radio" || type === "checkbox") {
            if ($element[0].checked) {
              currentOption.value = $element.val();
              currentOption.index = $element.data("index");

              return currentOption;
            } else {
              return false;
            }
          } else {
            currentOption.value = $element.val();
            currentOption.index = $element.data("index");

            return currentOption;
          }
        }
      );

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = _.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;

      var found = _.find(variants, function(variant) {
        return selectedValues.every(function(values) {
          return _.isEqual(variant[values.index], values.value);
        });
      });

      return found;
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();

      this.$container.trigger({
        type: "variantChange",
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateMedia(variant);
      this._updatePrice(variant);
      this._updateSKU(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant media changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantMediaChange
     */
    _updateMedia: function(variant) {
      var variantMedia = variant.featured_media || {};
      var currentVariantMedia = this.currentVariant.featured_media || {};
      var isMatchingPreviewImage = false;

      if (variantMedia.preview_image && currentVariantMedia.preview_image) {
        isMatchingPreviewImage =
          variantMedia.preview_image.src ===
          currentVariantMedia.preview_image.src;
      }

      if (!variant.featured_media || isMatchingPreviewImage) {
        return;
      }

      this.$container.trigger({
        type: "variantMediaChange",
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (
        variant.price === this.currentVariant.price &&
        variant.compare_at_price === this.currentVariant.compare_at_price
      ) {
        return;
      }

      this.$container.trigger({
        type: "variantPriceChange",
        variant: variant
      });
    },

    /**
     * Trigger event when variant SKU changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantSKUChange
     */
    _updateSKU: function(variant) {
      if (variant.sku === this.currentVariant.sku) {
        return;
      }

      this.$container.trigger({
        type: "variantSKUChange",
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      // Construct URLSearchParams object instance from current URL querystring.
      var queryParams = new URLSearchParams(window.location.search);

      // Set new or modify existing parameter value.
      queryParams.set("variant", variant.id);

      // Replace current querystring with the new one.
      history.replaceState(null, null, `?${queryParams.toString()}`);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container).val(variant.id);
    }
  });

  return Variants;
})();

window.slate = window.slate || {};

/**
 * Slate utilities
 * -----------------------------------------------------------------------------
 * A collection of useful utilities to help build your theme
 *
 *
 * @namespace utils
 */

slate.utils = {
  keyboardKeys: {
    TAB: 9,
    ENTER: 13,
    ESCAPE: 27,
    LEFTARROW: 37,
    RIGHTARROW: 39
  }
};

/* ================ GLOBAL ================ */
theme.LibraryLoader = (function() {
  var types = {
    link: "link",
    script: "script"
  };

  var status = {
    requested: "requested",
    loaded: "loaded"
  };

  var cloudCdn = "https://cdn.shopify.com/shopifycloud/";

  var libraries = {
    youtubeSdk: {
      tagId: "youtube-sdk",
      src: "https://www.youtube.com/iframe_api",
      type: types.script
    },
    plyrShopifyStyles: {
      tagId: "plyr-shopify-styles",
      src: `${cloudCdn}shopify-plyr/v1.0/shopify-plyr.css`,
      type: types.link
    },
    modelViewerUiStyles: {
      tagId: "shopify-model-viewer-ui-styles",
      src: `${cloudCdn}model-viewer-ui/assets/v1.0/model-viewer-ui.css`,
      type: types.link
    }
  };

  function load(libraryName, callback) {
    var library = libraries[libraryName];

    if (!library) {
      return;
    }

    if (library.status === status.requested) {
      return;
    }

    callback = callback || function() {};

    if (library.status === status.loaded) {
      callback();

      return;
    }

    library.status = status.requested;

    var tag;

    switch (library.type) {
      case types.script:
        tag = createScriptTag(library, callback);
        break;
      case types.link:
        tag = createLinkTag(library, callback);
        break;
    }

    tag.id = library.tagId;
    library.element = tag;

    var firstScriptTag = document.getElementsByTagName(library.type)[0];

    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  function createScriptTag(library, callback) {
    var tag = document.createElement("script");

    tag.src = library.src;

    tag.addEventListener("load", function() {
      library.status = status.loaded;
      callback();
    });

    return tag;
  }

  function createLinkTag(library, callback) {
    var tag = document.createElement("link");

    tag.href = library.src;
    tag.rel = "stylesheet";
    tag.type = "text/css";

    tag.addEventListener("load", function() {
      library.status = status.loaded;
      callback();
    });

    return tag;
  }

  return {
    load: load
  };
})();

/* ================ _THEME_VARIABLES ================ */
theme.variables = {
  ...theme.variables,
  productPageSticky: true,
  bpSmall: false,
  mediaQuerySmall: `screen and (max-width: ${theme.variables.small}px)`,
  mediaQuerySmallUp: `screen and (min-width: ${theme.variables.postSmall}px)`
};

/* ========================================= */
/* ================ _TIMBER ================ */
/* ========================================= */
window.theme = window.theme || {};
window.timber = window.timber || {};

/* ================ _TIMBER_FUNCTIONS ================ */
timber.init = function() {
  timber.initCache();
  timber.drawersInit();
  timber.loginForms();
};

/* ================ _TIMBER_CACHE ================ */
timber.initCache = function() {
  timber.cache = {
    // General
    $html: $("html"),
    $body: $("body"),
    $window: $(window),

    // Navigation
    $mobileSubNavToggle: $(".mobile-nav__toggle-btn"),
    $mobileNavLinkToggle: $(".mobile-nav__toggle-link"),

    // Product Page
    $optionSelector: $(".single-option-selector"),

    // Customer Pages
    $recoverPasswordLink: $("#RecoverPassword"),
    $hideRecoverPasswordLink: $("#HideRecoverPasswordLink"),
    $recoverPasswordForm: $("#RecoverPasswordForm"),
    $customerLoginForm: $("#CustomerLoginForm"),
    $recoverEmailInput: $("#RecoverEmail"),
    $passwordResetSuccess: $("#ResetSuccess")
  };
};

// init drawers
timber.drawersInit = function() {
  const isCartPage = document.body.classList.contains("template-cart");

  timber.LeftDrawer = new timber.Drawers("NavDrawer", "left");
  timber.FilterDrawer = new timber.Drawers('dbtfyCollectionFilter', 'left');

  if (theme.settings.isSearchEnabled) {
    timber.TopDrawer = new timber.Drawers("SearchDrawer", "top");
  }

  if (theme.settings.cartType === "drawer") {
    timber.RightDrawer = new timber.Drawers("CartDrawer", "right", {
      onDrawerOpen: theme.ajaxCart.load
    });
  }

  if (theme.settings.cartType === "modal" || theme.settings.cartType === "drawer" || theme.settings.cartType === "page" || isCartPage) {
    theme.ajaxCart.init();
  }
};

timber.getHash = function() {
  return window.location.hash;
};

/* ================ _Login ================ */
timber.loginForms = function() {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
    timber.cache.$recoverEmailInput.focus();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on("click", function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  timber.cache.$hideRecoverPasswordLink.on("click", function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (timber.getHash() === "#recover") {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function() {
  timber.cache.$passwordResetSuccess.show();
};


/* ================ _Drawer_modules ================ */
timber.Drawers = (function() {
  var Drawer = function(id, position, options) {
    var defaults = {
      id: id,
      close: ".js-drawer-close",
      open: `.js-drawer-open-button-${position}`,
      drawerLeftClass: "drawer--left",
      drawerRightClass: "drawer--right",
      drawerTopClass: "drawer--top",
      drawerBottomClass: "drawer--bottom",
      openClass: "js-drawer-open",
      dirOpenClass: `js-drawer-open-${position}`
    };

    this.nodes = {
      $parent: $("body"),
      $page: $(".overlay-drawer"),
      $moved: $(".page-container")
    };

    this.config = $.extend(defaults, options);
    this.position = position;

    this.$drawer = $(`#${id}`);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  };

  Drawer.prototype.init = function() {
    var $openBtn = $(this.config.open + '[aria-controls="' + this.config.id + '"]');

    // Add aria controls
    $openBtn.attr("aria-expanded", "false");

    // open button
    $openBtn.on("click", $.proxy(this.open, this));

    // close button
    this.$drawer.find(this.config.close).on("click", $.proxy(this.close, this));
  };

  Drawer.prototype.open = function(evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Other drawers that might be open (will be closed later)
    var $otherDrawers = $(".drawer").not(this.$drawer);

    if (theme.settings.enableCartMessage && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
      window.initNotificationToast = false;
    }

    // don't open an opened drawer
    if (this.drawerIsOpen) {
      if (evt) {
        evt.preventDefault();
      }

      return;
    }

    // Close other drawers if they are open
    var self = this;

    $otherDrawers.each(function() {
      if (!$(this).hasClass(self.config.openClass)) {
        return;
      }

      if ($(this).hasClass(self.config.drawerLeftClass)) {
        timber.LeftDrawer.close();
      }

      if ($(this).hasClass(self.config.drawerRightClass)) {
        timber.RightDrawer.close();
      }

      if ($(this).hasClass(self.config.drawerTopClass)) {
        timber.TopDrawer.close();
      }

      if ($(this).hasClass(self.config.drawerBottomClass)) {
        timber.BottomDrawer.close();
      }
    });

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to $nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Add open class to drawer
    this.$drawer.addClass(this.config.openClass);

    // Add open class to body
    this.nodes.$parent.addClass(
      `${this.config.openClass} ${this.config.dirOpenClass}`
    );

    this.drawerIsOpen = true;

    // Set focus on drawer
    theme.trapFocus({
      $container: this.$drawer
    });

    // Run function when drawer opens if set AND not an external call
    if (this.config.onDrawerOpen && typeof this.config.onDrawerOpen === "function") {
      if (!externalCall) {
        // wait for drawer animation to complete
        setTimeout(function() {
          self.config.onDrawerOpen();
        }, theme.variables.animationDuration);
      }
    }

    // set aria-expanded to true on the open drawer button
    if (this.$activeSource && this.$activeSource.attr("aria-expanded")) {
      this.$activeSource.attr("aria-expanded", "true");
    }

    // bind drawer event
    this.bindEvents();
  };

  Drawer.prototype.close = function(evt) {
    // don't close a closed drawer
    if (!this.drawerIsOpen) {
      return;
    }

    if (evt && evt.keyCode !== 27) {
      evt.preventDefault();
    }

    // deselect any focused form elements
    $(document.activeElement).trigger("blur");

    // Add closing transitioning class to drawer
    theme.closeTransition({
      elementToTransition: this.$drawer
    });

    // Remove open class to drawer
    this.$drawer.removeClass(this.config.openClass);

    // Add closing transitioning class to body
    theme.closeTransition({
      elementToTransition: this.nodes.$parent
    });

    // Remove open class to body
    this.nodes.$parent.removeClass(
      `${this.config.openClass} ${this.config.dirOpenClass}`
    );

    this.drawerIsOpen = false;

    // Remove focus on drawer
    theme.removeTrapFocus({
      $container: this.$drawer
    });

    // set aria-expanded to false on the open drawer button
    if (this.$activeSource && this.$activeSource.attr("aria-expanded")) {
      this.$activeSource.attr("aria-expanded", "false");
    }

    this.$drawer.trigger("drawer.close");

    // unbind drawer event
    this.unbindEvents();
  };

  Drawer.prototype.bindEvents = function() {
    // Lock scrolling on mobile
    this.nodes.$page.on("touchmove.drawer", function() {
      return false;
    });

    // Clicking out of drawer closes it
    this.nodes.$page.on(
      "click.drawer",
      this.close.bind(this)
    );

    // Pressing escape closes drawer
    this.nodes.$parent.on(
      "keyup.drawer",
      $.proxy(function(evt) {
        if (evt.keyCode === 27) {
          this.close(evt);
        }
      }, this)
    );
  };

  Drawer.prototype.unbindEvents = function() {
    if (this.$activeSource !== undefined) {
      this.$activeSource.off(".drawer");
    }

    this.nodes.$page.off(".drawer");
    this.nodes.$parent.off(".drawer");
  };

  return Drawer;
})();


/* ================ _INIT_TIMBER ================ */
$(timber.init);

$(document).on("shopify:section:load", function(evt) {
  $(timber.init);
});

/* ======================================== */
/* ================ _THEME ================ */
/* ======================================== */

/* ================ _SHOPIFY_API ================ */
if (typeof ShopifyAPI === "undefined") {
  ShopifyAPI = {};
}

function attributeToString(attribute) {
  if (typeof attribute !== "string") {
    attribute += "";

    if (attribute === "undefined") {
      attribute = "";
    }
  }

  return attribute.trim();
}

ShopifyAPI.onCartUpdate = function() {
  // alert("There are now " + cart.item_count + " items in the cart.");
};

ShopifyAPI.updateCartNote = function(note, callback) {
  fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      note: attributeToString(note)
    })
  }).then((response) => response.json())
    .then((cart) => {
      if (typeof callback === "function") {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    }).catch((XMLHttpRequest, textStatus) => {
    ShopifyAPI.onError(XMLHttpRequest, textStatus);
  });
};

ShopifyAPI.onError = function(XMLHttpRequest) {
  let data = XMLHttpRequest.responseText || XMLHttpRequest;

  if (typeof data === "string") {
    data = JSON.parse(data);
  }

  if (data && data.message) {
    alert(`${data.message} (${data.status}): ${data.description}`);
  }

  theme.loadingState.destroyAll();
};

ShopifyAPI.addItemFromForm = function(form, callback, errorCallback) {
  let jsForm = null;
  let data = null;

  if (typeof form === "object" && form.data && typeof form.data === "object") {
    data = form.data;
    jsForm = form.forms instanceof jQuery ? form.forms.get() : form.forms instanceof NodeList ? Array.from(form.forms) : Array(form.forms);
  } else {
    data = $(form).serialize();
    jsForm = form instanceof jQuery ? form.get() : form instanceof NodeList ? Array.from(form) : Array(form);
  }

  const params = {
    type: "POST",
    url: "/cart/add.js",
    data: data,
    dataType: "json",
    success: function(line_item) {
      if (typeof callback === "function") {
        callback(line_item, jsForm);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      if (typeof errorCallback === "function") {
        errorCallback(XMLHttpRequest, textStatus, jsForm);
      } else {
        ShopifyAPI.onError(XMLHttpRequest, textStatus);
        $("body").trigger("ajaxCart.cartAddError", form, textStatus);
      }
    }
  };

  $.ajax(params);
};

// Get from cart.js returns the cart in JSON
ShopifyAPI.getCart = async function(callback) {
  return await fetch("/cart.js")
    .then((response) => response.json())
    .then((cart) => {
      if (typeof callback === "function") {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }

      return cart;
    })
    .catch(() => {return;});
};

// POST to cart/change.js returns the cart in JSON
ShopifyAPI.changeItem = function(line, quantity, callback) {
  fetch("/cart/change.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      line: line,
      quantity: quantity
    })
  }).then((response) => response.json())
    .then((cart) => {
      if (typeof callback === "function") {
        callback(cart);
      } else {
        ShopifyAPI.onCartUpdate(cart);
      }
    }).catch((XMLHttpRequest, textStatus) => {
    ShopifyAPI.onError(XMLHttpRequest, textStatus);
  });
};

theme.isCartLoaded = false;
theme.cart = ShopifyAPI.getCart((cart) => {
  theme.cart = cart;
  theme.isCartLoaded = true;
  document.dispatchEvent(new CustomEvent("dbtfy:cartLoaded"));
});

//_AJAX_CART
theme.ajaxCart = (function(module, $) {
  "use strict";

  // Public functions
  let init, loadCart, updateCart;

  // Private general variables
  let settings, isUpdating, isLoaded = false, $body;

  // Private plugin variables
  let $cartDrawer;
  let $cartModal;
  let $cartContainer;
  let $modalCartContainer;
  let $cartPageContainer;
  let $formContainer;
  let $addToCart;
  let $cartCountSelector;
  let $cartCostSelector;
  let $quantityAdjust;
  let $quantityInput;
  let $quantityRemove;
  let $checkoutSelector;
  let $cartNoteSelector;
  let isCartPage;
  let defaultShopLocale;
  let isDefaultShopLocaleSet;

  // Private functions
  let updateCountPrice;
  let formOverride;
  let formSubmitHandler;
  let itemAddedCallback;
  let itemErrorCallback;
  let cartUpdateCallback;
  let buildCart;
  let cartCallback;
  let adjustCart;
  let adjustCartCallback;
  let buildCartPage;
  let validateQty;
  let getCartDrawerMarkup;
  let getCartPageMarkup;

  /*============================================================================
    Initialise the plugin and define global options
  ==============================================================================*/

  init = function(options) {
    // Default settings
    settings = {
      cartDrawer: "#CartDrawer",
      cartModal: "#CartModal",
      cartContainer: "#CartContainer",
      cartPageContainer: ".main-content",
      formSelector: "form[action*='/cart/add'], form[action*='javascript']",
      addToCartSelector: "input[type='submit'], button[type='submit']",
      checkoutSelector: "button[name='checkout']",
      cartCountSelector: ".cart-count",
      cartCostSelector: ".cart-cost",
      moneyFormat: theme.strings.moneyFormat,
      disableAjaxCart: false,
      drawerIsLoadingClass: "ajaxcart--is-loading",
      drawerIsLoadedClass: "ajaxcart--is-loaded",
      ajaxCartIsUpdating: "ajaxcart--is-updating",
      bubbleLinkSelector: ".cart-link__bubble",
      bubbleLinkActiveClass: "cart-link__bubble--visible",
      hiddenCountClass: "hidden-count",
      atcIsAddedClass: "is-added",
      quantityErrorClass: "qty-error",
      ajaxCartTemplateName: "cart",
      ajaxCartAltTemplateName: "ajax",
      ajaxCartPageAltTemplateName: "ajax-page",
      quantityAdjustSelector: ".qty-adjust",
      quantityInputSelector: ".qty-input",
      quantityAddSelector: ".js-qty__adjust--plus",
      quantityAddClass: "js-qty__adjust--plus",
      quantityRemoveSelector: ".cart__product-remove",
      cartNoteSelector: "textarea[name='note']",
      cartProductSelector: ".cart-item",
      isLoadingClass: "is-loading",
      isRemovedClass: "is-removed"
    };

    if (theme.settings.enableCartMessage && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
      window.initNotificationToast = true;
    }

    // Override defaults with arguments
    if (typeof options === "object") {
      settings = Object.assign(settings, options);
    }

    // Select DOM elements
    $cartDrawer = document.querySelector(settings.cartDrawer);
    $cartModal = document.querySelector(settings.cartModal);
    $cartContainer = document.querySelector(settings.cartContainer);
    $cartPageContainer = document.querySelector(settings.cartPageContainer);
    $formContainer = document.querySelectorAll(settings.formSelector);
    $checkoutSelector = document.querySelectorAll(settings.checkoutSelector);
    $cartCountSelector = document.querySelectorAll(settings.cartCountSelector);
    $cartCostSelector = document.querySelectorAll(settings.cartCostSelector);
    $addToCart = $formContainer.length && Array.from($formContainer).map((form) => {
      return Array.from(form.querySelectorAll(settings.addToCartSelector));
    }).flat();

    // General Selectors
    $body = $(document.body);

    // Track cart activity status
    isUpdating = false;

    // Is cart page
    isCartPage = document.body.classList.contains("template-cart");

    // Take over the add to cart form submit action if ajax enabled
    if (!settings.disableAjaxCart && $addToCart.length) {
      formOverride();
    }

    theme.cartModal.initCartIconClick(cartUpdateCallback);

    // Run this function in case we're using the quantity selector outside of the cart
    adjustCart();

    // Get default locale
    defaultShopLocale = theme.variables.shopLocales.find((locale) => {
      return locale.shop_locale.primary;
    });

    if (defaultShopLocale && Shopify.locale === defaultShopLocale.shop_locale.locale) {
      isDefaultShopLocaleSet = true;
    }
  };

  // load cart (function called when opening the cart drawer manually)
  loadCart = function () {
    // only load cart if it hasn't been loaded before
    if (isLoaded) {
      return;
    }

    if (theme.cart) {
      if (theme.settings.cartType === "drawer") {
        if ($cartDrawer.classList.contains(settings.drawerIsLoadingClass)) {
          cartUpdateCallback(theme.cart);
        }
      } else if (theme.settings.cartType === "modal") {
        if ($cartModal.classList.contains(settings.drawerIsLoadingClass)) {
          cartUpdateCallback(theme.cart);
        }
      }
    } else {
      document.addEventListener("dbtfy:cartLoaded", () => {
        window.initNotificationToast = false;
        cartUpdateCallback(theme.cart);
      });
    }
  };

  // update cart
  updateCart = function (callback) {
    if (typeof callback === "function") {
      ShopifyAPI.getCart((cart) => {
        cartUpdateCallback(cart, callback);
      });
    } else {
      ShopifyAPI.getCart(cartUpdateCallback);
    }
  };

  // update cart total and cart count
  updateCountPrice = function(cart) {
    const itemCount = (cart && cart.item_count) ? cart.item_count : 0;
    const totalPrice = (cart && cart.total_price) ? cart.total_price : 0;

    $cartCountSelector.length && $cartCountSelector.forEach((label) => {
      const cartLink = label.parentElement.querySelector(settings.bubbleLinkSelector);

      label.innerText = itemCount <= 99 ? itemCount : "99+";

      if (itemCount <= 0) {
        label.classList.add(settings.hiddenCountClass);
        cartLink && cartLink.classList.remove(settings.bubbleLinkActiveClass);
      } else {
        label.classList.remove(settings.hiddenCountClass);
        cartLink && cartLink.classList.add(settings.bubbleLinkActiveClass);
      }
    });

    if (theme.settings.dbtfyCartSavings) {
      return;
    }

    $cartCostSelector.length && $cartCostSelector.forEach((label) => {
      label.innerHTML = `<span class="money">${theme.Currency.formatMoney(totalPrice, settings.moneyFormat)}</span>`;
    });
  };

  formOverride = function() {
    $formContainer.length && $formContainer.forEach((form) => {
      if (!form.hasAttribute("data-has-submit-event")) {
        form.addEventListener("submit", (evt) => {
          formSubmitHandler(form, evt);
        });

        form.addEventListener("form-submit", () => {
          formSubmitHandler(form);
        });
      }

      form.setAttribute("data-has-submit-event", "true");
    });
  };

  formSubmitHandler = function(form, evt) {
    if (evt) {
      evt.preventDefault();
    }

    if (form.hasAttribute("data-has-submit-listener")) {
      return;
    }

    const quantityErrors = document.querySelectorAll(`.${settings.quantityErrorClass}`);

    $addToCart.length && $addToCart.forEach((button) => {
      button.classList.remove(settings.atcIsAddedClass);
    });

    // Remove any previous quantity errors
    quantityErrors.length && quantityErrors.forEach((error) => {
      error.remove();
    });

    ShopifyAPI.addItemFromForm(
      form,
      itemAddedCallback,
      itemErrorCallback
    );
  }

  itemAddedCallback = function () {
    if (theme.settings.dbtfySkipCart && !document.body.classList.contains("dbtfy-skip_cart-destroy")) {
      theme.goToCheckoutWithDiscount();
    } else {
      if (theme.settings.cartType === "drawer" || theme.settings.cartType === "modal") {
        if (theme.settings.enableCartMessage && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
          window.initNotificationToast = true;
        }

        ShopifyAPI.getCart(cartUpdateCallback);
      } else {
        if (document.body.classList.contains("template-cart")) {
          ShopifyAPI.getCart(cartUpdateCallback);
        } else {
          if (theme.settings.enableCartMessage && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
            ShopifyAPI.getCart(cartUpdateCallback);

            theme.NotificationToast.init(".cart-message-toast-wrapper");
          } else {
            window.location.assign("/cart");
          }
        }
      }
    }
  };

  itemErrorCallback = function(XMLHttpRequest, textStatus, form) {
    const data = eval(`(${XMLHttpRequest.responseText ? XMLHttpRequest.responseText : "{}"})`);

    $addToCart.length && $addToCart.forEach((button) => {
      button.classList.remove(settings.atcIsAddedClass);
    });

    theme.loadingState.destroy($addToCart);

    $body.trigger("ajaxCart.cartAddError", form, textStatus);

    if (data.message) {
      if (data.status === 422) {
        // show error message under addtocart form
        let $formToInsert = $formContainer;

        if (form) {
          $formToInsert = form;
        }

        $formToInsert.length && $formToInsert.forEach((form) => {
          const nextElement = form.nextElementSibling;

          if (nextElement && !nextElement.classList.contains(settings.quantityErrorClass)) {
            form.insertAdjacentHTML("afterend", `<div class="errors qty-error">${data.description}</div>`);
          }
        });

        ShopifyAPI.onError(data);
      }
    }
  };

  cartUpdateCallback = async function(cart, callback) {
    if (!isLoaded) {
      isLoaded = true;
    }

    theme.cart = cart;

    await buildCart(cart);
    await buildCartPage(cart);

    if (typeof callback === "function") {
      callback(cart);
    }
  };

  buildCart = async function (cart) {
    // add class to track when ajaxcart is being updated
    $cartDrawer && $cartDrawer.classList.add(settings.ajaxCartIsUpdating);
    $cartModal && $cartModal.classList.add(settings.ajaxCartIsUpdating);

    const markup = await getCartDrawerMarkup();


    // Start with a fresh cart div
    if ($cartContainer) {
      while ($cartContainer.firstChild) {
        $cartContainer.removeChild($cartContainer.firstChild)
      }
    }

    if ($cartContainer) {
      $cartContainer.insertAdjacentHTML("afterbegin", markup);
    }

    cartCallback(cart, "drawer");
  };

  cartCallback = function(cart, cartType) {
    let cartRowPrices = document.querySelectorAll(".cart__price");

    if (theme.settings.customCurrency) {
      cartRowPrices.forEach((price) => {
        price.style.opacity = 0;
      });
    }

    // Update quantity and price
    updateCountPrice(cart);

    // Apply discount code
    theme.discountCode.init();

    // Remove discount code on cart count zero.
    if (cart.item_count === 0) {
      sessionStorage.removeItem("discount");
    }

    // Init quantity selectors
    adjustCart();

    // Set loaded state to true
    if (theme.settings.cartType === "drawer") {
      $cartDrawer.classList.remove(settings.drawerIsLoadingClass);
      $cartDrawer.classList.add(settings.drawerIsLoadedClass);
      $cartDrawer.classList.remove(settings.ajaxCartIsUpdating);
    } else if (theme.settings.cartType === "modal") {
      $cartModal.classList.remove(settings.drawerIsLoadingClass);
      $cartModal.classList.add(settings.drawerIsLoadedClass);
      $cartModal.classList.remove(settings.ajaxCartIsUpdating);
    }

    // add-to-cart button state
    $addToCart.length && $addToCart.forEach((button) => {
      button.classList.add(settings.atcIsAddedClass);
    });

    // style links
    theme.styleTextLinks();

    // destroy addtocart button loading state
    theme.loadingState.destroy($addToCart);

    // Init Dynamic checkout buttons
    if (window.Shopify && Shopify.StorefrontExpressButtons && !window.Shopify.designMode) {
      Shopify.StorefrontExpressButtons.initialize();
    }

    if (theme.settings.cartType === "drawer") {
      // Init Cart drawer events
      timber.RightDrawer.init();

      if (!isCartPage) {
        // Open Cart drawer
        if (theme.settings.enableCartMessage && window.initNotificationToast && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
          theme.NotificationToast.init(".cart-message-toast-wrapper");
        } else {
          timber.RightDrawer.open();
        }

        // Trap focus on cart drawer
        theme.trapFocus({
          $container: theme.cache.$cartDrawer
        });
      }
    } else if (theme.settings.cartType === "modal") {
      if (!isCartPage) {
        if (theme.settings.enableCartMessage && window.initNotificationToast && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
          theme.NotificationToast.init(".cart-message-toast-wrapper");
        } else {
          theme.modal.init();
          theme.cartModal.init();
        }
      }
    }

    isUpdating = false;

    theme.cart = cart;

    // trigger aftercartload function (hook for external functions)
    $body.trigger("ajaxCart.afterCartLoad", [cart, cartType]);

    if (theme.settings.customCurrency) {
      setTimeout(function() {
        cartRowPrices.forEach((price) => {
          price.style.opacity = 1;
        });
      }, 700);
    }

    isUpdating = false;

    theme.modal.init();

    theme.cart = cart;

    // trigger aftercartload function (hook for external functions)
    $body.trigger("ajaxCart.afterCartLoad", cart);
  };

  adjustCart = function() {
    $quantityAdjust = document.querySelectorAll(settings.quantityAdjustSelector);
    $quantityInput = document.querySelectorAll(settings.quantityInputSelector);
    $quantityRemove = document.querySelectorAll(settings.quantityRemoveSelector);
    $checkoutSelector = document.querySelectorAll(settings.checkoutSelector);
    $cartNoteSelector = document.querySelectorAll(settings.cartNoteSelector);

    $quantityAdjust.length && $quantityAdjust.forEach((adjustButton) => {
      const quantityHandler = function() {
        if (isUpdating) {
          return;
        }

        const closestProductCard = adjustButton.closest(settings.cartProductSelector);
        const productCard = closestProductCard ? closestProductCard : adjustButton.closest(".qty-container");
        const line = productCard.dataset.line;
        const $qtySelector = productCard.querySelector(settings.quantityInputSelector);
        let cartDrawerRow = adjustButton.closest(".ajaxcart_row");
        let qty = parseInt($qtySelector.value.replace(/\D/g, ""));

        qty = validateQty(qty);

        // Add or subtract from the current quantity
        if (adjustButton.classList.contains(settings.quantityAddClass)) {
          qty += 1;
        } else {
          qty -= 1;

          if (qty <= 0) {
            qty = line ? 0 : 1;
          }
        }

        // If it has a data-line, update the cart.
        // Otherwise, just update the input's number
        if (line) {
          if (isCartPage) {
            if (cartDrawerRow) {
              updateQuantity(line, qty);
            } else {
              updateQuantity(line, qty);
            }
          } else {
            updateQuantity(line, qty);
          }
        } else {
          $qtySelector.value = qty;
        }

        if (closestProductCard || isCartPage) {
          theme.loadingState.init(adjustButton);
        }
      };

      if (!Boolean(adjustButton.dataset.qtyListener)) {
        adjustButton.dataset.qtyListener = true;
        adjustButton.addEventListener("click", quantityHandler);
      }
    });

    $quantityInput.length && $quantityInput.forEach((input) => {
      input.addEventListener("change", () => {
        if (isUpdating) {
          return;
        }

        const closestProductCard = input.closest(settings.cartProductSelector);
        const productCard = closestProductCard ? closestProductCard : input.closest(".qty-container");
        const line = productCard.dataset.line;
        const qtyInput = productCard.querySelector(settings.quantityInputSelector);
        const cartDrawerRow = input.closest(".ajaxcart_row");
        let qty = qtyInput ? parseInt(qtyInput.value.replace(/\D/g, "")) : null;

        qty = validateQty(qty);

        // If it has a data-line, update the cart
        if (line) {
          if (isCartPage) {
            if (cartDrawerRow) {
              updateQuantity(line, qty);
            } else {
              updateQuantity(line, qty);
            }
          } else {
            updateQuantity(line, qty);
          }
        }
      });
    });

    $quantityRemove.length && $quantityRemove.forEach((removeButton) => {
      removeButton.addEventListener("click", (e) => {
        if (isUpdating) {
          return;
        }

        e.preventDefault();

        const productCard = removeButton.closest(settings.cartProductSelector);
        const line = productCard.dataset.line;
        const cartDrawerRow = removeButton.closest(".ajaxcart_row");

        // If it has a data-line, update the cart
        if (line) {
          if (isCartPage) {
            if (cartDrawerRow) {
              updateQuantity(line, 0);
            } else {
              updateQuantity(line, 0);
            }
          } else {
            updateQuantity(line, 0);
          }
        }

        theme.loadingState.init(removeButton);
      });
    });

    $checkoutSelector.length && $checkoutSelector.forEach((checkoutButton) => {
      checkoutButton.addEventListener("click", (evt) => {
        if (isUpdating) {
          evt.preventDefault();
        } else {
          theme.loadingState.init(checkoutButton);
        }
      });
    });

    $cartNoteSelector.length && $cartNoteSelector.forEach((cartNote) => {
      cartNote.addEventListener("change", () => {
        const newNote = cartNote.value;

        // Update the cart note in case they don't click update/checkout
        ShopifyAPI.updateCartNote(newNote);
      });
    });

    function updateQuantity(line, qty) {
      isUpdating = true;

      const productToUpdate = document.querySelector(`${settings.cartProductSelector}[data-line="${line}"]`);

      if (productToUpdate) {
        productToUpdate.classList.add(settings.isLoadingClass);

        if (qty === 0) {
          productToUpdate.parentElement.classList.add(settings.isRemovedClass);
        }
      }

      ShopifyAPI.changeItem(line, qty, (cart) => {
        if (theme.settings.enableCartMessage && !document.body.classList.contains("dbtfy-cart_notification-destroy")) {
          window.initNotificationToast = false;
        }

        adjustCartCallback(cart);
      });
    }
  };

  adjustCartCallback = function(cart) {
    theme.cart = cart;
    // Reprint cart on short timeout so you don"t see the content being removed
    setTimeout(function () {
      buildCart(cart);
      buildCartPage(cart);

      isUpdating = false;
    }, 150);
  };

  buildCartPage = async function(cart) {
    if (!document.body.classList.contains("template-cart")) {
      return;
    }

    const markup = await getCartPageMarkup();

    // Start with a fresh cart div
    while ($cartPageContainer.firstChild) {
      $cartPageContainer.removeChild($cartPageContainer.firstChild)
    }

    $cartPageContainer.insertAdjacentHTML("afterbegin", markup);

    // Update Cart upsell
    if (isCartPage) {
      $body.trigger("cartUpsellLoad");
    }

    cartCallback(cart, "page");
  };

  validateQty = function(qty) {
    if (parseFloat(qty) !== parseInt(qty) || isNaN(qty)) {
      return 1;
    }

    return qty;
  };

  getCartDrawerMarkup = async function () {
    return theme.fetchTemplate({
      template: isDefaultShopLocaleSet ? settings.ajaxCartTemplateName : `${Shopify.routes.root}${settings.ajaxCartTemplateName}`,
      alternativeTemplate: settings.ajaxCartAltTemplateName
    });
  };

  getCartPageMarkup = async function() {
    return theme.fetchTemplate({
      template: isDefaultShopLocaleSet ? settings.ajaxCartTemplateName : `${Shopify.routes.root}/${settings.ajaxCartTemplateName}`,
      alternativeTemplate: settings.ajaxCartPageAltTemplateName
    });
  };

  module = {
    init: init,
    load: loadCart,
    update: updateCart
  };

  return module;
})({}, jQuery);

/* ================ NOTIFICATION_TOAST ================ */
theme.NotificationToast = (function() {
  let timeoutId = null;

  function init(toastWrapperSelector, callback, isAutoPlayingToastType) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const toastSelectors = {
      toastsContainer: ".notification-toast",
      toast: "#notificationToastPop",
      openClass: "nt-open",
      toastCloseBtn: ".nt-close-btn",
      toastRedirectBtn: ".nt-cart-view-btn",
    };

    const toastWrapper = document.querySelector(toastWrapperSelector);
    const toastContainer = toastWrapper && toastWrapper.querySelector(toastSelectors.toastsContainer);

    if (!toastContainer) {
      return;
    }

    const toast = toastContainer.querySelector(toastSelectors.toast);
    let intervalId;
    const animTime = 1000;
    const intervalTime = toast.dataset.intervalTime ? +toast.dataset.intervalTime : 10000;
    const displayTime = toast.dataset.displayTime ? +toast.dataset.displayTime : 5000;
    const totalTime = intervalTime + displayTime + animTime;
    const isCartAjax = theme.settings.cartType && theme.settings.cartType !== "page";
    let cartContainer = "";
    let cartOpenClass = "";

    if (isCartAjax && theme.settings.cartType === "drawer") {
      cartContainer = document.querySelector("#CartDrawer");
      cartOpenClass = "js-drawer-open";
    } else if (isCartAjax && theme.settings.cartType === "modal") {
      cartContainer = document.querySelector("#CartModal");
      cartOpenClass = "js-modal-open";
    }

    if (isAutoPlayingToastType) {
      if (!intervalId) {
        setTimeout(function () {
          initToastMethods();

          intervalId = setInterval(initToastMethods, totalTime);
        }, intervalTime);
      }
    } else {
      // Added a little delay to open toast after ATC button loading state has ended
      setTimeout(function () {
        initToastMethods();
      }, 600);
    }

    function initToastMethods() {
      // Don't open if toast type is autoplaying and it is already closed by close button
      if (isAutoPlayingToastType && sessionStorage.getItem(`toast-${toastWrapper.className}-closed`)) {
        return;
      }

      // Don't open if cart modal/drawer is opened or in the cart page
      if (isCartAjax && cartContainer.classList.contains(cartOpenClass)) {
        return;
      }

      // A callback to do some logic for the toast before it is opened/reopened
      if (typeof callback === "function") {
        callback();
      }

      openToast(toast);

      const toasts = toastContainer.querySelectorAll(toastSelectors.toast);

      toasts && toasts.forEach(toast => {
        const toastCloseBtn = toast.querySelector(toastSelectors.toastCloseBtn);
        const cartViewBtn = toast.querySelector(toastSelectors.toastRedirectBtn);

        toastCloseBtn && toastCloseBtn.addEventListener("click", function () {
          closeToast(toast, true);
        });

        cartViewBtn && cartViewBtn.addEventListener("click", function () {
          redirectOnButtonClick();
        });
      });

      timeoutId = setTimeout(animToast, displayTime);
    }


    function openToast(toast) {
      if (!toast.classList.contains(toastSelectors.openClass)) {
        toast.classList.add(toastSelectors.openClass);
      } else {
        if (!isAutoPlayingToastType) {
          const clonedToast = toast.cloneNode(true);

          clonedToast.classList.add("cloned-toast");
          toastContainer.insertAdjacentHTML("afterbegin", clonedToast.outerHTML);
        }
      }
    }

    function closeToast(toast, isClosedByButton) {
      theme.closeTransition({
        elementToTransition: toast
      });

      toast.classList.remove(toastSelectors.openClass);

      if (isAutoPlayingToastType) {
        if (!isClosedByButton) {
          return;
        }

        sessionStorage.setItem(`toast-${toastWrapper.className}-closed`, "true");
        clearInterval(intervalId);
      } else {
        // Remove cloned toasts from DOM after they disappear
        setTimeout(function () {
          if (toast.classList.contains("cloned-toast")) {
            toast.remove();
          }
        }, 3000);
      }
    }

    function animToast() {
      const toasts = toastContainer.querySelectorAll(toastSelectors.toast);

      toasts && toasts.forEach(toast => {
        if (!toast.classList.contains(toastSelectors.openClass)) {
          return;
        }

        closeToast(toast, false);
      });
    }

    // Method for redirecting message button to cart page or open drawer
    function redirectOnButtonClick() {
      if (isAutoPlayingToastType) {
        const storedDiscounts = theme.discountCode.getStoredDiscounts();
        const mostValuableDiscount = theme.discountCode.getMostValuableDiscount(storedDiscounts, theme.cart);

        if (mostValuableDiscount) {
          window.location.assign(`/checkout?discount=${mostValuableDiscount.name}&locale=${Shopify.locale}`);
        } else {
          window.location.assign(`/checkout?locale=${Shopify.locale}`);
        }
      } else {
        if (theme.settings.cartType === "page") {
          window.location.assign("/cart");
        } else if (theme.settings.cartType === "drawer") {
          timber.RightDrawer.open();
        } else {
          theme.modal.init();
          theme.cartModal.init();
        }
      }
    }
  }

  return {
    init: init
  };
})();

/* ================ _PRODUCT_QUANTITIES ================ */
theme.ProductQuantities = (function() {
  function setMaxQuantity(quantityContainer, masterVariantSelector, qtyInput) {
    if (!quantityContainer || !qtyInput) {
      return;
    }

    if (masterVariantSelector) {
      const currentVariant = masterVariantSelector.selectedOptions[0];

      if (!currentVariant) {
        return;
      }

      const currentVariantInventory = currentVariant.hasAttribute("data-remain-qty") ? +currentVariant.dataset.remainQty : +currentVariant.dataset.productQty;

      if (currentVariantInventory > 0) {
        qtyInput && qtyInput.setAttribute("max", currentVariantInventory);
      } else {
        qtyInput && qtyInput.removeAttribute("max");
      }
    }
  }

  function checkQuantity(quantityContainer, masterVariantSelector, qtyInput) {
    if (!quantityContainer || !qtyInput) {
      return;
    }

    const currentVariant = masterVariantSelector.selectedOptions[0];

    if (!currentVariant) {
      return;
    }

    const variantQty = currentVariant.hasAttribute("data-remain-qty") ? +currentVariant.dataset.remainQty : +currentVariant.dataset.productQty;
    const currentValue = +qtyInput.value;
    const qtPlusButton = quantityContainer.querySelector(".qty-plus");

    if (variantQty > 0) {
      if (currentValue >= variantQty) {
        qtPlusButton && qtPlusButton.setAttribute("disabled", "disabled");
        qtyInput.value = variantQty;
      } else {
        qtPlusButton && qtPlusButton.removeAttribute("disabled");
      }
    } else {
      qtyInput.value = 1;
      qtPlusButton && qtPlusButton.setAttribute("disabled", "disabled");
    }

    if (currentValue === 0 && variantQty > 0) {
      qtyInput.value = 1;

      if (variantQty === 1) {
        qtPlusButton && qtPlusButton.setAttribute("disabled", "disabled");
      }
    }
  }

  async function setVariantQuantities(quantityContainer, masterVariantSelector, qtyInput) {
    if (!quantityContainer || !qtyInput) {
      return;
    }

    const options = masterVariantSelector.querySelectorAll("option");
    const cart = await ShopifyAPI.getCart();

    options.length && options.forEach((option) => {
      const currentVariantQuantity = option.getAttribute("data-product-qty");

      option.setAttribute("data-remain-qty", currentVariantQuantity);
    });

    cart && cart.items.forEach((item) => {
      const itemId = item.id;
      const itemQuantity = item.quantity;
      const variantOption = masterVariantSelector.querySelector(`option[value='${itemId}']`);

      if (variantOption) {
        const currentVariantQuantity = +variantOption.getAttribute("data-product-qty");

        variantOption.setAttribute("data-remain-qty", currentVariantQuantity - itemQuantity);
      }
    });

    checkQuantity(quantityContainer, masterVariantSelector, qtyInput);
    document.body.dispatchEvent(new Event("updatedProductRemainingQuantities"));
  }

  function syncQuantityInputs(qtyInput) {
    const productSection = document.querySelector("#mainContent [data-section-type='product-template'] .product-single");
    const productPage = document.querySelector(".template-product");

    if (!productPage || !productSection || !qtyInput) {
      return;
    }

    const featuredProductSection = qtyInput.closest(".featured-product-section");

    if (featuredProductSection) {
      return;
    }

    // Sync only product page main product input and sticky ATC input
    const productMainSectionQuantityInput = productSection.querySelector(".qty-input");
    const stickyAtcQuantityInput = productPage.querySelector('.input-sticky_addtocart');

    if (!productMainSectionQuantityInput || !stickyAtcQuantityInput) {
      return;
    }

    const currentValue = +qtyInput.value;

    productMainSectionQuantityInput.value = currentValue;

    if (stickyAtcQuantityInput) {
      stickyAtcQuantityInput.value = currentValue;
    }

    document.body.dispatchEvent(new Event("productQuantitySync"));
  }

  return {
    setMaxQuantity: setMaxQuantity,
    checkQuantity: checkQuantity,
    setVariantQuantities: setVariantQuantities,
    syncQuantityInputs: syncQuantityInputs,
  };
})();

/* ================ _PRODUCT_MODEL ================ */
theme.ProductModel = (function() {
  var modelJSONSections = {};
  var models = {};
  var xrButtons = {};

  var selectors = {
    productMediaGroup: "[data-product-single-media-group]",
    productMediaGroupWrapper: "[data-product-single-media-group-wrapper]",
    xrButton: "[data-shopify-xr]",
    xrButtonSingle: "[data-shopify-xr-single]"
  };

  var classes = {
    viewInSpaceDisabled: "product-single__view-in-space--disabled"
  };

  function init(modelViewerContainers, sectionId) {
    modelJSONSections[sectionId] = {
      loaded: false
    };

    modelViewerContainers.each(function(index) {
      var $modelViewerContainer = $(this);
      var mediaId = $modelViewerContainer.data("media-id");

      var $modelViewerElement = $(
        $modelViewerContainer.find("model-viewer")[0]
      );

      var modelId = $modelViewerElement.data("model-id");

      if (index === 0) {
        var $xrButton = $modelViewerContainer
          .closest(selectors.productMediaGroupWrapper)
          .find(selectors.xrButtonSingle);

        xrButtons[sectionId] = {
          $element: $xrButton,
          defaultId: modelId
        };
      }

      models[mediaId] = {
        modelId: modelId,
        sectionId: sectionId,
        $container: $modelViewerContainer,
        $element: $modelViewerElement
      };
    });

    window.Shopify.loadFeatures([
      {
        name: "shopify-xr",
        version: "1.0",
        onLoad: setupShopifyXr
      }
    ]);

    if (models.length < 1) {
      return;
    }

    window.Shopify.loadFeatures([
      {
        name: "model-viewer-ui",
        version: "1.0",
        onLoad: setupModelViewerUi
      }
    ]);

    theme.LibraryLoader.load("modelViewerUiStyles");

    setTimeout(() => {
      const modelViewContainer = document.querySelector(".shopify-model-viewer-ui");

      const config = {
        attributes: true,
        childList: false,
        subtree: false
      };

      const observer = new MutationObserver(() => {
        checkIfModelViewIsFullScreen(modelViewContainer);
      });

      observer.observe(modelViewContainer, config);
    }, 600);

    function checkIfModelViewIsFullScreen(modelViewContainer) {
      const stackedElements = document.querySelectorAll(".stacked-on-top-of-content");

      if (modelViewContainer.classList.contains("shopify-model-viewer-ui--fullscreen")) {
        stackedElements.forEach(element => {
          element.classList.add("stacked-content-hidden");
        });
      } else {
        stackedElements.forEach(element => {
          element.classList.remove("stacked-content-hidden");
        });
      }
    }
  }

  function setupShopifyXr(errors) {
    if (errors) {
      return;
    }

    if (!window.ShopifyXR) {
      document.addEventListener("shopify_xr_initialized", function(event) {
        if (event.detail.shopifyXREnabled) {
          setupShopifyXr();
        } else {
          $(selectors.xrButton).addClass(classes.viewInSpaceDisabled);
        }
      });

      return;
    }

    for (var sectionId in modelJSONSections) {
      if (modelJSONSections.hasOwnProperty(sectionId)) {
        var modelSection = modelJSONSections[sectionId];

        if (modelSection.loaded) {
          continue;
        }

        var $modelJson = $(`#ModelJson-${sectionId}`);

        window.ShopifyXR.addModels(JSON.parse($modelJson.html()));
        modelSection.loaded = true;
      }
    }

    window.ShopifyXR.setupXRElements();
  }

  function setupModelViewerUi(errors) {
    if (errors) {
      return;
    }

    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];

        if (!model.modelViewerUi) {
          model.modelViewerUi = new Shopify.ModelViewerUI(model.$element);
        }

        setupModelViewerListeners(model);
      }
    }
  }

  function setupModelViewerListeners(model) {
    var xrButton = xrButtons[model.sectionId];

    var $productMediaGroup = model.$container.closest(
      selectors.productMediaGroup
    );

    model.$element
      .on("shopify_model_viewer_ui_toggle_play", function() {
        theme.updateSlickSwipe($productMediaGroup, false);
      })
      .on("shopify_model_viewer_ui_toggle_pause", function() {
        theme.updateSlickSwipe($productMediaGroup, true);
      });

    model.$container.on("mediaVisible", function() {
      xrButton.$element.attr("data-shopify-model3d-id", model.modelId);

      if (Modernizr.touch) {
        return;
      }

      model.modelViewerUi.play();
    });

    model.$container
      .on("mediaHidden", function() {
        xrButton.$element.attr("data-shopify-model3d-id", xrButton.defaultId);
        model.modelViewerUi.pause();
      })
      .on("xrLaunch", function() {
        model.modelViewerUi.pause();
      });
  }

  function removeSectionModels(sectionId) {
    for (var key in models) {
      if (models.hasOwnProperty(key)) {
        var model = models[key];

        if (model.sectionId === sectionId) {
          models[key].modelViewerUi.destroy();

          delete models[key];
        }
      }
    }

    delete modelJSONSections[sectionId];
  }

  return {
    init: init,
    removeSectionModels: removeSectionModels
  };
})();

// Youtube API callback
// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  theme.ProductVideo.loadVideos(theme.ProductVideo.hosts.youtube);
}

/* ================ _PRODUCT_VIDEO ================ */
theme.ProductVideo = (function() {
  var videos = {};

  var hosts = {
    html5: "html5",
    youtube: "youtube"
  };

  var selectors = {
    productMediaWrapper: "[data-product-single-media-wrapper]",
    productMediaGroup: "[data-product-single-media-group]"
  };

  var attributes = {
    enableVideoLooping: "enable-video-looping",
    videoId: "video-id"
  };

  function init(videoContainer, sectionId) {
    if (!videoContainer.length) {
      return;
    }

    var videoElement = videoContainer.find("iframe, video")[0];
    var mediaId = videoContainer.data("mediaId");

    if (!videoElement) {
      return;
    }

    videos[mediaId] = {
      mediaId: mediaId,
      sectionId: sectionId,
      host: hostFromVideoElement(videoElement),
      container: videoContainer,
      element: videoElement,
      ready: function() {
        createPlayer(this);
      }
    };

    var video = videos[mediaId];

    switch (video.host) {
      case hosts.html5:
        window.Shopify.loadFeatures([
          {
            name: "video-ui",
            version: "1.1",
            onLoad: setupPlyrVideos
          }
        ]);

        theme.LibraryLoader.load("plyrShopifyStyles");
        break;
      case hosts.youtube:
        theme.LibraryLoader.load("youtubeSdk");
        break;
    }
  }

  function setupPlyrVideos(errors) {
    if (errors) {
      fallbackToNativeVideo();

      return;
    }

    loadVideos(hosts.html5);
  }

  function createPlayer(video) {
    if (video.player) {
      return;
    }

    var productMediaWrapper = video.container.closest(
      selectors.productMediaWrapper
    );

    var enableLooping = productMediaWrapper.data(attributes.enableVideoLooping);

    switch (video.host) {
      case hosts.html5:
        // eslint-disable-next-line no-undef
        video.player = new Shopify.Plyr(video.element, {
          loop: {active: enableLooping}
        });

        var $productMediaGroup = $(video.container).closest(
          selectors.productMediaGroup
        );

        video.player.on("seeking", function() {
          theme.updateSlickSwipe($productMediaGroup, false);
        });

        video.player.on("seeked", function() {
          theme.updateSlickSwipe($productMediaGroup, true);
        });

        break;
      case hosts.youtube:
        var videoId = productMediaWrapper.data(attributes.videoId);

        video.player = new YT.Player(video.element, {
          videoId: videoId,
          events: {
            onStateChange: function(event) {
              if (event.data === 0 && enableLooping) event.target.seekTo(0);
            }
          }
        });

        break;
    }

    productMediaWrapper.on("mediaHidden xrLaunch", function() {
      if (!video.player) {
        return;
      }

      if (video.host === hosts.html5) {
        video.player.pause();
      }

      if (video.host === hosts.youtube && video.player.pauseVideo) {
        video.player.pauseVideo();
      }
    });

    productMediaWrapper.on("mediaVisible", function() {
      if (Modernizr.touch) {
        return;
      }

      if (!video.player) {
        return;
      }

      if (video.host === hosts.html5) {
        video.player.play();
      }

      if (video.host === hosts.youtube && video.player.playVideo) {
        video.player.playVideo();
      }
    });
  }

  function hostFromVideoElement(video) {
    if (video.tagName === "VIDEO") {
      return hosts.html5;
    }

    if (video.tagName === "IFRAME") {
      if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(video.src)) {
        return hosts.youtube;
      }
    }

    return null;
  }

  function loadVideos(host) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.host === host) {
          video.ready();
        }
      }
    }
  }

  function fallbackToNativeVideo() {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.nativeVideo) {
          continue;
        }

        if (video.host === hosts.html5) {
          video.element.setAttribute("controls", "controls");
          video.nativeVideo = true;
        }
      }
    }
  }

  function removeSectionVideos(sectionId) {
    for (var key in videos) {
      if (videos.hasOwnProperty(key)) {
        var video = videos[key];

        if (video.sectionId === sectionId) {
          if (video.player) {
            video.player.destroy();
          }

          delete videos[key];
        }
      }
    }
  }

  return {
    init: init,
    hosts: hosts,
    loadVideos: loadVideos,
    removeSectionVideos: removeSectionVideos
  };
})();


/* ================ _MODAL ================ */
theme.modal = (function() {
  let selectors = getModalSelectors();

  const classes = {
    openClass: "js-modal-open"
  };

  function getModalSelectors() {
    return {
      $body: $("body"),
      openModalButton: $("[data-modal-open]"),
      closeModalButton: $("[data-modal-close]")
    }
  }

  // init
  function init() {
    selectors = getModalSelectors();

    // open click
    selectors.openModalButton.on("click", function() {
      const targetModal = $(this).data("modal-open");

      open(targetModal);
    });

    selectors.closeModalButton.on("click", function (event) {
      const targetModal = $(this).data("modal-close");

      close(targetModal);
    });

    // close on escape
    $(document).keyup(function(evt) {
      if (evt.keyCode === 27) {
        const targetModal = $(`.modal.${classes.openClass}`);

        if (!targetModal.length) {
          return null;
        }

        if (!targetModal.get(0).hasAttribute("data-modal-no-close")) {
          close(targetModal);
        }
      }
    });

    // close on overlay click
    $(".modal").on("click", function(evt) {
      const targetModal = $(this);

      if (!targetModal.get(0).hasAttribute("data-modal-no-close") && (evt.target === targetModal[0] || evt.target === targetModal.find(".modal-dialog")[0])) {
        close(targetModal);
      }
    });
  }

  // open
  function open(modal) {
    if (!modal) {
      return;
    }

    modal = $(modal);

    // don't open an opened modal
    if (modal.hasClass(classes.openClass)) {
      return;
    }

    modal.addClass(classes.openClass);

    selectors.$body.addClass(classes.openClass);

    theme.trapFocus({
      $container: modal.find(".modal-content")
    });

    modal.trigger("modal.open");
  }

  // close
  function close(modal) {
    if (!modal) {
      return;
    }

    modal = $(modal);

    // don't close a closed modal
    if (!modal.hasClass(classes.openClass)) {
      return;
    }

    // deselect any focused form elements
    $(document.activeElement).trigger("blur");

    theme.closeTransition({
      elementToTransition: modal
    });

    modal.removeClass(classes.openClass);

    theme.closeTransition({
      elementToTransition: selectors.$body
    });

    selectors.$body.removeClass(classes.openClass);

    theme.removeTrapFocus({
      $container: modal.find(".modal-content")
    });

    modal.trigger("modal.close");

    // stop playing any videos if modal is closed
    stopPlayingVideos();
  }

  function stopPlayingVideos() {
    var iframes = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframes, iframe => {
      iframe.contentWindow.postMessage(JSON.stringify({
        event: 'command',
        func: 'stopVideo'
      }), '*');
    });
  }

  // init public function
  return {
    init: init,
    open: open,
    close: close
  };
})();

/* ================ _TOAST ================ */
theme.toast = (function() {
  const settings = {
    visibleClass: "visible"
  };

  function init() {
    const toasts = document.querySelectorAll(".toast");

    if (!toasts.length) {
      return;
    }

    toasts.forEach((toast) => {
      const closeButton = toast.querySelector("[data-toast-close]");

      closeButton && closeButton.addEventListener("click", () => {
        hide(toast);
      });
    });
  }

  function show(toast) {
    if (!toast) {
      return;
    }

    const toastsWrapper = toast.closest(".toasts");

    if (!toastsWrapper) {
      return;
    }

    toastsWrapper.classList.add(settings.visibleClass);
    toast.classList.add(settings.visibleClass);
  }

  function hide(toast) {
    if (!toast) {
      return;
    }

    const toastsWrapper = toast.closest(".toasts");

    if (!toastsWrapper) {
      return;
    }

    toast.classList.remove(settings.visibleClass);

    setTimeout(() => {
      toast.remove();
    }, theme.variables.animationDuration);

    const visibleToasts = toastsWrapper.querySelectorAll(".toast.visible");

    if (!visibleToasts.length) {
      toastsWrapper.classList.remove(settings.visibleClass);
    }
  }

  return {
    init: init,
    show: show,
    hide: hide
  };
})();

/* ================ _CAROUSEL ================ */
theme.carousel = (function() {
  const classes = {
    centerModeClass: "slick-center-mode",
    fallbackClass: "slick-fallback",
    initClass: "slick-initialized"
  };

  function onInit(event, slick) {
    if (!window.lazySizes) {
      setTimeout(() => {
        onInit(event, slick);
      }, 100);

      return;
    }

    slick.$slides.each(function () {
      const image = this.querySelector('img');

      if (!image) {
        return null;
      }

      window.lazySizes.loader.unveil(image);
    });
  }

  // init
  function init(options) {
    var self = this;
    var slider = options.slider;
    var slickOptions = options.slickOptions;
    var goToSlide = options.goToSlide;
    var slideCount = slider.data("count");
    var slickDisabled = slider.hasClass("slick-disabled");

    // set data-count attr
    if (!slideCount) {
      slideCount = slider.children().length;
      slider.attr("data-count", slideCount);
    }

    // don't init if slidecount <= slidetoshow
    if (slideCount <= slickOptions.slidesToShow && !slickDisabled) {
      this.destroy(slider);

      return;
    }

    // destroy carousel if already active and save current slide to scroll to after init
    if (slider.hasClass(classes.initClass)) {
      var slideIndex = slider.find(".slick-current:not(.slick-cloned)").attr("data-slick-index");

      goToSlide = +slideIndex;

      self.destroy(slider);
    }

    slider.on("init", onInit);

    // init slick
    slider.slick(slickOptions);

    // go to a specific slide if set
    if (goToSlide) {
      slider.slick("slickGoTo", goToSlide, true);
    }

    // add styling class if center mode true
    if (slickOptions.centerMode) {
      slider.addClass(classes.centerModeClass);
    } else {
      slider.removeClass(classes.centerModeClass);
    }
  }

  // destroy
  function destroy(slider) {
    if (slider.hasClass(classes.initClass)) {
      slider.off("init", onInit);
      slider.slick("unslick");
    }

    slider.addClass(classes.fallbackClass);
    slider.removeClass(classes.centerModeClass);
  }

  // init public function
  return {
    init: init,
    destroy: destroy
  };
})();

/* ================ _THEME_FUNCTIONS ================ */
theme.init = function() {
  theme.initCache();
  theme.setBreakpoints();
  theme.cartInit();
  theme.afterRecommendationLoad();
  theme.returnLink();
  theme.styleTextLinks();
  theme.rteTable();
  theme.backToTop();
  theme.dropdown();
  theme.modal.init();
  theme.discountCode.init();
  theme.loadingState.initForm();
  theme.tabs.init();
  theme.toast.init();
  // theme.fixIOSDoubleTap();
  theme.resizeCarousel();
  theme.debutify();
  theme.customScript();
  theme.showTheMostValuableDiscountInCart();
  theme.fixScrollOnPasswordPage();
  theme.getUserLocationData();
  theme.productMediaZoom();
  theme.openExternalLinksInANewTab();
  theme.requiredToCheckoutAddons.init();

  setTimeout(() => {
    if (!window.addonsLoaded) {
      theme.showTrialOverPopup();
    }
  }, 3000);
};

//_INIT_CACHE
theme.initCache = function() {
  theme.cache = {
    $window: $(window),
    $html: $("html"),
    $body: $("body"),
    $cartDrawer: $("#CartDrawer"),
    $siteNav: $(".site-header"),
    $cartBubble: $(".cart-link__bubble"),
    $returnLink: $(".return-link")
  };
};

//_SET_BREAKPOINT
theme.setBreakpoints = function() {
  if (!theme.cache.$html.hasClass("lt-ie9")) {
    enquire.register(theme.variables.mediaQuerySmall, {
      match: function() {
        theme.variables.bpSmall = true;
        theme.cache.$body.addClass("mobile-view");
      },
      unmatch: function() {
        theme.variables.bpSmall = false;
        theme.cache.$body.removeClass("mobile-view");
      }
    });
  }
};

//_CART_INIT
theme.cartInit = function() {
  if (!theme.cookiesEnabled()) {
    theme.cache.$body.addClass("cart--no-cookies");
  }
};

//_AFTER_RECOMMENDATION_LOAD
theme.afterRecommendationLoad = function() {
  theme.cache.$body.on("afterRecommendationLoad", function() {
    const isCartPage = document.body.classList.contains("template-cart");

    if (theme.settings.cartType === "modal" || theme.settings.cartType === "drawer" || theme.settings.cartType === "page" || isCartPage) {
      theme.ajaxCart.init();
    }

    theme.modal.init();
    theme.discountCode.init();
    theme.loadingState.initForm();
  });
};

//_RETURN_LINK
theme.returnLink = function() {
  if (!document.referrer || !theme.cache.$returnLink.length || !window.history.length) {
    return;
  }

  theme.cache.$returnLink.on("click", theme.backButton);
};

//_TEXT_LINK
theme.styleTextLinks = function() {
  $(".rte").find("a:not(:has(img))").addClass("text-link");
};

//_RTE_TABLE
theme.rteTable = function() {
  $(".rte table").wrap("<div class='table-wrap'></div>");
};

//_BACK_TO_TOP
theme.backToTop = function() {
  var $btntop = $(".scroll-top");

  if ($btntop.length) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 600) {
        $btntop.addClass("btn-top-visible");
      } else {
        $btntop.removeClass("btn-top-visible");
      }
    });

    // Click event to scroll to top
    $btntop.click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, theme.variables.animationDuration, function() {
        document.activeElement.blur();
        document.querySelector(".event-focus-box").focus();
      });

      return false;
    });
  }
};

//_BACK_BUTTON
theme.backButton = function() {
  var referrerDomain = urlDomain(document.referrer);
  var shopDomain = urlDomain(document.url);

  if (shopDomain === referrerDomain) {
    history.back();

    return false;
  }

  function urlDomain(url) {
    var a = document.createElement("a");

    a.href = url;

    return a.hostname;
  }
};

// _DROPDOWN
theme.dropdown = function() {
  const classes = {
    dropdownOpen: "dropdown-open",
    dropdownOutside: "dropdown-outside"
  };

  const selectors = {
    dropdown: ".dropdown",
    dropdownToggle: ":scope > .dropdown-toggle", // :scope - fix to find elements on first level only
    dropdownMenu: ":scope > .dropdown-menu"
  };

  const dropdowns = document.querySelectorAll(selectors.dropdown);

  if (!dropdowns.length) {
    return;
  }

  dropdowns.forEach((dropdown) => {
    const dropdownMenus = dropdown.querySelectorAll(selectors.dropdownMenu);

    dropdownMenus.forEach((dropdownMenu) => {
      handleDropdownOffset(dropdownMenu);
    });

    // Mouse enter
    dropdown.addEventListener("mouseenter", () => {
      const dropdownOpenClass = classes.dropdownOpen;

      if (!dropdown.classList.contains(dropdownOpenClass)) {
        showDropdown(dropdown);
      }
    });

    // Touchstart
    dropdown.addEventListener("touchstart", (e) => {
      const dropdownOpenClass = classes.dropdownOpen;
      const isDropdownMenu = e.target.closest(".dropdown-menu");

      if (!dropdown.classList.contains(dropdownOpenClass) || isDropdownMenu) {
        showDropdown(dropdown);
      } else {
        hideDropdown(dropdown);
      }
    });

    document.addEventListener("touchstart", (e) => {
      const isDropdownMenu = e.target.closest(selectors.dropdown);

      if (!isDropdownMenu) {
        hideAllDropdowns();
      }
    });

    // Mouse leave
    dropdown.addEventListener("mouseleave", (e) => {
      if (e.relatedTarget === null) {
        return;
      }

      const dropdownOpenClass = classes.dropdownOpen;

      if (dropdown.classList.contains(dropdownOpenClass)) {
        hideDropdown(dropdown);
      }
    });
  });

  // Configure dropdown position on resize
  window.addEventListener("resize", () => {
    dropdowns.forEach((dropdown) => {
      const dropdownMenus = dropdown.querySelectorAll(selectors.dropdownMenu);

      dropdownMenus.forEach((dropdownMenu) => {
        handleDropdownOffset(dropdownMenu);
      });
    });
  });

  // Hide dropdown on blur
  document.addEventListener("keyup", (evt) => {
    // If not a Tab button
    if (evt.which !== 9) {
      return;
    }

    var activeElement = document.activeElement;
    var parentDropdowns = getParentsBySelector(activeElement, selectors.dropdown);

    if (!parentDropdowns.length) {
      hideAllDropdowns();

      return;
    }

    dropdowns.forEach((dropdown) => {
      const isDropdownInParentDropdowns = parentDropdowns.some((parentDropdown) => {
        return dropdown === parentDropdown;
      });

      if (!isDropdownInParentDropdowns && dropdown.classList.contains(classes.dropdownOpen)) {
        hideDropdown(dropdown);
      }
    });

    parentDropdowns.forEach((dropdown) => {
      if (!dropdown.classList.contains(classes.dropdownOpen)) {
        showDropdown(dropdown);
      }
    });
  });

  function getParentsBySelector(element, selector) {
    if (!element || !selector) {
      return;
    }

    const parents = [];
    let targetParent = element.closest(selector);

    while (targetParent !== null) {
      parents.push(targetParent);
      targetParent = targetParent.parentElement.closest(selector);
    }

    return parents;
  }

  // Show dropdown
  function showDropdown(dropdown) {
    const dropdownToggles = dropdown.querySelectorAll(selectors.dropdownToggle);
    const dropdownMenus = dropdown.querySelectorAll(selectors.dropdownMenu);

    dropdown.classList.add(classes.dropdownOpen);

    if (dropdownToggles) {
      dropdownToggles.forEach((dropdownToggle) => {
        dropdownToggle.setAttribute("aria-expanded", true);
      });
    }

    if (dropdownMenus) {
      dropdownMenus.forEach((dropdownMenu) => {
        const dropdownViewportOffset = dropdownMenu.getBoundingClientRect();
        const dropdownViewportOffsetTop = dropdownViewportOffset.top;
        const dropdownViewportOffsetBottom = 25;
        const dropdownViewportMaxHeight = window.innerHeight - (dropdownViewportOffsetTop + dropdownViewportOffsetBottom);

        dropdownMenu.classList.add(classes.dropdownOpen);
        dropdownMenu.style.maxHeight = `${dropdownViewportMaxHeight}px`;

        handleDropdownOffset(dropdownMenu);
      });
    }
  }

  // Hide dropdown
  function hideDropdown(dropdown) {
    const dropdownToggles = dropdown.querySelectorAll(selectors.dropdownToggle);
    const dropdownMenus = dropdown.querySelectorAll(selectors.dropdownMenu);

    if (dropdownToggles) {
      dropdownToggles.forEach((dropdownToggle) => {
        dropdownToggle.setAttribute("aria-expanded", false);
      });
    }

    if (dropdownMenus) {
      dropdownMenus.forEach((dropdownMenu) => {
        theme.closeTransition({
          elementToTransition: dropdownMenu,
          animationSpeed: theme.variables.transitionSpeed
        }, function() {
          dropdown.classList.remove(classes.dropdownOpen);
          dropdownMenu.classList.remove(classes.dropdownOpen);
        });
      });
    }
  }

  // Hide all dropdowns
  function hideAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains(classes.dropdownOpen)) {
        hideDropdown(dropdown);
      }
    });
  }

  // Check if dropdown is outside of viewport
  function handleDropdownOffset(dropdown) {
    const viewportSize = document.body.clientWidth;
    const dropdownOffset = dropdown.getBoundingClientRect().left + dropdown.offsetWidth;

    if (dropdownOffset > viewportSize) {
      dropdown.classList.add(classes.dropdownOutside);
    }
  }
};

//_TRAP_FOCUS
theme.trapFocus = function(options, evt) {
  var tabbable = options.$container.find("select:visible, input:visible, textarea:visible, button:visible, a:visible");
  var lastTabbable = tabbable.last();
  var $elementToFocus = options.$container.find("[data-focus]")[0];

  // unbind events
  options.$container.off("keydown");
  tabbable.off("keydown");

  // add tabindex 0 to make the container focusable
  options.$container.attr("tabindex", "0").removeAttr("aria-hidden");

  // if no data-focus element is present, set focus to container
  if (!$elementToFocus) {
    $elementToFocus = options.$container;
  }

  // focus targeted element
  $elementToFocus.focus();

  // prevent event to bubble on container
  tabbable.on("keydown", function(e) {
    e.stopPropagation();
  });

  // redirect container to last tabbable
  options.$container.on("keydown", function(e) {
    if ((e.which === 9 && e.shiftKey)) {
      e.preventDefault();
      lastTabbable.focus();
    }
  });

  // redirect last tab to container
  lastTabbable.on("keydown", function(e) {
    if ((e.which === 9 && !e.shiftKey)) {
      e.preventDefault();
      options.$container.focus();
    }
  });
};

//_REMOVE_TRAP_FOCUS
theme.removeTrapFocus = function(options) {
  //add tabindex -1 to make the container unfocusable
  options.$container.attr("tabindex", "-1").attr("aria-hidden", true);
};

//_COOKIES
theme.cookiesEnabled = function() {
  var cookieEnabled = navigator.cookieEnabled;

  if (!cookieEnabled) {
    document.cookie = "testcookie";
    cookieEnabled = (document.cookie.indexOf("testcookie") !== -1);
  }

  return cookieEnabled;
};

//_CLOSE_TRANSITION
theme.closeTransition = function(options, callback) {
  var classes = {
    close: "is-closing"
  };

  var $this = $(options.elementToTransition); // create jQuery objects from DOM elements

  if (!options.animationSpeed) {
    options.animationSpeed = theme.variables.animationDuration;
  }

  $this.addClass(classes.close);

  window.closeTransitionTimeoutId = setTimeout(function() {
    $this.removeClass(classes.close);

    if (typeof callback === "function") {
      callback();
    }

  }, options.animationSpeed);
};

//_DISCOUNT_CODE
theme.discountCode = {
  init: function(passedCart) {
    const storedDiscounts = this.getStoredDiscounts();

    if (!storedDiscounts.length) {
      this.destroyDiscount(passedCart);

      return;
    }

    const cart = passedCart ? passedCart : null;
    let mostValuableDiscount = this.getMostValuableDiscount(storedDiscounts, theme.cart);

    if (!cart) {
      if (theme.isCartLoaded) {
        mostValuableDiscount = this.getMostValuableDiscount(storedDiscounts, theme.cart);
      } else {
        document.addEventListener("dbtfy:cartLoaded", () => {
          mostValuableDiscount = this.getMostValuableDiscount(storedDiscounts, theme.cart);

          if (mostValuableDiscount) {
            this.applyDiscount(mostValuableDiscount.name, mostValuableDiscount.type, mostValuableDiscount.amount, theme.cart);
          }
        });
      }
    }

    if (mostValuableDiscount) {
      this.applyDiscount(mostValuableDiscount.name, mostValuableDiscount.type, mostValuableDiscount.amount, cart);
      theme.showTheMostValuableDiscountInCart();
    }
  },

  getMostValuableDiscount: function(discounts, cart) {
    if (!discounts || !discounts.length) {
      return;
    }

    const discountsWithFixedAmount = discounts.map((discount, index) => {
      const {
        type,
        amount
      } = discount;

      const cartTotal = cart.total_price / 100;
      let fixedAmountDiscount = null;

      switch (type) {
        case "%":
          fixedAmountDiscount = (cartTotal / 100) * amount;

          break;

        case "$":
          fixedAmountDiscount = amount;

          break;
      }

      if (fixedAmountDiscount > cartTotal) {
        return null;
      }

      return {
        index: index,
        value: fixedAmountDiscount
      };
    }).filter((amount) => {
      return amount;
    });

    if (!discountsWithFixedAmount.length) {
      return null;
    }

    const maxDiscount = discountsWithFixedAmount.reduce((prev, current) => {
      return (prev.value > current.value) ? prev : current;
    });

    const maxDiscountIndex = maxDiscount ? maxDiscount.index : 0;

    return discounts[maxDiscountIndex];
  },

  getStoredDiscounts: function() {
    const storedDiscounts = sessionStorage.getItem("discounts");

    if (!storedDiscounts) {
      return [];
    }

    const parsedDiscountsObject = JSON.parse(storedDiscounts);

    if (typeof parsedDiscountsObject !== "object") {
      return [];
    }

    return parsedDiscountsObject;
  },

  applyDiscount: function(name, type, amount, passedCart) {
    const cartForms = document.querySelectorAll("form[action*='/cart'], form[action*='/checkout']");
    const _this = this;

    if (!cartForms.length) {
      return;
    }

    let cart = passedCart ? passedCart : null;

    if (!cart) {
      if (theme.isCartLoaded) {
        cart = theme.cart;

        initCartForms();
      } else {
        document.addEventListener("dbtfy:cartLoaded", () => {
          cart = theme.cart;

          initCartForms();
        });
      }
    } else {
      initCartForms();
    }

    function initCartForms() {
      cartForms.forEach(function (form) {
        const discountFields = form.querySelectorAll("input[name='discount']");
        const cartTotalBlock = form.querySelector("[data-cart-total]");
        const cartTotalValueBlock = form.querySelector("[data-cart-total-value]");
        const moneyFormat = theme.strings.moneyFormat;

        // Add discount to input[type="hidden"]
        if (discountFields.length) {
          discountFields.forEach((discountField) => {
            discountField.setAttribute("value", name);
          });
        } else {
          const field = document.createElement("input");

          field.setAttribute("type", "hidden");
          field.setAttribute("name", "discount");
          field.setAttribute("value", name);

          form.insertAdjacentElement("afterbegin", field);
        }

        if (theme.settings.dbtfyCartSavings) {
          return;
        }

        // Update cart total
        const cartTotal = cart.total_price;
        let cartTotalWithDiscount = cartTotal;

        switch (type) {
          case "$":
            cartTotalWithDiscount = cartTotal - (amount * 100);

            break;

          case "%":
            cartTotalWithDiscount = cartTotal - (cartTotal * (amount / 100));

            break;
        }

        // Set cart subtotal compare at price
        const cartTotalFormatted = theme.Currency.formatMoney(cartTotal, moneyFormat);
        const cartTotalWithDiscountFormatted = theme.Currency.formatMoney(cartTotalWithDiscount, moneyFormat);

        if (cartTotalBlock) {
          const discouned = cartTotalBlock.querySelectorAll(".cart__subtotal-discounted");

          if (discouned.length) {
            return;
          }

          const currentTotalValue = cartTotalBlock.dataset.currentTotalValue;

          if (currentTotalValue && currentTotalValue === cartTotalWithDiscount) {
            return;
          } else {
            cartTotalBlock.dataset.currentTotalValue = cartTotalWithDiscount;
          }

          const existedTotalValue = cartTotalBlock.querySelector(".cart__subtotal-compare-at");

          if (existedTotalValue) {
            cartTotalBlock.innerHTML = "";
          }

          cartTotalBlock.innerHTML = `<span class="cart__subtotal-discounted text-sale"><span class="money">${cartTotalWithDiscountFormatted}</span></span> <span class="cart__subtotal-discounted text-muted text-strike"><span class="money">${cartTotalFormatted}</span></span>`;
        }

        if (cartTotalValueBlock) {
          cartTotalValueBlock.innerHTML = `<span class="money">${cartTotalWithDiscountFormatted}</span>`;
        }
      });

      _this.triggerStorageDiscountUpdated();
    }
  },

  addDiscount: function(name, type, amount, options) {
    const storedDiscounts = this.getStoredDiscounts();

    // If no discounts yet
    if (!storedDiscounts.length) {
      const discounts = [{
        name: name,
        type: type,
        amount: amount
      }];

      if (typeof options === "object") {
        for (const [optionName, optionValue] of Object.entries(options)) {
          discounts[0][optionName] = optionValue;
        }
      }

      sessionStorage.setItem("discounts", JSON.stringify(discounts));

      this.init();
      this.triggerStorageDiscountUpdated();

      return;
    }

    // If discount not in storage
    storedDiscounts.push({
      name: name,
      type: type,
      amount: amount
    });

    if (typeof options === "object") {
      for (const [optionName, optionValue] of Object.entries(options)) {
        storedDiscounts[storedDiscounts.length - 1][optionName] = optionValue;
      }
    }

    sessionStorage.setItem("discounts", JSON.stringify(storedDiscounts));

    this.init();
    this.triggerStorageDiscountUpdated();
  },

  removeDiscount: function(name, options) {
    const storedDiscounts = this.getStoredDiscounts();

    if (!storedDiscounts.length) {
      return;
    }

    let needUpdate = true;

    if (typeof options === "object" && options.hasOwnProperty("needUpdate")) {
      needUpdate = options.needUpdate;
    }

    const filteredStoredDiscounts = storedDiscounts.filter((discount) => {
      let isToRemoveByProperties = true;

      if (typeof options === "object") {
        isToRemoveByProperties = Object.entries(options).every(([optionName, optionValue]) => {
          return discount.hasOwnProperty(optionName) && discount[optionName] === optionValue;
        });
      }

      const discountToRemove = (discount.name === name) && isToRemoveByProperties;

      return !discountToRemove;
    });

    sessionStorage.setItem("discounts", JSON.stringify(filteredStoredDiscounts));

    if (needUpdate) {
      this.init();
    }

    this.triggerStorageDiscountUpdated();
  },

  removeAllDiscountsByName: function(name, options) {
    const storedDiscounts = this.getStoredDiscounts();

    if (!storedDiscounts.length) {
      return;
    }

    const filteredStoredDiscounts = storedDiscounts.filter((discount) => {
      let isToRemoveByProperties = false;

      if (typeof options === "object") {
        isToRemoveByProperties = Object.entries(options).every(([optionName, optionValue]) => {
          let valueCondition = discount[optionName] === optionValue;

          if (typeof optionValue === "object" && optionValue.checkFunction && optionValue.checkFunction instanceof Function) {
            valueCondition = optionValue.checkFunction(discount);
          }

          return discount.hasOwnProperty(optionName) && valueCondition;
        });
      }

      return !isToRemoveByProperties;
    });

    sessionStorage.setItem("discounts", JSON.stringify(filteredStoredDiscounts));

    this.init();
    this.triggerStorageDiscountUpdated();
  },

  removeAllDiscounts: function () {
    sessionStorage.removeItem("discounts");

    this.init();
    this.triggerStorageDiscountUpdated();
  },

  hasDiscount: function(name) {
    const storedDiscounts = this.getStoredDiscounts();

    if (!storedDiscounts.length) {
      return;
    }

    return storedDiscounts.some((discount) => {
      return discount.name === name;
    });
  },

  destroyDiscount: function(passedCart) {
    const cartForms = document.querySelectorAll("form[action*='/cart'], form[action*='/checkout']");
    const cartTotalBlocks = document.querySelectorAll("[data-cart-total]");
    const _this = this;

    if (!cartForms.length) {
      return;
    }

    // Save discount to sessionStorage
    const isDiscount = sessionStorage.getItem("discount") ? sessionStorage.getItem("discount") : null;

    if (isDiscount) {
      sessionStorage.removeItem("discount");
    }

    let cart = passedCart ? passedCart : null;

    if (!cart) {
      if (theme.isCartLoaded) {
        cart = theme.cart;

        initCartForms();
      } else {
        document.addEventListener("dbtfy:cartLoaded", () => {
          cart = theme.cart;

          initCartForms();
        });
      }
    } else {
      initCartForms();
    }

    function initCartForms() {
      cartForms.forEach(function(form) {
        const discountFields = form.querySelectorAll("input[name='discount']");
        const cartTotalValueBlocks = document.querySelectorAll("[data-cart-total-value]");

        // Remove discount from input[type="hidden"]
        discountFields.forEach((discountField) => {
          discountField.setAttribute("value", "");
        });

        if (theme.settings.dbtfyCartSavings) {
          return;
        }

        // Update cart total
        const cartTotal = cart.total_price;

        if (cartTotal > 0) {
          const moneyFormat = theme.strings.moneyFormat;
          const cartTotalFormatted = theme.Currency.formatMoney(cartTotal, moneyFormat);

          if (cartTotalBlocks.length) {
            cartTotalBlocks.forEach(function(block) {
              const existedTotalValue = block.querySelector(".cart__subtotal-compare-at");

              if (existedTotalValue) {
                block.innerHTML = "";
              }

              block.innerHTML = `<span class="money">${cartTotalFormatted}</span>`;
            });
          }

          if (cartTotalValueBlocks.length) {
            cartTotalValueBlocks.forEach(function(block) {
              block.innerHTML = `<span class="money">${cartTotalFormatted}</span>`;
            });
          }
        }
      });

      _this.triggerStorageDiscountUpdated();
    }
  },

  triggerStorageDiscountUpdated: function() {
    document.dispatchEvent(new CustomEvent("dbtfy:discountUpdated"));
  }
};

//_LOADING_STATE
theme.loadingState = (function() {
  const classes = {
    loadingClass: "btn--loading"
  };

  function init(buttons) {
    const jsButtons = getJSButtons(buttons);

    if (!jsButtons || !jsButtons.length) {
      return;
    }

    jsButtons.forEach((button) => {
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;

      button.style.minWidth = `${buttonWidth}px`;
      button.style.minHeight = `${buttonHeight}px`;
      button.classList.add(classes.loadingClass);

      setTimeout(() => {
        button.setAttribute("disabled", "disabled");
      }, 0);
    });
  }

  function destroy(buttons) {
    const jsButtons = getJSButtons(buttons);

    if (!jsButtons || !jsButtons.length) {
      return;
    }

    jsButtons.forEach((button) => {
      button.style.removeProperty("min-width");
      button.style.removeProperty("min-height");
      button.classList.remove(classes.loadingClass);
      button.removeAttribute("disabled");
    });
  }

  function destroyAll() {
    const buttons = document.querySelectorAll(`.${classes.loadingClass}`);

    buttons.length && buttons.forEach((button) => {
      button.style.removeProperty("min-width");
      button.style.removeProperty("min-height");
      button.classList.remove(classes.loadingClass);
      button.removeAttribute("disabled");
    });
  }

  function getJSButtons(buttons) {
    if (!buttons) {
      return null;
    }

    return $(buttons).get();
  }

  function initForm() {
    const forms = document.querySelectorAll("form:not(.no-loading-state)");

    if (!forms.length) {
      return;
    }

    forms.forEach((form) => {
      form.addEventListener("submit", () => {
        const submitButtons = form.querySelectorAll("button[type='submit']");

        if (!submitButtons.length) {
          return;
        }

        init(submitButtons);
      });
    });
  }

  window.addEventListener("pageshow", destroyAll);

  return {
    init: init,
    destroy: destroy,
    destroyAll: destroyAll,
    initForm: initForm
  }
})();

//_WAIT_FOR_ELEMENT
theme.waitForElement = (function() {
  function init(selector, callback) {
    if ($(selector).length) {
      callback();
    } else {
      setTimeout(function() {
        init(selector, callback);
      }, 100);
    }
  }

  return {
    init: init
  }
})();

//_CUSTOM_SCRIPT
theme.customScript = function() {
  if (theme.settings.customScript) {
    eval(theme.settings.customScript);
  }
};

//_DEBUTIFY
theme.debutify = function() {
  window.addonsLoaded = false;

  if (window.enabledAddons) {
    theme.loadScript(theme.variables.addonsLink);
  } else {
    document.addEventListener("dbtfy:loaded", function(event) {
      if (window.addonsLoaded) {
        return;
      }

      window.addonsLoaded = true;

      window.enabledAddons = event.detail.enabledAddons;
      window.pAmount = event.detail.premiumAddons || 100;
      window.sAmount = event.detail.standardAddons || 100;
      window.plan = event.detail.plan;

      theme.loadScript(theme.variables.addonsLink);
    });
  }

  document.body.classList.add("dbtfy-agree_to_terms-destroy");
  document.body.classList.add("dbtfy-back_to_top-destroy");
  document.body.classList.add("dbtfy-cart_notification-destroy");
  document.body.classList.add("dbtfy-collection_addtocart-destroy");
  document.body.classList.add("dbtfy-collection_filters-destroy");
  document.body.classList.add("dbtfy-color_swatches-destroy");
  document.body.classList.add("dbtfy-cookie_box-destroy");
  document.body.classList.add("dbtfy-delivery_date-destroy");
  document.body.classList.add("dbtfy-delivery_time-destroy");
  document.body.classList.add("dbtfy-faq_page-destroy");
  document.body.classList.add("dbtfy-instagram_feed-destroy");
  document.body.classList.add("dbtfy-mega_menu-destroy");
  document.body.classList.add("dbtfy-newsletter_popup-destroy");
  document.body.classList.add("dbtfy-order_feedback-destroy");
  document.body.classList.add("dbtfy-product_image_crop-destroy");
  document.body.classList.add("dbtfy-quantity_breaks-destroy");
  document.body.classList.add("dbtfy-quick_compare-destroy");
  document.body.classList.add("dbtfy-quick_view-destroy");
  document.body.classList.add("dbtfy-remove_debutify_branding-destroy");
  document.body.classList.add("dbtfy-show_second_image_on_hover-destroy");
  document.body.classList.add("dbtfy-skip_cart-destroy");
  document.body.classList.add("dbtfy-sticky_addtocart-destroy");
  document.body.classList.add("dbtfy-sticky_header-destroy");
  document.body.classList.add("dbtfy-trust_badge-destroy");
  document.body.classList.add("dbtfy-upsell_popup-destroy");
  document.body.classList.add("dbtfy-wish_list-destroy");
};

//_TABS
theme.tabs = (function() {
  function init() {
    const $tabs = $(".tab");
    const $tabHeaders = $(".tab-header");
    const activeClass = "active";

    if (!$tabs.length) {
      return;
    }

    $tabHeaders.unbind("click");

    $tabHeaders.on("click", function() {
      const $tabHeader = $(this);

      if ($tabHeader.hasClass(activeClass)) {
        $tabHeader.removeClass(activeClass);
        $tabHeader.attr("aria-selected", false);
      } else {
        $tabHeader.addClass(activeClass);
        $tabHeader.attr("aria-selected", true);
      }
    });
  }

  function scroll($tabHeader) {
    if (!$tabHeader.length) {
      return;
    }

    const isStickyAnnouncementBar = document.body.classList.contains("sticky-announcement_bar");
    const announcementBar = document.getElementById("announcement");
    const announcementHeight = (isStickyAnnouncementBar && announcementBar) ? announcementBar.offsetHeight : 0;
    const isStickyHeader = theme.settings.stickyHeader;
    const heightHeader = theme.settings.heightHeader;
    const heightHeaderMobile = theme.settings.heightHeaderMobile;
    const offset = 10;
    let headerHeight = 0;

    if (theme.variables.bpSmall) {
      headerHeight = heightHeaderMobile;
    } else if (isStickyHeader && document.body.classList.contains("sticky-header")) {
      headerHeight = heightHeader;
    }

    $("html, body").animate({
      scrollTop: $tabHeader.offset().top - headerHeight - announcementHeight - offset
    }, theme.variables.animationDuration);

    if (!$tabHeader.hasClass("active")) {
      $tabHeader.trigger("click");
    }
  }

  $(document).on("shopify:block:select", function() {
    const $tab = $(".tab-header-" + event.detail.blockId);

    scroll($tab);
  });

  $(document).on("shopify:section:load", function() {
    init();
  });

  return {
    init: init,
    scroll: scroll
  }
})();

//_UPDATE_SLICK_SWIPE
theme.updateSlickSwipe = function(element, allowSwipe) {
  if (!element.hasClass("slick-initialized")) {
    return;
  }

  var slickOptions = {
    accessibility: allowSwipe,
    draggable: allowSwipe,
    swipe: allowSwipe,
    touchMove: allowSwipe
  };

  element.slick("slickSetOption", slickOptions, false);
};

//_FETCH_TEMPLATE
theme.fetchTemplate = async function (settings, successCallback) {
  let {
    template,
    alternativeTemplate
  } = settings;

  if (!template || !alternativeTemplate) {
    return;
  }

  let fetchTemplateUrl;

  if (Shopify.routes.root === "/") {
    fetchTemplateUrl = `/${template}?view=${alternativeTemplate}`;
  } else {
    fetchTemplateUrl = `${template}?view=${alternativeTemplate}`;
  }

  const templateMarkup = await fetch(fetchTemplateUrl)
    .then((response) => response.text());

  if (typeof successCallback === "function") {
    successCallback(templateMarkup);
  }

  return templateMarkup;
};

//_FETCH_PRODUCT_MARKUP
theme.fetchProductMarkup = async function(settings, successCallback) {
  let {
    template,
    productHandles
  } = settings;

  if (!template || !productHandles) {
    return;
  }

  if (typeof productHandles === "string") {
    productHandles = [productHandles];
  }

  const uniqueHandles = Array.from([...new Set(productHandles)]);

  const productMarkups = await Promise.all(uniqueHandles.map((handle) => {
    return fetch(`/products/${handle}?view=${template}`)
      .then((response) => response.text())
      .then((markup) => {
        return {
          handle,
          template: markup
        }
      })
  })).then((data) => {
    return data.reduce((products, response) => {
      return {
        ...products,
        [response.handle]: response.template
      }
    }, {});
  });

  if (typeof successCallback === "function") {
    successCallback(productMarkups);
  }

  return productMarkups;
};

//_IS_IOS_DEVICE
theme.isIOSDevice = function() {
  const isWindowsPhoneDevice = navigator.userAgent.indexOf("Windows Phone") >= 0;
  const isIOSDevice = /iP(ad|hone|od)/.test(navigator.userAgent) && !isWindowsPhoneDevice;

  return isIOSDevice;
};

//_IS_SAFARI_BROWSER
theme.isSafariBrowser = function() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

//_FIX_IOS_DOUBLE_TAP
theme.fixIOSDoubleTap = function() {
  if (theme.isIOSDevice()) {
    theme.loadScript(theme.variables.fastClickPluginLink, () => {
      FastClick.attach(document.body);
      disableFastClickForFlashyApp();

      function disableFastClickForFlashyApp(){
        const targetNode = document.querySelector('body');
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        function callback(){
          let flashyContainer = document.querySelector("flashy-popup");

          if(flashyContainer && !flashyContainer.classList.contains("needsclick")){
            flashyContainer.classList.add("needsclick");
          }
        }
      }
    });
  }
};

//_RESIZE_CAROUSEL
theme.resizeCarousel = function() {
  function refreshSlick() {
    var $resetCarousel = $(".slick-initialized");
    $resetCarousel.slick("setPosition");
  }

  theme.cache.$window.on(
    "resize",
    theme.debounce(refreshSlick, 250)
  );
};

//_LOAD_SCRIPT
theme.loadScript = function(src, callback, attributes) {
  const script = document.createElement("script");

  script.type = "text/javascript";
  script.defer = true;
  script.src = src;

  if (typeof attributes === "object") {
    for (const [name, value] of Object.entries(attributes)) {
      if (typeof name === "string" && typeof value === "string") {
        script.setAttribute(name, value);
      }
    }
  }

  document.head.insertAdjacentElement("beforeend", script);

  if (typeof callback === "function") {
    script.addEventListener("load", callback);
  }
};

//_IS_TOUCH_DEVICE
theme.isTouchDevice = function() {
  return (("ontouchstart" in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
};

//_REMOVE_ALL_CHILD_NODES
theme.removeAllChildNodes = function(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

//_GET_RANDOM_NUMBER_IN_RANGE
theme.getRandomNumberInRange = function(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};

//_SHOW_THE_MOST_VALUABLE_DISCOUNT_IN_CART
theme.showTheMostValuableDiscountInCart = function() {
  if (theme.isCartLoaded) {
    init(theme.cart);
  } else {
    document.addEventListener("dbtfy:cartLoaded", () => {
      init(theme.cart);
    });
  }

  function init(cart) {
    const storedDiscounts = theme.discountCode.getStoredDiscounts();
    const mostValuableDiscount = theme.discountCode.getMostValuableDiscount(storedDiscounts, cart);
    const cartSubtotals = document.querySelectorAll(".cart__subtotal-wrapper");
    const cartDiscounts = document.querySelectorAll(".cart-discount");
    const cartSubtotalPrice = cart.items_subtotal_price;
    const moneyFormat = theme.strings.moneyFormat;
    let savedMoney = 0;

    if (!mostValuableDiscount) {
      cartDiscounts.forEach((cartDiscount) => {
        cartDiscount.remove();
      });

      document.dispatchEvent(new CustomEvent("dbtfy:cartDiscountSaved"));

      return;
    }

    switch (mostValuableDiscount.type) {
      case "$":
        savedMoney = mostValuableDiscount.amount * 100;

        break;

      case "%":
        savedMoney = cartSubtotalPrice * (mostValuableDiscount.amount / 100);

        break;
    }

    const generalDiscountMarkup = `
      <div class="grid grid-small flex-nowrap cart-discount" data-discount-value="${savedMoney}">
        <div class="grid__item flex-fill overflow-hidden">
          <p class="text-money text-secondary spacer-bottom-sm text-ellipsis">
            <span class="${theme.settings.icon} icon-width" aria-hidden="true">local_offer</span>

            ${mostValuableDiscount.name}
          </p>
        </div>

        <div class="grid__item flex-auto text-right">
          <p class="text-money text-secondary spacer-bottom-sm">
            -<span class="money">${theme.Currency.formatMoney(savedMoney, moneyFormat)}</span>
          </p>
        </div>
      </div>
    `;

    cartDiscounts.forEach((cartDiscount) => {
      cartDiscount.remove();
    });

    cartSubtotals.forEach((cartSubtotal) => {
      cartSubtotal.insertAdjacentHTML("beforebegin", generalDiscountMarkup);
    });

    // Convert the quantity breaks amount on custom currency switcher
    var currencySelector = $("#currency-list-header[name='dbtfy-custom-currencies']"),
      shopCurrency = theme.strings.shopCurrency;

    if (currencySelector.length && shopCurrency && Currency.currentCurrency) {
      Currency.convertAll(shopCurrency, Currency.currentCurrency, ".cart-discount .money");
    }

    document.dispatchEvent(new CustomEvent("dbtfy:cartDiscountSaved"));
  }

  $("body").on("ajaxCart.afterCartLoad", function(evt, cart) {
    init(cart);
  });
};

//_GO_TO_CHECKOUT_WITH_DISCOUNT
theme.goToCheckoutWithDiscount = function() {
  if (theme.isCartLoaded) {
    init(theme.cart);
  } else {
    document.addEventListener("dbtfy:cartLoaded", () => {
      init(theme.cart);
    });
  }

  function init(cart) {
    const storedDiscounts = theme.discountCode.getStoredDiscounts();
    const mostValuableDiscount = theme.discountCode.getMostValuableDiscount(storedDiscounts, cart);

    if (mostValuableDiscount) {
      window.location.assign(`/checkout?discount=${mostValuableDiscount.name}&locale=${Shopify.locale}`);
    } else {
      window.location.assign(`/checkout?locale=${Shopify.locale}`);
    }
  }
}

//_FIX_SCROLL_ON_PASSWORD_PAGE
theme.fixScrollOnPasswordPage = function() {
  const isPasswordTemplate = document.body.classList.contains("template-password");
  let currentElem;

  if (isPasswordTemplate) {
    $("#password").focus(function() {
      disableScrolling(true);
    });

    $("#password").focusout(function() {
      enableScrolling(false);
    });

    function stopScroll() {
      if (currentElem) {
        const top = $("#LoginModal").offset().top;

        $('html, body').stop().animate({
          scrollTop: top
        }, 500);
      }
    }

    function disableScrolling(elem) {
      currentElem = elem;

      document.addEventListener("touchend", stopScroll);

      setTimeout(function() {
        stopScroll();
      }, 10);
    }

    function enableScrolling(elem) {
      currentElem = elem;

      document.removeEventListener("touchend", stopScroll);
    }
  }
}

//_SHOW_TRIAL_OVER_POPUP
theme.showTrialOverPopup = function() {
  const trialPopup = document.getElementById("TrialOverPopup");

  if (!trialPopup) {
    return;
  }

  const trialModalClosed = sessionStorage.getItem("trialOverPopupClosed");

  if (trialModalClosed) {
    return;
  }

  const closeButtons = trialPopup.querySelectorAll(".to-link-btn, [data-toast-close]");

  theme.toast.show(trialPopup);

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", (e) => {
      sessionStorage.setItem("trialOverPopupClosed", "true");
      theme.toast.hide(trialPopup);
    });
  });
}

//_GET_USER_LOCATION_DATA
theme.getUserLocationData = async function () {
  const savedLocationData = sessionStorage.getItem("user-location-data");

  if (savedLocationData) {
    return JSON.parse(savedLocationData);
  }

  try {
    const currencyUrl = "https://ipapi.co/json";
    const response = await fetch(currencyUrl);

    if (response.ok) {
      const userData = await response.json();
      const stringifiedUserData = JSON.stringify(userData);

      sessionStorage.setItem("user-location-data", stringifiedUserData);

      return JSON.parse(stringifiedUserData);
    } else {
      return;
    }
  } catch (error) {
    return;
  }
}

//_PRODUCT_MEDIA_ZOOM
theme.productMediaZoom = function() {
  function init() {
    var buttonZoom = $(".btn-zoom");

    buttonZoom.off("click");

    buttonZoom.on("click", function (e) {
      zoomClickedEvent(this);
    });
  }

  function initZoom(el) {
    const section = el.closest("[data-section-type='product-template']");
    const imageDisplayType = section.data("image-zoom-type");

    if(imageDisplayType !== "image_zoom"){
      return;
    }

    var zoomUrl = $(el).data("zoom");

    $(el).zoom({
      url: zoomUrl
    }).addClass("zoom-active");
  }

  function destroyZoom(el) {
    $(el).trigger("zoom.destroy").removeClass("zoom-active");
  }

  function zoomClickedEvent(zoomIcon) {
    const zoomImage = $(zoomIcon).prev();

    if (zoomImage.hasClass("zoom-active")) {
      destroyZoom(zoomImage);
    } else {
      initZoom(zoomImage);
    }
  }

  init();

  document.addEventListener("shopify:section:load", (event) => {
    init();
  });
}

//_CAPITALIZE_FIRST_LETTER
theme.capitalizeFirstLetter = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//_DECODE_STRING
theme.decodeString = function(string) {
  if (!string) {
    return "";
  }

  const decodedString = new DOMParser().parseFromString(string, "text/html");

  return decodedString.documentElement.textContent;
}

//_SYNCED_PRODUCT_VARIANT
theme.syncedProductVariant = function (select, type) {
  const singleProductBox = document.querySelector(".product-single");
  const pickerType = document.querySelector("[data-section-type='product-template']").dataset.pickerType;
  const currentSelectedOption = select.selectedOptions[0];
  const variantOptionsSize = currentSelectedOption.dataset.optionSize;
  const swatchesIsPresent = !!document.querySelector(".dbtfy-color_swatches");

  if (type === "bundle") {
    window.updateBundleVariant = false;
    window.updateStickyAtcVariant = true;
  } else {
    window.updateBundleVariant = true;
    window.updateStickyAtcVariant = false;
  }

  for (let i = 1; i <= variantOptionsSize; i++) {
    const currentVariantOptionName = currentSelectedOption.dataset[`option-${i}`];
    const swatchesOption = singleProductBox.querySelector(`.input-color_swatches[value="${currentVariantOptionName}"]`);

    if (pickerType === "radio") {
      const fieldsetOptions = document.querySelector(`#ProductSelect-option-${i - 1}`);

      fieldsetOptions.querySelector(`.single-option-selector__radio[value="${currentVariantOptionName}"]`).click();
    } else {
      const productVariantSelect = document.querySelector(`#SingleOptionSelector-${i - 1}`);

      productVariantSelect.value = currentVariantOptionName;
      productVariantSelect.dispatchEvent(new Event("change"));
    }

    if (swatchesIsPresent && swatchesOption) {
      let swatchBox = swatchesOption.closest(".custom_swatch_elements");
      let swatchOptionLabel = swatchBox.querySelector(".single-option-radio__label");
      let labelTitle = swatchOptionLabel.dataset.label;

      swatchOptionLabel.innerHTML = `${labelTitle}: <span class="variant-label-option-value">${swatchesOption.value}</span>`;

      swatchesOption.checked = true;
    }
  }

  if (type === "bundle") {
    window.updateBundleVariant = true;
  } else {
    window.updateStickyAtcVariant = true;
  }
}

//_OPEN_EXTERNAL_LINKS_IN_A_NEW_TAB
theme.openExternalLinksInANewTab = function() {
  const links = document.links;

  for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = "_blank";
      links[i].rel = "noreferrer noopener";
    }
  }
}

//_REQUIRED_TO_CHECKOUT_ADDONS
theme.requiredToCheckoutAddons = (function() {
  const addonsList = theme.addons.addons;
  let requiredToCheckoutAddons = [];
  let lastStateOfRequiredAddons = {};
  let selectedAddons = {};
  let checkoutButtonsToPrevent = [];

  function init() {
    requiredToCheckoutAddons = [];
    lastStateOfRequiredAddons = {};
    selectedAddons = {};
    checkoutButtonsToPrevent = [];

    // Agree to terms
    if (addonsList.dbtfy_agree_to_terms && !document.body.classList.contains("dbtfy-agree_to_terms-destroy")) {
      requiredToCheckoutAddons.push("agree-to-terms");
    }

    // Delivery date
    if (addonsList.dbtfy_delivery_date && theme.settings.dbtfyDeliveryDateRequired && !document.body.classList.contains("dbtfy-delivery_date-destroy")) {
      requiredToCheckoutAddons.push("delivery-date");
    }

    // Order feedback
    if (addonsList.dbtfy_order_feedback && theme.settings.dbtfyOrderFeedbackRequired && !document.body.classList.contains("dbtfy-order_feedback-destroy")) {
      requiredToCheckoutAddons.push("order-feedback");
    }
  }

  function update(properties) {
    const {
      name, errors, button, isChanged
    } = properties;

    selectedAddons[name] = errors;
    lastStateOfRequiredAddons[name] = errors;

    if (button) {
      checkoutButtonsToPrevent.push({
        button: button.element,
        event: button.event
      });
    }

    checkoutButtonsEvents(isChanged);
  }

  function checkoutButtonsEvents(isChanged) {
    const amountOfRequiredToCheckoutAddons = requiredToCheckoutAddons.length;
    const amountOfSelectedAddons = Object.keys(selectedAddons).length;

    if (amountOfRequiredToCheckoutAddons === amountOfSelectedAddons || isChanged) {
      const additionalCheckoutButtons = document.querySelectorAll(".additional_checkout_buttons");
      const addonsToCheck = isChanged ? lastStateOfRequiredAddons : selectedAddons;
      const addonsErrors = Object.values(addonsToCheck).find((errors) => {
        return errors;
      });

      if (!addonsErrors) {
        additionalCheckoutButtons.forEach((additionalCheckoutButton) => {
          additionalCheckoutButton.removeAttribute("hidden");
        });

        return;
      }

      additionalCheckoutButtons.forEach((additionalCheckoutButton) => {
        additionalCheckoutButton.setAttribute("hidden", "hidden");
      });

      checkoutButtonsToPrevent.forEach((checkoutButtonObject) => {
        const {
          button, event
        } = checkoutButtonObject;

        if (event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }

        if (button) {
          theme.loadingState.destroy(button);

          setTimeout(() => {
            button.removeAttribute("disabled");
          }, 0)
        }
      });

      selectedAddons = {};
      checkoutButtonsToPrevent = [];
    }
  }

  return {
    init: init,
    update: update
  }
})();

/* ================ _THEME_SECTIONS ================ */
window.theme = window.theme || {};
//_Drawer_menu_section
theme.DrawerMenuSection = (function() {
  function DrawerMenuSection() {
    timber.initCache();

    var $toggleBtns = timber.cache.$mobileSubNavToggle;
    var $toggleLinks = timber.cache.$mobileNavLinkToggle;

    // Setup aria attributes
    $toggleBtns.attr("aria-expanded", "false");
    $toggleBtns.each(function(i, el) {
      var $el = $(el);

      $el.attr("aria-controls", $el.attr("data-aria-controls"));
    });

    $toggleLinks.on("click", function(e) {
      e.preventDefault();

      $(this).closest(".mobile-nav__has-sublist").find($toggleBtns).trigger("click");
    });

    $toggleBtns.on("click", function(event) {
      event.preventDefault();

      var $el = $(this);
      var currentlyExpanded = $el.attr("aria-expanded");
      var toggleState = false;

      // Updated aria-expanded value based on state pre-click
      if (currentlyExpanded === "true") {
        $el.attr("aria-expanded", "false");
      } else {
        $el.attr("aria-expanded", "true");
        toggleState = true;
      }

      // Toggle that expands/collapses sublist
      $el
        .closest(".mobile-nav__has-sublist")
        .toggleClass("mobile-nav--expanded", toggleState)
        .next()
        .toggle();
    });
  }

  return DrawerMenuSection;
})();

theme.DrawerMenuSection.prototype = _.assignIn(
  {},
  theme.DrawerMenuSection.prototype,
  {
    onSelect: function() {
      timber.LeftDrawer.open(event);
    },

    onDeselect: function() {
      timber.LeftDrawer.close(event);
    }
  }
);


window.theme = window.theme || {};

//_PRODUCT_SECTION
theme.Product = (function() {
  function Product(container) {
    var $window = $(window);
    var $container = (this.$container = $(container));
    var sectionId = $container.attr("data-section-id");
    var productId = $container.attr('data-product-id');

    this.settings = {
      preloadImage: false,
      enableHistoryState: true,
      namespace: ".productSection",
      sectionId: sectionId
    };

    this.selectors = {
      productMediaWrapper: "[data-product-single-media-wrapper]",
      productMediaGroup: "[data-product-single-media-group]",
      productMediaFlexWrapper: "[data-product-single-media-flex-wrapper]",
      productMediaTypeModel: "[data-product-media-type-model]",
      productMediaTypeVideo: "[data-product-media-type-video]",
      productThumbnails: "[data-product-thumbnails]",
      productThumbnailWrapper: "[data-product-thumbnail-wrapper]",
      productThumbnail: "[data-product-thumbnail]",
      productFullDetails: ".product-single__full-details",
      productForm: ".add-to-cart__form",
      addToCart: ".btn--add-to-cart",
      addToCartText: ".btn__add-to-cart-text",
      priceContainer: "[data-price-container]",
      productPrice: ".product-single__price",
      comparePrice: ".product-single__price--compare-at",
      SKU: ".variant-sku",
      quantityElements: ".js-quantity-selector, label + .js-qty",
      originalSelectorId: "[id^='MainProductSelect']",
      singleOptionSelector: ".single-option-selector__radio",
      radioWrapper: ".radio-wrapper",
      meta: ".product-single__meta--wrapper",
      productWrapper: ".product-single",
      shopifyPaymentButton: ".shopify-payment-button",
      unitPrice: "[data-unit-price]",
      unitPriceBaseUnit: "[data-unit-price-base-unit]",
      quantityContainer: `.quantity-product-single-${productId}`,
      masterVariantSelector: `#MainProductSelect-${productId}`,
      qtyInput: `#Quantity-product-${productId}`,
      stickyAtcBar: '#stickyAddToCart',
      productSection: '.product-section'
    };

    this.classes = {
      priceContainerUnitAvailable: "price-container--unit-available",
      activeThumb: "active-thumb",
      featuredMedia: "featured-media",
      hide: "hide",
      unavailable: "variant-unavailable",
      soldout: "variant-soldout"
    };

    this.slickTranslateDistance = 0;
    this.isStackedLayout = $container.data("stacked-layout");

    if (!$(`#ProductJson-${sectionId}`).html()) {
      return;
    }

    this.productSingleObject = JSON.parse(
      document.getElementById(`ProductJson-${sectionId}`).innerHTML
    );

    this.focusableElements = [
      "iframe",
      "input",
      "button",
      "video",
      "[tabindex='0']"
    ].join(",");

    this.createThumbnailCarousel();
    this.createMediaCarousel();
    this.initProductVariant();
    this.initProductQuantities();
    this.initFullScreenImages();
    this.initStickyProductMeta();
    this.initProductVideo();
    this.initVariantsChange();
    this._initModelViewerLibraries();
    this._initShopifyXrLaunch();

    $window
      .on("load" + this.settings.namespace, theme.initStickyProductMeta)
      .on(
        "resize" + this.settings.namespace,
        theme.debounce(this.initStickyProductMeta, 150).bind(this)
      );
  }
  Product.prototype = _.assignIn({}, Product.prototype, {
    initProductQuantities: function () {
      let quantityContainer = document.querySelector(this.selectors.quantityContainer);

      if (!quantityContainer) {
        return;
      }

      let masterVariantSelector = document.querySelector(this.selectors.masterVariantSelector);
      let qtyInput = document.querySelector(this.selectors.qtyInput);
      let productSectionVariantSelectors = document.querySelectorAll('.featured-product-section .single-option-selector__radio, .product-section .single-option-selector__radio');

      theme.ProductQuantities.setMaxQuantity(quantityContainer, masterVariantSelector, qtyInput);
      theme.ProductQuantities.checkQuantity(quantityContainer, masterVariantSelector, qtyInput);
      theme.ProductQuantities.setVariantQuantities(quantityContainer, masterVariantSelector, qtyInput);
      theme.ProductQuantities.syncQuantityInputs(qtyInput);

      quantityContainer.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          theme.ProductQuantities.checkQuantity(quantityContainer, masterVariantSelector, qtyInput);
          theme.ProductQuantities.syncQuantityInputs(qtyInput);
        })
      });

      if (qtyInput) {
        qtyInput.addEventListener('keydown', function (event) {
          const eventCode = event.code;

          if (eventCode === "ArrowUp" || eventCode === "ArrowDown" || eventCode.includes("Digit")) {
            setTimeout(() => {
              theme.ProductQuantities.checkQuantity(quantityContainer, masterVariantSelector, qtyInput);
              theme.ProductQuantities.syncQuantityInputs(qtyInput);
            });
          }
        });
      }

      $("body").on("ajaxCart.afterCartLoad", function () {
        theme.ProductQuantities.setVariantQuantities(quantityContainer, masterVariantSelector, qtyInput);
      });

      $("body").on("productQuantitySync", function () {
        theme.ProductQuantities.checkQuantity(quantityContainer, masterVariantSelector, qtyInput);
      });

      productSectionVariantSelectors.forEach(selector => {
        selector.addEventListener("change", async () => {
          theme.ProductQuantities.setMaxQuantity(quantityContainer, masterVariantSelector, qtyInput);
          theme.ProductQuantities.checkQuantity(quantityContainer, masterVariantSelector, qtyInput);
          theme.ProductQuantities.syncQuantityInputs(qtyInput);
        });
      })
    },
    initFullScreenImages: function () {
      const productSection = this.$container;
      const enableFullScreenImage = productSection.data("image-zoom-type") === "image_zoom" ? false : true;
      const fullScreenImageTrigger = productSection.find('.productGallery');
      const zoomImageButton = productSection.find(".btn-zoom");

      if (!enableFullScreenImage) {
        return;
      }

      if (!productSection) {
        return;
      }

      const enableArrows = productSection.data("enable-arrows");
      const thumbnailsLocation = productSection.data("thumbs-location");

      //////// Fancybox /////////
      fullScreenImageTrigger.attr("rel", "gallery").fancybox({
        baseClass: 'thumbnails-' + thumbnailsLocation,
        toolbar: true,
        buttons: [
          'close'
        ],
        arrows: enableArrows,
        thumbs: {
          parentEl: ".fancybox-container",
          autoStart: true,
          axis: "y"
        },
        clickContent: false,
        afterShow: function () {
          const listItems = document.querySelectorAll(".fancybox-thumbs li");

          listItems.forEach((listItem) => {
            const image = listItem.querySelector("img");
            const src = image.getAttribute("src");
            let imageType;

            if (!src.includes("cdn.shopify")) {
              imageType = "external_video";
            } else {
              const imageToMatch = document.querySelector(`[data-media-href="${src}"]`);

              imageType = imageToMatch && imageToMatch.dataset.mediaType;
            }

            const badge = document.querySelector(`.product-single__thumbnail-badge[data-media-type="${imageType}"]`);
            const cloneBadge = badge && badge.cloneNode(true);

            cloneBadge && listItem.appendChild(cloneBadge);
          });
        }
      });

      zoomImageButton.on('click', function () {
        const imageIndex = $(this).data("image-index");

        fullScreenImageTrigger.eq(imageIndex).click();
      });
    },
    initProductVariant: function() {
      var $this = this;

      var options = {
        $container: this.$container,
        enableHistoryState: this.$container.data("enable-history-state") || false,
        singleOptionSelector: this.selectors.singleOptionSelector,
        originalSelectorId: this.selectors.originalSelectorId,
        product: this.productSingleObject
      };

      this.variants = new slate.Variants(options);

      this.$container.on(
        "variantChange" + this.settings.namespace,
        this.productPage.bind(this)
      );

      if (this.variants.product.variants.length === 1) {
        this.$container.trigger({
          type: "variantChange",
          variant: this.variants.product.variants[0]
        });
      }

      this.$container.on(
        "variantMediaChange" + this.settings.namespace,
        this.showVariantMedia.bind(this)
      );

      $("body").on("ajaxCart.afterCartLoad", function(evt, cart) {
        $($this.selectors.singleOptionSelector, $this.$container).trigger("change");

        if ($this.variants.product.variants.length === 1) {
          $this.$container.trigger({
            type: "variantChange",
            variant: $this.variants.product.variants[0]
          });
        }
      });

      $(this.selectors.singleOptionSelector, this.$container).trigger("change");
    },

    _initModelViewerLibraries: function() {
      if (!this.$container.data("has-model")) {
        return;
      }

      var $modelViewerElements = $(
        this.selectors.productMediaTypeModel,
        this.$container
      );

      theme.ProductModel.init($modelViewerElements, this.settings.sectionId);
    },

    _initShopifyXrLaunch: function() {
      $(document).on(
        "shopify_xr_launch",
        function() {
          var $currentMedia = $(`${this.selectors.productMediaWrapper}:not(.${this.classes.hide})`, this.$container);

          $currentMedia.trigger("xrLaunch");
        }.bind(this)
      );
    },

    initProductVideo: function() {
      var sectionId = this.settings.sectionId;

      $(this.selectors.productMediaTypeVideo, this.$container).each(function() {
        var $videoContainer = $(this);

        theme.ProductVideo.init($videoContainer, sectionId);
      });
    },

    initVariantsChange: function() {
      const _this = this;

      $(".single-option-selector__radio", _this.$container).on("change", function() {
        const checkedRadioButtons = $(".single-option-selector__radio:checked", _this.$container);

        if (checkedRadioButtons.length) {
          checkedRadioButtons.each(function() {
            setOptionLabel(this);
          });
        } else {
          setOptionLabel(this);
        }
      });

      function setOptionLabel(optionSelector) {
        const radioWrapper = $(optionSelector).closest(".radio-wrapper");
        const optionLabel = radioWrapper.find(".single-option-radio__label");
        const optionName = optionLabel.attr("data-option-name");
        const optionValue = $(optionSelector).val();

        optionLabel.html(`${optionName}: <span class="variant-label-option-value">${optionValue}</span>`);
      }
    },

    showVariantMedia: function(evt) {
      // show the selected variant media
      var self = this;
      var variant = evt.variant;
      var variantMediaId = `${this.settings.sectionId}-${variant.featured_media.id}`;

      var $newMedia = $(`${this.selectors.productMediaWrapper}[data-media-id="${variantMediaId}"]`);
      var $newThumbnail = $(`${this.selectors.productThumbnail}[data-media-id="${variantMediaId}"]`);

      this.triggerMediaChangeEvent(variantMediaId);

      var mediaIndex;

      if (variant && variant.featured_media) {
        // Move featured-media class to the newly selected variant
        // The class is used to set the initial slide of the carousel
        $(this.selectors.productMediaWrapper, this.$container)
          .removeClass(
            this.classes.featuredMedia
          );

        $newMedia
          .addClass(
            this.classes.featuredMedia
          );
      }

      if (theme.variables.bpSmall || !this.isStackedLayout) {
        // Switch carousel slide
        mediaIndex = $newMedia.closest(".slick-slide").data("slick-index");

        // If there is no index, slider is not initialized
        if (_.isUndefined(mediaIndex)) {
          return;
        }

        // Navigate to slide
        $(this.selectors.productMediaGroup, this.$container).slick(
          "slickGoTo",
          mediaIndex
        );
      } else {
        if (this.isStackedLayout) {
          mediaIndex = $newMedia.closest(".slick-slide").index();

          // Scroll to/reorder media unless it's the first photo on load
          if (theme.variables.productPageSticky) {
            // Scroll to variant media
            $("html, body").animate(
              {
                scrollTop: $newMedia.offset().top
              },
              theme.variables.animationDuration
            );
          } else {
            var currentScroll = $(document).scrollTop();

            // Move selected variant media to top, preventing scrolling
            $newMedia
              .closest(
                $(this.selectors.productMediaFlexWrapper, this.$container)
              )
              .prependTo(
                $(this.selectors.productMediaGroup, this.$container)
              );

            // Also move its thumbnail to top (so carousel has the same order on mobile)
            $newThumbnail
              .closest(
                $(this.selectors.productThumbnailWrapper, this.$container)
              )
              .prependTo(
                $(this.selectors.productThumbnails, this.$container)
              );

            $(document).scrollTop(currentScroll);
          }
        }
      }
    },

    triggerMediaChangeEvent: function(mediaId) {
      // triggers event mediaHidden on all media wrapper then
      // triggers event mediaVisible to slick active media wrapper
      var $otherMedia = $(this.selectors.productMediaWrapper, this.$container);

      $otherMedia.trigger("mediaHidden");

      var $newMedia = $(
        this.selectors.productMediaWrapper,
        this.$container
      ).filter(`#ProductMediaWrapper-${mediaId}`);
      $newMedia.trigger("mediaVisible");
    },

    createThumbnailCarousel: function() {
      var mediaCarousel = $(this.selectors.productMediaGroup, this.$container);
      var $slider = $(this.selectors.productThumbnails, this.$container);

      if ($(this.selectors.productThumbnail, this.$container).length < 2) {
        return;
      }

      var slickOptions = {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        asNavFor: mediaCarousel,
        swipeToSlide: true,
        infinite: false,
        speed: theme.variables.transitionSpeed
      };

      if (this.isStackedLayout) {
        enquire.register(theme.variables.mediaQuerySmall, {
          match: function() {
            theme.carousel.init({
              slider: $slider,
              slickOptions: slickOptions
            });
          }
        });

        enquire.register(theme.variables.mediaQuerySmallUp, {
          match: function() {
            theme.carousel.destroy($slider);
          }
        });
      } else {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions
        });
      }
    },

    createMediaCarousel: function() {
      var self = this;
      var focusTrapped = false;
      var thumbnailCarousel = $(this.selectors.productThumbnails, this.$container);
      var $slider = $(this.selectors.productMediaGroup, this.$container);
      var slideIndex = $(`${this.selectors.productMediaWrapper}.${this.classes.featuredMedia}`, this.$container)
        .closest(this.selectors.productMediaFlexWrapper)
        .index();

      if ($(this.selectors.productMediaFlexWrapper).length < 2) {
        return;
      }

      const fadeEffect = $slider.is("[data-carousel-fade-effect]");

      var slickOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: fadeEffect,
        arrows: true,
        focusOnSelect: false,
        asNavFor: thumbnailCarousel,
        infinite: false,
        speed: theme.variables.transitionSpeed,
        adaptiveHeight: true
      };

      if (this.isStackedLayout) {
        enquire.register(theme.variables.mediaQuerySmall, {
          match: function() {
            // overwrite slide index in case the selected variant has changed
            slideIndex = $(`${self.selectors.productMediaWrapper}.${self.classes.featuredMedia}`, self.$container)
              .closest(self.selectors.productMediaFlexWrapper)
              .index();

            theme.carousel.init({
              slider: $slider,
              slickOptions: slickOptions,
              goToSlide: slideIndex
            });
          }
        });

        enquire.register(theme.variables.mediaQuerySmallUp, {
          match: function() {
            self.destroyMediaCarousel();

            return;
          }
        });
      } else {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions,
          goToSlide: slideIndex
        });
      }

      $(this.selectors.productMediaFlexWrapper, this.$container).on(
        "focusin",
        function() {
          if (focusTrapped) {
            return;
          }

          this.trapCarouselFocus($(this.selectors.productMediaGroup));
          focusTrapped = true;
        }.bind(this)
      );

      $(this.selectors.productMediaGroup, this.$container)
        .on(
          "afterChange",
          function(event, slick) {
            this.trapCarouselFocus(slick.$slider);
            // Let's do this after changing slides
            // Update featured media and active thumbnail on desktop
            // when changing slides
            this.setFeaturedMedia();
          }.bind(this)
        );
    },

    trapCarouselFocus: function($slider, removeFocusTrap) {
      if (!$slider) {
        return;
      }

      $slider
        .find(".slick-slide:not(.slick-active)")
        .find(this.focusableElements)
        .attr("tabindex", removeFocusTrap ? "0" : "-1");

      $slider
        .find(".slick-active")
        .find(this.focusableElements)
        .attr("tabindex", "0");
    },

    setFeaturedMedia: function() {
      // get the current slick active media wrapper, trigger on slick after change
      var mediaId = $(this.selectors.productMediaGroup, this.$container)
        .find(".slick-slide.slick-active " + this.selectors.productMediaWrapper)
        .attr("data-media-id");

      this.triggerMediaChangeEvent(mediaId);
    },

    destroyMediaCarousel: function() {
      var $slider = $(this.selectors.productMediaGroup, this.$container);

      if (!$slider.length) {
        return;
      }

      this.trapCarouselFocus(
        $slider,
        true
      );

      // unslick
      theme.carousel.destroy($slider);
    },

    productPage: function(evt) {
      var _this = this;
      var moneyFormat = theme.strings.moneyFormat;
      var variant = evt.variant;
      var translations = theme.strings;
      var cart = null;

      if (theme.isCartLoaded) {
        cart = theme.cart;

        initProductPage.bind(_this)();
      } else {
        document.addEventListener("dbtfy:cartLoaded", () => {
          cart = theme.cart;

          initProductPage.bind(_this)();
        });
      }

      function initProductPage() {
        const isMainProductSection = this.$container.closest(this.selectors.productSection).length;

        if (variant) {
          $(this.selectors.meta, this.$container).removeClass(this.classes.unavailable);

          if (isMainProductSection) {
            $(this.selectors.stickyAtcBar).removeAttr("hidden");
          }

          $(this.selectors.originalSelectorId, this.$container).val(variant.id);

          var variantFromSelect = $(this.selectors.originalSelectorId, this.$container).find(`option[value="${variant.id}"]`);
          var variantInventoryQuantity = variantFromSelect.data("inventory-quantity") || 0;
          var variantInventoryPolicy = variantFromSelect.data("inventory-policy");

          var currentVariantInCartQuantity = cart.items.reduce((acc, item) => {
            if (item.id === variant.id) {
              return acc + item.quantity;
            }

            return acc;
          }, 0);

          $(this.selectors.priceContainer, this.$container).removeClass(this.classes.priceContainerUnitAvailable);

          // Select a valid variant if available
          if (variant.available) {
            // If track quantity is enabled
            if (variant.inventory_management === "shopify" && variantInventoryPolicy !== "continue") {
              // If stock quantity is lower than in cart already
              if (currentVariantInCartQuantity < variantInventoryQuantity) {
                productAvailableToBuy.bind(this)();
              } else {
                productUnavailableToBuy.bind(this)();
              }
            } else {
              productAvailableToBuy.bind(this)();

              if (variant.inventory_management === "shopify" && variantInventoryPolicy === "continue" && variantInventoryQuantity <= 0) {
                $(".dbtfy-quantity_breaks", this.$container).find(".qb-quantity").show();
              }
            }
          } else {
            productUnavailableToBuy.bind(this)();
          }

          function productAvailableToBuy() {
            // Available, enable the submit button, change text
            $(_this.selectors.addToCart, _this.$container)
              .removeClass("disabled")
              .prop("disabled", false);

            $(_this.selectors.addToCartText, _this.$container).html(translations.addToCart);

            // Remove soldout class
            $(_this.selectors.meta, _this.$container).removeClass(_this.classes.soldout);

            // Update the full details link
            var $link = $(_this.selectors.productFullDetails, _this.$container);

            if ($link.length) {
              $link.attr(
                "href",
                this.updateUrlParameter($link.attr("href"), "variant", variant.id)
              );
            }
          }

          function productUnavailableToBuy() {
            // Sold out, disable the submit button, change text
            $(_this.selectors.addToCart, _this.$container)
              .addClass("disabled")
              .prop("disabled", true);

            $(_this.selectors.addToCartText, _this.$container).html(translations.soldOut);

            // add soldout class
            $(_this.selectors.meta, _this.$container).addClass(_this.classes.soldout);
          }

          $(this.selectors.productPrice, this.$container)
            .html(`<span class="money">${theme.Currency.formatMoney(variant.price, moneyFormat)}</span>`)
            .show();

          // Also update and show the product"s compare price if necessary
          if (variant.compare_at_price > variant.price) {
            $(this.selectors.productPrice, this.$container)
              .addClass("on-sale text-sale")
              .attr("aria-label", translations.salePrice);

            $(this.selectors.comparePrice, this.$container)
              .html(`<span class="money">${theme.Currency.formatMoney(variant.compare_at_price, moneyFormat)}</span>`)
              .removeClass(this.classes.hide);
          } else {
            $(this.selectors.productPrice, this.$container)
              .removeClass("on-sale text-sale")
              .attr("aria-label", translations.regularPrice);

            $(this.selectors.comparePrice, this.$container)
              .html("")
              .addClass(this.classes.hide);
          }

          if (variant.unit_price) {
            var $unitPrice = $(this.selectors.unitPrice, this.$container);
            var $unitPriceBaseUnit = $(
              this.selectors.unitPriceBaseUnit,
              this.$container
            );

            $unitPrice.html(`<span class="money">${theme.Currency.formatMoney(variant.unit_price, moneyFormat)}</span>`);
            $unitPriceBaseUnit.html(this.getBaseUnit(variant));

            $(this.selectors.priceContainer, this.$container).addClass(this.classes.priceContainerUnitAvailable);
          }

          // Also Show SKU
          if (variant.sku) {
            $(this.selectors.SKU).html(variant.sku);
            $(this.selectors.SKU).parent().removeClass("hide");
          } else {
            $(this.selectors.SKU).parent().addClass("hide");
          }
        } else {
          // The variant doesn"t exist, disable submit button.
          // This may be an error or notice that a specific variant is not available.
          // To only show available variants, implement linked product options:
          //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
          $(this.selectors.addToCart, this.$container)
            .addClass("disabled")
            .prop("disabled", true);

          $(this.selectors.addToCartText, this.$container).html(translations.unavailable);
          $(this.selectors.meta, this.$container).addClass(this.classes.unavailable);

          if (isMainProductSection) {
            document.body.dispatchEvent(new Event('hideStickyAtcOnUnavailableButton'));
          }
        }

        // Convert the product price on select change based on selected currency
        var currencySelector = $("#currency-list-header[name='dbtfy-custom-currencies']"),
          shopCurrency = theme.strings.shopCurrency;

        if (currencySelector.length && shopCurrency && Currency.currentCurrency) {
          Currency.convertAll(shopCurrency, Currency.currentCurrency);
        }

        document.dispatchEvent(new CustomEvent("productInfoLoaded"));
      }
    },

    updateUrlParameter: function(url, key, value) {
      var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
      var separator = url.indexOf("?") === -1 ? "?" : "&";

      if (url.match(re)) {
        return url.replace(re, "$1" + key + "=" + value + "$2");
      } else {
        return url + separator + key + "=" + value;
      }
    },

    initStickyProductMeta: function () {
      const _this = this;
      const productMeta = $(this.selectors.meta, this.$container).find(".product-single__meta");

      const config = {
        attributes: false,
        childList: true,
        subtree: true
      };

      const observer = new MutationObserver(init);

      observer.observe(productMeta[0], config);

      init();

      function init() {
        var productMediaTemplate = $("[id^=ProductMediaGroup-], [id^=ProductMediaGroup-] .placeholder-svg", _this.$container);
        var productGeneralInfoTemplate = $(_this.selectors.meta, _this.$container);
        var stickyClass = "large--sticky medium--sticky sticky-check-header";

        if (!productMediaTemplate.length || !productGeneralInfoTemplate.length) {
          return;
        }

        function initSticky(block) {
          theme.variables.productPageSticky = true;
          block.addClass(stickyClass);
        }

        function killSticky(block) {
          block.removeClass(stickyClass);
        }

        // Force detach if already detached. Prevent layout issues.
        productMediaTemplate.trigger("detach.ScrollToFixed");
        productGeneralInfoTemplate.trigger("detach.ScrollToFixed");

        // Detach and stop if on mobile breakpoint
        if (theme.variables.bpSmall) {
          killSticky(productMediaTemplate);
          killSticky(productGeneralInfoTemplate);

          return;
        }

        var productMediaTemplateHeight = productMediaTemplate.height();
        var productGeneralInfoTemplateHeight = productGeneralInfoTemplate.height();

        /*============================================================================
          Calculate when to detach fixed element to avoid content overlap.
          Subtract product copy height from the limit because plugin uses offset().top
        ==============================================================================*/

        // Init sticky if desc shorter than images and fits in viewport

        if (productGeneralInfoTemplateHeight < productMediaTemplateHeight) {
          killSticky(productMediaTemplate);
          initSticky(productGeneralInfoTemplate);
        } else if (productMediaTemplateHeight < productGeneralInfoTemplateHeight) {
          initSticky(productMediaTemplate);
          killSticky(productGeneralInfoTemplate);
        } else {
          theme.variables.productPageSticky = false;
          killSticky(productMediaTemplate);
          killSticky(productGeneralInfoTemplate);
        }
      }
    },

    onUnload: function() {
      this.$container.off(this.settings.namespace);

      theme.ProductModel.removeSectionModels(this.settings.sectionId);
      theme.ProductVideo.removeSectionVideos(this.settings.sectionId);

      this.destroyMediaCarousel();
    },

    getBaseUnit: function(variant) {
      return variant.unit_price_measurement.reference_value === 1
        ? variant.unit_price_measurement.reference_unit
        : variant.unit_price_measurement.reference_value +
        variant.unit_price_measurement.reference_unit;
    }
  });

  return Product;
})();


window.theme = window.theme || {};

//_COLLECTION_SECTION
theme.Collection = (function() {
  function Collection(container) {
    this.selectors = {
      sortDropdown: '#sortBy',
      filterDropdown: '#filterBy',
      gridButton: '.collection-layout-button--grid',
      listButton: '.collection-layout-button--list',
      gridItems: '.grid-view',
      listItems: '.list-view'
    };

    theme.ProductGridSlider($("#shopify-section-dbtfy-collection-filters"));

    this.$container = $(container);
    this.init();
  }

  Collection.prototype = _.assignIn({}, Collection.prototype, {
    // init functions
    init: function() {
      const _this = this;

      this.cacheSelectors();
      this.setQueryParams();
      this.filterCollection();
      this.showProductsBasedOnCurrentView();

      this.cache.$sortDropdown.on("change", this.sortCollection.bind(this));

      this.cache.$gridButton.on("click", this.gridView.bind(this));
      this.cache.$listButton.on("click", this.listView.bind(this));

      $("body").on("afterRecommendationLoad", function(evt) {
        _this.cacheSelectors();
        _this.showProductsBasedOnCurrentView();
      });
    },

    // cache
    cacheSelectors: function() {
      this.cache = {
        $sortDropdown: $(this.selectors.sortDropdown),
        $filterDropdown: $(this.selectors.filterDropdown),
        $gridButton: $(this.selectors.gridButton),
        $listButton: $(this.selectors.listButton),
        $gridItems: $(this.selectors.gridItems),
        $listItems: $(this.selectors.listItems)
      };
    },

    setQueryParams: function() {
      // don't execute if sort dropdown is not present.
      if (!this.cache.$sortDropdown.length) {
        return;
      }

      Shopify.queryParams = this.parseQueryString();
    },

    // save current url
    parseQueryString: function() {
      if (!location.search.length) {
        return {};
      }

      var params = {};

      for (
        var aKeyValue, i = 0, aCouples = location.search.substr(1).split("&");
        i < aCouples.length;
        i++
      ) {
        aKeyValue = aCouples[i].split("=");
        if (aKeyValue.length > 1) {
          params[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(
            aKeyValue[1]
          );
        }
      }
      return params;
    },

    // collection sorting
    sortCollection: function() {
      if (!this.cache.$sortDropdown.length) {
        return;
      }

      if (Shopify.queryParams.page) {
        delete Shopify.queryParams.page;
      }

      Shopify.queryParams.sort_by = this.cache.$sortDropdown.val();
      location.search = jQuery.param(Shopify.queryParams);
    },

    // collection filtering
    filterCollection: function() {
      // don't execute if tag  dropdown is not present.
      if (!this.cache.$filterDropdown.length) {
        return;
      }

      this.cache.$filterDropdown.on("change", function() {
        window.location.href = $(this).val();
      });
    },

    listView: function() {
      sessionStorage.setItem("collection-view", "list");

      this.cache.$gridButton.removeClass("collection-layout-button--active");
      this.cache.$listButton.addClass("collection-layout-button--active");

      this.cache.$gridItems.attr("hidden", "hidden");
      this.cache.$listItems.removeAttr("hidden");
    },

    gridView: function() {
      sessionStorage.setItem("collection-view", "grid");

      this.cache.$gridButton.addClass("collection-layout-button--active");
      this.cache.$listButton.removeClass("collection-layout-button--active");

      this.cache.$gridItems.removeAttr("hidden");
      this.cache.$listItems.attr("hidden", "hidden");
    },

    showProductsBasedOnCurrentView: function() {
      const layout = this.$container.data("collection-layout");
      const savedCollectionView = sessionStorage.getItem("collection-view");
      let isListView = false;

      if (layout === "list") {
        isListView = true;
      } else if (savedCollectionView && savedCollectionView === "list") {
        isListView = true;
      }

      if (isListView) {
        this.listView();
      } else {
        this.gridView();
      }
    }
  });

  return Collection;
})();


window.theme = window.theme || {};

//_HEADER_SECTION
theme.HeaderSection = (function() {
  function Header(container) {
    if (theme.settings.stickyHeader && document.body.classList.contains("sticky-header")) {
      // Sticky header
      $(window).scroll(addScrollingClass);
      $(window).load(addScrollingClass);

      function addScrollingClass() {
        var scroll = $(window).scrollTop();
        var scrollTrigger = 80;

        if (scroll > scrollTrigger) {
          $("body").addClass("is-scrolling");
        } else {
          $("body").removeClass("is-scrolling");
        }
      }
    }
  }

  return Header;
})();


window.theme = window.theme || {};

//_FOOTER_SECTION
theme.FooterSection = (function() {
  function Footer(container) {
    this.$container = $(container);
    theme.ProductGridSlider(container);
  }

  Footer.prototype = _.assignIn({}, Footer.prototype, {});

  return Footer;
})();


window.theme = window.theme || {};

//_FEATURED_COLLECTIONS
theme.FeaturedCollections = (function() {
  function FeaturedCollections(container) {
    var $container = (this.$container = $(container));
    var $slider = $container.find(".slick-featured-collections");
    var sectionId = $container.attr("data-section-id");
    var slider = (this.slider = `#FeaturedCollections-${sectionId}`);

    if (!$slider.length) {
      return;
    }

    var slickOptions = {
      arrows: $slider.data("arrows"),
      dots: $slider.data("dots"),
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      speed: theme.variables.transitionSpeed
    };

    enquire.register(theme.variables.mediaQuerySmall, {
      match: function() {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions
        });
      }
    });

    enquire.register(theme.variables.mediaQuerySmallUp, {
      match: function() {
        theme.carousel.destroy($slider);
      }
    });
  }

  FeaturedCollections.prototype = _.assignIn({}, FeaturedCollections.prototype, {
    onUnload: function() {
      theme.carousel.destroy($(this.slider));
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $(`.collection-${evt.detail.blockId}:not(.slick-cloned)`);
      var slideIndex = $slide.attr("data-slick-index");

      // Go to selected slide, pause autoplay
      if (slideIndex) {
        $(this.slider).slick("slickGoTo", slideIndex).slick("slickPause");
      }
    },

    onBlockDeselect: function() {
      var isSliderInitialized = $(this.slider).hasClass("slick-initialized");

      if (isSliderInitialized) {
        // Resume autoplay
        $(this.slider).slick("slickPlay");
      }
    }
  });

  return FeaturedCollections;
})();

window.theme = window.theme || {};

//_LOGO_LIST
theme.LogoList = (function () {
  function LogoList(container) {
    var $container = (this.$container = $(container));
    var sectionId = $container.attr("data-section-id");
    var slider = (this.slider = `#LogoList-${sectionId}`);
    var $slider = $container.find(".slick-logo-list");

    if (!$slider.length) {
      return;
    }

    var slickOptions = {
      arrows: $slider.data("arrows"),
      dots: $slider.data("dots"),
      autoplay: $slider.data("autoplay"),
      autoplaySpeed: $slider.data("autoplayspeed"),
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      speed: theme.variables.transitionSpeed
    };

    enquire.register(theme.variables.mediaQuerySmall, {
      match: function() {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions
        });
      }
    });

    enquire.register(theme.variables.mediaQuerySmallUp, {
      match: function() {
        theme.carousel.destroy($slider);
      }
    });
  }

  LogoList.prototype = _.assignIn({}, LogoList.prototype, {
    onUnload: function() {
      theme.carousel.destroy($(this.slider));
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $(`.logo-${evt.detail.blockId}:not(.slick-cloned)`);
      var slideIndex = $slide.attr("data-slick-index");

      // Go to selected slide, pause autoplay
      if (slideIndex) {
        $(this.slider).slick("slickGoTo", slideIndex).slick("slickPause");
      }
    },

    onBlockDeselect: function() {
      var isSliderInitialized = $(this.slider).hasClass("slick-initialized");

      if (isSliderInitialized) {
        // Resume autoplay
        $(this.slider).slick("slickPlay");
      }
    }
  });

  return LogoList;
})();

window.theme = window.theme || {};


//_HERO_SLIDER
theme.HeroSlider = (function() {
  function HeroSlider(container) {
    var $container = (this.$container = $(container));
    var $slider = $container.find(".slick-hero");
    const transparentHeaderStyles = document.querySelector(".hero-header-style");

    // Remove or add hero header styling according to section order and type
    function toggleTransparentHeaderStyles(sectionIndex, onSectionLoad) {
      let $firstSection = document.querySelector(".index-sections > .shopify-section:first-child") || document.querySelector(".main-content .shopify-section:first-child");
      const $nextSibling = $firstSection && $firstSection.nextElementSibling;

      if (sectionIndex === 0 && !onSectionLoad) {
        $firstSection = $firstSection && $firstSection.nextElementSibling;
      } else if (sectionIndex > 0 && !onSectionLoad && $firstSection.querySelectorAll("*").length <= 1) {
        $firstSection = $nextSibling && $nextSibling.nextElementSibling;
      }

      const isSectionNotEmpty = $firstSection && $firstSection.querySelectorAll("*").length > 1;
      const $nextSection = $firstSection && $firstSection.nextElementSibling;
      const isNextSectionNotEmpty = $nextSection && $nextSection.querySelectorAll("*").length > 1;

      if (!transparentHeaderStyles) {
        return;
      }

      if ($firstSection && $firstSection.classList.contains("hero-section") && isSectionNotEmpty) {
        transparentHeaderStyles.setAttribute('media', 'all');
      } else {
        if ($firstSection && !isSectionNotEmpty && $nextSection.classList.contains("hero-section") && isNextSectionNotEmpty) {
          transparentHeaderStyles.setAttribute('media', 'all');
        } else {
          transparentHeaderStyles.setAttribute('media', 'not all');
        }
      }
    }

    toggleTransparentHeaderStyles();

    $(document).on("shopify:section:reorder", function () {
      toggleTransparentHeaderStyles();
    });

    $(document).on("shopify:section:unload", function (event) {
      const sectionIndex = $('#mainContent .shopify-section').index(event.target);

      toggleTransparentHeaderStyles(sectionIndex);
    });

    $(document).on("shopify:section:load", function (event) {
      const sectionIndex = $('#mainContent .shopify-section').index(event.target);
      const onSectionLoad = true;

      toggleTransparentHeaderStyles(sectionIndex, onSectionLoad);
    });

    if (!$slider.length) {
      return;
    }

    var slickOptions = {
      arrows: $slider.data("arrows"),
      dots: $slider.data("dots"),
      autoplay: $slider.data("autoplay"),
      autoplaySpeed: $slider.data("autoplayspeed"),
      fade: $slider.data("fade"),
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: theme.variables.transitionSpeed
    };

    var mobileOptions = $.extend({}, slickOptions, {
      autoplay: $slider.data("autoplay")
    });

    enquire.register(theme.variables.mediaQuerySmallUp, {
      match: function () {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions
        });
      }
    });

    enquire.register(theme.variables.mediaQuerySmall, {
      match: function () {
        theme.carousel.init({
          slider: $slider,
          slickOptions: mobileOptions
        });

        const fullHeightSlides = $slider.find(".hero-mobile-xlarge");

        fullHeightSlides.length && fullHeightSlides.each(function () {
          const $slide = $(this);
          const windowHeight = $(window).height();

          $slide.css("height", `${windowHeight}px`);
        })
      }
    });
  }

  HeroSlider.prototype = _.assignIn({}, HeroSlider.prototype, {
    onUnload: function() {
      theme.carousel.destroy($(this.slider));
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $(`.hero-${evt.detail.blockId}:not(.slick-cloned)`);
      var slideIndex = $slide.attr("data-slick-index");

      // Go to selected slide, pause autoplay
      if (slideIndex) {
        $(this.slider).slick("slickGoTo", slideIndex).slick("slickPause");
      }
    },

    onBlockDeselect: function() {
      var isSliderInitialized = $(this.slider).hasClass("slick-initialized");

      if (isSliderInitialized) {
        // Resume autoplay
        $(this.slider).slick("slickPlay");
      }
    }
  });

  return HeroSlider;
})();


window.theme = window.theme || {};

//_PASSWORD_HEADER
theme.PasswordHeader = (function() {
  function PasswordHeader() {
    this.init();
  }

  PasswordHeader.prototype = _.assignIn({}, PasswordHeader.prototype, {
    init: function() {
      if ($(".storefront-password-form .errors").length) {
        theme.modal.open("#LoginModal");
      }
    }
  });

  return PasswordHeader;
})();


window.theme = window.theme || {};

//_PRODUCT_RECOMMENDATIONS
theme.ProductRecommendations = (function () {
  function ProductRecommendations(container) {
    this.$container = $(container);

    const self = this;
    const productId = this.$container.data("productId");
    const sectionId = this.$container.data("sectionId");
    const recommendationsURL = this.$container.data("sectionUrl");
    const limit = this.$container.data("limit");
    const arrows = this.$container.data("arrows");
    const dots = this.$container.data("dots");
    const autoplay = this.$container.data("autoplay");
    const autoplayspeed = this.$container.data("autoplayspeed");
    const slidetoshow = this.$container.data("slidetoshow");

    const recommendationsSectionUrl = `${recommendationsURL}?&section_id=${sectionId}&product_id=${productId}&limit=${limit}`;

    $.get(recommendationsSectionUrl).then(function (section) {
      const parsedMarkup = new DOMParser().parseFromString(section, "text/html");
      const slider = parsedMarkup.querySelector(".slick-product-grid");

      if (slider) {
        slider.dataset.arrows = arrows;
        slider.dataset.dots = dots;
        slider.dataset.autoplay = autoplay;
        slider.dataset.autoplayspeed = autoplayspeed;
        slider.dataset.slidetoshow = slidetoshow;
      }

      const recommendationsMarkup = parsedMarkup.querySelector(".product-recommendations");

      if (recommendationsMarkup) {
        self.$container.html(recommendationsMarkup);
        theme.ProductGridSlider(container);
        theme.cache.$body.trigger("afterRecommendationLoad");
      }
    });
  }

  return ProductRecommendations;
})();


window.theme = window.theme || {};

//_MAP_SECTION
theme.Maps = (function() {
  var config = {
    zoom: 14
  };

  var apiStatus = null;
  var mapsToLoad = [];

  var errors = {
    addressNoResults: theme.strings.addressNoResults,
    addressQueryLimit: theme.strings.addressQueryLimit,
    addressError: theme.strings.addressError,
    authError: theme.strings.authError
  };

  var selectors = {
    section: "[data-section-type='map-section']",
    map: "[data-map]",
    mapOverlay: "[data-map-overlay]"
  };

  var classes = {
    mapError: "map-section--load-error",
    errorMsg: "map-section__error errors text-center"
  };

  // Global function called by Google on auth errors.
  // Show an auto error message on all map instances.
  // eslint-disable-next-line camelcase, no-unused-vars
  window.gm_authFailure = function() {
    if (!Shopify.designMode) {
      return;
    }

    if (Shopify.designMode) {
      $(selectors.section).addClass(classes.mapError);
      $(selectors.map).remove();
      $(selectors.mapOverlay).after(`<div class="${classes.errorMsg}">${theme.strings.authError}</div>`);
    }
  };

  function Map(container) {
    this.$container = $(container);
    this.$map = this.$container.find(selectors.map);
    this.key = this.$map.data("api-key");

    if (typeof this.key !== "string" || this.key === "") {
      return;
    }

    if (apiStatus === "loaded") {
      var self = this;

      // Check if the script has previously been loaded with this key
      var $script = $(`script[src*="${this.key}&"]`);

      if ($script.length === 0) {
        $.getScript(
          `https://maps.googleapis.com/maps/api/js?key=${this.key}`
        ).then(function() {
          apiStatus = "loaded";
          self.createMap();
        });
      } else {
        this.createMap();
      }
    } else {
      mapsToLoad.push(this);

      if (apiStatus !== "loading") {
        apiStatus = "loading";

        if (typeof window.google === "undefined") {
          $.getScript(
            `https://maps.googleapis.com/maps/api/js?key=${this.key}`
          ).then(function() {
            apiStatus = "loaded";
            initAllMaps();
          });
        }
      }
    }
  }

  function initAllMaps() {
    // API has loaded, load all Map instances in queue
    $.each(mapsToLoad, function(index, instance) {
      instance.createMap();
    });
  }

  function geolocate($map) {
    var deferred = $.Deferred();
    var geocoder = new google.maps.Geocoder();
    var address = $map.data("address-setting");

    geocoder.geocode({address: address}, function(results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
        deferred.reject(status);
      }

      deferred.resolve(results);
    });

    return deferred;
  }

  Map.prototype = _.assignIn({}, Map.prototype, {
    createMap: function() {
      var $map = this.$map;

      return geolocate($map)
        .then(
          function(results) {
            var mapOptions = {
              zoom: config.zoom,
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };

            var map = (this.map = new google.maps.Map($map[0], mapOptions));
            var center = (this.center = map.getCenter());

            // eslint-disable-next-line no-unused-vars
            var marker = new google.maps.Marker({
              map: map,
              position: map.getCenter()
            });

            google.maps.event.addDomListener(window, "resize", function() {
              google.maps.event.trigger(map, "resize");
              map.setCenter(center);
              $map.removeAttr("style");
            });
          }.bind(this)
        )
        .fail(function() {
          var errorMessage;

          switch (status) {
            case "ZERO_RESULTS":
              errorMessage = errors.addressNoResults;
              break;
            case "OVER_QUERY_LIMIT":
              errorMessage = errors.addressQueryLimit;
              break;
            case "REQUEST_DENIED":
              errorMessage = errors.authError;
              break;
            default:
              errorMessage = errors.addressError;
              break;
          }

          // Show errors only to merchant in the editor.
          if (Shopify.designMode) {
            $map
              .parent()
              .addClass(classes.mapError)
              .html(`<div class="${classes.errorMsg}">${errorMessage}</div>`);
          }
        });
    },

    onUnload: function() {
      if (this.$map.length === 0) {
        return;
      }

      google.maps.event.clearListeners(this.map, "resize");
    }
  });

  return Map;
})();


window.theme = window.theme || {};

//_QUOTES_SECTION
theme.Quotes = (function() {
  function Quotes(container) {
    var $container = (this.$container = $(container));
    var $slider = $container.find(".slick-quotes");
    var sectionId = $container.attr("data-section-id");
    var slider = (this.slider = `#Quotes-${sectionId}`);

    if (!$slider.length) {
      return;
    }

    var slickOptions = {
      arrows: $slider.data("arrows"),
      dots: $slider.data("dots"),
      autoplay: $slider.data("autoplay"),
      autoplaySpeed: $slider.data("autoplayspeed"),
      slidesToShow: $slider.data("slidetoshow"),
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      speed: theme.variables.transitionSpeed
    };

    var mobileOptions = $.extend({}, slickOptions, {
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: false
    });

    enquire.register(theme.variables.mediaQuerySmallUp, {
      match: function() {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions
        });
      }
    });

    enquire.register(theme.variables.mediaQuerySmall, {
      match: function() {
        theme.carousel.init({
          slider: $slider,
          slickOptions: mobileOptions
        });
      }
    });
  }

  Quotes.prototype = _.assignIn({}, Quotes.prototype, {
    onUnload: function() {
      theme.carousel.destroy($(this.slider));
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $(`.quotes-${evt.detail.blockId}:not(.slick-cloned)`);
      var slideIndex = $slide.attr("data-slick-index");

      // Go to selected slide, pause autoplay
      if (slideIndex) {
        $(this.slider).slick("slickGoTo", slideIndex).slick("slickPause");
      }
    },

    onBlockDeselect: function() {
      var isSliderInitialized = $(this.slider).hasClass("slick-initialized");

      if (isSliderInitialized) {
        // Resume autoplay
        $(this.slider).slick("slickPlay");
      }
    }
  });

  return Quotes;
})();


window.theme = window.theme || {};

//_PRODUCT_GRID_SLIDER
theme.ProductGridSlider = (function() {
  function ProductGridSlider(container) {
    var $container = (this.$container = $(container));
    var sectionId = $container.attr("data-section-id");
    var slider = (this.slider = `#ProductGrid-${sectionId}`);
    var $slider = $container.find(".slick-product-grid");

    if (!$slider.length) {
      return;
    }

    var slickOptions = {
      arrows: $slider.data("arrows"),
      dots: $slider.data("dots"),
      autoplay: $slider.data("autoplay"),
      autoplaySpeed: $slider.data("autoplayspeed"),
      slidesToShow: $slider.data("slidetoshow"),
      slidesToScroll: 1,
      swipeToSlide: true,
      infinite: false,
      speed: theme.variables.transitionSpeed
    };

    var mobileOptions = $.extend({}, slickOptions, {
      slidesToShow: 1,
      centerMode: true,
      focusOnSelect: true,
      autoplay: false,
      infinite: true
    });

    enquire.register(theme.variables.mediaQuerySmallUp, {
      match: function() {
        theme.carousel.init({
          slider: $slider,
          slickOptions: slickOptions
        });
      }
    });

    enquire.register(theme.variables.mediaQuerySmall, {
      match: function() {
        theme.carousel.init({
          slider: $slider,
          slickOptions: mobileOptions
        });
      }
    });
  }

  ProductGridSlider.prototype = _.assignIn({}, ProductGridSlider.prototype, {
    onUnload: function() {
      theme.carousel.destroy($(this.slider));
    }
  });

  return ProductGridSlider;
})();


window.theme = window.theme || {};

//_ANNOUNCEMENT_SECTION
theme.Announcement = (function() {
  function Announcement() {
    var slider = (this.slider = ".slick-announcement");
    var $slider = $(slider);

    if (!$slider.length) {
      return;
    }

    var slickOptions = {
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: $slider.data("autoplayspeed"),
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: theme.variables.transitionSpeed
    };

    theme.carousel.init({
      slider: $slider,
      slickOptions: slickOptions
    });
  }

  Announcement.prototype = _.assignIn({}, Announcement.prototype, {
    onUnload: function() {
      theme.carousel.destroy($(this.slider));
    },

    onBlockSelect: function(evt) {
      // Ignore the cloned version
      var $slide = $(`.announcement-${evt.detail.blockId}:not(.slick-cloned)`);
      var slideIndex = $slide.attr("data-slick-index");

      // Go to selected slide, pause autoplay
      if (slideIndex) {
        $(this.slider).slick("slickGoTo", slideIndex).slick("slickPause");
      }
    },

    onBlockDeselect: function() {
      var isSliderInitialized = $(this.slider).hasClass("slick-initialized");

      if (isSliderInitialized) {
        // Resume autoplay
        $(this.slider).slick("slickPlay");
      }
    }
  });

  return Announcement;
})();


/* ================ _INIT_THEME ================ */
$(document).ready(function() {
  $("body").addClass("page-loaded");

  // INIT_THEME_FUNCTIONS
  theme.init();

  // INIT_THEME_SECTIONS
  var sections = new theme.Sections();
  sections.register("drawer-menu-section", theme.DrawerMenuSection);
  sections.register("product-template", theme.Product);
  sections.register("collection-template", theme.Collection);
  sections.register("hero-section", theme.HeroSlider);
  sections.register("header-section", theme.HeaderSection);
  sections.register("footer-section", theme.FooterSection);
  sections.register("list-collections-template", theme.FeaturedCollections);
  sections.register("password-header", theme.PasswordHeader);
  sections.register("product-recommendations", theme.ProductRecommendations);
  sections.register("product-grid-section", theme.ProductGridSlider);
  sections.register("map-section", theme.Maps);
  sections.register("quotes-section", theme.Quotes);
  sections.register("announcement-section", theme.Announcement);
  sections.register("logo-list-section", theme.LogoList);
});
