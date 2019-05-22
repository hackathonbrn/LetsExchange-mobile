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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"app": 0
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
/******/ 	deferredModules.push(["./src/scripts/index.js","js/vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/api/serverTools.js":
/*!****************************************!*\
  !*** ./src/scripts/api/serverTools.js ***!
  \****************************************/
/*! exports provided: ServerTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerTools", function() { return ServerTools; });
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/app */ "./src/scripts/app/app.js");
/* harmony import */ var _app_appKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/appKey */ "./src/scripts/app/appKey.js");
/* harmony import */ var _components_listGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/listGame */ "./src/scripts/components/listGame.js");
/* harmony import */ var _components_findGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/findGame */ "./src/scripts/components/findGame.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var ServerTools =
/*#__PURE__*/
function () {
  function ServerTools() {
    _classCallCheck(this, ServerTools);

    this.appKey = _app_appKey__WEBPACK_IMPORTED_MODULE_2__["AppKey"].getKey();
    this.domen = 'http://hackaton.dev.letsrock.pro';
    this.storagePath = this.domen + '/storage/';
  }

  _createClass(ServerTools, [{
    key: "send",
    value: function send(data, url, successFunc) {
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'POST';
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        headers: {
          'X-CSRF-TOKEN': localStorage.getItem('verifyCode')
        },
        url: url,
        type: type,
        data: data,
        success: successFunc
      });
    }
  }, {
    key: "getVerifyCode",
    value: function getVerifyCode() {
      var url = this.domen + '/verifild';
      var backKey = '';

      var callback = function callback(request) {
        if (!!request) {
          request = JSON.parse(request);

          if (!!!request.error) {
            backKey = request.BACK_KEY;
            localStorage.setItem('verifyCode', backKey);
          }
        }
      };

      var data = {
        APP_KEY: this.appKey
      };
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: callback
      });
    }
  }, {
    key: "getConsoles",
    value: function getConsoles() {
      var url = this.domen + '/allConsole';

      var callback = function callback(request) {
        request.forEach(function (el) {
          jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-consoles').append('<input class="js-console" type="radio" id="console' + el.id + '" name="console" value="' + el.id + '" class="welcome__console-radio">\n' + '\t\t\t<label for="console' + el.id + '" class="welcome__console-item">\n' + el.name + '\t\t\t</label>');
          jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-console-select').append('<option value="' + el.id + '">' + el.name + '</option>');
        });
      };

      var data = {};
      this.send(data, url, callback, 'GET');
    }
  }, {
    key: "registration",
    value: function registration(formData) {
      var url = this.domen + '/register'; // const url = '/ajax/register.json';

      var callback = function callback(request) {
        if (request.success) {
          localStorage.setItem('userId', request.user.id);
          localStorage.setItem('userName', request.user.name);
          localStorage.setItem('userEmail', request.user.email);
          localStorage.setItem('isRegister', 'Y');
          _app_app__WEBPACK_IMPORTED_MODULE_1__["App"].setActiveScreen('.js-screen-console');
        }
      };

      this.send(formData, url, callback);
    }
  }, {
    key: "auth",
    value: function auth(formData) {
      var _this = this;

      var url = this.domen + '/login';

      var callback = function callback(request) {
        if (request.success) {
          localStorage.setItem('userId', request.user.id);
          localStorage.setItem('userName', request.user.name);
          localStorage.setItem('userEmail', request.user.email);
          localStorage.setItem('isRegister', 'Y');

          if (!!request.user.console) {
            localStorage.setItem('consoleId', request.user.console.id);

            _this.getExchange(request.user.console.id);

            _app_app__WEBPACK_IMPORTED_MODULE_1__["App"].setActiveScreen('.js-screen-main');
          } else {
            _app_app__WEBPACK_IMPORTED_MODULE_1__["App"].setActiveScreen('.js-screen-console');
          }
        }
      };

      this.send(formData, url, callback);
    }
  }, {
    key: "find",
    value: function find(formData) {
      var url = this.domen + '/listex';

      var callback = function callback(request) {
        var listGames = new _components_listGame__WEBPACK_IMPORTED_MODULE_3__["ListGame"]();
        listGames.addExchangeByConsole(request, true);
      };

      var data = {
        id_console: localStorage.getItem('currentConsoleId'),
        game_wish: formData.wish,
        game_have: formData.have,
        user_id: localStorage.getItem('userId')
      };
      this.send(data, url, callback, 'GET');
    }
  }, {
    key: "getExchange",
    value: function getExchange(consoleId) {
      if (!!!consoleId) {
        return 0;
      }

      localStorage.setItem('currentConsoleId', consoleId);
      var url = this.domen + '/listex';

      var callback = function callback(request) {
        var listGames = new _components_listGame__WEBPACK_IMPORTED_MODULE_3__["ListGame"]();
        listGames.addExchangeByConsole(request);
      };

      var data = {
        id_console: consoleId,
        user_id: localStorage.getItem('userId')
      };
      this.send(data, url, callback, 'GET');
    }
  }, {
    key: "saveUserConsole",
    value: function saveUserConsole(consoleId) {
      var url = this.domen + '/setConsole';

      var callback = function callback(request) {
        if (request.success) {
          localStorage.setItem('consoleId', consoleId);
        }
      };

      var data = {
        id: localStorage.getItem('consoleId'),
        id_console: consoleId
      };
      this.send(data, url, callback);
    }
  }, {
    key: "addExchange",
    value: function addExchange(fields) {
      var url = this.domen + '/addExchange';

      var callback = function callback(request) {
        if (request.success) {
          _app_app__WEBPACK_IMPORTED_MODULE_1__["App"].setActiveScreen('.js-screen-main');
        }
      };

      var data = {
        user_id: localStorage.getItem('userId'),
        game_wish: fields.wish,
        game_have: fields.have,
        phone: fields.phone,
        description: fields.description
      };
      this.send(data, url, callback);
    }
  }, {
    key: "getGames",
    value: function getGames(query) {
      var url = this.domen + '/search-game';

      var callback = function callback(request) {
        if (!!request) {
          var findGame = new _components_findGame__WEBPACK_IMPORTED_MODULE_4__["FindGame"]();
          findGame.addExchangeByConsole(request);
        }
      };

      this.send({
        'query': query,
        'id_console': localStorage.getItem('consoleId')
      }, url, callback, 'GET');
    }
    /*
    success = {
    	id0: {
    		0: {
    			time: 783645872364,
    			message: 'jahbsdhagsvdvgh'
    		},
    		2: {
    			time: 783645872123,
    			message: 'jahbsdhadvgh123o'
    		}
    	},
    	id1: {
    		0: {
    			time: 783645872364,
    			message: 'jahbsdhagsvdvgh'
    		},
    		2: {
    			time: 783645872364,
    			message: 'jahbsdhavgh12313'
    		}
    	}
    	}
     */

  }, {
    key: "chat",
    value: function chat(id, url) {
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
        url: url,
        type: 'POST',
        data: {
          'ID': id
        },
        cache: false,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function success(request) {
          jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('chatNewMessage', ['foo', 'bar']);
        }
      });
    }
  }]);

  return ServerTools;
}();



/***/ }),

/***/ "./src/scripts/app/app.js":
/*!********************************!*\
  !*** ./src/scripts/app/app.js ***!
  \********************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_serverTools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/serverTools.js */ "./src/scripts/api/serverTools.js");
/* harmony import */ var _form_registrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/registrationForm */ "./src/scripts/form/registrationForm.js");
/* harmony import */ var _form_authForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/authForm */ "./src/scripts/form/authForm.js");
/* harmony import */ var _form_consoleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/consoleForm */ "./src/scripts/form/consoleForm.js");
/* harmony import */ var _form_findForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/findForm */ "./src/scripts/form/findForm.js");
/* harmony import */ var _form_findLiteForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/findLiteForm */ "./src/scripts/form/findLiteForm.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/select */ "./src/scripts/components/select.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var App =
/*#__PURE__*/
function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    this.serverTools = new _api_serverTools_js__WEBPACK_IMPORTED_MODULE_1__["ServerTools"]();
    jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
      if (_this.checkVerifyApp()) {
        _this.init();
      }
    });
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.serverTools.getConsoles();
      var selects = new _components_select__WEBPACK_IMPORTED_MODULE_7__["Select"]();
      var registrationForm = new _form_registrationForm__WEBPACK_IMPORTED_MODULE_2__["RegistrationForm"](jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-form-registration'));
      var authForm = new _form_authForm__WEBPACK_IMPORTED_MODULE_3__["AuthForm"](jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-form-auth'));
      var consoleForm = new _form_consoleForm__WEBPACK_IMPORTED_MODULE_4__["ConsoleForm"](jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-form-console'));
      var findForm = new _form_findForm__WEBPACK_IMPORTED_MODULE_5__["FindForm"](jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-form-find'));
      var findLiteForm = new _form_findLiteForm__WEBPACK_IMPORTED_MODULE_6__["FindLiteForm"](jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-form-finder-lite'));
      var isReg = localStorage.getItem('isRegister');
      var isConsole = localStorage.getItem('consoleId');
      var userId = localStorage.getItem('userId');

      if (!!isReg && isReg === 'Y') {
        if (!!userId) {
          if (!!isConsole) {
            this.serverTools.getExchange(isConsole);
            App.setActiveScreen('.js-screen-main');
          } else {
            App.setActiveScreen('.js-screen-console');
          }
        } else {
          App.setActiveScreen('.js-screen-auth');
        }
      } else {
        App.setActiveScreen('.js-screen-reg');
      }

      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-setscreen-auth').on('click', function () {
        App.setActiveScreen('.js-screen-auth');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-setscreen-reg').on('click', function () {
        App.setActiveScreen('.js-screen-reg');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-find').on('click', function () {
        App.setActiveScreen('.js-screen-find');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-main').on('click', function () {
        App.setActiveScreen('.js-screen-main');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-exchange-create').on('click', function () {
        App.setActiveScreen('.js-screen-exchange-create');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-add-wish').on('click', function () {
        jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-screen-select-game').attr('data-select', 'wish');
        App.setActiveScreen('.js-screen-select-game');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-add-have').on('click', function () {
        jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-screen-select-game').attr('data-select', 'have');
        App.setActiveScreen('.js-screen-select-game');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-submit-auth').on('click', function () {
        App.setActiveScreen('.js-screen-main');
      });
      var buttonExchange = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-exchange-submit');
      buttonExchange.on('click', function (e) {
        if (!!!buttonExchange.attr('href') && !!buttonExchange.data('phone')) {
          e.preventDefault();

          _this2.cleanButton();

          buttonExchange.html(buttonExchange.data('phone'));
          buttonExchange.attr('href', 'tel:' + buttonExchange.data('phone'));
        }
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-game-list, .js-game-list-find').on('click', '.js-card-exchange', function (e) {
        var card = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.js-card-exchange');
        var cardTable = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-game-list-exchange');
        jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-exchange-submit').data('phone', card.data('phone'));
        cardTable.find('.js-card-exchange').remove();
        card.clone().prependTo(cardTable);

        if (!!card.data('description')) {
          jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-description-block').show();
          jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-description').html(card.data('description'));
        } else {
          jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-description-block').hide();
        }

        App.setActiveScreen('.js-screen-exchange');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-game-list-find-single').on('click', '.js-card-game', function (e) {
        var card = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('.js-card-game');
        var cardTable = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cards-have');

        if (jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-screen-select-game').attr('data-select') === 'wish') {
          cardTable = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cards-wish');
        }

        cardTable.html(card.clone());
        App.setActiveScreen('.js-screen-exchange-create');
      });
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-create-change').on('click', function () {
        _this2.serverTools.addExchange({
          wish: jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cards-wish').find('.js-card-game').data('id'),
          have: jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-cards-have').find('.js-card-game').data('id'),
          phone: jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-exchange-tel').val(),
          description: jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-exchange-desc').val()
        });
      });
    }
  }, {
    key: "cleanButton",
    value: function cleanButton() {
      var button = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-exchange-submit');
      button.attr('data-phone', '');
      button.attr('href', '');
    }
  }, {
    key: "checkVerifyApp",
    value: function checkVerifyApp() {
      var verifyCode = localStorage.getItem('verifyCode');

      if (!!!verifyCode) {
        localStorage.clear();
        this.serverTools.getVerifyCode();
      }

      return true;
    }
  }], [{
    key: "setActiveScreen",
    value: function setActiveScreen(className) {
      var screens = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-screen');
      screens.fadeOut();
      screens.filter(className).fadeIn();
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/scripts/app/appKey.js":
/*!***********************************!*\
  !*** ./src/scripts/app/appKey.js ***!
  \***********************************/
/*! exports provided: AppKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppKey", function() { return AppKey; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AppKey =
/*#__PURE__*/
function () {
  function AppKey() {
    _classCallCheck(this, AppKey);
  }

  _createClass(AppKey, null, [{
    key: "getKey",
    value: function getKey() {
      return 'zrhLX69YA3qdNzkf580sziCFdfHzKAUr';
    }
  }]);

  return AppKey;
}();

/***/ }),

/***/ "./src/scripts/base-component.js":
/*!***************************************!*\
  !*** ./src/scripts/base-component.js ***!
  \***************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent(element) {
    _classCallCheck(this, BaseComponent);

    this.$element = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    this.init();
  }

  _createClass(BaseComponent, [{
    key: "init",
    value: function init() {}
  }]);

  return BaseComponent;
}();



/***/ }),

/***/ "./src/scripts/base-form.js":
/*!**********************************!*\
  !*** ./src/scripts/base-form.js ***!
  \**********************************/
/*! exports provided: BaseForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseForm", function() { return BaseForm; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var BaseForm =
/*#__PURE__*/
function () {
  function BaseForm(element) {
    var _this = this;

    _classCallCheck(this, BaseForm);

    this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
    this.$element.find('.js-submit').on('click', function () {
      _this.$element.trigger('submit');
    });
    this.init();
  }

  _createClass(BaseForm, [{
    key: "validate",
    value: function validate() {
      var _this2 = this;

      var $form = this.$element;
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.addMethod('checkPhone', function (value, element) {
        return /\+\d{1} \(\d{3}\) \d{3} \d{2} \d{2}/g.test(value);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.messages, {
        checkPhone: 'Введите правильный номер телефона.',
        required: 'Это поле необходимо заполнить.',
        remote: 'Пожалуйста, введите правильное значение.',
        email: 'Пожалуйста, введите корректный email.',
        url: 'Пожалуйста, введите корректный URL.',
        date: 'Пожалуйста, введите корректную дату.',
        dateISO: 'Пожалуйста, введите корректную дату в формате ISO.',
        number: 'Пожалуйста, введите число.',
        digits: 'Пожалуйста, вводите только цифры.',
        creditcard: 'Пожалуйста, введите правильный номер кредитной карты.',
        equalTo: 'Пожалуйста, введите такое же значение ещё раз.',
        extension: 'Пожалуйста, выберите файл с расширением jpeg, pdf, doc, docx.',
        maxlength: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.format('Пожалуйста, введите не больше {0} символов.'),
        minlength: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.format('Пожалуйста, введите не меньше {0} символов.'),
        rangelength: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.format('Пожалуйста, введите значение длиной от {0} до {1} символов.'),
        range: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.format('Пожалуйста, введите число от {0} до {1}.'),
        max: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'),
        min: jquery__WEBPACK_IMPORTED_MODULE_0___default.a.validator.format('Пожалуйста, введите число, большее или равное {0}.'),
        maxsize: 'Максимальный размер файла - 5мб'
      });
      $form.validate({
        errorPlacement: function errorPlacement(error, element) {
          return true;
        },
        success: function success(element) {
          return true;
        },
        lang: 'ru',
        invalidHandler: function invalidHandler(form) {// const modal = $(".modal[data-modal='error']");
          // modal.iziModal('open');
        },
        submitHandler: function submitHandler(form) {
          _this2.submitFunction(form);
        }
      });
      $form.find('.name').rules("add", {
        minlength: 2
      });
      $form.find('.email').rules("add", {
        minlength: 3
      });
      $form.find('.tel').rules("add", {
        minlength: 17
      });
      $form.find('.tel').rules("add", {
        minlength: 3
      });
      $form.find('.required').rules("add", {
        required: true
      });
    }
  }, {
    key: "submitFunction",
    value: function submitFunction(form) {//
    }
  }, {
    key: "init",
    value: function init() {//
    }
  }], [{
    key: "getFormData",
    value: function getFormData($form) {
      var unindexed_array = $form.serializeArray();
      var indexed_array = {};
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
      });
      return indexed_array;
    }
  }]);

  return BaseForm;
}();



/***/ }),

/***/ "./src/scripts/base-page.js":
/*!**********************************!*\
  !*** ./src/scripts/base-page.js ***!
  \**********************************/
/*! exports provided: BasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePage", function() { return BasePage; });
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var BasePage =
/*#__PURE__*/
function () {
  function BasePage(element) {
    _classCallCheck(this, BasePage);

    this.$element = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    this.init();
  }

  _createClass(BasePage, [{
    key: "init",
    value: function init() {//abstract
    }
  }]);

  return BasePage;
}();



/***/ }),

/***/ "./src/scripts/components/findGame.js":
/*!********************************************!*\
  !*** ./src/scripts/components/findGame.js ***!
  \********************************************/
/*! exports provided: FindGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindGame", function() { return FindGame; });
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2/dist/js/select2.full.min */ "./node_modules/select2/dist/js/select2.full.min.js");
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var FindGame =
/*#__PURE__*/
function () {
  function FindGame() {
    _classCallCheck(this, FindGame);

    this.gameList = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-game-list-find-single');
    this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_0__["ServerTools"]();
  }

  _createClass(FindGame, [{
    key: "addExchangeByConsole",
    value: function addExchangeByConsole(gamesList) {
      var _this = this;

      var find = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!!gamesList && gamesList.success == true) {
        var gameList = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-game-list-find-single');
        console.log(gamesList);
        FindGame.clearlist(gameList);

        if (gamesList.exch.length > 0) {
          gamesList.exch.forEach(function (data) {
            gameList.prepend('<div class="card card_lite js-card-game"\n' + '\t\t\t     data-id="' + data.id + '">\n' + '\t\t\t\t<div class="card__inner">\n' + '\t\t\t\t\t<div class="card__column">\n' + '\t\t\t\t\t\t<div class="card__img-wrap">\n' + '\t\t\t\t\t\t\t<img src="' + _this.serverTools.storagePath + data.img + '"\n' + '\t\t\t\t\t\t\t     alt=""\n' + '\t\t\t\t\t\t\t     class="card__img">\n' + '\t\t\t\t\t\t</div>\n' + '\t\t\t\t\t\t<p class="card__game-title">' + data.name + '</p>\n' + '\t\t\t\t\t</div>\n' + '\t\t\t\t</div>\n' + '\t\t\t</div>');
          });
        } else {
          gameList.prepend('<p class="centred js-card-exchange">По вашему запросу ничего не найдено</p>');
        }
      }
    }
  }], [{
    key: "clearlist",
    value: function clearlist(gameList) {
      gameList.find('.js-card-game').remove();
    }
  }]);

  return FindGame;
}();

/***/ }),

/***/ "./src/scripts/components/listGame.js":
/*!********************************************!*\
  !*** ./src/scripts/components/listGame.js ***!
  \********************************************/
/*! exports provided: ListGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGame", function() { return ListGame; });
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2/dist/js/select2.full.min */ "./node_modules/select2/dist/js/select2.full.min.js");
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ListGame =
/*#__PURE__*/
function () {
  function ListGame() {
    _classCallCheck(this, ListGame);

    this.gameList = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-game-list');
    this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_0__["ServerTools"]();
  } // 0:
  // 		ex_id: 1
  // gameHave:
  // 		categori_id: "1"
  // created_at: "2019-05-18 09:02:00"
  // id: 2
  // img: "games/May2019/CMxUIux8sJsFlYnXcEVz.png"
  // name: "Assassin's Creed Syndicate"
  // updated_at: "2019-05-19 04:19:50"


  _createClass(ListGame, [{
    key: "addExchangeByConsole",
    value: function addExchangeByConsole(exchangeList) {
      var _this = this;

      var find = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!!exchangeList) {
        var gameList = 1;

        if (find) {
          gameList = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-game-list-find');
        } else {
          gameList = jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-game-list');
        }

        ListGame.clearlist(gameList);

        if (exchangeList.length > 0) {
          exchangeList.forEach(function (data) {
            gameList.prepend('\t\t\t<div class="card js-card-exchange" data-description="' + data.ex_all.description + '" data-phone="' + data.ex_all.phone + '" data-id="' + data.ex_id + '">\n' + '\t\t\t\t<span class="card__title">\n' + data.user.name + '\t\t\t\t</span>\n' + '\t\t\t\t<span class="card__rank">\n' + '\t\t\t\t\t+3\n' + '\t\t\t\t</span>\n' + '\t\t\t\t<div class="card__inner">\n' + '\t\t\t\t\t<div class="card__column card__column_left">\n' + '\t\t\t\t\t\t<div class="card__column-title">Предлагает</div>\n' + '\t\t\t\t\t\t<div class="card__img-wrap">\n' + '\t\t\t\t\t\t\t<img src="' + _this.serverTools.storagePath + data.gameHave.img + '" alt="" class="card__img">\n' + '\t\t\t\t\t\t</div>\n' + '\t\t\t\t\t\t<p class="card__game-title">' + data.gameHave.name + '</p>\n' + '\t\t\t\t\t</div>\n' + '\t\t\t\t\t<div class="card__column card__column_right">\n' + '\t\t\t\t\t\t<div class="card__column-title">Хочет</div>\n' + '\t\t\t\t\t\t<div class="card__img-wrap">\n' + '\t\t\t\t\t\t\t<img src="' + _this.serverTools.storagePath + data.gameWish.img + '" alt="" class="card__img">\n' + '\t\t\t\t\t\t</div>\n' + '\t\t\t\t\t\t<p class="card__game-title">' + data.gameWish.name + '</p>\n' + '\t\t\t\t\t</div>\n' + '\t\t\t\t</div>\n' + '\t\t\t</div>\n');
          });
        } else {
          gameList.prepend('<p class="centred js-card-exchange">По вашему запросу ничего не найдено</p>');
        }
      }
    }
  }], [{
    key: "clearlist",
    value: function clearlist(gameList) {
      gameList.find('.js-card-exchange').remove();
    }
  }]);

  return ListGame;
}();

/***/ }),

/***/ "./src/scripts/components/select.js":
/*!******************************************!*\
  !*** ./src/scripts/components/select.js ***!
  \******************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-component */ "./src/scripts/base-component.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! select2/dist/js/select2.full.min */ "./node_modules/select2/dist/js/select2.full.min.js");
/* harmony import */ var select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(select2_dist_js_select2_full_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Select =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Select, _BaseComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
  }

  _createClass(Select, [{
    key: "init",
    value: function init() {
      var selectConsole = $('.js-console-select');
      selectConsole.select2({
        'theme': 'light',
        minimumResultsForSearch: Infinity
      });
      selectConsole.on('change.select2', function () {
        var serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_3__["ServerTools"]();
        serverTools.getExchange(selectConsole.val());
      });
    }
  }]);

  return Select;
}(_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/scripts/form/authForm.js":
/*!**************************************!*\
  !*** ./src/scripts/form/authForm.js ***!
  \**************************************/
/*! exports provided: AuthForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthForm", function() { return AuthForm; });
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-form */ "./src/scripts/base-form.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AuthForm =
/*#__PURE__*/
function (_BaseForm) {
  _inherits(AuthForm, _BaseForm);

  function AuthForm() {
    _classCallCheck(this, AuthForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuthForm).apply(this, arguments));
  }

  _createClass(AuthForm, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$element.validate();
      this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_3__["ServerTools"]();
      this.$element.find('.js-hidden-input').attr('value', localStorage.getItem('verifyCode'));
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submit-auth').on('click', function () {
        _this.$element.trigger('submit');
      });
      this.$element.on('submit', function (e) {
        var valid = _this.$element.valid();

        if (valid) {
          e.preventDefault();
          var $form = _this.$element;
          var formData = $form.serialize();

          _this.serverTools.auth(formData);
        }
      });
    }
  }, {
    key: "submitFunction",
    value: function submitFunction(form) {// console.log(form);
      // const $form = this.$element;
      // let formData = new FormData(form);
      // this.serverTools.registration(formData);
    }
  }]);

  return AuthForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_0__["BaseForm"]);

/***/ }),

/***/ "./src/scripts/form/consoleForm.js":
/*!*****************************************!*\
  !*** ./src/scripts/form/consoleForm.js ***!
  \*****************************************/
/*! exports provided: ConsoleForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleForm", function() { return ConsoleForm; });
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-form */ "./src/scripts/base-form.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
/* harmony import */ var _components_listGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/listGame */ "./src/scripts/components/listGame.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/app */ "./src/scripts/app/app.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ConsoleForm =
/*#__PURE__*/
function (_BaseForm) {
  _inherits(ConsoleForm, _BaseForm);

  function ConsoleForm() {
    _classCallCheck(this, ConsoleForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConsoleForm).apply(this, arguments));
  }

  _createClass(ConsoleForm, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$element.validate();
      this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_3__["ServerTools"]();
      this.$element.find('.js-hidden-input').attr('value', localStorage.getItem('verifyCode'));
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submit-console').on('click', function () {
        _this.$element.trigger('submit');

        _app_app__WEBPACK_IMPORTED_MODULE_5__["App"].setActiveScreen('.js-screen-main');
      });
      this.$element.on('submit', function (e) {
        var valid = _this.$element.valid();

        if (valid) {
          e.preventDefault();

          var value = _this.$element.find('.js-console:checked').val();

          _this.serverTools.saveUserConsole(value);

          _this.serverTools.getExchange(value);
        }
      });
    }
  }, {
    key: "submitFunction",
    value: function submitFunction(form) {// console.log(form);
      // const $form = this.$element;
      // let formData = new FormData(form);
      // this.serverTools.registration(formData);
    }
  }]);

  return ConsoleForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_0__["BaseForm"]);

/***/ }),

/***/ "./src/scripts/form/findForm.js":
/*!**************************************!*\
  !*** ./src/scripts/form/findForm.js ***!
  \**************************************/
/*! exports provided: FindForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindForm", function() { return FindForm; });
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-form */ "./src/scripts/base-form.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FindForm =
/*#__PURE__*/
function (_BaseForm) {
  _inherits(FindForm, _BaseForm);

  function FindForm() {
    _classCallCheck(this, FindForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(FindForm).apply(this, arguments));
  }

  _createClass(FindForm, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_3__["ServerTools"](); // this.$element.find('.js-input').on('change', () => {
      // 	this.$element.trigger('change');
      // });

      this.$element.on('keyup', function (e) {
        var $form = _this.$element;
        var formData = {
          wish: _this.$element.find('.js-input-wish').val(),
          have: _this.$element.find('.js-input-have').val()
        };

        _this.serverTools.find(formData);
      });
    }
  }, {
    key: "submitFunction",
    value: function submitFunction(form) {}
  }]);

  return FindForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_0__["BaseForm"]);

/***/ }),

/***/ "./src/scripts/form/findLiteForm.js":
/*!******************************************!*\
  !*** ./src/scripts/form/findLiteForm.js ***!
  \******************************************/
/*! exports provided: FindLiteForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindLiteForm", function() { return FindLiteForm; });
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-form */ "./src/scripts/base-form.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FindLiteForm =
/*#__PURE__*/
function (_BaseForm) {
  _inherits(FindLiteForm, _BaseForm);

  function FindLiteForm() {
    _classCallCheck(this, FindLiteForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(FindLiteForm).apply(this, arguments));
  }

  _createClass(FindLiteForm, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_3__["ServerTools"]();
      this.$element.on('keyup', function (e) {
        var $form = _this.$element;

        _this.serverTools.getGames(_this.$element.find('.js-input-query').val());
      });
    }
  }, {
    key: "submitFunction",
    value: function submitFunction(form) {}
  }]);

  return FindLiteForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_0__["BaseForm"]);

/***/ }),

/***/ "./src/scripts/form/registrationForm.js":
/*!**********************************************!*\
  !*** ./src/scripts/form/registrationForm.js ***!
  \**********************************************/
/*! exports provided: RegistrationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationForm", function() { return RegistrationForm; });
/* harmony import */ var _base_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-form */ "./src/scripts/base-form.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery/dist/jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_serverTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/serverTools */ "./src/scripts/api/serverTools.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RegistrationForm =
/*#__PURE__*/
function (_BaseForm) {
  _inherits(RegistrationForm, _BaseForm);

  function RegistrationForm() {
    _classCallCheck(this, RegistrationForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegistrationForm).apply(this, arguments));
  }

  _createClass(RegistrationForm, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$element.validate();
      this.serverTools = new _api_serverTools__WEBPACK_IMPORTED_MODULE_3__["ServerTools"]();
      this.$element.find('.js-hidden-input').attr('value', localStorage.getItem('verifyCode'));
      jquery_dist_jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submit-reg').on('click', function () {
        _this.$element.trigger('submit');
      });
      this.$element.on('submit', function (e) {
        var valid = _this.$element.valid();

        if (valid) {
          e.preventDefault();
          var $form = _this.$element;
          var formData = $form.serialize();

          _this.serverTools.registration(formData);
        }
      });
    }
  }, {
    key: "submitFunction",
    value: function submitFunction(form) {// console.log(form);
      // const $form = this.$element;
      // let formData = new FormData(form);
      // this.serverTools.registration(formData);
    }
  }]);

  return RegistrationForm;
}(_base_form__WEBPACK_IMPORTED_MODULE_0__["BaseForm"]);

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/index.js */ "./src/scripts/page/index.js");


/***/ }),

/***/ "./src/scripts/page/index.js":
/*!***********************************!*\
  !*** ./src/scripts/page/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-page */ "./src/scripts/base-page.js");
/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/app.js */ "./src/scripts/app/app.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Index =
/*#__PURE__*/
function (_BasePage) {
  _inherits(Index, _BasePage);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "init",
    value: function init() {
      var app = new _app_app_js__WEBPACK_IMPORTED_MODULE_1__["App"]();
    }
  }]);

  return Index;
}(_base_page__WEBPACK_IMPORTED_MODULE_0__["BasePage"]);

var page = new Index();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBpL3NlcnZlclRvb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwL2FwcEtleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYXNlLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYmFzZS1wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZmluZEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9saXN0R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9mb3JtL2F1dGhGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2Zvcm0vY29uc29sZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZm9ybS9maW5kRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9mb3JtL2ZpbmRMaXRlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9mb3JtL3JlZ2lzdHJhdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJTZXJ2ZXJUb29scyIsImFwcEtleSIsIkFwcEtleSIsImdldEtleSIsImRvbWVuIiwic3RvcmFnZVBhdGgiLCJkYXRhIiwidXJsIiwic3VjY2Vzc0Z1bmMiLCJ0eXBlIiwiJCIsImFqYXgiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN1Y2Nlc3MiLCJiYWNrS2V5IiwiY2FsbGJhY2siLCJyZXF1ZXN0IiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJCQUNLX0tFWSIsInNldEl0ZW0iLCJBUFBfS0VZIiwiZm9yRWFjaCIsImVsIiwiYXBwZW5kIiwiaWQiLCJuYW1lIiwic2VuZCIsImZvcm1EYXRhIiwidXNlciIsImVtYWlsIiwiQXBwIiwic2V0QWN0aXZlU2NyZWVuIiwiY29uc29sZSIsImdldEV4Y2hhbmdlIiwibGlzdEdhbWVzIiwiTGlzdEdhbWUiLCJhZGRFeGNoYW5nZUJ5Q29uc29sZSIsImlkX2NvbnNvbGUiLCJnYW1lX3dpc2giLCJ3aXNoIiwiZ2FtZV9oYXZlIiwiaGF2ZSIsInVzZXJfaWQiLCJjb25zb2xlSWQiLCJmaWVsZHMiLCJwaG9uZSIsImRlc2NyaXB0aW9uIiwicXVlcnkiLCJmaW5kR2FtZSIsIkZpbmRHYW1lIiwiY2FjaGUiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwic2VydmVyVG9vbHMiLCJkb2N1bWVudCIsInJlYWR5IiwiY2hlY2tWZXJpZnlBcHAiLCJpbml0IiwiZ2V0Q29uc29sZXMiLCJzZWxlY3RzIiwiU2VsZWN0IiwicmVnaXN0cmF0aW9uRm9ybSIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJhdXRoRm9ybSIsIkF1dGhGb3JtIiwiY29uc29sZUZvcm0iLCJDb25zb2xlRm9ybSIsImZpbmRGb3JtIiwiRmluZEZvcm0iLCJmaW5kTGl0ZUZvcm0iLCJGaW5kTGl0ZUZvcm0iLCJpc1JlZyIsImlzQ29uc29sZSIsInVzZXJJZCIsIm9uIiwiYXR0ciIsImJ1dHRvbkV4Y2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xlYW5CdXR0b24iLCJodG1sIiwiY2FyZCIsInRhcmdldCIsImNsb3Nlc3QiLCJjYXJkVGFibGUiLCJmaW5kIiwicmVtb3ZlIiwiY2xvbmUiLCJwcmVwZW5kVG8iLCJzaG93IiwiaGlkZSIsImFkZEV4Y2hhbmdlIiwidmFsIiwiYnV0dG9uIiwidmVyaWZ5Q29kZSIsImNsZWFyIiwiZ2V0VmVyaWZ5Q29kZSIsImNsYXNzTmFtZSIsInNjcmVlbnMiLCJmYWRlT3V0IiwiZmlsdGVyIiwiZmFkZUluIiwiQmFzZUNvbXBvbmVudCIsImVsZW1lbnQiLCIkZWxlbWVudCIsIkJhc2VGb3JtIiwiJGZvcm0iLCJ2YWxpZGF0b3IiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInRlc3QiLCJleHRlbmQiLCJtZXNzYWdlcyIsImNoZWNrUGhvbmUiLCJyZXF1aXJlZCIsInJlbW90ZSIsImRhdGUiLCJkYXRlSVNPIiwibnVtYmVyIiwiZGlnaXRzIiwiY3JlZGl0Y2FyZCIsImVxdWFsVG8iLCJleHRlbnNpb24iLCJtYXhsZW5ndGgiLCJmb3JtYXQiLCJtaW5sZW5ndGgiLCJyYW5nZWxlbmd0aCIsInJhbmdlIiwibWF4IiwibWluIiwibWF4c2l6ZSIsInZhbGlkYXRlIiwiZXJyb3JQbGFjZW1lbnQiLCJsYW5nIiwiaW52YWxpZEhhbmRsZXIiLCJmb3JtIiwic3VibWl0SGFuZGxlciIsInN1Ym1pdEZ1bmN0aW9uIiwicnVsZXMiLCJ1bmluZGV4ZWRfYXJyYXkiLCJzZXJpYWxpemVBcnJheSIsImluZGV4ZWRfYXJyYXkiLCJtYXAiLCJuIiwiaSIsIkJhc2VQYWdlIiwiZ2FtZUxpc3QiLCJnYW1lc0xpc3QiLCJsb2ciLCJjbGVhcmxpc3QiLCJleGNoIiwibGVuZ3RoIiwicHJlcGVuZCIsImltZyIsImV4Y2hhbmdlTGlzdCIsImV4X2FsbCIsImV4X2lkIiwiZ2FtZUhhdmUiLCJnYW1lV2lzaCIsInNlbGVjdENvbnNvbGUiLCJzZWxlY3QyIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJJbmZpbml0eSIsInZhbGlkIiwic2VyaWFsaXplIiwiYXV0aCIsInNhdmVVc2VyQ29uc29sZSIsImdldEdhbWVzIiwicmVnaXN0cmF0aW9uIiwiSW5kZXgiLCJhcHAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBdEJGO0FBQUE7QUFBQSxtQ0F3QmdCK0csSUF4QmhCLEVBd0JzQixDQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JGOztBQUFBO0FBQUEsRUFBc0M5QixtREFBdEMsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0lBSU1nRSxLOzs7Ozs7Ozs7Ozs7OzJCQUNLO0FBQ0gsVUFBTUMsR0FBRyxHQUFHLElBQUkvSSwrQ0FBSixFQUFaO0FBQ0g7Ozs7RUFIZXNILG1EOztBQU1wQixJQUFNMEIsSUFBSSxHQUFHLElBQUlGLEtBQUosRUFBYixDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiLFwianMvdmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeS9kaXN0L2pxdWVyeSc7XG5pbXBvcnQge0FwcH0gZnJvbSAnLi4vYXBwL2FwcCc7XG5pbXBvcnQge0FwcEtleX0gZnJvbSAnLi4vYXBwL2FwcEtleSc7XG5pbXBvcnQge0xpc3RHYW1lfSBmcm9tICcuLi9jb21wb25lbnRzL2xpc3RHYW1lJztcbmltcG9ydCB7RmluZEdhbWV9IGZyb20gJy4uL2NvbXBvbmVudHMvZmluZEdhbWUnO1xuXG5jbGFzcyBTZXJ2ZXJUb29scyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuYXBwS2V5ID0gQXBwS2V5LmdldEtleSgpO1xuXHRcdHRoaXMuZG9tZW4gPSAnaHR0cDovL2hhY2thdG9uLmRldi5sZXRzcm9jay5wcm8nO1xuXHRcdHRoaXMuc3RvcmFnZVBhdGggPSB0aGlzLmRvbWVuICsgJy9zdG9yYWdlLyc7XG5cdH1cblxuXHRzZW5kKGRhdGEsIHVybCwgc3VjY2Vzc0Z1bmMsIHR5cGUgPSAnUE9TVCcpIHtcblx0XHQkLmFqYXgoe1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnWC1DU1JGLVRPS0VOJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ZlcmlmeUNvZGUnKSxcblx0XHRcdH0sXG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2Vzczogc3VjY2Vzc0Z1bmMsXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRWZXJpZnlDb2RlKCkge1xuXHRcdGNvbnN0IHVybCA9IHRoaXMuZG9tZW4gKyAnL3ZlcmlmaWxkJztcblxuXHRcdGxldCBiYWNrS2V5ID0gJyc7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAocmVxdWVzdCkgPT4ge1xuXG5cdFx0XHRpZiAoISFyZXF1ZXN0KSB7XG5cdFx0XHRcdHJlcXVlc3QgPSBKU09OLnBhcnNlKHJlcXVlc3QpO1xuXG5cdFx0XHRcdGlmICghISFyZXF1ZXN0LmVycm9yKSB7XG5cdFx0XHRcdFx0YmFja0tleSA9IHJlcXVlc3QuQkFDS19LRVk7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ZlcmlmeUNvZGUnLCBiYWNrS2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdEFQUF9LRVk6IHRoaXMuYXBwS2V5LFxuXHRcdH07XG5cblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRnZXRDb25zb2xlcygpIHtcblx0XHRjb25zdCB1cmwgPSB0aGlzLmRvbWVuICsgJy9hbGxDb25zb2xlJztcblxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKHJlcXVlc3QpID0+IHtcblx0XHRcdHJlcXVlc3QuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdFx0JCgnLmpzLWNvbnNvbGVzJykuXG5cdFx0XHRcdFx0XHRhcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JzxpbnB1dCBjbGFzcz1cImpzLWNvbnNvbGVcIiB0eXBlPVwicmFkaW9cIiBpZD1cImNvbnNvbGUnICsgZWwuaWQgK1xuXHRcdFx0XHRcdFx0XHRcdCdcIiBuYW1lPVwiY29uc29sZVwiIHZhbHVlPVwiJyArIGVsLmlkICtcblx0XHRcdFx0XHRcdFx0XHQnXCIgY2xhc3M9XCJ3ZWxjb21lX19jb25zb2xlLXJhZGlvXCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdDxsYWJlbCBmb3I9XCJjb25zb2xlJyArIGVsLmlkICtcblx0XHRcdFx0XHRcdFx0XHQnXCIgY2xhc3M9XCJ3ZWxjb21lX19jb25zb2xlLWl0ZW1cIj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRlbC5uYW1lICtcblx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0PC9sYWJlbD4nKTtcblxuXHRcdFx0XHQkKCcuanMtY29uc29sZS1zZWxlY3QnKS5cblx0XHRcdFx0XHRcdGFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBlbC5pZCArICdcIj4nICsgZWwubmFtZSArICc8L29wdGlvbj4nKTtcblx0XHRcdH0pO1xuXG5cdFx0fTtcblx0XHRjb25zdCBkYXRhID0ge307XG5cblx0XHR0aGlzLnNlbmQoZGF0YSwgdXJsLCBjYWxsYmFjaywgJ0dFVCcpO1xuXHR9XG5cblx0cmVnaXN0cmF0aW9uKGZvcm1EYXRhKSB7XG5cdFx0Y29uc3QgdXJsID0gdGhpcy5kb21lbiArICcvcmVnaXN0ZXInO1xuXHRcdC8vIGNvbnN0IHVybCA9ICcvYWpheC9yZWdpc3Rlci5qc29uJztcblxuXHRcdGNvbnN0IGNhbGxiYWNrID0gKHJlcXVlc3QpID0+IHtcblx0XHRcdGlmIChyZXF1ZXN0LnN1Y2Nlc3MpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHJlcXVlc3QudXNlci5pZCk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTmFtZScsIHJlcXVlc3QudXNlci5uYW1lKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJFbWFpbCcsIHJlcXVlc3QudXNlci5lbWFpbCk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc1JlZ2lzdGVyJywgJ1knKTtcblx0XHRcdFx0QXBwLnNldEFjdGl2ZVNjcmVlbignLmpzLXNjcmVlbi1jb25zb2xlJyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHRoaXMuc2VuZChmb3JtRGF0YSwgdXJsLCBjYWxsYmFjayk7XG5cdH1cblxuXHRhdXRoKGZvcm1EYXRhKSB7XG5cdFx0Y29uc3QgdXJsID0gdGhpcy5kb21lbiArICcvbG9naW4nO1xuXG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAocmVxdWVzdCkgPT4ge1xuXHRcdFx0aWYgKHJlcXVlc3Quc3VjY2Vzcykge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgcmVxdWVzdC51c2VyLmlkKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgcmVxdWVzdC51c2VyLm5hbWUpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckVtYWlsJywgcmVxdWVzdC51c2VyLmVtYWlsKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzUmVnaXN0ZXInLCAnWScpO1xuXG5cdFx0XHRcdGlmICghIXJlcXVlc3QudXNlci5jb25zb2xlKSB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnNvbGVJZCcsIHJlcXVlc3QudXNlci5jb25zb2xlLmlkKTtcblx0XHRcdFx0XHR0aGlzLmdldEV4Y2hhbmdlKHJlcXVlc3QudXNlci5jb25zb2xlLmlkKTtcblx0XHRcdFx0XHRBcHAuc2V0QWN0aXZlU2NyZWVuKCcuanMtc2NyZWVuLW1haW4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRBcHAuc2V0QWN0aXZlU2NyZWVuKCcuanMtc2NyZWVuLWNvbnNvbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR0aGlzLnNlbmQoZm9ybURhdGEsIHVybCwgY2FsbGJhY2spO1xuXHR9XG5cblx0ZmluZChmb3JtRGF0YSkge1xuXHRcdGNvbnN0IHVybCA9IHRoaXMuZG9tZW4gKyAnL2xpc3RleCc7XG5cblx0XHRjb25zdCBjYWxsYmFjayA9IChyZXF1ZXN0KSA9PiB7XG5cdFx0XHRjb25zdCBsaXN0R2FtZXMgPSBuZXcgTGlzdEdhbWUoKTtcblx0XHRcdGxpc3RHYW1lcy5hZGRFeGNoYW5nZUJ5Q29uc29sZShyZXF1ZXN0LCB0cnVlKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdGlkX2NvbnNvbGU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50Q29uc29sZUlkJyksXG5cdFx0XHRnYW1lX3dpc2g6IGZvcm1EYXRhLndpc2gsXG5cdFx0XHRnYW1lX2hhdmU6IGZvcm1EYXRhLmhhdmUsXG5cdFx0XHR1c2VyX2lkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyksXG5cdFx0fTtcblxuXHRcdHRoaXMuc2VuZChkYXRhLCB1cmwsIGNhbGxiYWNrLCAnR0VUJyk7XG5cdH1cblxuXHRnZXRFeGNoYW5nZShjb25zb2xlSWQpIHtcblx0XHRpZiAoISEhY29uc29sZUlkKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudENvbnNvbGVJZCcsIGNvbnNvbGVJZCk7XG5cdFx0Y29uc3QgdXJsID0gdGhpcy5kb21lbiArICcvbGlzdGV4Jztcblx0XHRjb25zdCBjYWxsYmFjayA9IChyZXF1ZXN0KSA9PiB7XG5cdFx0XHRjb25zdCBsaXN0R2FtZXMgPSBuZXcgTGlzdEdhbWUoKTtcblx0XHRcdGxpc3RHYW1lcy5hZGRFeGNoYW5nZUJ5Q29uc29sZShyZXF1ZXN0KTtcblx0XHR9O1xuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHRpZF9jb25zb2xlOiBjb25zb2xlSWQsXG5cdFx0XHR1c2VyX2lkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyksXG5cdFx0fTtcblx0XHR0aGlzLnNlbmQoZGF0YSwgdXJsLCBjYWxsYmFjaywgJ0dFVCcpO1xuXHR9XG5cblx0c2F2ZVVzZXJDb25zb2xlKGNvbnNvbGVJZCkge1xuXHRcdGNvbnN0IHVybCA9IHRoaXMuZG9tZW4gKyAnL3NldENvbnNvbGUnO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gKHJlcXVlc3QpID0+IHtcblx0XHRcdGlmIChyZXF1ZXN0LnN1Y2Nlc3MpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnNvbGVJZCcsIGNvbnNvbGVJZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0aWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25zb2xlSWQnKSxcblx0XHRcdGlkX2NvbnNvbGU6IGNvbnNvbGVJZCxcblx0XHR9O1xuXG5cdFx0dGhpcy5zZW5kKGRhdGEsIHVybCwgY2FsbGJhY2spO1xuXHR9XG5cblx0YWRkRXhjaGFuZ2UoZmllbGRzKSB7XG5cdFx0Y29uc3QgdXJsID0gdGhpcy5kb21lbiArICcvYWRkRXhjaGFuZ2UnO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gKHJlcXVlc3QpID0+IHtcblx0XHRcdGlmIChyZXF1ZXN0LnN1Y2Nlc3MpIHtcblx0XHRcdFx0QXBwLnNldEFjdGl2ZVNjcmVlbignLmpzLXNjcmVlbi1tYWluJyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBkYXRhID0ge1xuXHRcdFx0dXNlcl9pZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpLFxuXHRcdFx0Z2FtZV93aXNoOiBmaWVsZHMud2lzaCxcblx0XHRcdGdhbWVfaGF2ZTogZmllbGRzLmhhdmUsXG5cdFx0XHRwaG9uZTogZmllbGRzLnBob25lLFxuXHRcdFx0ZGVzY3JpcHRpb246IGZpZWxkcy5kZXNjcmlwdGlvbixcblx0XHR9O1xuXG5cdFx0dGhpcy5zZW5kKGRhdGEsIHVybCwgY2FsbGJhY2spO1xuXHR9XG5cblx0Z2V0R2FtZXMocXVlcnkpIHtcblx0XHRjb25zdCB1cmwgPSB0aGlzLmRvbWVuICsgJy9zZWFyY2gtZ2FtZSc7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAocmVxdWVzdCkgPT4ge1xuXHRcdFx0aWYgKCEhcmVxdWVzdCkge1xuXHRcdFx0XHRjb25zdCBmaW5kR2FtZSA9IG5ldyBGaW5kR2FtZSgpO1xuXHRcdFx0XHRmaW5kR2FtZS5hZGRFeGNoYW5nZUJ5Q29uc29sZShyZXF1ZXN0KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhpcy5zZW5kKHtcblx0XHRcdCdxdWVyeSc6IHF1ZXJ5LFxuXHRcdFx0J2lkX2NvbnNvbGUnOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uc29sZUlkJyksXG5cdFx0fSwgdXJsLCBjYWxsYmFjaywgJ0dFVCcpO1xuXHR9XG5cblx0Lypcblx0c3VjY2VzcyA9IHtcblx0XHRpZDA6IHtcblx0XHRcdDA6IHtcblx0XHRcdFx0dGltZTogNzgzNjQ1ODcyMzY0LFxuXHRcdFx0XHRtZXNzYWdlOiAnamFoYnNkaGFnc3ZkdmdoJ1xuXHRcdFx0fSxcblx0XHRcdDI6IHtcblx0XHRcdFx0dGltZTogNzgzNjQ1ODcyMTIzLFxuXHRcdFx0XHRtZXNzYWdlOiAnamFoYnNkaGFkdmdoMTIzbydcblx0XHRcdH1cblx0XHR9LFxuXHRcdGlkMToge1xuXHRcdFx0MDoge1xuXHRcdFx0XHR0aW1lOiA3ODM2NDU4NzIzNjQsXG5cdFx0XHRcdG1lc3NhZ2U6ICdqYWhic2RoYWdzdmR2Z2gnXG5cdFx0XHR9LFxuXHRcdFx0Mjoge1xuXHRcdFx0XHR0aW1lOiA3ODM2NDU4NzIzNjQsXG5cdFx0XHRcdG1lc3NhZ2U6ICdqYWhic2RoYXZnaDEyMzEzJ1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cdCAqL1xuXHRjaGF0KGlkLCB1cmwpIHtcblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR0eXBlOiAnUE9TVCcsXG5cdFx0XHRkYXRhOiB7J0lEJzogaWR9LFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdFx0cHJvY2Vzc0RhdGE6IGZhbHNlLFxuXHRcdFx0Y29udGVudFR5cGU6IGZhbHNlLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcXVlc3QpIHtcblxuXHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlcignY2hhdE5ld01lc3NhZ2UnLCBbJ2ZvbycsICdiYXInXSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCB7U2VydmVyVG9vbHN9OyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeS9kaXN0L2pxdWVyeSc7XG5pbXBvcnQgJy4uL2FwaS9zZXJ2ZXJUb29scy5qcyc7XG5pbXBvcnQge1NlcnZlclRvb2xzfSBmcm9tICcuLi9hcGkvc2VydmVyVG9vbHMnO1xuaW1wb3J0IHtSZWdpc3RyYXRpb25Gb3JtfSBmcm9tICcuLi9mb3JtL3JlZ2lzdHJhdGlvbkZvcm0nO1xuaW1wb3J0IHtBdXRoRm9ybX0gZnJvbSAnLi4vZm9ybS9hdXRoRm9ybSc7XG5pbXBvcnQge0NvbnNvbGVGb3JtfSBmcm9tICcuLi9mb3JtL2NvbnNvbGVGb3JtJztcbmltcG9ydCB7RmluZEZvcm19IGZyb20gJy4uL2Zvcm0vZmluZEZvcm0nO1xuaW1wb3J0IHtGaW5kTGl0ZUZvcm19IGZyb20gJy4uL2Zvcm0vZmluZExpdGVGb3JtJztcblxuaW1wb3J0IHtTZWxlY3R9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VsZWN0JztcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zZXJ2ZXJUb29scyA9IG5ldyBTZXJ2ZXJUb29scygpO1xuXG5cdFx0JChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuY2hlY2tWZXJpZnlBcHAoKSkge1xuXHRcdFx0XHR0aGlzLmluaXQoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5zZXJ2ZXJUb29scy5nZXRDb25zb2xlcygpO1xuXHRcdGNvbnN0IHNlbGVjdHMgPSBuZXcgU2VsZWN0KCk7XG5cdFx0Y29uc3QgcmVnaXN0cmF0aW9uRm9ybSA9IG5ldyBSZWdpc3RyYXRpb25Gb3JtKCQoJy5qcy1mb3JtLXJlZ2lzdHJhdGlvbicpKTtcblx0XHRjb25zdCBhdXRoRm9ybSA9IG5ldyBBdXRoRm9ybSgkKCcuanMtZm9ybS1hdXRoJykpO1xuXHRcdGNvbnN0IGNvbnNvbGVGb3JtID0gbmV3IENvbnNvbGVGb3JtKCQoJy5qcy1mb3JtLWNvbnNvbGUnKSk7XG5cdFx0Y29uc3QgZmluZEZvcm0gPSBuZXcgRmluZEZvcm0oJCgnLmpzLWZvcm0tZmluZCcpKTtcblx0XHRjb25zdCBmaW5kTGl0ZUZvcm0gPSBuZXcgRmluZExpdGVGb3JtKCQoJy5qcy1mb3JtLWZpbmRlci1saXRlJykpO1xuXG5cdFx0Y29uc3QgaXNSZWcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNSZWdpc3RlcicpO1xuXHRcdGNvbnN0IGlzQ29uc29sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25zb2xlSWQnKTtcblx0XHRjb25zdCB1c2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG5cblx0XHRpZiAoISFpc1JlZyAmJiBpc1JlZyA9PT0gJ1knKSB7XG5cdFx0XHRpZiAoISF1c2VySWQpIHtcblx0XHRcdFx0aWYgKCEhaXNDb25zb2xlKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXJ2ZXJUb29scy5nZXRFeGNoYW5nZShpc0NvbnNvbGUpO1xuXHRcdFx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tbWFpbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tY29uc29sZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0QXBwLnNldEFjdGl2ZVNjcmVlbignLmpzLXNjcmVlbi1hdXRoJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0QXBwLnNldEFjdGl2ZVNjcmVlbignLmpzLXNjcmVlbi1yZWcnKTtcblx0XHR9XG5cblx0XHQkKCcuanMtc2V0c2NyZWVuLWF1dGgnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRBcHAuc2V0QWN0aXZlU2NyZWVuKCcuanMtc2NyZWVuLWF1dGgnKTtcblx0XHR9KTtcblxuXHRcdCQoJy5qcy1zZXRzY3JlZW4tcmVnJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0QXBwLnNldEFjdGl2ZVNjcmVlbignLmpzLXNjcmVlbi1yZWcnKTtcblx0XHR9KTtcblxuXHRcdCQoJy5qcy1vcGVuLWZpbmQnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRBcHAuc2V0QWN0aXZlU2NyZWVuKCcuanMtc2NyZWVuLWZpbmQnKTtcblx0XHR9KTtcblxuXHRcdCQoJy5qcy1vcGVuLW1haW4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRBcHAuc2V0QWN0aXZlU2NyZWVuKCcuanMtc2NyZWVuLW1haW4nKTtcblx0XHR9KTtcblxuXHRcdCQoJy5qcy1vcGVuLWV4Y2hhbmdlLWNyZWF0ZScpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tZXhjaGFuZ2UtY3JlYXRlJyk7XG5cdFx0fSk7XG5cblx0XHQkKCcuanMtYWRkLXdpc2gnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHQkKCcuanMtc2NyZWVuLXNlbGVjdC1nYW1lJykuYXR0cignZGF0YS1zZWxlY3QnLCAnd2lzaCcpO1xuXHRcdFx0QXBwLnNldEFjdGl2ZVNjcmVlbignLmpzLXNjcmVlbi1zZWxlY3QtZ2FtZScpO1xuXHRcdH0pO1xuXG5cdFx0JCgnLmpzLWFkZC1oYXZlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0JCgnLmpzLXNjcmVlbi1zZWxlY3QtZ2FtZScpLmF0dHIoJ2RhdGEtc2VsZWN0JywgJ2hhdmUnKTtcblx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tc2VsZWN0LWdhbWUnKTtcblx0XHR9KTtcblxuXHRcdCQoJy5qcy1zdWJtaXQtYXV0aCcpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tbWFpbicpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgYnV0dG9uRXhjaGFuZ2UgPSAkKCcuanMtZXhjaGFuZ2Utc3VibWl0Jyk7XG5cdFx0YnV0dG9uRXhjaGFuZ2Uub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGlmICghISFidXR0b25FeGNoYW5nZS5hdHRyKCdocmVmJykgJiYgISFidXR0b25FeGNoYW5nZS5kYXRhKCdwaG9uZScpKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5jbGVhbkJ1dHRvbigpO1xuXHRcdFx0XHRidXR0b25FeGNoYW5nZS5odG1sKGJ1dHRvbkV4Y2hhbmdlLmRhdGEoJ3Bob25lJykpO1xuXHRcdFx0XHRidXR0b25FeGNoYW5nZS5hdHRyKCdocmVmJywgJ3RlbDonICsgYnV0dG9uRXhjaGFuZ2UuZGF0YSgncGhvbmUnKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKCcuanMtZ2FtZS1saXN0LCAuanMtZ2FtZS1saXN0LWZpbmQnKS5cblx0XHRcdFx0b24oJ2NsaWNrJywgJy5qcy1jYXJkLWV4Y2hhbmdlJywgKGUpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXJkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmpzLWNhcmQtZXhjaGFuZ2UnKTtcblx0XHRcdFx0XHRjb25zdCBjYXJkVGFibGUgPSAkKCcuanMtZ2FtZS1saXN0LWV4Y2hhbmdlJyk7XG5cdFx0XHRcdFx0JCgnLmpzLWV4Y2hhbmdlLXN1Ym1pdCcpLmRhdGEoJ3Bob25lJywgY2FyZC5kYXRhKCdwaG9uZScpKTtcblx0XHRcdFx0XHRjYXJkVGFibGUuZmluZCgnLmpzLWNhcmQtZXhjaGFuZ2UnKS5yZW1vdmUoKTtcblx0XHRcdFx0XHRjYXJkLmNsb25lKCkucHJlcGVuZFRvKGNhcmRUYWJsZSk7XG5cdFx0XHRcdFx0aWYgKCEhY2FyZC5kYXRhKCdkZXNjcmlwdGlvbicpKSB7XG5cdFx0XHRcdFx0XHQkKCcuanMtZGVzY3JpcHRpb24tYmxvY2snKS5zaG93KCk7XG5cdFx0XHRcdFx0XHQkKCcuanMtZGVzY3JpcHRpb24nKS5odG1sKGNhcmQuZGF0YSgnZGVzY3JpcHRpb24nKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0JCgnLmpzLWRlc2NyaXB0aW9uLWJsb2NrJykuaGlkZSgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tZXhjaGFuZ2UnKTtcblx0XHRcdFx0fSk7XG5cblx0XHQkKCcuanMtZ2FtZS1saXN0LWZpbmQtc2luZ2xlJykub24oJ2NsaWNrJywgJy5qcy1jYXJkLWdhbWUnLCAoZSkgPT4ge1xuXHRcdFx0bGV0IGNhcmQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuanMtY2FyZC1nYW1lJyk7XG5cdFx0XHRsZXQgY2FyZFRhYmxlID0gJCgnLmpzLWNhcmRzLWhhdmUnKTtcblxuXHRcdFx0aWYgKCQoJy5qcy1zY3JlZW4tc2VsZWN0LWdhbWUnKS5hdHRyKCdkYXRhLXNlbGVjdCcpID09PSAnd2lzaCcpIHtcblx0XHRcdFx0Y2FyZFRhYmxlID0gJCgnLmpzLWNhcmRzLXdpc2gnKTtcblx0XHRcdH1cblx0XHRcdGNhcmRUYWJsZS5odG1sKGNhcmQuY2xvbmUoKSk7XG5cblx0XHRcdEFwcC5zZXRBY3RpdmVTY3JlZW4oJy5qcy1zY3JlZW4tZXhjaGFuZ2UtY3JlYXRlJyk7XG5cdFx0fSk7XG5cblx0XHQkKCcuanMtY3JlYXRlLWNoYW5nZScpLm9uKCdjbGljaycsICgpPT57XG5cdFx0XHR0aGlzLnNlcnZlclRvb2xzLmFkZEV4Y2hhbmdlKHtcblx0XHRcdFx0d2lzaDogJCgnLmpzLWNhcmRzLXdpc2gnKS5maW5kKCcuanMtY2FyZC1nYW1lJykuZGF0YSgnaWQnKSxcblx0XHRcdFx0aGF2ZTogJCgnLmpzLWNhcmRzLWhhdmUnKS5maW5kKCcuanMtY2FyZC1nYW1lJykuZGF0YSgnaWQnKSxcblx0XHRcdFx0cGhvbmU6ICQoJy5qcy1leGNoYW5nZS10ZWwnKS52YWwoKSxcblx0XHRcdFx0ZGVzY3JpcHRpb246ICQoJy5qcy1leGNoYW5nZS1kZXNjJykudmFsKCksXG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0Y2xlYW5CdXR0b24oKSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gJCgnLmpzLWV4Y2hhbmdlLXN1Ym1pdCcpO1xuXHRcdGJ1dHRvbi5hdHRyKCdkYXRhLXBob25lJywgJycpO1xuXHRcdGJ1dHRvbi5hdHRyKCdocmVmJywgJycpO1xuXHR9XG5cblx0Y2hlY2tWZXJpZnlBcHAoKSB7XG5cdFx0Y29uc3QgdmVyaWZ5Q29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2ZXJpZnlDb2RlJyk7XG5cblx0XHRpZiAoISEhdmVyaWZ5Q29kZSkge1xuXHRcdFx0bG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cdFx0XHR0aGlzLnNlcnZlclRvb2xzLmdldFZlcmlmeUNvZGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHN0YXRpYyBzZXRBY3RpdmVTY3JlZW4oY2xhc3NOYW1lKSB7XG5cdFx0Y29uc3Qgc2NyZWVucyA9ICQoJy5qcy1zY3JlZW4nKTtcblx0XHRzY3JlZW5zLmZhZGVPdXQoKTtcblx0XHRzY3JlZW5zLmZpbHRlcihjbGFzc05hbWUpLmZhZGVJbigpO1xuXHR9XG5cbn1cblxuZXhwb3J0IHtBcHB9OyIsImV4cG9ydCBjbGFzcyBBcHBLZXkge1xuXHRzdGF0aWMgZ2V0S2V5KCkge1xuXHRcdHJldHVybiAnenJoTFg2OVlBM3FkTnprZjU4MHN6aUNGZGZIektBVXInO1xuXHR9XG59IiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeS9kaXN0L2pxdWVyeVwiO1xuXG5jbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge31cbn1cblxuZXhwb3J0IHtCYXNlQ29tcG9uZW50fTsiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXCJqcXVlcnktdmFsaWRhdGlvblwiO1xuXG5jbGFzcyBCYXNlRm9ybSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5qcy1zdWJtaXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3N1Ym1pdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Rm9ybURhdGEoJGZvcm0pe1xuICAgICAgICB2YXIgdW5pbmRleGVkX2FycmF5ID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgdmFyIGluZGV4ZWRfYXJyYXkgPSB7fTtcblxuICAgICAgICAkLm1hcCh1bmluZGV4ZWRfYXJyYXksIGZ1bmN0aW9uKG4sIGkpe1xuICAgICAgICAgICAgaW5kZXhlZF9hcnJheVtuWyduYW1lJ11dID0gblsndmFsdWUnXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZWRfYXJyYXk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gdGhpcy4kZWxlbWVudDtcblxuICAgICAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoJ2NoZWNrUGhvbmUnLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAvXFwrXFxkezF9IFxcKFxcZHszfVxcKSBcXGR7M30gXFxkezJ9IFxcZHsyfS9nLnRlc3QodmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkLmV4dGVuZCgkLnZhbGlkYXRvci5tZXNzYWdlcywge1xuICAgICAgICAgICAgY2hlY2tQaG9uZTogJ9CS0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsC4nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6ICfQrdGC0L4g0L/QvtC70LUg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LfQsNC/0L7Qu9C90LjRgtGMLicsXG4gICAgICAgICAgICByZW1vdGU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtS4nLFxuICAgICAgICAgICAgZW1haWw6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0LkgZW1haWwuJyxcbiAgICAgICAgICAgIHVybDogJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSBVUkwuJyxcbiAgICAgICAgICAgIGRhdGU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGD0Y4g0LTQsNGC0YMuJyxcbiAgICAgICAgICAgIGRhdGVJU086ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGD0Y4g0LTQsNGC0YMg0LIg0YTQvtGA0LzQsNGC0LUgSVNPLicsXG4gICAgICAgICAgICBudW1iZXI6ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YfQuNGB0LvQvi4nLFxuICAgICAgICAgICAgZGlnaXRzOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQvtC00LjRgtC1INGC0L7Qu9GM0LrQviDRhtC40YTRgNGLLicsXG4gICAgICAgICAgICBjcmVkaXRjYXJkOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INC90L7QvNC10YAg0LrRgNC10LTQuNGC0L3QvtC5INC60LDRgNGC0YsuJyxcbiAgICAgICAgICAgIGVxdWFsVG86ICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YLQsNC60L7QtSDQttC1INC30L3QsNGH0LXQvdC40LUg0LXRidGRINGA0LDQty4nLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0YvQsdC10YDQuNGC0LUg0YTQsNC50Lsg0YEg0YDQsNGB0YjQuNGA0LXQvdC40LXQvCBqcGVnLCBwZGYsIGRvYywgZG9jeC4nLFxuICAgICAgICAgICAgbWF4bGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoXG4gICAgICAgICAgICAgICAgJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDQvdC1INCx0L7Qu9GM0YjQtSB7MH0g0YHQuNC80LLQvtC70L7Qsi4nKSxcbiAgICAgICAgICAgIG1pbmxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFxuICAgICAgICAgICAgICAgICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0L3QtSDQvNC10L3RjNGI0LUgezB9INGB0LjQvNCy0L7Qu9C+0LIuJyksXG4gICAgICAgICAgICByYW5nZWxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KFxuICAgICAgICAgICAgICAgICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0LfQvdCw0YfQtdC90LjQtSDQtNC70LjQvdC+0Lkg0L7RgiB7MH0g0LTQviB7MX0g0YHQuNC80LLQvtC70L7Qsi4nKSxcbiAgICAgICAgICAgIHJhbmdlOiAkLnZhbGlkYXRvci5mb3JtYXQoJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRh9C40YHQu9C+INC+0YIgezB9INC00L4gezF9LicpLFxuICAgICAgICAgICAgbWF4OiAkLnZhbGlkYXRvci5mb3JtYXQoXG4gICAgICAgICAgICAgICAgJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQstCy0LXQtNC40YLQtSDRh9C40YHQu9C+LCDQvNC10L3RjNGI0LXQtSDQuNC70Lgg0YDQsNCy0L3QvtC1IHswfS4nKSxcbiAgICAgICAgICAgIG1pbjogJC52YWxpZGF0b3IuZm9ybWF0KFxuICAgICAgICAgICAgICAgICfQn9C+0LbQsNC70YPQudGB0YLQsCwg0LLQstC10LTQuNGC0LUg0YfQuNGB0LvQviwg0LHQvtC70YzRiNC10LUg0LjQu9C4INGA0LDQstC90L7QtSB7MH0uJyksXG4gICAgICAgICAgICBtYXhzaXplOiAn0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDRhNCw0LnQu9CwIC0gNdC80LEnLFxuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS52YWxpZGF0ZSh7XG4gICAgICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24gKGVycm9yLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYW5nOiAncnUnLFxuICAgICAgICAgICAgaW52YWxpZEhhbmRsZXI6IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbW9kYWwgPSAkKFwiLm1vZGFsW2RhdGEtbW9kYWw9J2Vycm9yJ11cIik7XG4gICAgICAgICAgICAgICAgLy8gbW9kYWwuaXppTW9kYWwoJ29wZW4nKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiAoZm9ybSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0RnVuY3Rpb24oZm9ybSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS5maW5kKCcubmFtZScpLnJ1bGVzKFwiYWRkXCIsIHtcbiAgICAgICAgICAgIG1pbmxlbmd0aDogMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGZvcm0uZmluZCgnLmVtYWlsJykucnVsZXMoXCJhZGRcIiwge1xuICAgICAgICAgICAgbWlubGVuZ3RoOiAzXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLmZpbmQoJy50ZWwnKS5ydWxlcyhcImFkZFwiLCB7XG4gICAgICAgICAgICBtaW5sZW5ndGg6IDE3LFxuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS5maW5kKCcudGVsJykucnVsZXMoXCJhZGRcIiwge1xuICAgICAgICAgICAgbWlubGVuZ3RoOiAzXG4gICAgICAgIH0pO1xuXG4gICAgICAgICRmb3JtLmZpbmQoJy5yZXF1aXJlZCcpLnJ1bGVzKFwiYWRkXCIsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgc3VibWl0RnVuY3Rpb24oZm9ybSkge1xuICAgICAgIC8vXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9cbiAgICB9XG59XG5cbmV4cG9ydCB7QmFzZUZvcm19OyIsImltcG9ydCAkIGZyb20gXCJqcXVlcnkvZGlzdC9qcXVlcnlcIjtcblxuY2xhc3MgQmFzZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9ICQoJ2JvZHknKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9hYnN0cmFjdFxuICAgIH1cbn1cblxuZXhwb3J0IHtCYXNlUGFnZX07IiwiaW1wb3J0IHtTZXJ2ZXJUb29sc30gZnJvbSAnLi4vYXBpL3NlcnZlclRvb2xzJztcbmltcG9ydCAnanF1ZXJ5L2Rpc3QvanF1ZXJ5JztcblxuaW1wb3J0ICdzZWxlY3QyL2Rpc3QvanMvc2VsZWN0Mi5mdWxsLm1pbic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY2xhc3MgRmluZEdhbWUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmdhbWVMaXN0ID0gJCgnLmpzLWdhbWUtbGlzdC1maW5kLXNpbmdsZScpO1xuXHRcdHRoaXMuc2VydmVyVG9vbHMgPSBuZXcgU2VydmVyVG9vbHMoKTtcblx0fVxuXG5cdGFkZEV4Y2hhbmdlQnlDb25zb2xlKGdhbWVzTGlzdCwgZmluZCA9IGZhbHNlKSB7XG5cdFx0aWYgKCEhZ2FtZXNMaXN0ICYmIGdhbWVzTGlzdC5zdWNjZXNzID09IHRydWUpIHtcblx0XHRcdGxldCBnYW1lTGlzdCA9ICQoJy5qcy1nYW1lLWxpc3QtZmluZC1zaW5nbGUnKTtcblx0XHRcdGNvbnNvbGUubG9nKGdhbWVzTGlzdCk7XG5cblx0XHRcdEZpbmRHYW1lLmNsZWFybGlzdChnYW1lTGlzdCk7XG5cdFx0XHRpZihnYW1lc0xpc3QuZXhjaC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGdhbWVzTGlzdC5leGNoLmZvckVhY2goKGRhdGEpID0+IHtcblx0XHRcdFx0XHRnYW1lTGlzdC5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiY2FyZCBjYXJkX2xpdGUganMtY2FyZC1nYW1lXCJcXG4nICtcblx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdCAgICAgZGF0YS1pZD1cIicrIGRhdGEuaWQgKydcIj5cXG4nICtcblx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XCJjYXJkX19pbm5lclwiPlxcbicgK1xuXHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImNhcmRfX2NvbHVtblwiPlxcbicgK1xuXHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImNhcmRfX2ltZy13cmFwXCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW1nIHNyYz1cIicrIHRoaXMuc2VydmVyVG9vbHMuc3RvcmFnZVBhdGggKyBkYXRhLmltZyArJ1wiXFxuJyArXG5cdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHRcXHRcXHQgICAgIGFsdD1cIlwiXFxuJyArXG5cdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHRcXHRcXHQgICAgIGNsYXNzPVwiY2FyZF9faW1nXCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4nICtcblx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVwiY2FyZF9fZ2FtZS10aXRsZVwiPicrIGRhdGEubmFtZSArJzwvcD5cXG4nICtcblx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdDwvZGl2PlxcbicgK1xuXHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0PC9kaXY+XFxuJyArXG5cdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHQ8L2Rpdj4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnYW1lTGlzdC5wcmVwZW5kKCc8cCBjbGFzcz1cImNlbnRyZWQganMtY2FyZC1leGNoYW5nZVwiPtCf0L4g0LLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+PC9wPicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjbGVhcmxpc3QoZ2FtZUxpc3QpIHtcblx0XHRnYW1lTGlzdC5maW5kKCcuanMtY2FyZC1nYW1lJykucmVtb3ZlKCk7XG5cdH1cbn1cbiIsImltcG9ydCB7U2VydmVyVG9vbHN9IGZyb20gJy4uL2FwaS9zZXJ2ZXJUb29scyc7XG5pbXBvcnQgJ2pxdWVyeS9kaXN0L2pxdWVyeSc7XG5cbmltcG9ydCAnc2VsZWN0Mi9kaXN0L2pzL3NlbGVjdDIuZnVsbC5taW4nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGNsYXNzIExpc3RHYW1lIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5nYW1lTGlzdCA9ICQoJy5qcy1nYW1lLWxpc3QnKTtcblx0XHR0aGlzLnNlcnZlclRvb2xzID0gbmV3IFNlcnZlclRvb2xzKCk7XG5cdH1cblx0Ly8gMDpcblx0Ly8gXHRcdGV4X2lkOiAxXG5cdC8vIGdhbWVIYXZlOlxuXHQvLyBcdFx0Y2F0ZWdvcmlfaWQ6IFwiMVwiXG5cdC8vIGNyZWF0ZWRfYXQ6IFwiMjAxOS0wNS0xOCAwOTowMjowMFwiXG5cdC8vIGlkOiAyXG5cdC8vIGltZzogXCJnYW1lcy9NYXkyMDE5L0NNeFVJdXg4c0pzRmxZblhjRVZ6LnBuZ1wiXG5cdC8vIG5hbWU6IFwiQXNzYXNzaW4ncyBDcmVlZCBTeW5kaWNhdGVcIlxuXHQvLyB1cGRhdGVkX2F0OiBcIjIwMTktMDUtMTkgMDQ6MTk6NTBcIlxuXG5cdGFkZEV4Y2hhbmdlQnlDb25zb2xlKGV4Y2hhbmdlTGlzdCwgZmluZCA9IGZhbHNlKSB7XG5cdFx0aWYgKCEhZXhjaGFuZ2VMaXN0KSB7XG5cdFx0XHRsZXQgZ2FtZUxpc3QgPSAxO1xuXG5cdFx0XHRpZihmaW5kKSB7XG5cdFx0XHRcdGdhbWVMaXN0ID0gJCgnLmpzLWdhbWUtbGlzdC1maW5kJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnYW1lTGlzdCA9ICQoJy5qcy1nYW1lLWxpc3QnKTtcblx0XHRcdH1cblxuXHRcdFx0TGlzdEdhbWUuY2xlYXJsaXN0KGdhbWVMaXN0KTtcblx0XHRcdGlmKGV4Y2hhbmdlTGlzdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGV4Y2hhbmdlTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0Z2FtZUxpc3QucHJlcGVuZCgnXFx0XFx0XFx0PGRpdiBjbGFzcz1cImNhcmQganMtY2FyZC1leGNoYW5nZVwiIGRhdGEtZGVzY3JpcHRpb249XCInKyBkYXRhLmV4X2FsbC5kZXNjcmlwdGlvbiArJ1wiIGRhdGEtcGhvbmU9XCInKyBkYXRhLmV4X2FsbC5waG9uZSArJ1wiIGRhdGEtaWQ9XCInICtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuZXhfaWQgKyAnXCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XCJjYXJkX190aXRsZVwiPlxcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS51c2VyLm5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdDwvc3Bhbj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cImNhcmRfX3JhbmtcIj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHQrM1xcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdDwvc3Bhbj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwiY2FyZF9faW5uZXJcIj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwiY2FyZF9fY29sdW1uIGNhcmRfX2NvbHVtbl9sZWZ0XCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImNhcmRfX2NvbHVtbi10aXRsZVwiPtCf0YDQtdC00LvQsNCz0LDQtdGCPC9kaXY+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImNhcmRfX2ltZy13cmFwXCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XCInICsgdGhpcy5zZXJ2ZXJUb29scy5zdG9yYWdlUGF0aCArXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmdhbWVIYXZlLmltZyArICdcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltZ1wiPlxcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVwiY2FyZF9fZ2FtZS10aXRsZVwiPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5nYW1lSGF2ZS5uYW1lICsgJzwvcD5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVwiY2FyZF9fY29sdW1uIGNhcmRfX2NvbHVtbl9yaWdodFwiPlxcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XCJjYXJkX19jb2x1bW4tdGl0bGVcIj7QpdC+0YfQtdGCPC9kaXY+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cImNhcmRfX2ltZy13cmFwXCI+XFxuJyArXG5cdFx0XHRcdFx0XHRcdFx0XHQnXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGltZyBzcmM9XCInICsgdGhpcy5zZXJ2ZXJUb29scy5zdG9yYWdlUGF0aCArXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmdhbWVXaXNoLmltZyArICdcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcmRfX2ltZ1wiPlxcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcbicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0J1xcdFxcdFxcdFxcdFxcdFxcdDxwIGNsYXNzPVwiY2FyZF9fZ2FtZS10aXRsZVwiPicgK1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5nYW1lV2lzaC5uYW1lICsgJzwvcD5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHRcXHQ8L2Rpdj5cXG4nICtcblx0XHRcdFx0XHRcdFx0XHRcdCdcXHRcXHRcXHQ8L2Rpdj5cXG4nKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRnYW1lTGlzdC5wcmVwZW5kKCc8cCBjbGFzcz1cImNlbnRyZWQganMtY2FyZC1leGNoYW5nZVwiPtCf0L4g0LLQsNGI0LXQvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+PC9wPicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBjbGVhcmxpc3QoZ2FtZUxpc3QpIHtcblx0XHRnYW1lTGlzdC5maW5kKCcuanMtY2FyZC1leGNoYW5nZScpLnJlbW92ZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4uL2Jhc2UtY29tcG9uZW50JztcblxuaW1wb3J0ICdqcXVlcnkvZGlzdC9qcXVlcnknO1xuXG5pbXBvcnQgJ3NlbGVjdDIvZGlzdC9qcy9zZWxlY3QyLmZ1bGwubWluJztcbmltcG9ydCB7U2VydmVyVG9vbHN9IGZyb20gJy4uL2FwaS9zZXJ2ZXJUb29scyc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0aW5pdCgpIHtcblx0XHRjb25zdCBzZWxlY3RDb25zb2xlID0gJCgnLmpzLWNvbnNvbGUtc2VsZWN0Jyk7XG5cdFx0c2VsZWN0Q29uc29sZS5zZWxlY3QyKHtcblx0XHRcdCd0aGVtZSc6ICdsaWdodCcsXG5cdFx0XHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXG5cdFx0fSk7XG5cdFx0c2VsZWN0Q29uc29sZS5vbignY2hhbmdlLnNlbGVjdDInLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzZXJ2ZXJUb29scyA9IG5ldyBTZXJ2ZXJUb29scygpO1xuXHRcdFx0c2VydmVyVG9vbHMuZ2V0RXhjaGFuZ2Uoc2VsZWN0Q29uc29sZS52YWwoKSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCB7QmFzZUZvcm19IGZyb20gJy4uL2Jhc2UtZm9ybSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnkvZGlzdC9qcXVlcnknO1xuaW1wb3J0ICdqcXVlcnktdmFsaWRhdGlvbic7XG5pbXBvcnQge1NlcnZlclRvb2xzfSBmcm9tICcuLi9hcGkvc2VydmVyVG9vbHMnO1xuXG5leHBvcnQgY2xhc3MgQXV0aEZvcm0gZXh0ZW5kcyBCYXNlRm9ybSB7XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLiRlbGVtZW50LnZhbGlkYXRlKCk7XG5cdFx0dGhpcy5zZXJ2ZXJUb29scyA9IG5ldyBTZXJ2ZXJUb29scygpO1xuXHRcdHRoaXMuJGVsZW1lbnQuZmluZCgnLmpzLWhpZGRlbi1pbnB1dCcpLlxuXHRcdFx0XHRhdHRyKCd2YWx1ZScsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2ZXJpZnlDb2RlJykpO1xuXG5cdFx0JCgnLmpzLXN1Ym1pdC1hdXRoJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB2YWxpZCA9IHRoaXMuJGVsZW1lbnQudmFsaWQoKTtcblxuXHRcdFx0aWYgKHZhbGlkKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgJGZvcm0gPSB0aGlzLiRlbGVtZW50O1xuXHRcdFx0XHRsZXQgZm9ybURhdGEgPSAkZm9ybS5zZXJpYWxpemUoKTtcblx0XHRcdFx0dGhpcy5zZXJ2ZXJUb29scy5hdXRoKGZvcm1EYXRhKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHN1Ym1pdEZ1bmN0aW9uKGZvcm0pIHtcblx0XHQvLyBjb25zb2xlLmxvZyhmb3JtKTtcblx0XHQvLyBjb25zdCAkZm9ybSA9IHRoaXMuJGVsZW1lbnQ7XG5cdFx0Ly8gbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXHRcdC8vIHRoaXMuc2VydmVyVG9vbHMucmVnaXN0cmF0aW9uKGZvcm1EYXRhKTtcblx0fVxufSIsImltcG9ydCB7QmFzZUZvcm19IGZyb20gJy4uL2Jhc2UtZm9ybSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnkvZGlzdC9qcXVlcnknO1xuaW1wb3J0ICdqcXVlcnktdmFsaWRhdGlvbic7XG5pbXBvcnQge1NlcnZlclRvb2xzfSBmcm9tICcuLi9hcGkvc2VydmVyVG9vbHMnO1xuaW1wb3J0IHtMaXN0R2FtZX0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0R2FtZSc7XG5pbXBvcnQge0FwcH0gZnJvbSAnLi4vYXBwL2FwcCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbnNvbGVGb3JtIGV4dGVuZHMgQmFzZUZvcm0ge1xuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy4kZWxlbWVudC52YWxpZGF0ZSgpO1xuXHRcdHRoaXMuc2VydmVyVG9vbHMgPSBuZXcgU2VydmVyVG9vbHMoKTtcblx0XHR0aGlzLiRlbGVtZW50LmZpbmQoJy5qcy1oaWRkZW4taW5wdXQnKS5cblx0XHRcdFx0YXR0cigndmFsdWUnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmVyaWZ5Q29kZScpKTtcblxuXHRcdCQoJy5qcy1zdWJtaXQtY29uc29sZScpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMuJGVsZW1lbnQudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRBcHAuc2V0QWN0aXZlU2NyZWVuKCcuanMtc2NyZWVuLW1haW4nKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB2YWxpZCA9IHRoaXMuJGVsZW1lbnQudmFsaWQoKTtcblxuXHRcdFx0aWYgKHZhbGlkKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5qcy1jb25zb2xlOmNoZWNrZWQnKS52YWwoKTtcblx0XHRcdFx0dGhpcy5zZXJ2ZXJUb29scy5zYXZlVXNlckNvbnNvbGUodmFsdWUpO1xuXHRcdFx0XHR0aGlzLnNlcnZlclRvb2xzLmdldEV4Y2hhbmdlKHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHN1Ym1pdEZ1bmN0aW9uKGZvcm0pIHtcblx0XHQvLyBjb25zb2xlLmxvZyhmb3JtKTtcblx0XHQvLyBjb25zdCAkZm9ybSA9IHRoaXMuJGVsZW1lbnQ7XG5cdFx0Ly8gbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuXHRcdC8vIHRoaXMuc2VydmVyVG9vbHMucmVnaXN0cmF0aW9uKGZvcm1EYXRhKTtcblx0fVxufSIsImltcG9ydCB7QmFzZUZvcm19IGZyb20gJy4uL2Jhc2UtZm9ybSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnkvZGlzdC9qcXVlcnknO1xuaW1wb3J0ICdqcXVlcnktdmFsaWRhdGlvbic7XG5pbXBvcnQge1NlcnZlclRvb2xzfSBmcm9tICcuLi9hcGkvc2VydmVyVG9vbHMnO1xuXG5leHBvcnQgY2xhc3MgRmluZEZvcm0gZXh0ZW5kcyBCYXNlRm9ybSB7XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLnNlcnZlclRvb2xzID0gbmV3IFNlcnZlclRvb2xzKCk7XG5cdFx0Ly8gdGhpcy4kZWxlbWVudC5maW5kKCcuanMtaW5wdXQnKS5vbignY2hhbmdlJywgKCkgPT4ge1xuXHRcdC8vIFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHQvLyB9KTtcblxuXHRcdHRoaXMuJGVsZW1lbnQub24oJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGNvbnN0ICRmb3JtID0gdGhpcy4kZWxlbWVudDtcblx0XHRcdGNvbnN0IGZvcm1EYXRhID0ge1xuXHRcdFx0XHR3aXNoOiB0aGlzLiRlbGVtZW50LmZpbmQoJy5qcy1pbnB1dC13aXNoJykudmFsKCksXG5cdFx0XHRcdGhhdmU6IHRoaXMuJGVsZW1lbnQuZmluZCgnLmpzLWlucHV0LWhhdmUnKS52YWwoKSxcblx0XHRcdH07XG5cblx0XHRcdHRoaXMuc2VydmVyVG9vbHMuZmluZChmb3JtRGF0YSk7XG5cdFx0fSk7XG5cdH1cblxuXHRzdWJtaXRGdW5jdGlvbihmb3JtKSB7XG5cdH1cbn0iLCJpbXBvcnQge0Jhc2VGb3JtfSBmcm9tICcuLi9iYXNlLWZvcm0nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5L2Rpc3QvanF1ZXJ5JztcbmltcG9ydCAnanF1ZXJ5LXZhbGlkYXRpb24nO1xuaW1wb3J0IHtTZXJ2ZXJUb29sc30gZnJvbSAnLi4vYXBpL3NlcnZlclRvb2xzJztcblxuZXhwb3J0IGNsYXNzIEZpbmRMaXRlRm9ybSBleHRlbmRzIEJhc2VGb3JtIHtcblxuXHRpbml0KCkge1xuXHRcdHRoaXMuc2VydmVyVG9vbHMgPSBuZXcgU2VydmVyVG9vbHMoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQub24oJ2tleXVwJywgKGUpID0+IHtcblx0XHRcdGNvbnN0ICRmb3JtID0gdGhpcy4kZWxlbWVudDtcblx0XHRcdHRoaXMuc2VydmVyVG9vbHMuZ2V0R2FtZXMoIHRoaXMuJGVsZW1lbnQuZmluZCgnLmpzLWlucHV0LXF1ZXJ5JykudmFsKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0c3VibWl0RnVuY3Rpb24oZm9ybSkge1xuXHR9XG59IiwiaW1wb3J0IHtCYXNlRm9ybX0gZnJvbSAnLi4vYmFzZS1mb3JtJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeS9kaXN0L2pxdWVyeSc7XG5pbXBvcnQgJ2pxdWVyeS12YWxpZGF0aW9uJztcbmltcG9ydCB7U2VydmVyVG9vbHN9IGZyb20gJy4uL2FwaS9zZXJ2ZXJUb29scyc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb25Gb3JtIGV4dGVuZHMgQmFzZUZvcm0ge1xuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy4kZWxlbWVudC52YWxpZGF0ZSgpO1xuXHRcdHRoaXMuc2VydmVyVG9vbHMgPSBuZXcgU2VydmVyVG9vbHMoKTtcblx0XHR0aGlzLiRlbGVtZW50LmZpbmQoJy5qcy1oaWRkZW4taW5wdXQnKS5cblx0XHRcdFx0YXR0cigndmFsdWUnLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndmVyaWZ5Q29kZScpKTtcblxuXHRcdCQoJy5qcy1zdWJtaXQtcmVnJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuJGVsZW1lbnQub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0XHRjb25zdCB2YWxpZCA9IHRoaXMuJGVsZW1lbnQudmFsaWQoKTtcblxuXHRcdFx0aWYgKHZhbGlkKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgJGZvcm0gPSB0aGlzLiRlbGVtZW50O1xuXHRcdFx0XHRsZXQgZm9ybURhdGEgPSAkZm9ybS5zZXJpYWxpemUoKTtcblx0XHRcdFx0dGhpcy5zZXJ2ZXJUb29scy5yZWdpc3RyYXRpb24oZm9ybURhdGEpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c3VibWl0RnVuY3Rpb24oZm9ybSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKGZvcm0pO1xuXHRcdC8vIGNvbnN0ICRmb3JtID0gdGhpcy4kZWxlbWVudDtcblx0XHQvLyBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cdFx0Ly8gdGhpcy5zZXJ2ZXJUb29scy5yZWdpc3RyYXRpb24oZm9ybURhdGEpO1xuXHR9XG59IiwiaW1wb3J0ICcuL3BhZ2UvaW5kZXguanMnOyIsImltcG9ydCB7QmFzZVBhZ2V9IGZyb20gXCIuLi9iYXNlLXBhZ2VcIjtcbmltcG9ydCB7QXBwfSBmcm9tIFwiLi4vYXBwL2FwcC5qc1wiO1xuXG5cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuICAgIH1cbn1cblxuY29uc3QgcGFnZSA9IG5ldyBJbmRleCgpOyJdLCJzb3VyY2VSb290IjoiIn0=