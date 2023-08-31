/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ \"./styles/style.sass\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _scroll_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll/scroll.js */ \"./scroll/scroll.js\");\n/* harmony import */ var _scroll_scroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _slider_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider/slider.js */ \"./slider/slider.js\");\n/* harmony import */ var _slider_slider_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slider_slider_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.js */ \"./mobile-menu/mobile-menu.js\");\n/* harmony import */ var _mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mobile_menu_mobile_menu_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mobile-menu/mobile-menu.js":
/*!************************************!*\
  !*** ./mobile-menu/mobile-menu.js ***!
  \************************************/
/***/ (() => {

eval("var button = document.getElementById('burger-button');\nvar menu = document.getElementById('burger-menu');\nvar html = document.querySelector('html');\nif (button) {\n  button.addEventListener('click', function () {\n    menu.classList.add('header__burger-menu_show');\n    html.classList.add('disable-scroll');\n  });\n}\nvar header = document.createElement('div');\nheader.classList.add('burger-menu__header');\nvar closeButton = document.createElement('button');\ncloseButton.classList.add('burger-menu__header-button');\ncloseButton.addEventListener('click', function () {\n  menu.classList.remove('header__burger-menu_show');\n  html.classList.remove('disable-scroll');\n});\nvar logo = document.createElement('img');\nlogo.classList.add('burger-menu__header-logo');\nlogo.setAttribute('src', 'img/main-logo-black.svg');\nvar main = document.createElement('div');\nmain.classList.add('burger-menu__main');\nvar list = document.createElement('ul');\nlist.classList.add('burger-menu__list');\nvar listContent = [{\n  name: 'Прямая трансляция'\n}, {\n  name: 'Ханты-Мансийск'\n}, {\n  name: 'Новости'\n}, {\n  name: 'Участники'\n}, {\n  name: 'Основаня информация',\n  additionals: ['О Ханты-Мансийске', 'История кубка мира', 'Информация для участников']\n}, {\n  name: 'Результаты'\n}, {\n  name: 'Медиа'\n}, {\n  name: 'Конакты'\n}];\nlistContent.forEach(function (item) {\n  var listItem = document.createElement('li');\n  listItem.classList.add('burger-menu__list-item');\n  var link = document.createElement('a');\n  link.classList.add('burger-menu__list-link');\n  link.innerText = item.name;\n  listItem.appendChild(link);\n  if (item.additionals) {\n    var arrow = document.createElement('span');\n    arrow.classList.add('burger-menu__arrow-closed', 'burger-menu__content-arrow');\n    link.appendChild(arrow);\n    var divElement = document.createElement('div');\n    divElement.classList.add('burger-menu__list-additional');\n    item.additionals.forEach(function (additional, index) {\n      var additionalElement = document.createElement('a');\n      additionalElement.innerText = additional;\n      additionalElement.classList.add('burger-menu__additional-item');\n      divElement.appendChild(additionalElement);\n      if (index != item.additionals.length - 1) {\n        var hr = document.createElement('hr');\n        divElement.appendChild(hr);\n      }\n    });\n    listItem.appendChild(divElement);\n    divElement.style.display = 'none';\n    link.addEventListener('click', function () {\n      if (divElement.style.display === 'none') {\n        arrow.classList.toggle('burger-menu__arrow-opened');\n        arrow.classList.toggle('burger-menu__arrow-closed');\n        divElement.style.display = 'block';\n      } else {\n        arrow.classList.toggle('burger-menu__arrow-opened');\n        arrow.classList.toggle('burger-menu__arrow-closed');\n        divElement.style.display = 'none';\n      }\n    });\n  }\n  list.appendChild(listItem);\n});\nvar controls = document.createElement('div');\ncontrols.classList.add('burger-menu__controls');\nvar glasses = document.createElement('button');\nglasses.classList.add('burger-menu__controls-glasses');\nglasses.setAttribute('src', 'img/glasses.svg');\nvar lang = document.createElement('div');\nlang.classList.add('burger-menu__controls-lang');\nvar ru = document.createElement('div');\nru.textContent = 'Ru';\nru.classList.add('burger-menu__lang');\nru.classList.add('burger-menu__lang_selected');\nlang.appendChild(ru);\nvar eng = document.createElement('div');\neng.textContent = 'En';\neng.classList.add('burger-menu__lang');\nlang.appendChild(eng);\nvar footer = document.createElement('div');\nfooter.classList.add('burger-menu__footer');\nvar phone = document.createElement('div');\nphone.classList.add('burger-menu__footer-phone');\nvar loc = document.createElement('span');\nloc.classList.add('burger-menu__footer-phone-loc');\nloc.textContent = '+7 (3467) ';\nvar identity = document.createElement('span');\nidentity.classList.add('burger-menu__footer-phone-identity');\nidentity.textContent = '555-321';\nvar address = document.createElement('div');\naddress.classList.add('burger-menu__footer-address');\naddress.textContent = 'г. Ханты-Мансийск, ул. Лопарева';\nmenu.appendChild(header);\nheader.appendChild(logo);\nheader.appendChild(closeButton);\nmenu.appendChild(main);\nmain.appendChild(list);\nmain.appendChild(controls);\ncontrols.appendChild(glasses);\ncontrols.appendChild(lang);\nmain.appendChild(footer);\nfooter.appendChild(phone);\nphone.appendChild(loc);\nphone.appendChild(identity);\nfooter.appendChild(address);\n\n//# sourceURL=webpack:///./mobile-menu/mobile-menu.js?");

/***/ }),

/***/ "./scroll/scroll.js":
/*!**************************!*\
  !*** ./scroll/scroll.js ***!
  \**************************/
/***/ (() => {

eval("var buttonScroll = document.getElementById('scroll-button');\nbuttonScroll.addEventListener('click', function () {\n  window.scrollTo({\n    top: 0,\n    behavior: 'smooth'\n  });\n});\n\n//# sourceURL=webpack:///./scroll/scroll.js?");

/***/ }),

/***/ "./slider/slider.js":
/*!**************************!*\
  !*** ./slider/slider.js ***!
  \**************************/
/***/ (() => {

eval("var slider = document.querySelector('.slider');\nvar prevButton = document.getElementById('prevButton');\nvar nextButton = document.getElementById('nextButton');\nvar progressBar = document.querySelector('.progress-bar');\nvar sliderList = document.querySelector('.slider-list');\nvar currentPosition = 0;\nvar scrollAmount = 200;\nvar progressPercentage = 0;\nvar containerWidth = slider.offsetWidth;\nvar contentWidth = slider.scrollWidth;\nprevButton.addEventListener('click', function () {\n  if (progressPercentage != 0) {\n    currentPosition += scrollAmount;\n    sliderList.style.transform = \"translateX(\".concat(currentPosition, \"px)\");\n    updateProgressBar();\n    if (progressPercentage === 0) {\n      progressBar.style.width = \"\".concat(7, \"%\");\n      prevButton.classList.remove('left-switch-active');\n    }\n    nextButton.classList.add('right-switch-active');\n  }\n});\nnextButton.classList.add('right-switch-active');\nnextButton.addEventListener('click', function () {\n  if (progressPercentage != 100) {\n    currentPosition -= scrollAmount;\n    sliderList.style.transform = \"translateX(\".concat(currentPosition, \"px)\");\n    updateProgressBar();\n  }\n  if (progressPercentage != 0) {\n    prevButton.classList.add('left-switch-active');\n  } else {\n    prevButton.classList.remove('left-switch-active');\n  }\n});\n/**\r\n * Вычисляет длинну прогресс-бара\r\n */\nfunction updateProgressBar() {\n  progressPercentage = Math.abs(currentPosition / (contentWidth - containerWidth) * 100);\n  progressPercentage = Math.min(progressPercentage, 100);\n  if (progressPercentage === 100) {\n    nextButton.classList.remove('right-switch-active');\n  }\n  progressBar.style.width = \"\".concat(progressPercentage, \"%\");\n}\n\n//# sourceURL=webpack:///./slider/slider.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/main-logo-black.svg */ \"./img/main-logo-black.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fide-icon.svg */ \"./img/fide-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/city-icon.svg */ \"./img/city-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/info-cubes.svg */ \"./img/info-cubes.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/info-squares.svg */ \"./img/info-squares.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/twitter-icon.svg */ \"./img/twitter-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/instagram-icon.svg */ \"./img/instagram-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/facebook-icon.svg */ \"./img/facebook-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/rectangle-date.svg */ \"./img/rectangle-date.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/alternative-twitter-icon.svg */ \"./img/alternative-twitter-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/alternative-instagram-icon.svg */ \"./img/alternative-instagram-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/alternative-facebook-icon.svg */ \"./img/alternative-facebook-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news-cubes-right.svg */ \"./img/news-cubes-right.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news-squares-left.svg */ \"./img/news-squares-left.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news-cubes-mini.svg */ \"./img/news-cubes-mini.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news-squares-right.svg */ \"./img/news-squares-right.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news-cubes-left.svg */ \"./img/news-cubes-left.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/news-picture.svg */ \"./img/news-picture.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/green-line.svg */ \"./img/green-line.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner1.svg */ \"./img/partner1.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner2.svg */ \"./img/partner2.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner3.svg */ \"./img/partner3.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner4.svg */ \"./img/partner4.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner5.svg */ \"./img/partner5.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner6.svg */ \"./img/partner6.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./img/partner7.svg */ \"./img/partner7.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./img/main-logo-white.svg */ \"./img/main-logo-white.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Khanty-chess-icon.svg */ \"./img/Khanty-chess-icon.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <meta name=\\\"description\\\" content=\\\" Кубок мира ФИДЕ проходит с 9 сентября по 4 октября в Ханты-Мансийске.\\\">\\r\\n    <meta name=\\\"keywords\\\" content=\\\"Chess World Cup 2019,Chess World Cup 2019,International Chess Tournament,Prestigious Chess Event,Top Chess Players,Knockout Format Tournament,High-level Chess Games,\\r\\n    Strategies and Tactics,Chess World Cup Results,Dates and Information,Search for Chess World Cup 2019,Chess,Tournament,Cup,2019,International,Games,Competition,Participants,Results,Strategies,Шахматы\\r\\n    Турнир,Кубок,2019,Мировой,Игры,Соревнование,Участники,Результаты,Стратегии,Кубок мира по шахматам 2019,Международный турнир по шахматам,Престижное шахматное событие,Лучшие шахматисты мира,\\r\\n    Турнир в формате выбывания,Игры высокого уровня,Стратегии и тактики на высоком уровне,Результаты кубка мира по шахматам,Даты и информация о турнире\\\">\\r\\n    <title>Кубок мира по шахматам 2019</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header class=\\\"header\\\">\\r\\n        <div class=\\\"header__rectangle-green\\\"></div>\\r\\n        <div class=\\\"container header__container\\\">\\r\\n            <div class=\\\"header__logo\\\">\\r\\n                <img class=\\\"main-logo\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"main-logo-black\\\">\\r\\n                <div class=\\\"header__icons\\\">\\r\\n                    <img class=\\\"fide-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"fide-icon\\\">\\r\\n                    <img class=\\\"city-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"city-icon\\\">\\r\\n                </div>\\r\\n            </div>\\r\\n            <nav class=\\\"header__menu\\\">\\r\\n                <ul class=\\\"header__menu-list\\\">\\r\\n                    <a class=\\\"header__menu-item\\\">Прямая трансляция</a>\\r\\n                    <a class=\\\"header__menu-item\\\">Ханты-Мансийск</a>\\r\\n                    <a class=\\\"header__menu-item\\\">Новости</a >\\r\\n                    <a class=\\\"header__menu-item\\\">Участники</a >\\r\\n                </ul>\\r\\n                <ul class=\\\"header__menu-list\\\">\\r\\n                    <a class=\\\"header__menu-item\\\">Основная информация</a>\\r\\n                    <a class=\\\"header__menu-item\\\">Результаты</a>\\r\\n                    <a class=\\\"header__menu-item\\\">Медиа</a>\\r\\n                    <a class=\\\"header__menu-item\\\">Контакты</a>\\r\\n                </ul>\\r\\n            </nav>\\r\\n            <div class=\\\"header__language\\\">\\r\\n                <div class=\\\"header__language-item header__language-item-selected\\\">Ru</div>\\r\\n                <div class=\\\"header__language-item\\\">En</div>\\r\\n            </div>\\r\\n            <button class=\\\"header__glasses\\\">\\r\\n            <button class=\\\"header__burger-menu-button\\\" id=\\\"burger-button\\\">\\r\\n            </button>\\r\\n            <div class=\\\"header__burger-menu\\\" id=\\\"burger-menu\\\"></div>\\r\\n        </div>    \\r\\n    </header>\\r\\n    <main>\\r\\n        <div class=\\\"info\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"info-cubes\\\" alt=\\\"info-cubes\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" class=\\\"info-squares\\\" alt=\\\"info-squares\\\">\\r\\n            <div class=\\\"info__containter container\\\">\\r\\n                <div class=\\\"info__rectangle-right\\\"></div>\\r\\n                <div class=\\\"info__rectangle-left\\\"></div>\\r\\n                <div class=\\\"info__section\\\">\\r\\n                    <div class=\\\"info__section-top\\\" >\\r\\n                        <h1 class=\\\"info__title\\\">\\r\\n                            Кубок мира \\r\\n                        </br> \\r\\n                            по шахматам \\r\\n                        </br> \\r\\n                        <span class=\\\"year\\\">2019</span> \\r\\n                        </h1>\\r\\n                    </div>\\r\\n                    <div class=\\\"info__section-bottom\\\">\\r\\n                        <div class=\\\"info__reg-socials\\\">\\r\\n                            <div class=\\\"info__button-container\\\">\\r\\n                                <button class=\\\"reg-button reg-button__text\\\">\\r\\n                                    Регистрация\\r\\n                                </button>\\r\\n                            </div>\\r\\n                            <ul class=\\\"socials\\\">\\r\\n                                <li class=\\\"socials-item\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"twitter-icon\\\">\\r\\n                                </li>\\r\\n                                <li class=\\\"socials-item\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"instagram-icon\\\">\\r\\n                                </li>\\r\\n                                <li class=\\\"socials-item\\\">\\r\\n                                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"facebook-icon\\\">\\r\\n                                </li>\\r\\n                            </ul>\\r\\n                        </div>\\r\\n                        <div class=\\\"info__date\\\">\\r\\n                            <div class=\\\"tournament-date\\\">\\r\\n                                <div class=\\\"date\\\"><span class=\\\"date-number\\\">9 </span><span class=\\\"date-name\\\">сентября</span></div>\\r\\n                                <img class=\\\"rectangle-date\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"rectangle-date\\\">\\r\\n                                <div class=\\\"date\\\"><span class=\\\"date-number\\\">4 </span><span class=\\\"date-name\\\">октября</span></div>\\r\\n                            </div>\\r\\n                            <div class=\\\"city city__text\\\">Ханты-Мансийск</div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"alternative-socials\\\">\\r\\n                        <ul class=\\\"alternative-socials__container\\\">\\r\\n                            <li class=\\\"socials-item\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"alternative-twitter-icon\\\">\\r\\n                            </li>\\r\\n                            <li class=\\\"socials-item\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"alternative-instagram-icon\\\">\\r\\n                            </li>\\r\\n                            <li class=\\\"socials-item\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"alternative-facebook-icon\\\">\\r\\n                            </li>\\r\\n                        </ul>\\r\\n                    </div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\\\"news\\\">\\r\\n            <div class=\\\"news__rectangle-green\\\"></div>\\r\\n            <img class=\\\"news-cubes-right\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"news-cubes-right\\\">    \\r\\n            <img class=\\\"news-squares-left\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"news-squares-left\\\">\\r\\n            <img class=\\\"news-cubes-mini\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"news-cubes-mini\\\">\\r\\n            <img class=\\\"news-squares-right\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"news-squares-right\\\">\\r\\n            <img class=\\\"news-cubes-left\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"news-cubes-left\\\">\\r\\n            <div class=\\\"news__container container\\\">\\r\\n                <div class=\\\"news__rectangle_gray\\\" ></div>\\r\\n                <div class=\\\"news__title content-title\\\">\\r\\n                    <h2 class=\\\"content-title__text\\\">\\r\\n                        <div class=\\\"content-title__text-bold\\\">Новости</div>\\r\\n                        <div class=\\\"content-title__text-normal\\\">турнира</div>\\r\\n                    </h2>\\r\\n                    <div class=\\\"news__rectangle_title content-title__rectangle\\\"></div>\\r\\n                </div>\\r\\n                <div class=\\\"news__list\\\">\\r\\n                    <div class=\\\"news__list-item\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" class=\\\"news__list-picture\\\" alt=\\\"news-picture\\\">\\r\\n                        <div class=\\\"news__list-info\\\">\\r\\n                            <div class=\\\"news__list-date\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" class=\\\"green-line\\\" alt=\\\"green-line\\\">\\r\\n                                <div class=\\\"green-text\\\">\\r\\n                                    <span class=\\\"double-slash\\\">\\r\\n                                        //\\r\\n                                    </span>\\r\\n                                    <span>\\r\\n                                        2 дня назад\\r\\n                                    </span class=\\\"green-text__time\\\">\\r\\n                                </div>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"news__list-title\\\">Церемония закрытия FIDE World cup 2019</h3>\\r\\n                            <div class=\\\"news__list-text\\\">\\r\\n                                Церемония закрытия состоялась в отеле Biltmore в Тбилиси 27 сентября 2017 года. Игроков и гостей приветствовал министр спорта по делам молодежи.\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"news__list-item news__list-item_right\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" class=\\\"news__list-picture\\\" alt=\\\"news-picture\\\">\\r\\n                        <div class=\\\"news__list-info\\\">\\r\\n                            <div class=\\\"news__list-date\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" class=\\\"green-line\\\" alt=\\\"green-line\\\">\\r\\n                                <div class=\\\"green-text\\\">\\r\\n                                    <span class=\\\"double-slash\\\">\\r\\n                                        //\\r\\n                                    </span>\\r\\n                                    <span class=\\\"green-text__time\\\">\\r\\n                                        2 дня назад\\r\\n                                    </span>\\r\\n                                </div>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"news__list-title\\\">Церемония закрытия FIDE World cup 2019</h3>    \\r\\n                            <div class=\\\"news__list-text\\\">Церемония закрытия состоялась в отеле Biltmore в Тбилиси 27 сентября 2017 года. Игроков и гостей приветствовал министр спорта по делам молодежи.</label>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"news__list-item\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" class=\\\"news__list-picture\\\" alt=\\\"news-picture\\\">\\r\\n                        <div class=\\\"news__list-info\\\">\\r\\n                            <div class=\\\"news__list-date\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" class=\\\"green-line\\\" alt=\\\"green-line\\\">\\r\\n                                <div class=\\\"green-text\\\">\\r\\n                                    <span class=\\\"double-slash\\\">\\r\\n                                        //\\r\\n                                    </span>\\r\\n                                    <span class=\\\"green-text__time\\\">\\r\\n                                        2 дня назад\\r\\n                                    </span>\\r\\n                                </div>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"news__list-title\\\">Церемония закрытия FIDE World cup 2019</h3>\\r\\n                            <div class=\\\"news__list-text\\\">Церемония закрытия состоялась в отеле Biltmore в Тбилиси 27 сентября 2017 года. Игроков и гостей приветствовал министр спорта по делам молодежи.</label>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"news__list-item news__list-item_right\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" class=\\\"news__list-picture\\\" alt=\\\"news-picture\\\">\\r\\n                        <div class=\\\"news__list-info\\\">\\r\\n                            <div class=\\\"news__list-date\\\">\\r\\n                                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" class=\\\"green-line\\\" alt=\\\"green-line\\\">\\r\\n                                <div class=\\\"green-text\\\">\\r\\n                                    <span class=\\\"double-slash\\\">\\r\\n                                        //\\r\\n                                    </span>\\r\\n                                    <span class=\\\"green-text__time\\\">\\r\\n                                        2 дня назад\\r\\n                                    </span>\\r\\n                                </div>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"news__list-title\\\">Церемония закрытия FIDE World cup 2019</h3>\\r\\n                            <div class=\\\"news__list-text\\\" >Церемония закрытия состоялась в отеле Biltmore в Тбилиси 27 сентября 2017 года. Игроков и гостей приветствовал министр спорта по делам молодежи.</label>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <button class=\\\"show-button show-button__text\\\">\\r\\n                        Показать еще\\r\\n                    </button>\\r\\n                </div>\\r\\n            </div>\\r\\n            <hr>\\r\\n        </div>\\r\\n        <div class=\\\"partners\\\">\\r\\n            <div class=\\\"partners__container container\\\">\\r\\n                <div class=\\\"partners__title\\\">\\r\\n                    <div class=\\\"partners__title-text content-title\\\">\\r\\n                        <h2 class=\\\"content-title__text content-title__text-bold\\\">Партнеры</h2>\\r\\n                        <div class=\\\"partners__rectangle_title content-title__rectangle\\\"></div>\\r\\n                    </div>\\r\\n                    <div class=\\\"partners__switchers\\\">\\r\\n                        <button class=\\\"partners__switchers-button left-switch\\\" id=\\\"prevButton\\\"></button>\\r\\n                        <button class=\\\"partners__switchers-button right-switch\\\" id=\\\"nextButton\\\"></button>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"slider\\\">\\r\\n                    <ul class=\\\"slider-list\\\">\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"partner1\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"partner2\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"partner3\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" alt=\\\"partner4\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" alt=\\\"partner5\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"partner6\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" alt=\\\"partner7\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"partner1\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"partner2\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"partner3\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" alt=\\\"partner4\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" alt=\\\"partner5\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"partner6\\\">\\r\\n                        </li>\\r\\n                        <li class=\\\"slider-item\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" alt=\\\"partner7\\\">\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                  </div>\\r\\n                <div class=\\\"progress-bar-container\\\">\\r\\n                    <div class=\\\"progress-bar\\\"></div>\\r\\n                </div>\\r\\n            </div>\\r\\n        </div>\\r\\n        <footer class=\\\"footer\\\">\\r\\n            <div class=\\\"footer__container container\\\" >\\r\\n                <div class=\\\"footer__info\\\">\\r\\n                    <div class=\\\"footer__info-logo\\\">\\r\\n                        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" alt=\\\"main-logo-white\\\">\\r\\n                        <div class=\\\"footer__info-icons\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"fide-icon\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"city-icon\\\">\\r\\n                            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" alt=\\\"Khanty-chess-icon\\\">\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\\"footer__info-text\\\">Копирование информации, допускается, только с указанием активной ссылки на сайт</div>\\r\\n                </div>\\r\\n                <nav class=\\\"footer__menu\\\">\\r\\n                    <ul class=\\\"footer__menu-list\\\">\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">На главную</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">О Ханты-Мансийске</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">Информация для участников</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">История кубка мира</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">Контакты</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">Турнирная сетка</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">Фото/Видео</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"footer__menu-list-item\\\">\\r\\n                            <a class=\\\"footer__menu-item-link\\\" href=\\\"\\\">Таблица результатов</a>\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                </nav>\\r\\n                <div class=\\\"footer__contact\\\">\\r\\n                    <div class=\\\"footer__contact-phone\\\">+7 (3467) 555-321</div>\\r\\n                    <div class=\\\"footer__contact-mail\\\">mail@mail.ru</div>\\r\\n                    <div class=\\\"footer__contact-address\\\">Ханты-Мансийск Лопарева,6</div>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"footer_title footer_title-text\\\">\\r\\n                Разработка — Югорские Интернет Решения\\r\\n            </div>\\r\\n            <div class=\\\"footer__scroll\\\">\\r\\n                <button class=\\\"scroll-button\\\" id=\\\"scroll-button\\\">\\r\\n            </div>\\r\\n        </footer>\\r\\n    </main>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./styles/style.sass":
/*!***************************!*\
  !*** ./styles/style.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.sass?");

/***/ }),

/***/ "./img/Khanty-chess-icon.svg":
/*!***********************************!*\
  !*** ./img/Khanty-chess-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/Khanty-chess-icon.svg\";\n\n//# sourceURL=webpack:///./img/Khanty-chess-icon.svg?");

/***/ }),

/***/ "./img/alternative-facebook-icon.svg":
/*!*******************************************!*\
  !*** ./img/alternative-facebook-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/alternative-facebook-icon.svg\";\n\n//# sourceURL=webpack:///./img/alternative-facebook-icon.svg?");

/***/ }),

/***/ "./img/alternative-instagram-icon.svg":
/*!********************************************!*\
  !*** ./img/alternative-instagram-icon.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/alternative-instagram-icon.svg\";\n\n//# sourceURL=webpack:///./img/alternative-instagram-icon.svg?");

/***/ }),

/***/ "./img/alternative-twitter-icon.svg":
/*!******************************************!*\
  !*** ./img/alternative-twitter-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/alternative-twitter-icon.svg\";\n\n//# sourceURL=webpack:///./img/alternative-twitter-icon.svg?");

/***/ }),

/***/ "./img/city-icon.svg":
/*!***************************!*\
  !*** ./img/city-icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/city-icon.svg\";\n\n//# sourceURL=webpack:///./img/city-icon.svg?");

/***/ }),

/***/ "./img/facebook-icon.svg":
/*!*******************************!*\
  !*** ./img/facebook-icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/facebook-icon.svg\";\n\n//# sourceURL=webpack:///./img/facebook-icon.svg?");

/***/ }),

/***/ "./img/fide-icon.svg":
/*!***************************!*\
  !*** ./img/fide-icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/fide-icon.svg\";\n\n//# sourceURL=webpack:///./img/fide-icon.svg?");

/***/ }),

/***/ "./img/green-line.svg":
/*!****************************!*\
  !*** ./img/green-line.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/green-line.svg\";\n\n//# sourceURL=webpack:///./img/green-line.svg?");

/***/ }),

/***/ "./img/info-cubes.svg":
/*!****************************!*\
  !*** ./img/info-cubes.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/info-cubes.svg\";\n\n//# sourceURL=webpack:///./img/info-cubes.svg?");

/***/ }),

/***/ "./img/info-squares.svg":
/*!******************************!*\
  !*** ./img/info-squares.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/info-squares.svg\";\n\n//# sourceURL=webpack:///./img/info-squares.svg?");

/***/ }),

/***/ "./img/instagram-icon.svg":
/*!********************************!*\
  !*** ./img/instagram-icon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/instagram-icon.svg\";\n\n//# sourceURL=webpack:///./img/instagram-icon.svg?");

/***/ }),

/***/ "./img/main-logo-black.svg":
/*!*********************************!*\
  !*** ./img/main-logo-black.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/main-logo-black.svg\";\n\n//# sourceURL=webpack:///./img/main-logo-black.svg?");

/***/ }),

/***/ "./img/main-logo-white.svg":
/*!*********************************!*\
  !*** ./img/main-logo-white.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/main-logo-white.svg\";\n\n//# sourceURL=webpack:///./img/main-logo-white.svg?");

/***/ }),

/***/ "./img/news-cubes-left.svg":
/*!*********************************!*\
  !*** ./img/news-cubes-left.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/news-cubes-left.svg\";\n\n//# sourceURL=webpack:///./img/news-cubes-left.svg?");

/***/ }),

/***/ "./img/news-cubes-mini.svg":
/*!*********************************!*\
  !*** ./img/news-cubes-mini.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/news-cubes-mini.svg\";\n\n//# sourceURL=webpack:///./img/news-cubes-mini.svg?");

/***/ }),

/***/ "./img/news-cubes-right.svg":
/*!**********************************!*\
  !*** ./img/news-cubes-right.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/news-cubes-right.svg\";\n\n//# sourceURL=webpack:///./img/news-cubes-right.svg?");

/***/ }),

/***/ "./img/news-picture.svg":
/*!******************************!*\
  !*** ./img/news-picture.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/news-picture.svg\";\n\n//# sourceURL=webpack:///./img/news-picture.svg?");

/***/ }),

/***/ "./img/news-squares-left.svg":
/*!***********************************!*\
  !*** ./img/news-squares-left.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/news-squares-left.svg\";\n\n//# sourceURL=webpack:///./img/news-squares-left.svg?");

/***/ }),

/***/ "./img/news-squares-right.svg":
/*!************************************!*\
  !*** ./img/news-squares-right.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/news-squares-right.svg\";\n\n//# sourceURL=webpack:///./img/news-squares-right.svg?");

/***/ }),

/***/ "./img/partner1.svg":
/*!**************************!*\
  !*** ./img/partner1.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner1.svg\";\n\n//# sourceURL=webpack:///./img/partner1.svg?");

/***/ }),

/***/ "./img/partner2.svg":
/*!**************************!*\
  !*** ./img/partner2.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner2.svg\";\n\n//# sourceURL=webpack:///./img/partner2.svg?");

/***/ }),

/***/ "./img/partner3.svg":
/*!**************************!*\
  !*** ./img/partner3.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner3.svg\";\n\n//# sourceURL=webpack:///./img/partner3.svg?");

/***/ }),

/***/ "./img/partner4.svg":
/*!**************************!*\
  !*** ./img/partner4.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner4.svg\";\n\n//# sourceURL=webpack:///./img/partner4.svg?");

/***/ }),

/***/ "./img/partner5.svg":
/*!**************************!*\
  !*** ./img/partner5.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner5.svg\";\n\n//# sourceURL=webpack:///./img/partner5.svg?");

/***/ }),

/***/ "./img/partner6.svg":
/*!**************************!*\
  !*** ./img/partner6.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner6.svg\";\n\n//# sourceURL=webpack:///./img/partner6.svg?");

/***/ }),

/***/ "./img/partner7.svg":
/*!**************************!*\
  !*** ./img/partner7.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/partner7.svg\";\n\n//# sourceURL=webpack:///./img/partner7.svg?");

/***/ }),

/***/ "./img/rectangle-date.svg":
/*!********************************!*\
  !*** ./img/rectangle-date.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/rectangle-date.svg\";\n\n//# sourceURL=webpack:///./img/rectangle-date.svg?");

/***/ }),

/***/ "./img/twitter-icon.svg":
/*!******************************!*\
  !*** ./img/twitter-icon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/twitter-icon.svg\";\n\n//# sourceURL=webpack:///./img/twitter-icon.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;