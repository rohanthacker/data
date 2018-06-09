/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction camelToSnake(match, offset, string) {\n    return \"_\" + match.toLowerCase();\n}\nvar transformField = function (fieldName) {\n    return fieldName.replace(/[A-Z]/, camelToSnake);\n};\nvar Model = /** @class */ (function () {\n    function Model(params) {\n        this.entity = params.entity;\n        this.fields = params.fields;\n        this.getColumns = this.getColumns.bind(this);\n    }\n    Model.prototype.getColumns = function () {\n        var _this = this;\n        var columns = Object.keys(this.fields);\n        var relationship = \"FOREIGN KEY(column_id) REFERENCES artist(artist_id)\";\n        return columns.map(function (column) {\n            return transformField(column) + \" \" + (_this.fields[column].autoIncrement ? \"AUTO_INCREMENT\" : \"\") + \" \" + (_this.fields[column].null ? \"\" : \"NOT NULL\") + \" \" + (_this.fields[column].primary_key ? \"PRIMARY KEY\" : \"\") + \" \";\n        });\n    };\n    Model.prototype.createTable = function () {\n        return \"CREATE TABLE \" + this.entity + \" (\" + this.getColumns() + \")\";\n    };\n    return Model;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n\n//# sourceURL=webpack:///./src/Model.ts?");

/***/ }),

/***/ "./src/fields/index.ts":
/*!*****************************!*\
  !*** ./src/fields/index.ts ***!
  \*****************************/
/*! exports provided: AutoField, VarcharField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutoField\", function() { return AutoField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VarcharField\", function() { return VarcharField; });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar Field = /** @class */ (function () {\n    function Field(params) {\n        if (params === void 0) { params = {}; }\n        this.type = params.type;\n        this.null = params.null;\n        this.unique = params.unique;\n    }\n    return Field;\n}());\nvar AutoField = /** @class */ (function (_super) {\n    __extends(AutoField, _super);\n    function AutoField() {\n        var _this = _super.call(this) || this;\n        _this.primary_key = true;\n        _this.autoIncrement = true;\n        return _this;\n    }\n    return AutoField;\n}(Field));\n\nvar VarcharField = /** @class */ (function (_super) {\n    __extends(VarcharField, _super);\n    function VarcharField() {\n        return _super.call(this) || this;\n    }\n    return VarcharField;\n}(Field));\n\n\n\n//# sourceURL=webpack:///./src/fields/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ \"./src/Model.ts\");\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields */ \"./src/fields/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar Task = /** @class */ (function (_super) {\n    __extends(Task, _super);\n    function Task(params) {\n        if (params === void 0) { params = {}; }\n        return _super.call(this, {\n            entity: \"Tasks\",\n            fields: {\n                taskName: new _fields__WEBPACK_IMPORTED_MODULE_1__[\"VarcharField\"]()\n            }\n        }) || this;\n    }\n    return Task;\n}(_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nvar User = /** @class */ (function (_super) {\n    __extends(User, _super);\n    function User(params) {\n        return _super.call(this, {\n            entity: \"Users\",\n            fields: {\n                id: new _fields__WEBPACK_IMPORTED_MODULE_1__[\"AutoField\"](),\n                firstName: new _fields__WEBPACK_IMPORTED_MODULE_1__[\"VarcharField\"](),\n                lastName: new _fields__WEBPACK_IMPORTED_MODULE_1__[\"VarcharField\"]()\n            }\n        }) || this;\n    }\n    return User;\n}(_Model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nvar newUser = new User({ firstName: \"Rohan\", lastName: \"Thacker\" });\nconsole.log(newUser.createTable());\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });