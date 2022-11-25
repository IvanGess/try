/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/animation.js":
/*!****************************************!*\
  !*** ./src/js/components/animation.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

window.addEventListener('load', initPage);

function initPage() {
  createTapEventListener();
  createPlansEventListener();
}

function createTapEventListener() {
  const tapButton = document.querySelectorAll('.swiper-slide');
  Array.from(tapButton).map(x => x.addEventListener('click', increaseModelBlock));
}

function removeTapEventListener() {
  const tapButton = document.querySelectorAll('.swiper-slide');
  Array.from(tapButton).map(x => x.removeEventListener('click', increaseModelBlock));
}

function increaseModelBlock(event) {
  removeTapEventListener();
  const currentModelBlock = event.currentTarget;
  currentModelBlock.classList.add('max-size');
  maximizeSwiperContainer();
  startVideo();
  moveModelTitleToTop(currentModelBlock);
  changeTapToLink(currentModelBlock);
  showVideoBlock(currentModelBlock);
  showtLinkToMoreVideo(currentModelBlock);
  banSwiping();
  createStopVideoListener(currentModelBlock);
  createBackLinkEventListener();
}

function maximizeSwiperContainer() {
  const swiperContainer = document.querySelector('.swiper-container');
  swiperContainer.classList.add('max-width');
}

function startVideo() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const video = currentBlock.querySelector('video');
  video.play();
}

function normalizeSwiperContainer() {
  const swiperContainer = document.querySelector('.max-width');
  swiperContainer.classList.remove('max-width');
}

function moveModelTitleToTop(element) {
  const currentTitle = element.querySelector('.model-title');
  currentTitle.classList.add('title-to-top');
}

function moveModelTitleToDown() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const currentTitle = currentBlock.querySelector('.model-title');
  currentTitle.classList.remove('title-to-top');
}

function changeTapToLink(element) {
  const currentTap = element.querySelector('.tap-button');
  const currentTapLink = element.querySelector('.tap-link');
  const currentTapLSvg = element.querySelector('.tap-svg');
  currentTap.classList.add('tap-to-link');
  currentTapLSvg.classList.add('hidden');
  currentTapLink.classList.add('show');
  currentTapLink.innerHTML = '< Back';
}

function unchangeTapToLink() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const currentTap = currentBlock.querySelector('.tap-button');
  const currentTapLink = currentBlock.querySelector('.tap-link');
  const currentTapLSvg = currentBlock.querySelector('.tap-svg');
  currentTap.classList.remove('tap-to-link');
  currentTapLSvg.classList.remove('hidden');
  currentTapLink.classList.remove('show');
  currentTapLink.innerHTML = '';
}

function showVideoBlock(element) {
  const currentVideoBlock = element.querySelector('.video-block');
  currentVideoBlock.classList.add('show-item');
}

function hideVideoBlock() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const currentVideoBlock = currentBlock.querySelector('.video-block');
  currentVideoBlock.classList.remove('show-item');
}

function showtLinkToMoreVideo(element) {
  const currentLinkToMoreVideo = element.querySelector('.link-to-more-video');
  currentLinkToMoreVideo.classList.add('show-item');
  currentLinkToMoreVideo.addEventListener('click', closeVideoBlock);
}

function hideLinkToMoreVideo() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const currentLinkToMoreVideo = currentBlock.querySelector('.link-to-more-video');
  currentLinkToMoreVideo.classList.remove('show-item');
  currentLinkToMoreVideo.removeEventListener('click', closeVideoBlock);
}

function banSwiping() {
  document.querySelector('.swiper-slide-active').classList.add('swiper-no-swiping');
}

function unbanSwiping() {
  //!todo
  const bannedSwiper = document.querySelector('.swiper-no-swiping');
  console.log(bannedSwiper);
  bannedSwiper.classList.remove("swiper-no-swiping");
}

function createStopVideoListener() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const video = currentBlock.querySelector('video');
  video.addEventListener('ended', blureVideo);
}

function removeStopVideoListener() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const video = currentBlock.querySelector('video');
  video.removeEventListener('ended', blureVideo);
}

function blureVideo() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  currentBlock.querySelector('.video-title').classList.add('hidden');
  currentBlock.querySelector('.video-reviews').classList.add('hidden');
  const videoDescription = currentBlock.querySelector('.video-description');
  videoDescription.classList.add('max-height');
  addContinueWatchingButton(videoDescription);
}

function unblureVideo() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  currentBlock.querySelector('.video-title').classList.remove('hidden');
  currentBlock.querySelector('.video-reviews').classList.remove('hidden');
  currentBlock.querySelector('.video-description').classList.remove('max-height');
}

function addContinueWatchingButton(element) {
  const continueButton = document.createElement('button');
  const continueButtonLink = document.createElement('a');
  continueButton.classList.add('continue-button');
  continueButton.appendChild(continueButtonLink);
  continueButtonLink.textContent = 'Continue watching';
  continueButtonLink.setAttribute('href', '#plans');
  element.appendChild(continueButton);
  continueButton.addEventListener('click', closeVideoBlock);
}

function removeContinueWatchingButton() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  const continueButton = currentBlock.querySelector('.continue-button');

  if (continueButton) {
    continueButton.removeEventListener('click', closeVideoBlock);
    continueButton.remove();
  }
}

function createBackLinkEventListener() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  currentBlock.querySelector('.tap-link').addEventListener('click', closeVideoBlock);
}

function removeBackLinkEventListener() {
  const currentBlock = document.querySelector('.swiper-slide-active');
  currentBlock.querySelector('.tap-link').removeEventListener('click', closeVideoBlock);
}

function normalizeBlockSize() {
  document.querySelector('.max-size').classList.remove('max-size');
}

function closeVideoBlock() {
  removeBackLinkEventListener();
  removeContinueWatchingButton();
  unblureVideo();
  removeStopVideoListener();
  unbanSwiping();
  hideLinkToMoreVideo();
  hideVideoBlock();
  unchangeTapToLink();
  moveModelTitleToDown();
  normalizeSwiperContainer();
  normalizeBlockSize();
  setTimeout(() => createTapEventListener(), 1000);
}

function createPlansEventListener() {
  const plans = document.querySelectorAll('.plan');
  Array.from(plans).map(x => x.addEventListener('click', activatePlan));
}

function activatePlan(event) {
  const currentPlan = document.querySelector('.active');

  if (currentPlan) {
    currentPlan.classList.remove('active');
  }

  const newActivePlan = event.currentTarget;
  newActivePlan.classList.add('active');
}

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["EffectCoverflow"]]);
const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["Swiper"]('.swiper-container', {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 1.6,
  spaceBetween: 0,
  loop: true,
  speed: 600,
  autoHeight: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 25,
    modifier: 25,
    slideShadows: false
  }
});

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let vars = {};
vars.html = document.querySelector('html');

vars.isMobile = () => innerWidth <= 767;

vars.isTablet = () => innerWidth >= 768 && innerWidth <= 1024;

vars.isDesktop = () => innerWidth >= 1025;

vars.winWidth = window.innerWidth;
/* harmony default export */ __webpack_exports__["default"] = (vars);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/animation */ "./src/js/components/animation.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");





/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);


svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map