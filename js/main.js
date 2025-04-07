/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger.js */ "./src/js/functions/burger.js");
// This file is just a collection of connections for ready-made components.
// It is recommended to create a separate file in the components folder and connect everything there.

// Determining the operating system on mobile

// import { mobileCheck } from "./functions/mobile-check.js";
// console.log(mobileCheck())

// Determining the screen width

// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Throttling functions (for resizing, input, scrolling, etc.)

// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Fix fullscreen blocks

// import './functions/fix-fullheight';

// Implementation of a burger menu



// Implementation of scroll stop (don't forget to call the function)

// import { disableScroll } from './functions/disable-scroll';

// Implementation of scroll enable (don't forget to call the function)

// import { enableScroll } from './functions/enable-scroll';

// Implementing a modal window

// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Implementation of tabs

// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Getting the height of the site header (don't forget to call the function)

// import { getHeaderHeight } from './functions/header-height';

// Connecting the custom scroll plugin

// import 'simplebar';

// Connecting a plugin for positioning tooltips

// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Connecting the swiper

// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Connecting animations by scrolling

// import AOS from 'aos';
// AOS.init();

// Connecting parallax blocks when scrolling

// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Connecting Smooth Scrolling to Anchors

// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Connecting swipe events on mobile

// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Sending has occurred, here you can write any actions');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll.js */ "./src/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll.js */ "./src/js/functions/enable-scroll.js");


(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  burger?.addEventListener('click', e => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Close menu');
      (0,_functions_disable_scroll_js__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
  });
  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Open menu');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      (0,_functions_enable_scroll_js__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
})();

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
};

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars.js */ "./src/js/_vars.js");

const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars_js__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./src/js/functions/header-height.js":
/*!*******************************************!*\
  !*** ./src/js/functions/header-height.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHeaderHeight: () => (/* binding */ getHeaderHeight)
/* harmony export */ });
const getHeaderHeight = () => {
  const headerHeight = document?.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
};

/***/ }),

/***/ "./node_modules/transfer-elements/dist/transfer-elements.esm.min.js":
/*!**************************************************************************!*\
  !*** ./node_modules/transfer-elements/dist/transfer-elements.esm.min.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransferElements)
/* harmony export */ });
/**
 * @file Dynamic transfer of elements from one place to another at breakpoints.
 * @copyright SineYlo, 2024
 * @version 1.0.7
 * @license MIT
 */

class TransferElements{constructor(...e){if(0===e.length)throw TypeError("at least one object with parameters must be specified for the constructor");const o=[];e=e.map(t=>{if("[object Object]"!==this.#getObjectType(t))throw TypeError("the arguments specified for the constructor must be objects of type 'Object'");["sourceElement","breakpoints"].forEach(e=>{if(!Object.hasOwn(t,e))throw TypeError(`the '${e}' parameter is not specified for the main object`)});var{sourceElement:e,breakpoints:r}=t;if(!(e instanceof Element))throw TypeError("the value specified for the 'sourceElement' parameter must be an object of type 'Element'");if(o.includes(e))throw TypeError(`there can only be one object in the constructor with such a 'sourceElement': '${e.cloneNode().outerHTML}'`);return o.push(e),t.breakpoints=this.#assembleBreakpoints(r,e),t});const r=[...e.reduce((t,{breakpoints:e})=>(Object.keys(e).forEach(e=>{Number(e)&&t.add(e)}),t),new Set).add("default")].sort((e,t)=>e-t),n=r.reduce((e,t)=>(e.set(t,[]),e),new Map);e.forEach(({sourceElement:o,breakpoints:e})=>{Object.entries(e).forEach(([e,{targetElement:t,targetPosition:r}])=>{n.get(e).push({sourceElement:o,targetElement:t,targetPosition:r})})}),n.forEach(t=>{this.#sortBreakpointObjects(t),this.#removeSourceElements(t),this.#insertSourceElements(t,!0),t.length=0,o.forEach(e=>{t.push(this.#generateBreakpointObject(e,!0))}),this.#sortBreakpointObjects(t)});let a="default";new ResizeObserver(([{borderBoxSize:[{inlineSize:e}],target:t}])=>{var e=e+this.#getScrollbarWidth(t),t=this.#getBreakpointTrigger(r,e);a!==t&&(e=n.get(t),this.#removeSourceElements(e),this.#insertSourceElements(e,!1),a=t)}).observe(document.documentElement)}#assembleBreakpoints(e,n){if("[object Object]"!==this.#getObjectType(e))throw TypeError("the value specified for the 'breakpoints' parameter must be an object of type 'Object'");e=Object.entries(e);if(0===e.length)throw TypeError("at least one breakpoint must be specified for the 'breakpoints' object");e=Object.fromEntries(e.map(([e,t])=>{e=Number(e);if(!e||e<=0||e>Number.MAX_SAFE_INTEGER)throw RangeError("the breakpoint trigger must be a safe (integer or fractional) number greater than zero");if("[object Object]"!==this.#getObjectType(t))throw TypeError("the breakpoint object must be of type 'Object'");if(!Object.hasOwn(t,"targetElement"))throw TypeError("the 'targetElement' parameter is not specified for the breakpoint object");var{targetElement:r,targetPosition:o}=t;if(!(r instanceof Element))throw TypeError("the value specified for the 'targetElement' parameter must be an object of type 'Element'");if(n===r)throw TypeError("the value specified for the 'targetElement' parameter must be different from the value specified for the 'sourceElement' parameter");if(this.#isTargetElementDescendantOfSourceElement(r,n))throw TypeError("the element that is specified as the value for the 'targetElement' parameter must not be a descendant of the element specified as the value for the 'sourceElement' parameter");if(this.#isTagOfTargetElementSelfClosing(r))throw TypeError("the element specified as the value for the 'targetElement' parameter must be a paired tag");if(Object.hasOwn(t,"targetPosition")){if("number"!=typeof o)throw TypeError("the value specified for the 'targetPosition' parameter must be of type 'number'");if(o<0||!Number.isSafeInteger(o))throw RangeError("the number specified as the value for the 'targetPosition' parameter must be a non-negative safe integer")}return[e,{targetPosition:o??0,...t}]}));return e.default=this.#generateBreakpointObject(n,!1),e}#getChildElementsOfTargetElement(e){return e.children}#getBreakpointTrigger(e,t){let r=0,o=e.length-2,n;for(;r<=o;){var a=Math.floor((r+o)/2),i=e[a];if(i==t)return i;t<i?o=a-1:r=a+1,0<i-t&&(n=i)}return n??"default"}#getScrollbarWidth(e){var t=window.innerWidth,e=Math.min(e.clientWidth,e.offsetWidth);let r=0;return e!==t&&(r+=t-e),r}#getObjectType(e){return Object.prototype.toString.call(e)}#isTargetElementDescendantOfSourceElement(e,t){for(;e=e.parentElement;)if(e===t)return!0;return!1}#isTagOfTargetElementSelfClosing(e){return!new RegExp(/<\/[a-zA-Z]+>$/).test(e.outerHTML)}#sortBreakpointObjects(e){1<e.length&&e.sort((e,t)=>e.targetPosition-t.targetPosition)}#removeSourceElements(e){e.forEach(({sourceElement:e})=>{e.remove()})}#insertSourceElements(e,n){e.forEach(({sourceElement:e,targetElement:t,targetPosition:r})=>{var o=this.#getChildElementsOfTargetElement(t),o=(n&&this.#throwExceptionIfMaximumTargetPositionIsExceeded(o,r),o[r]);o?o.before(e):t.append(e)})}#throwExceptionIfMaximumTargetPositionIsExceeded(e,t){e=e.length;if(e<t)throw RangeError(`the number specified as the value for the 'targetPosition' parameter exceeds the maximum allowed value of '${e}'`)}#generateBreakpointObject(t,e){var r=t.parentElement,r={targetElement:r,targetPosition:[...r.children].findIndex(e=>e===t)};return e&&(r.sourceElement=t),r}}
//# sourceMappingURL=transfer-elements.esm.min.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars.js */ "./src/js/_vars.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions.js */ "./src/js/_functions.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");
/* harmony import */ var transfer_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! transfer-elements */ "./node_modules/transfer-elements/dist/transfer-elements.esm.min.js");
/* harmony import */ var _functions_header_height_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/header-height.js */ "./src/js/functions/header-height.js");





(0,_functions_header_height_js__WEBPACK_IMPORTED_MODULE_4__.getHeaderHeight)();
document.addEventListener('DOMContentLoaded', () => {
  (0,_functions_header_height_js__WEBPACK_IMPORTED_MODULE_4__.getHeaderHeight)();
});
new transfer_elements__WEBPACK_IMPORTED_MODULE_3__["default"]({
  sourceElement: document.querySelector('.header__btn'),
  breakpoints: {
    1024: {
      targetElement: document.querySelector('.header__nav'),
      targetPosition: 1
    }
  }
});

// Fixed header

if (document.querySelectorAll('.header').length > 0) {
  document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
      header.classList.add('scrolling');
    } else {
      header.classList.remove('scrolling');
    }
  });
}

// Tabs

if (document.querySelectorAll('.tabs-wrapper').length > 0) {
  const tabButtons = document.querySelectorAll(".tab-links");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
      let tabContent = document.querySelector('#' + tabButtons[i].dataset.tab);
      let allTabContent = document.querySelectorAll(".tab-content");
      let allTabButtons = document.querySelectorAll(".tab-links");
      for (let j = 0; j < allTabContent.length; j++) {
        allTabContent[j].style.display = "none";
      }
      for (let k = 0; k < allTabButtons.length; k++) {
        allTabButtons[k].classList.remove("active");
      }
      tabContent.style.display = "block";
      this.classList.add("active");
    });
  }
  document.querySelector(".tab-links").click();
}

// Rating for reviews

if (document.querySelectorAll('.rating').length > 0) {
  const ratingItemsList = document.querySelectorAll('.rating__item');
  const ratingItemsArray = [...ratingItemsList];
  ratingItemsArray.forEach(item => {
    item.addEventListener('click', () => {
      const {
        itemValue
      } = item.dataset;
      item.closest('.rating').dataset.totalValue = itemValue;
    });
  });
}

// Get year

if (document.querySelectorAll('.footer').length > 0) {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const footerBlocForYear = document.querySelector('.footer__get-year');
  footerBlocForYear.innerHTML = year;
}

// Activity class ========================================================================================================================================================

if (document.querySelectorAll('.header__nav.menu').length > 0) {
  const menuContainer = document.querySelectorAll('.header__nav.menu ul a');
  menuContainer.forEach(function (el) {
    if (window.location.pathname.indexOf(el.getAttribute('href')) > -1) {
      el.classList.add('is-active');
    } else {
      el.classList.remove('is-active');
    }
  });
}

// Video player

const rootSelector = '[data-js-video-player]';
class VideoPlayer {
  selectors = (() => ({
    root: rootSelector,
    video: '[data-js-video-player-video]',
    panel: '[data-js-video-player-panel]',
    playButton: '[data-js-video-player-play-button]'
  }))();
  stateClasses = {
    isActive: 'is-active'
  };
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.videoElement = this.rootElement.querySelector(this.selectors.video);
    this.panelElement = this.rootElement.querySelector(this.selectors.panel);
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton);
    this.bindEvents();
  }
  onPlayButtonClick = () => {
    this.videoElement.play();
    this.videoElement.controls = true;
    this.panelElement.classList.add(this.stateClasses.isActive);
  };
  onVideoPause = () => {
    this.videoElement.controls = false;
    this.panelElement.classList.remove(this.stateClasses.isActive);
  };
  bindEvents() {
    this.playButtonElement.addEventListener('click', this.onPlayButtonClick);
    this.videoElement.addEventListener('pause', this.onVideoPause);
  }
}
class VideoPlayerCollection {
  constructor() {
    this.init();
  }
  init() {
    document.querySelectorAll(rootSelector).forEach(element => {
      new VideoPlayer(element);
    });
  }
}
new VideoPlayerCollection();

// Expanded container

if (document.querySelectorAll('.single').length > 0) {
  const expandButton = document.querySelectorAll('[data-js-expand-button]');
  expandButton.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.single__content .expand').classList.remove('expand');
    });
  });
}

// Accordion

if (document.querySelectorAll('.accordion-container').length > 0) {
  const menuBtns = document.querySelectorAll(".menu-button");
  menuBtns.forEach(menuBtn => {
    menuBtn.addEventListener("click", function () {
      //----- open only one menu --------------
      const activeAccordion = document.querySelector(".menu-button.open");
      if (activeAccordion && activeAccordion !== this) {
        activeAccordion.nextElementSibling.style.height = 0;
        activeAccordion.classList.remove("open");
      }
      //------------------------------------------------

      this.classList.toggle("open");
      const content = this.nextElementSibling;
      if (this.classList.contains("open")) {
        content.style.height = content.scrollHeight + "px";
      } else {
        content.style.height = 0;
      }
    });
  });
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map