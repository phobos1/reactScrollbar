(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ScrollArea"] = factory(require("react"));
	else
		root["ScrollArea"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(1);
	
	var _ScrollArea = __webpack_require__(5);
	
	var _ScrollArea2 = _interopRequireDefault(_ScrollArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ScrollArea2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./scrollArea.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./scrollArea.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".scrollarea-content {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n}\n.scrollarea-content:focus {\n  outline: 0;\n}\n.scrollarea {\n  position: relative;\n  overflow: hidden;\n}\n.scrollarea .scrollbar-container {\n  position: absolute;\n  background: none;\n  opacity: .1;\n  z-index: 9999;\n  -webkit-transition: all .4s;\n  -moz-transition: all .4s;\n  -ms-transition: all .4s;\n  -o-transition: all .4s;\n  transition: all .4s;\n}\n.scrollarea .scrollbar-container.horizontal {\n  width: 100%;\n  height: 10px;\n  left: 0;\n  bottom: 0;\n}\n.scrollarea .scrollbar-container.horizontal .scrollbar {\n  width: 20px;\n  height: 8px;\n  background: black;\n  margin-top: 1px;\n}\n.scrollarea .scrollbar-container.vertical {\n  width: 10px;\n  height: 100%;\n  right: 0;\n  top: 0;\n}\n.scrollarea .scrollbar-container.vertical .scrollbar {\n  width: 8px;\n  height: 20px;\n  background: black;\n  margin-left: 1px;\n}\n.scrollarea .scrollbar-container:hover {\n  background: gray;\n  opacity: .6 !important;\n}\n.scrollarea .scrollbar-container.active {\n  background: gray;\n  opacity: .6 !important;\n}\n.scrollarea:hover .scrollbar-container {\n  opacity: .3;\n}\n", ""]);
	
	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Scrollbar = __webpack_require__(7);
	
	var _Scrollbar2 = _interopRequireDefault(_Scrollbar);
	
	var _utils = __webpack_require__(36);
	
	var _lineHeight2 = __webpack_require__(37);
	
	var _lineHeight3 = _interopRequireDefault(_lineHeight2);
	
	var _reactMotion = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var eventTypes = {
	    wheel: 'wheel',
	    api: 'api',
	    touch: 'touch',
	    touchEnd: 'touchEnd',
	    mousemove: 'mousemove',
	    keyPress: 'keypress'
	};
	
	var ScrollArea = function (_React$Component) {
	    _inherits(ScrollArea, _React$Component);
	
	    function ScrollArea(props) {
	        _classCallCheck(this, ScrollArea);
	
	        var _this = _possibleConstructorReturn(this, (ScrollArea.__proto__ || Object.getPrototypeOf(ScrollArea)).call(this, props));
	
	        _this.state = {
	            topPosition: 0,
	            leftPosition: 0,
	            realHeight: 0,
	            containerHeight: 0,
	            realWidth: 0,
	            containerWidth: 0
	        };
	
	        _this.scrollArea = {
	            refresh: function refresh() {
	                _this.setSizesToState();
	            },
	            scrollTop: function scrollTop() {
	                _this.scrollTop();
	            },
	            scrollBottom: function scrollBottom() {
	                _this.scrollBottom();
	            },
	            scrollYTo: function scrollYTo(position) {
	                _this.scrollYTo(position);
	            },
	            scrollLeft: function scrollLeft() {
	                _this.scrollLeft();
	            },
	            scrollRight: function scrollRight() {
	                _this.scrollRight();
	            },
	            scrollXTo: function scrollXTo(position) {
	                _this.scrollXTo(position);
	            }
	        };
	
	        _this.evntsPreviousValues = {
	            clientX: 0,
	            clientY: 0,
	            deltaX: 0,
	            deltaY: 0
	        };
	
	        _this.bindedHandleWindowResize = _this.handleWindowResize.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollArea, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return {
	                scrollArea: this.scrollArea
	            };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.addEventListener("resize", this.bindedHandleWindowResize);
	            }
	            this.lineHeightPx = (0, _lineHeight3.default)((0, _utils.findDOMNode)(this.content));
	            this.setSizesToState();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.contentWindow) {
	                this.props.contentWindow.removeEventListener("resize", this.bindedHandleWindowResize);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setSizesToState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                children = _props.children,
	                className = _props.className,
	                contentClassName = _props.contentClassName,
	                ownerDocument = _props.ownerDocument;
	
	            var withMotion = this.props.smoothScrolling && (this.state.eventType === eventTypes.wheel || this.state.eventType === eventTypes.api || this.state.eventType === eventTypes.touchEnd || this.state.eventType === eventTypes.keyPress);
	
	            var scrollbarY = this.canScrollY() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realHeight,
	                containerSize: this.state.containerHeight,
	                position: this.state.topPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarYPositionChange.bind(this),
	                containerStyle: this.props.verticalContainerStyle,
	                scrollbarStyle: this.props.verticalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                onFocus: this.focusContent.bind(this),
	                type: 'vertical' }) : null;
	
	            var scrollbarX = this.canScrollX() ? _react2.default.createElement(_Scrollbar2.default, {
	                ownerDocument: ownerDocument,
	                realSize: this.state.realWidth,
	                containerSize: this.state.containerWidth,
	                position: this.state.leftPosition,
	                onMove: this.handleScrollbarMove.bind(this),
	                onPositionChange: this.handleScrollbarXPositionChange.bind(this),
	                containerStyle: this.props.horizontalContainerStyle,
	                scrollbarStyle: this.props.horizontalScrollbarStyle,
	                smoothScrolling: withMotion,
	                minScrollSize: this.props.minScrollSize,
	                onFocus: this.focusContent.bind(this),
	                type: 'horizontal' }) : null;
	
	            if (typeof children === 'function') {
	                (0, _utils.warnAboutFunctionChild)();
	                children = children();
	            } else {
	                (0, _utils.warnAboutElementChild)();
	            }
	
	            var classes = 'scrollarea ' + (className || '');
	            var contentClasses = 'scrollarea-content ' + (contentClassName || '');
	
	            var contentStyle = {
	                marginTop: -this.state.topPosition,
	                marginLeft: -this.state.leftPosition
	            };
	            var springifiedContentStyle = withMotion ? (0, _utils.modifyObjValues)(contentStyle, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : contentStyle;
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: springifiedContentStyle },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        {
	                            ref: function ref(x) {
	                                return _this2.wrapper = x;
	                            },
	                            className: classes,
	                            style: _this2.props.style,
	                            onWheel: _this2.handleWheel.bind(_this2)
	                        },
	                        _react2.default.createElement(
	                            'div',
	                            {
	                                ref: function ref(x) {
	                                    return _this2.content = x;
	                                },
	                                style: _extends({}, _this2.props.contentStyle, style),
	                                className: contentClasses,
	                                onTouchStart: _this2.handleTouchStart.bind(_this2),
	                                onTouchMove: _this2.handleTouchMove.bind(_this2),
	                                onTouchEnd: _this2.handleTouchEnd.bind(_this2),
	                                onKeyDown: _this2.handleKeyDown.bind(_this2),
	                                tabIndex: _this2.props.focusableTabIndex
	                            },
	                            children
	                        ),
	                        scrollbarY,
	                        scrollbarX
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'setStateFromEvent',
	        value: function setStateFromEvent(newState, eventType) {
	            if (this.props.onScroll) {
	                this.props.onScroll(newState);
	            }
	            this.setState(_extends({}, newState, { eventType: eventType }));
	        }
	    }, {
	        key: 'handleTouchStart',
	        value: function handleTouchStart(e) {
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$ = touches[0],
	                    clientX = _touches$.clientX,
	                    clientY = _touches$.clientY;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	            }
	        }
	    }, {
	        key: 'handleTouchMove',
	        value: function handleTouchMove(e) {
	            if (this.canScroll()) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	
	            var touches = e.touches;
	
	            if (touches.length === 1) {
	                var _touches$2 = touches[0],
	                    clientX = _touches$2.clientX,
	                    clientY = _touches$2.clientY;
	
	
	                var deltaY = this.eventPreviousValues.clientY - clientY;
	                var deltaX = this.eventPreviousValues.clientX - clientX;
	
	                this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                    deltaY: deltaY,
	                    deltaX: deltaX,
	                    clientY: clientY,
	                    clientX: clientX,
	                    timestamp: Date.now()
	                });
	
	                this.setStateFromEvent(this.composeNewState(-deltaX, -deltaY));
	            }
	        }
	    }, {
	        key: 'handleTouchEnd',
	        value: function handleTouchEnd(e) {
	            var _eventPreviousValues = this.eventPreviousValues,
	                deltaX = _eventPreviousValues.deltaX,
	                deltaY = _eventPreviousValues.deltaY,
	                timestamp = _eventPreviousValues.timestamp;
	
	            if (typeof deltaX === 'undefined') deltaX = 0;
	            if (typeof deltaY === 'undefined') deltaY = 0;
	            if (Date.now() - timestamp < 200) {
	                this.setStateFromEvent(this.composeNewState(-deltaX * 10, -deltaY * 10), eventTypes.touchEnd);
	            }
	
	            this.eventPreviousValues = _extends({}, this.eventPreviousValues, {
	                deltaY: 0,
	                deltaX: 0
	            });
	        }
	    }, {
	        key: 'handleScrollbarMove',
	        value: function handleScrollbarMove(deltaY, deltaX) {
	            this.setStateFromEvent(this.composeNewState(deltaX, deltaY));
	        }
	    }, {
	        key: 'handleScrollbarXPositionChange',
	        value: function handleScrollbarXPositionChange(position) {
	            this.scrollXTo(position);
	        }
	    }, {
	        key: 'handleScrollbarYPositionChange',
	        value: function handleScrollbarYPositionChange(position) {
	            this.scrollYTo(position);
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(e) {
	            var deltaY = e.deltaY;
	            var deltaX = e.deltaX;
	
	            if (this.props.swapWheelAxes) {
	                var _ref = [deltaX, deltaY];
	                deltaY = _ref[0];
	                deltaX = _ref[1];
	            }
	
	            /*
	             * WheelEvent.deltaMode can differ between browsers and must be normalized
	             * e.deltaMode === 0: The delta values are specified in pixels
	             * e.deltaMode === 1: The delta values are specified in lines
	             * https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent/deltaMode
	             */
	            if (e.deltaMode === 1) {
	                deltaY = deltaY * this.lineHeightPx;
	                deltaX = deltaX * this.lineHeightPx;
	            }
	
	            deltaY = deltaY * this.props.speed;
	            deltaX = deltaX * this.props.speed;
	
	            var newState = this.composeNewState(-deltaX, -deltaY);
	
	            if (newState.topPosition && this.state.topPosition !== newState.topPosition || newState.leftPosition && this.state.leftPosition !== newState.leftPosition || this.props.stopScrollPropagation) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	
	            this.setStateFromEvent(newState, eventTypes.wheel);
	            this.focusContent();
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            // only handle if scroll area is in focus
	            if (e.target.tagName.toLowerCase() !== 'input') {
	                var deltaY = 0;
	                var deltaX = 0;
	                var _lineHeight = this.lineHeightPx ? this.lineHeightPx : 10;
	
	                switch (e.keyCode) {
	                    case 33:
	                        // page up
	                        deltaY = this.state.containerHeight - _lineHeight;
	                        break;
	                    case 34:
	                        // page down
	                        deltaY = -this.state.containerHeight + _lineHeight;
	                        break;
	                    case 37:
	                        // left
	                        deltaX = _lineHeight;
	                        break;
	                    case 38:
	                        // up
	                        deltaY = _lineHeight;
	                        break;
	                    case 39:
	                        // right
	                        deltaX = -_lineHeight;
	                        break;
	                    case 40:
	                        // down
	                        deltaY = -_lineHeight;
	                        break;
	                }
	
	                // only compose new state if key code matches those above
	                if (deltaY !== 0 || deltaX !== 0) {
	                    var newState = this.composeNewState(deltaX, deltaY);
	
	                    e.preventDefault();
	                    e.stopPropagation();
	
	                    this.setStateFromEvent(newState, eventTypes.keyPress);
	                }
	            }
	        }
	    }, {
	        key: 'handleWindowResize',
	        value: function handleWindowResize() {
	            var newState = this.computeSizes();
	            newState = this.getModifiedPositionsIfNeeded(newState);
	            this.setStateFromEvent(newState);
	        }
	    }, {
	        key: 'composeNewState',
	        value: function composeNewState(deltaX, deltaY) {
	            var newState = this.computeSizes();
	
	            if (this.canScrollY(newState)) {
	                newState.topPosition = this.computeTopPosition(deltaY, newState);
	            } else {
	                newState.topPosition = 0;
	            }
	            if (this.canScrollX(newState)) {
	                newState.leftPosition = this.computeLeftPosition(deltaX, newState);
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'computeTopPosition',
	        value: function computeTopPosition(deltaY, sizes) {
	            var newTopPosition = this.state.topPosition - deltaY;
	            return this.normalizeTopPosition(newTopPosition, sizes);
	        }
	    }, {
	        key: 'computeLeftPosition',
	        value: function computeLeftPosition(deltaX, sizes) {
	            var newLeftPosition = this.state.leftPosition - deltaX;
	            return this.normalizeLeftPosition(newLeftPosition, sizes);
	        }
	    }, {
	        key: 'normalizeTopPosition',
	        value: function normalizeTopPosition(newTopPosition, sizes) {
	            if (newTopPosition > sizes.realHeight - sizes.containerHeight) {
	                newTopPosition = sizes.realHeight - sizes.containerHeight;
	            }
	            if (newTopPosition < 0) {
	                newTopPosition = 0;
	            }
	            return newTopPosition;
	        }
	    }, {
	        key: 'normalizeLeftPosition',
	        value: function normalizeLeftPosition(newLeftPosition, sizes) {
	            if (newLeftPosition > sizes.realWidth - sizes.containerWidth) {
	                newLeftPosition = sizes.realWidth - sizes.containerWidth;
	            } else if (newLeftPosition < 0) {
	                newLeftPosition = 0;
	            }
	
	            return newLeftPosition;
	        }
	    }, {
	        key: 'computeSizes',
	        value: function computeSizes() {
	            var realHeight = this.content.offsetHeight;
	            var containerHeight = this.wrapper.offsetHeight;
	            var realWidth = this.content.offsetWidth;
	            var containerWidth = this.wrapper.offsetWidth;
	
	            return {
	                realHeight: realHeight,
	                containerHeight: containerHeight,
	                realWidth: realWidth,
	                containerWidth: containerWidth
	            };
	        }
	    }, {
	        key: 'setSizesToState',
	        value: function setSizesToState() {
	            var sizes = this.computeSizes();
	            if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
	                this.setStateFromEvent(this.getModifiedPositionsIfNeeded(sizes));
	            }
	        }
	    }, {
	        key: 'scrollTop',
	        value: function scrollTop() {
	            this.scrollYTo(0);
	        }
	    }, {
	        key: 'scrollBottom',
	        value: function scrollBottom() {
	            this.scrollYTo(this.state.realHeight - this.state.containerHeight);
	        }
	    }, {
	        key: 'scrollLeft',
	        value: function scrollLeft() {
	            this.scrollXTo(0);
	        }
	    }, {
	        key: 'scrollRight',
	        value: function scrollRight() {
	            this.scrollXTo(this.state.realWidth - this.state.containerWidth);
	        }
	    }, {
	        key: 'scrollYTo',
	        value: function scrollYTo(topPosition) {
	            if (this.canScrollY()) {
	                var position = this.normalizeTopPosition(topPosition, this.computeSizes());
	                this.setStateFromEvent({ topPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'scrollXTo',
	        value: function scrollXTo(leftPosition) {
	            if (this.canScrollX()) {
	                var position = this.normalizeLeftPosition(leftPosition, this.computeSizes());
	                this.setStateFromEvent({ leftPosition: position }, eventTypes.api);
	            }
	        }
	    }, {
	        key: 'canScrollY',
	        value: function canScrollY() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var scrollableY = state.realHeight > state.containerHeight;
	            return scrollableY && this.props.vertical;
	        }
	    }, {
	        key: 'canScrollX',
	        value: function canScrollX() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            var scrollableX = state.realWidth > state.containerWidth;
	            return scrollableX && this.props.horizontal;
	        }
	    }, {
	        key: 'canScroll',
	        value: function canScroll() {
	            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	            return this.canScrollY(state) || this.canScrollX(state);
	        }
	    }, {
	        key: 'getModifiedPositionsIfNeeded',
	        value: function getModifiedPositionsIfNeeded(newState) {
	            var bottomPosition = newState.realHeight - newState.containerHeight;
	            if (this.state.topPosition >= bottomPosition) {
	                newState.topPosition = this.canScrollY(newState) ? (0, _utils.positiveOrZero)(bottomPosition) : 0;
	            }
	
	            var rightPosition = newState.realWidth - newState.containerWidth;
	            if (this.state.leftPosition >= rightPosition) {
	                newState.leftPosition = this.canScrollX(newState) ? (0, _utils.positiveOrZero)(rightPosition) : 0;
	            }
	
	            return newState;
	        }
	    }, {
	        key: 'focusContent',
	        value: function focusContent() {
	            if (this.content) {
	                (0, _utils.findDOMNode)(this.content).focus();
	            }
	        }
	    }]);
	
	    return ScrollArea;
	}(_react2.default.Component);
	
	exports.default = ScrollArea;
	
	
	ScrollArea.childContextTypes = {
	    scrollArea: _react2.default.PropTypes.object
	};
	
	ScrollArea.propTypes = {
	    className: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object,
	    speed: _react2.default.PropTypes.number,
	    contentClassName: _react2.default.PropTypes.string,
	    contentStyle: _react2.default.PropTypes.object,
	    vertical: _react2.default.PropTypes.bool,
	    verticalContainerStyle: _react2.default.PropTypes.object,
	    verticalScrollbarStyle: _react2.default.PropTypes.object,
	    horizontal: _react2.default.PropTypes.bool,
	    horizontalContainerStyle: _react2.default.PropTypes.object,
	    horizontalScrollbarStyle: _react2.default.PropTypes.object,
	    onScroll: _react2.default.PropTypes.func,
	    contentWindow: _react2.default.PropTypes.any,
	    ownerDocument: _react2.default.PropTypes.any,
	    smoothScrolling: _react2.default.PropTypes.bool,
	    minScrollSize: _react2.default.PropTypes.number,
	    swapWheelAxes: _react2.default.PropTypes.bool,
	    stopScrollPropagation: _react2.default.PropTypes.bool,
	    focusableTabIndex: _react2.default.PropTypes.number
	};
	
	ScrollArea.defaultProps = {
	    speed: 1,
	    vertical: true,
	    horizontal: true,
	    smoothScrolling: false,
	    swapWheelAxes: false,
	    contentWindow: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object" ? window : undefined,
	    ownerDocument: (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === "object" ? document : undefined,
	    focusableTabIndex: 1
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMotion = __webpack_require__(8);
	
	var _utils = __webpack_require__(36);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScrollBar = function (_React$Component) {
	    _inherits(ScrollBar, _React$Component);
	
	    function ScrollBar(props) {
	        _classCallCheck(this, ScrollBar);
	
	        var _this = _possibleConstructorReturn(this, (ScrollBar.__proto__ || Object.getPrototypeOf(ScrollBar)).call(this, props));
	
	        var newState = _this.calculateState(props);
	        _this.state = {
	            position: newState.position,
	            scrollSize: newState.scrollSize,
	            isDragging: false,
	            lastClientPosition: 0
	        };
	
	        if (props.type === 'vertical') {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForVertical.bind(_this);
	        } else {
	            _this.bindedHandleMouseMove = _this.handleMouseMoveForHorizontal.bind(_this);
	        }
	
	        _this.bindedHandleMouseUp = _this.handleMouseUp.bind(_this);
	        return _this;
	    }
	
	    _createClass(ScrollBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.addEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.addEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(this.calculateState(nextProps));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.ownerDocument) {
	                this.props.ownerDocument.removeEventListener("mousemove", this.bindedHandleMouseMove);
	                this.props.ownerDocument.removeEventListener("mouseup", this.bindedHandleMouseUp);
	            }
	        }
	    }, {
	        key: 'calculateFractionalPosition',
	        value: function calculateFractionalPosition(realContentSize, containerSize, contentPosition) {
	            var relativeSize = realContentSize - containerSize;
	
	            return 1 - (relativeSize - contentPosition) / relativeSize;
	        }
	    }, {
	        key: 'calculateState',
	        value: function calculateState(props) {
	            var fractionalPosition = this.calculateFractionalPosition(props.realSize, props.containerSize, props.position);
	            var proportionalToPageScrollSize = props.containerSize * props.containerSize / props.realSize;
	            var scrollSize = proportionalToPageScrollSize < props.minScrollSize ? props.minScrollSize : proportionalToPageScrollSize;
	
	            var scrollPosition = (props.containerSize - scrollSize) * fractionalPosition;
	            return {
	                scrollSize: scrollSize,
	                position: Math.round(scrollPosition)
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                smoothScrolling = _props.smoothScrolling,
	                isDragging = _props.isDragging,
	                type = _props.type,
	                scrollbarStyle = _props.scrollbarStyle,
	                containerStyle = _props.containerStyle;
	
	            var isVoriziontal = type === 'horizontal';
	            var isVertical = type === 'vertical';
	            var scrollStyles = this.createScrollStyles();
	            var springifiedScrollStyles = smoothScrolling ? (0, _utils.modifyObjValues)(scrollStyles, function (x) {
	                return (0, _reactMotion.spring)(x);
	            }) : scrollStyles;
	
	            var scrollbarClasses = 'scrollbar-container ' + (isDragging ? 'active' : '') + ' ' + (isVoriziontal ? 'horizontal' : '') + ' ' + (isVertical ? 'vertical' : '');
	
	            return _react2.default.createElement(
	                _reactMotion.Motion,
	                { style: springifiedScrollStyles },
	                function (style) {
	                    return _react2.default.createElement(
	                        'div',
	                        {
	                            className: scrollbarClasses,
	                            style: containerStyle,
	                            onMouseDown: _this2.handleScrollBarContainerClick.bind(_this2),
	                            ref: function ref(x) {
	                                return _this2.scrollbarContainer = x;
	                            }
	                        },
	                        _react2.default.createElement('div', {
	                            className: 'scrollbar',
	                            style: _extends({}, scrollbarStyle, style),
	                            onMouseDown: _this2.handleMouseDown.bind(_this2)
	                        })
	                    );
	                }
	            );
	        }
	    }, {
	        key: 'handleScrollBarContainerClick',
	        value: function handleScrollBarContainerClick(e) {
	            e.preventDefault();
	            var multiplier = this.computeMultiplier();
	            var clientPosition = this.isVertical() ? e.clientY : e.clientX;
	
	            var _scrollbarContainer$g = this.scrollbarContainer.getBoundingClientRect(),
	                top = _scrollbarContainer$g.top,
	                left = _scrollbarContainer$g.left;
	
	            var clientScrollPosition = this.isVertical() ? top : left;
	
	            var position = clientPosition - clientScrollPosition;
	            var proportionalToPageScrollSize = this.props.containerSize * this.props.containerSize / this.props.realSize;
	
	            this.setState({ isDragging: true, lastClientPosition: clientPosition });
	            this.props.onPositionChange((position - proportionalToPageScrollSize / 2) / multiplier);
	        }
	    }, {
	        key: 'handleMouseMoveForHorizontal',
	        value: function handleMouseMoveForHorizontal(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaX = this.state.lastClientPosition - e.clientX;
	                this.setState({ lastClientPosition: e.clientX });
	                this.props.onMove(0, deltaX / multiplier);
	            }
	        }
	    }, {
	        key: 'handleMouseMoveForVertical',
	        value: function handleMouseMoveForVertical(e) {
	            var multiplier = this.computeMultiplier();
	
	            if (this.state.isDragging) {
	                e.preventDefault();
	                var deltaY = this.state.lastClientPosition - e.clientY;
	                this.setState({ lastClientPosition: e.clientY });
	                this.props.onMove(deltaY / multiplier, 0);
	            }
	        }
	    }, {
	        key: 'handleMouseDown',
	        value: function handleMouseDown(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var lastClientPosition = this.isVertical() ? e.clientY : e.clientX;
	            this.setState({ isDragging: true, lastClientPosition: lastClientPosition });
	
	            this.props.onFocus();
	        }
	    }, {
	        key: 'handleMouseUp',
	        value: function handleMouseUp(e) {
	            e.preventDefault();
	            this.setState({ isDragging: false });
	        }
	    }, {
	        key: 'createScrollStyles',
	        value: function createScrollStyles() {
	            if (this.props.type === 'vertical') {
	                return {
	                    height: this.state.scrollSize,
	                    marginTop: this.state.position
	                };
	            } else {
	                return {
	                    width: this.state.scrollSize,
	                    marginLeft: this.state.position
	                };
	            }
	        }
	    }, {
	        key: 'computeMultiplier',
	        value: function computeMultiplier() {
	            return this.props.containerSize / this.props.realSize;
	        }
	    }, {
	        key: 'isVertical',
	        value: function isVertical() {
	            return this.props.type === 'vertical';
	        }
	    }]);
	
	    return ScrollBar;
	}(_react2.default.Component);
	
	ScrollBar.propTypes = {
	    onMove: _react2.default.PropTypes.func,
	    onPositionChange: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    realSize: _react2.default.PropTypes.number,
	    containerSize: _react2.default.PropTypes.number,
	    position: _react2.default.PropTypes.number,
	    containerStyle: _react2.default.PropTypes.object,
	    scrollbarStyle: _react2.default.PropTypes.object,
	    type: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
	    ownerDocument: _react2.default.PropTypes.any,
	    smoothScrolling: _react2.default.PropTypes.bool,
	    minScrollSize: _react2.default.PropTypes.number
	};
	
	ScrollBar.defaultProps = {
	    type: 'vertical',
	    smoothScrolling: false
	};
	exports.default = ScrollBar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _Motion = __webpack_require__(9);
	
	exports.Motion = _interopRequire(_Motion);
	
	var _StaggeredMotion = __webpack_require__(30);
	
	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);
	
	var _TransitionMotion = __webpack_require__(31);
	
	exports.TransitionMotion = _interopRequire(_TransitionMotion);
	
	var _spring = __webpack_require__(33);
	
	exports.spring = _interopRequire(_spring);
	
	var _presets = __webpack_require__(34);
	
	exports.presets = _interopRequire(_presets);
	
	var _stripStyle = __webpack_require__(11);
	
	exports.stripStyle = _interopRequire(_stripStyle);
	
	// deprecated, dummy warning function
	
	var _reorderKeys = __webpack_require__(35);
	
	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(10);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(11);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(12);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(13);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(15);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(17);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(18);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(26);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var msPerFrame = 1000 / 60;
	
	var Motion = _createReactClass2['default']({
	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _propTypes2['default'].objectOf(_propTypes2['default'].number),
	    style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired,
	    children: _propTypes2['default'].func.isRequired,
	    onRest: _propTypes2['default'].func
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;
	
	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },
	
	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;
	
	    for (var key in destStyle) {
	      if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	        continue;
	      }
	
	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }
	
	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }
	
	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }
	
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      _this.wasAnimating = true;
	
	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};
	
	      for (var key in propsStyle) {
	        if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	          continue;
	        }
	
	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }
	
	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];
	
	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });
	
	      _this.unreadPropStyle = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }
	
	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	
	
	// currently used to initiate the velocity style object to 0
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mapToZero;
	
	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = stripStyle;
	
	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	
	
	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = stepper;
	
	var reusedTuple = [0, 0];
	
	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2
	
	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);
	
	  // Damping, in kg / s
	  var Fdamper = -b * v;
	
	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;
	
	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;
	
	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }
	
	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}
	
	module.exports = exports["default"];
	// array reference around.

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(16)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	
	
	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;
	
	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	
	    if (currentVelocity[key] !== 0) {
	      return false;
	    }
	
	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(25)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(20);
	var invariant = __webpack_require__(21);
	var warning = __webpack_require__(22);
	
	var ReactPropTypesSecret = __webpack_require__(23);
	var checkPropTypes = __webpack_require__(24);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(20);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(21);
	  var warning = __webpack_require__(22);
	  var ReactPropTypesSecret = __webpack_require__(23);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(20);
	var invariant = __webpack_require__(21);
	var ReactPropTypesSecret = __webpack_require__(23);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(6);
	var factory = __webpack_require__(27);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(28);
	
	var emptyObject = __webpack_require__(29);
	var _invariant = __webpack_require__(21);
	
	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(22);
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(10);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(11);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(12);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _performanceNow = __webpack_require__(13);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(15);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(17);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(18);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(26);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var msPerFrame = 1000 / 60;
	
	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	var StaggeredMotion = _createReactClass2['default']({
	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].objectOf(_propTypes2['default'].number)),
	    styles: _propTypes2['default'].func.isRequired,
	    children: _propTypes2['default'].func.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	
	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },
	
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;
	
	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;
	
	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }
	
	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }
	
	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);
	
	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];
	
	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	
	        for (var key in destStyle) {
	          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	            continue;
	          }
	
	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });
	
	      _this.unreadPropStyles = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mapToZero = __webpack_require__(10);
	
	var _mapToZero2 = _interopRequireDefault(_mapToZero);
	
	var _stripStyle = __webpack_require__(11);
	
	var _stripStyle2 = _interopRequireDefault(_stripStyle);
	
	var _stepper3 = __webpack_require__(12);
	
	var _stepper4 = _interopRequireDefault(_stepper3);
	
	var _mergeDiff = __webpack_require__(32);
	
	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);
	
	var _performanceNow = __webpack_require__(13);
	
	var _performanceNow2 = _interopRequireDefault(_performanceNow);
	
	var _raf = __webpack_require__(15);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _shouldStopAnimation = __webpack_require__(17);
	
	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(18);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createReactClass = __webpack_require__(26);
	
	var _createReactClass2 = _interopRequireDefault(_createReactClass);
	
	var msPerFrame = 1000 / 60;
	
	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}
	
	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }
	
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }
	
	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	// core key merging logic
	
	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key
	
	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });
	
	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;
	
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }
	
	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}
	
	var TransitionMotion = _createReactClass2['default']({
	  propTypes: {
	    defaultStyles: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	      key: _propTypes2['default'].string.isRequired,
	      data: _propTypes2['default'].any,
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].number).isRequired
	    })),
	    styles: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
	      key: _propTypes2['default'].string.isRequired,
	      data: _propTypes2['default'].any,
	      style: _propTypes2['default'].objectOf(_propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object])).isRequired
	    }))]).isRequired,
	    children: _propTypes2['default'].func.isRequired,
	    willEnter: _propTypes2['default'].func,
	    willLeave: _propTypes2['default'].func,
	    didLeave: _propTypes2['default'].func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;
	
	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;
	
	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });
	
	    var _mergeAndSync = mergeAndSync(
	    // Because this is an old-style createReactClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);
	
	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really
	
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },
	
	  unmounting: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);
	
	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];
	
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;
	
	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }
	
	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }
	
	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },
	
	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;
	
	    if (this.unmounting) {
	      return;
	    }
	
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      // https://github.com/chenglou/react-motion/pull/420
	      // > if execution passes the conditional if (this.unmounting), then
	      // executes async defaultRaf and after that component unmounts and after
	      // that the callback of defaultRaf is called, then setState will be called
	      // on unmounted component.
	      if (_this.unmounting) {
	        return;
	      }
	
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;
	
	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }
	
	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }
	
	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }
	
	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);
	
	      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);
	
	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];
	
	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};
	
	        for (var key in newMergedPropsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	            continue;
	          }
	
	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }
	
	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);
	
	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];
	
	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }
	
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }
	
	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;
	
	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });
	
	      _this.unreadPropStyles = null;
	
	      _this.startAnimationIfNecessary();
	    });
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }
	
	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }
	
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },
	
	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});
	
	exports['default'] = TransitionMotion;
	module.exports = exports['default'];
	
	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function
	
	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	
	
	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?
	
	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous
	
	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a
	
	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = mergeDiff;
	
	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster
	
	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }
	
	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }
	
	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];
	
	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev
	
	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }
	
	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}
	
	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = spring;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _presets = __webpack_require__(34);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});
	
	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}
	
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = reorderKeys;
	
	var hasWarned = false;
	
	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.findDOMNode = findDOMNode;
	exports.warnAboutFunctionChild = warnAboutFunctionChild;
	exports.warnAboutElementChild = warnAboutElementChild;
	exports.positiveOrZero = positiveOrZero;
	exports.modifyObjValues = modifyObjValues;
	exports.isReact13 = isReact13;
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var react13 = isReact13(_react2.default);
	var didWarnAboutChild = false;
	
	function findDOMNode(component) {
	    if (!react13) {
	        return component;
	    } else {
	        return _react2.default.findDOMNode(component);
	    }
	}
	
	function warnAboutFunctionChild() {
	    if (didWarnAboutChild || react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.14 and later versions, you no longer need to wrap <ScrollArea> child into a function.');
	}
	
	function warnAboutElementChild() {
	    if (didWarnAboutChild || !react13) {
	        return;
	    }
	
	    didWarnAboutChild = true;
	    console.error('With React 0.13, you need to wrap <ScrollArea> child into a function.');
	}
	
	function positiveOrZero(number) {
	    return number < 0 ? 0 : number;
	}
	
	function modifyObjValues(obj) {
	    var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
	        return x;
	    };
	
	    var modifiedObj = {};
	    for (var key in obj) {
	        if (obj.hasOwnProperty(key)) modifiedObj[key] = modifier(obj[key]);
	    }
	
	    return modifiedObj;
	}
	
	function isReact13(React) {
	    var version = React.version;
	
	    if (typeof version !== 'string') {
	        return true;
	    }
	
	    var parts = version.split('.');
	    var major = parseInt(parts[0], 10);
	    var minor = parseInt(parts[1], 10);
	
	    return major === 0 && minor === 13;
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// Load in dependencies
	var computedStyle = __webpack_require__(38);
	
	/**
	 * Calculate the `line-height` of a given node
	 * @param {HTMLElement} node Element to calculate line height of. Must be in the DOM.
	 * @returns {Number} `line-height` of the element in pixels
	 */
	function lineHeight(node) {
	  // Grab the line-height via style
	  var lnHeightStr = computedStyle(node, 'line-height'),
	      lnHeight = parseFloat(lnHeightStr, 10);
	
	  // If the lineHeight did not contain a unit (i.e. it was numeric), convert it to ems (e.g. '2.3' === '2.3em')
	  if (lnHeightStr === lnHeight + '') {
	    // Save the old lineHeight style and update the em unit to the element
	    var _lnHeightStyle = node.style.lineHeight;
	    node.style.lineHeight = lnHeightStr + 'em';
	
	    // Calculate the em based height
	    lnHeightStr = computedStyle(node, 'line-height');
	    lnHeight = parseFloat(lnHeightStr, 10);
	
	    // Revert the lineHeight style
	    if (_lnHeightStyle) {
	      node.style.lineHeight = _lnHeightStyle;
	    } else {
	      delete node.style.lineHeight;
	    }
	  }
	
	  // If the lineHeight is in `pt`, convert it to pixels (4px for 3pt)
	  // DEV: `em` units are converted to `pt` in IE6
	  // Conversion ratio from https://developer.mozilla.org/en-US/docs/Web/CSS/length
	  if (lnHeightStr.indexOf('pt') !== -1) {
	    lnHeight *= 4;
	    lnHeight /= 3;
	  } else if (lnHeightStr.indexOf('mm') !== -1) {
	  // Otherwise, if the lineHeight is in `mm`, convert it to pixels (96px for 25.4mm)
	    lnHeight *= 96;
	    lnHeight /= 25.4;
	  } else if (lnHeightStr.indexOf('cm') !== -1) {
	  // Otherwise, if the lineHeight is in `cm`, convert it to pixels (96px for 2.54cm)
	    lnHeight *= 96;
	    lnHeight /= 2.54;
	  } else if (lnHeightStr.indexOf('in') !== -1) {
	  // Otherwise, if the lineHeight is in `in`, convert it to pixels (96px for 1in)
	    lnHeight *= 96;
	  } else if (lnHeightStr.indexOf('pc') !== -1) {
	  // Otherwise, if the lineHeight is in `pc`, convert it to pixels (12pt for 1pc)
	    lnHeight *= 16;
	  }
	
	  // Continue our computation
	  lnHeight = Math.round(lnHeight);
	
	  // If the line-height is "normal", calculate by font-size
	  if (lnHeightStr === 'normal') {
	    // Create a temporary node
	    var nodeName = node.nodeName,
	        _node = document.createElement(nodeName);
	    _node.innerHTML = '&nbsp;';
	
	    // Set the font-size of the element
	    var fontSizeStr = computedStyle(node, 'font-size');
	    _node.style.fontSize = fontSizeStr;
	
	    // Append it to the body
	    var body = document.body;
	    body.appendChild(_node);
	
	    // Assume the line height of the element is the height
	    var height = _node.offsetHeight;
	    lnHeight = height;
	
	    // Remove our child from the DOM
	    body.removeChild(_node);
	  }
	
	  // Return the calculated height
	  return lnHeight;
	}
	
	// Export lineHeight
	module.exports = lineHeight;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	// This code has been refactored for 140 bytes
	// You can see the original here: https://github.com/twolfson/computedStyle/blob/04cd1da2e30fa45844f95f5cb1ac898e9b9ef050/lib/computedStyle.js
	var computedStyle = function (el, prop, getComputedStyle) {
	  getComputedStyle = window.getComputedStyle;
	
	  // In one fell swoop
	  return (
	    // If we have getComputedStyle
	    getComputedStyle ?
	      // Query it
	      // TODO: From CSS-Query notes, we might need (node, null) for FF
	      getComputedStyle(el) :
	
	    // Otherwise, we are in IE and use currentStyle
	      el.currentStyle
	  )[
	    // Switch to camelCase for CSSOM
	    // DEV: Grabbed from jQuery
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
	    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
	    prop.replace(/-(\w)/gi, function (word, letter) {
	      return letter.toUpperCase();
	    })
	  ];
	};
	
	module.exports = computedStyle;


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NTY1MWFjMmViMzI4MTk5MDc2YyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhDc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzP2Y4MDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JvbGxBcmVhLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2Nyb2xsYmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVhY3QtbW90aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9Nb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL21hcFRvWmVyby5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RyaXBTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvc3RlcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vcmFmL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcmVhdGUtcmVhY3QtY2xhc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcmVhdGUtcmVhY3QtY2xhc3MvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9lbXB0eU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvU3RhZ2dlcmVkTW90aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9UcmFuc2l0aW9uTW90aW9uLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbW90aW9uL2xpYi9tZXJnZURpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tb3Rpb24vbGliL3NwcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVvcmRlcktleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vbGluZS1oZWlnaHQvbGliL2xpbmUtaGVpZ2h0LmpzIiwid2VicGFjazovLy8uL34vY29tcHV0ZWQtc3R5bGUvZGlzdC9jb21wdXRlZFN0eWxlLmNvbW1vbmpzLmpzIl0sIm5hbWVzIjpbImV2ZW50VHlwZXMiLCJ3aGVlbCIsImFwaSIsInRvdWNoIiwidG91Y2hFbmQiLCJtb3VzZW1vdmUiLCJrZXlQcmVzcyIsIlNjcm9sbEFyZWEiLCJwcm9wcyIsInN0YXRlIiwidG9wUG9zaXRpb24iLCJsZWZ0UG9zaXRpb24iLCJyZWFsSGVpZ2h0IiwiY29udGFpbmVySGVpZ2h0IiwicmVhbFdpZHRoIiwiY29udGFpbmVyV2lkdGgiLCJzY3JvbGxBcmVhIiwicmVmcmVzaCIsInNldFNpemVzVG9TdGF0ZSIsInNjcm9sbFRvcCIsInNjcm9sbEJvdHRvbSIsInNjcm9sbFlUbyIsInBvc2l0aW9uIiwic2Nyb2xsTGVmdCIsInNjcm9sbFJpZ2h0Iiwic2Nyb2xsWFRvIiwiZXZudHNQcmV2aW91c1ZhbHVlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiZGVsdGFYIiwiZGVsdGFZIiwiYmluZGVkSGFuZGxlV2luZG93UmVzaXplIiwiaGFuZGxlV2luZG93UmVzaXplIiwiYmluZCIsImNvbnRlbnRXaW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibGluZUhlaWdodFB4IiwiY29udGVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbnRlbnRDbGFzc05hbWUiLCJvd25lckRvY3VtZW50Iiwid2l0aE1vdGlvbiIsInNtb290aFNjcm9sbGluZyIsImV2ZW50VHlwZSIsInNjcm9sbGJhclkiLCJjYW5TY3JvbGxZIiwiaGFuZGxlU2Nyb2xsYmFyTW92ZSIsImhhbmRsZVNjcm9sbGJhcllQb3NpdGlvbkNoYW5nZSIsInZlcnRpY2FsQ29udGFpbmVyU3R5bGUiLCJ2ZXJ0aWNhbFNjcm9sbGJhclN0eWxlIiwibWluU2Nyb2xsU2l6ZSIsImZvY3VzQ29udGVudCIsInNjcm9sbGJhclgiLCJjYW5TY3JvbGxYIiwiaGFuZGxlU2Nyb2xsYmFyWFBvc2l0aW9uQ2hhbmdlIiwiaG9yaXpvbnRhbENvbnRhaW5lclN0eWxlIiwiaG9yaXpvbnRhbFNjcm9sbGJhclN0eWxlIiwiY2xhc3NlcyIsImNvbnRlbnRDbGFzc2VzIiwiY29udGVudFN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInNwcmluZ2lmaWVkQ29udGVudFN0eWxlIiwieCIsIndyYXBwZXIiLCJzdHlsZSIsImhhbmRsZVdoZWVsIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVRvdWNoTW92ZSIsImhhbmRsZVRvdWNoRW5kIiwiaGFuZGxlS2V5RG93biIsImZvY3VzYWJsZVRhYkluZGV4IiwibmV3U3RhdGUiLCJvblNjcm9sbCIsInNldFN0YXRlIiwiZSIsInRvdWNoZXMiLCJsZW5ndGgiLCJldmVudFByZXZpb3VzVmFsdWVzIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImNhblNjcm9sbCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0U3RhdGVGcm9tRXZlbnQiLCJjb21wb3NlTmV3U3RhdGUiLCJzd2FwV2hlZWxBeGVzIiwiZGVsdGFNb2RlIiwic3BlZWQiLCJzdG9wU2Nyb2xsUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJsaW5lSGVpZ2h0Iiwia2V5Q29kZSIsImNvbXB1dGVTaXplcyIsImdldE1vZGlmaWVkUG9zaXRpb25zSWZOZWVkZWQiLCJjb21wdXRlVG9wUG9zaXRpb24iLCJjb21wdXRlTGVmdFBvc2l0aW9uIiwic2l6ZXMiLCJuZXdUb3BQb3NpdGlvbiIsIm5vcm1hbGl6ZVRvcFBvc2l0aW9uIiwibmV3TGVmdFBvc2l0aW9uIiwibm9ybWFsaXplTGVmdFBvc2l0aW9uIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxhYmxlWSIsInZlcnRpY2FsIiwic2Nyb2xsYWJsZVgiLCJob3Jpem9udGFsIiwiYm90dG9tUG9zaXRpb24iLCJyaWdodFBvc2l0aW9uIiwiZm9jdXMiLCJDb21wb25lbnQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwiYW55IiwiZGVmYXVsdFByb3BzIiwid2luZG93IiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJTY3JvbGxCYXIiLCJjYWxjdWxhdGVTdGF0ZSIsInNjcm9sbFNpemUiLCJpc0RyYWdnaW5nIiwibGFzdENsaWVudFBvc2l0aW9uIiwidHlwZSIsImJpbmRlZEhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlTW92ZUZvclZlcnRpY2FsIiwiaGFuZGxlTW91c2VNb3ZlRm9ySG9yaXpvbnRhbCIsImJpbmRlZEhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVVwIiwibmV4dFByb3BzIiwicmVhbENvbnRlbnRTaXplIiwiY29udGFpbmVyU2l6ZSIsImNvbnRlbnRQb3NpdGlvbiIsInJlbGF0aXZlU2l6ZSIsImZyYWN0aW9uYWxQb3NpdGlvbiIsImNhbGN1bGF0ZUZyYWN0aW9uYWxQb3NpdGlvbiIsInJlYWxTaXplIiwicHJvcG9ydGlvbmFsVG9QYWdlU2Nyb2xsU2l6ZSIsInNjcm9sbFBvc2l0aW9uIiwiTWF0aCIsInJvdW5kIiwic2Nyb2xsYmFyU3R5bGUiLCJjb250YWluZXJTdHlsZSIsImlzVm9yaXppb250YWwiLCJpc1ZlcnRpY2FsIiwic2Nyb2xsU3R5bGVzIiwiY3JlYXRlU2Nyb2xsU3R5bGVzIiwic3ByaW5naWZpZWRTY3JvbGxTdHlsZXMiLCJzY3JvbGxiYXJDbGFzc2VzIiwiaGFuZGxlU2Nyb2xsQmFyQ29udGFpbmVyQ2xpY2siLCJzY3JvbGxiYXJDb250YWluZXIiLCJoYW5kbGVNb3VzZURvd24iLCJtdWx0aXBsaWVyIiwiY29tcHV0ZU11bHRpcGxpZXIiLCJjbGllbnRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJjbGllbnRTY3JvbGxQb3NpdGlvbiIsIm9uUG9zaXRpb25DaGFuZ2UiLCJvbk1vdmUiLCJvbkZvY3VzIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbmVPZiIsImZpbmRET01Ob2RlIiwid2FybkFib3V0RnVuY3Rpb25DaGlsZCIsIndhcm5BYm91dEVsZW1lbnRDaGlsZCIsInBvc2l0aXZlT3JaZXJvIiwibW9kaWZ5T2JqVmFsdWVzIiwiaXNSZWFjdDEzIiwicmVhY3QxMyIsImRpZFdhcm5BYm91dENoaWxkIiwiY29tcG9uZW50IiwiY29uc29sZSIsImVycm9yIiwib2JqIiwibW9kaWZpZXIiLCJtb2RpZmllZE9iaiIsImtleSIsImhhc093blByb3BlcnR5IiwiUmVhY3QiLCJ2ZXJzaW9uIiwicGFydHMiLCJzcGxpdCIsIm1ham9yIiwicGFyc2VJbnQiLCJtaW5vciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsZ0RBQStDLGNBQWMsZUFBZSxxQkFBcUIsdUJBQXVCLEdBQUcsNkJBQTZCLGVB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsZUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2Isc0NBQXFDLFVBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxRQUFRO0FBQ3JCLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsOEJBQTZCO0FBQzdCLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsNkJBQTRCO0FBQzVCLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCLGdDQUFnQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMvZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBLDRCOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQSw2RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCOzs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpR0FBZ0c7QUFDaEc7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLGlHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEIsZUFBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsU0FBUztBQUN0QixjQUFhLFNBQVM7QUFDdEIsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFNBQVM7QUFDdEIsY0FBYSxTQUFTO0FBQ3RCLGVBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLFNBQVM7QUFDdEIsZUFBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLGlCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixlQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3YyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNB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QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkI7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQSIsImZpbGUiOiI2NTY1MWFjMmViMzI4MTk5MDc2Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNjcm9sbEFyZWFcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2Nyb2xsQXJlYVwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY1NjUxYWMyZWIzMjgxOTkwNzZjIiwiaW1wb3J0ICcuLi9sZXNzL3Njcm9sbEFyZWEubGVzcyc7XG5pbXBvcnQgU2Nyb2xsQXJlYSBmcm9tICcuL1Njcm9sbEFyZWEuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQXJlYTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvU2Nyb2xsQXJlYVdpdGhDc3MuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vc2Nyb2xsQXJlYS5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL3Njcm9sbEFyZWEubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vc2Nyb2xsQXJlYS5sZXNzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sZXNzL3Njcm9sbEFyZWEubGVzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2Nyb2xsYXJlYS1jb250ZW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2Nyb2xsYXJlYS1jb250ZW50OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5zY3JvbGxhcmVhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zY3JvbGxhcmVhIC5zY3JvbGxiYXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvcGFjaXR5OiAuMTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHM7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuNHM7XFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIC40cztcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuNHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcbn1cXG4uc2Nyb2xsYXJlYSAuc2Nyb2xsYmFyLWNvbnRhaW5lci5ob3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuLnNjcm9sbGFyZWEgLnNjcm9sbGJhci1jb250YWluZXIuaG9yaXpvbnRhbCAuc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLnNjcm9sbGFyZWEgLnNjcm9sbGJhci1jb250YWluZXIudmVydGljYWwge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuLnNjcm9sbGFyZWEgLnNjcm9sbGJhci1jb250YWluZXIudmVydGljYWwgLnNjcm9sbGJhciB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogMXB4O1xcbn1cXG4uc2Nyb2xsYXJlYSAuc2Nyb2xsYmFyLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBncmF5O1xcbiAgb3BhY2l0eTogLjYgIWltcG9ydGFudDtcXG59XFxuLnNjcm9sbGFyZWEgLnNjcm9sbGJhci1jb250YWluZXIuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxuICBvcGFjaXR5OiAuNiAhaW1wb3J0YW50O1xcbn1cXG4uc2Nyb2xsYXJlYTpob3ZlciAuc2Nyb2xsYmFyLWNvbnRhaW5lciB7XFxuICBvcGFjaXR5OiAuMztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L2xlc3MtbG9hZGVyIS4vc3JjL2xlc3Mvc2Nyb2xsQXJlYS5sZXNzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnLi9TY3JvbGxiYXInO1xuaW1wb3J0IHtmaW5kRE9NTm9kZSwgd2FybkFib3V0RnVuY3Rpb25DaGlsZCwgd2FybkFib3V0RWxlbWVudENoaWxkLCBwb3NpdGl2ZU9yWmVybywgbW9kaWZ5T2JqVmFsdWVzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBsaW5lSGVpZ2h0IGZyb20gJ2xpbmUtaGVpZ2h0JztcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5cbmNvbnN0IGV2ZW50VHlwZXMgPSB7XG4gICAgd2hlZWw6ICd3aGVlbCcsXG4gICAgYXBpOiAnYXBpJyxcbiAgICB0b3VjaDogJ3RvdWNoJyxcbiAgICB0b3VjaEVuZDogJ3RvdWNoRW5kJyxcbiAgICBtb3VzZW1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGtleVByZXNzOiAna2V5cHJlc3MnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b3BQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGxlZnRQb3NpdGlvbjogMCxcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IDAsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IDAsXG4gICAgICAgICAgICByZWFsV2lkdGg6IDAsXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsQXJlYSA9IHtcbiAgICAgICAgICAgIHJlZnJlc2g6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpemVzVG9TdGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvcDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsQm90dG9tOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxZVG86IChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsWVRvKHBvc2l0aW9uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY3JvbGxMZWZ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMZWZ0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsUmlnaHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFJpZ2h0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsWFRvOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFhUbyhwb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5ldm50c1ByZXZpb3VzVmFsdWVzID0ge1xuICAgICAgICAgICAgY2xpZW50WDogMCxcbiAgICAgICAgICAgIGNsaWVudFk6IDAsXG4gICAgICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgICAgICBkZWx0YVk6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHRoaXMuaGFuZGxlV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2Nyb2xsQXJlYTogdGhpcy5zY3JvbGxBcmVhXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpbmVIZWlnaHRQeCA9IGxpbmVIZWlnaHQoZmluZERPTU5vZGUodGhpcy5jb250ZW50KSk7XG4gICAgICAgIHRoaXMuc2V0U2l6ZXNUb1N0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGVudFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuYmluZGVkSGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5zZXRTaXplc1RvU3RhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgY29udGVudENsYXNzTmFtZSwgb3duZXJEb2N1bWVudH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgd2l0aE1vdGlvbiA9IHRoaXMucHJvcHMuc21vb3RoU2Nyb2xsaW5nICYmXG4gICAgICAgICAgICAodGhpcy5zdGF0ZS5ldmVudFR5cGUgPT09IGV2ZW50VHlwZXMud2hlZWwgfHwgdGhpcy5zdGF0ZS5ldmVudFR5cGUgPT09IGV2ZW50VHlwZXMuYXBpIHx8IHRoaXMuc3RhdGUuZXZlbnRUeXBlID09PSBldmVudFR5cGVzLnRvdWNoRW5kIHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlcy5rZXlQcmVzcyk7XG5cbiAgICAgICAgbGV0IHNjcm9sbGJhclkgPSB0aGlzLmNhblNjcm9sbFkoKSA/IChcbiAgICAgICAgICAgIDxTY3JvbGxCYXJcbiAgICAgICAgICAgICAgICBvd25lckRvY3VtZW50PXtvd25lckRvY3VtZW50fVxuICAgICAgICAgICAgICAgIHJlYWxTaXplPXt0aGlzLnN0YXRlLnJlYWxIZWlnaHR9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyU2l6ZT17dGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHR9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUudG9wUG9zaXRpb259XG4gICAgICAgICAgICAgICAgb25Nb3ZlPXt0aGlzLmhhbmRsZVNjcm9sbGJhck1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNjcm9sbGJhcllQb3NpdGlvbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt0aGlzLnByb3BzLnZlcnRpY2FsQ29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyU3R5bGU9e3RoaXMucHJvcHMudmVydGljYWxTY3JvbGxiYXJTdHlsZX1cbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGxpbmc9e3dpdGhNb3Rpb259XG4gICAgICAgICAgICAgICAgbWluU2Nyb2xsU2l6ZT17dGhpcy5wcm9wcy5taW5TY3JvbGxTaXplfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuZm9jdXNDb250ZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInZlcnRpY2FsXCIvPlxuICAgICAgICApIDogbnVsbDtcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyWCA9IHRoaXMuY2FuU2Nyb2xsWCgpID8gKFxuICAgICAgICAgICAgPFNjcm9sbEJhclxuICAgICAgICAgICAgICAgIG93bmVyRG9jdW1lbnQ9e293bmVyRG9jdW1lbnR9XG4gICAgICAgICAgICAgICAgcmVhbFNpemU9e3RoaXMuc3RhdGUucmVhbFdpZHRofVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lclNpemU9e3RoaXMuc3RhdGUuY29udGFpbmVyV2lkdGh9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3RoaXMuc3RhdGUubGVmdFBvc2l0aW9ufVxuICAgICAgICAgICAgICAgIG9uTW92ZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17dGhpcy5oYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT17dGhpcy5wcm9wcy5ob3Jpem9udGFsQ29udGFpbmVyU3R5bGV9XG4gICAgICAgICAgICAgICAgc2Nyb2xsYmFyU3R5bGU9e3RoaXMucHJvcHMuaG9yaXpvbnRhbFNjcm9sbGJhclN0eWxlfVxuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbGluZz17d2l0aE1vdGlvbn1cbiAgICAgICAgICAgICAgICBtaW5TY3JvbGxTaXplPXt0aGlzLnByb3BzLm1pblNjcm9sbFNpemV9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5mb2N1c0NvbnRlbnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiaG9yaXpvbnRhbFwiLz5cbiAgICAgICAgKSA6IG51bGw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgd2FybkFib3V0RnVuY3Rpb25DaGlsZCgpO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2FybkFib3V0RWxlbWVudENoaWxkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NlcyA9ICdzY3JvbGxhcmVhICcgKyAoY2xhc3NOYW1lIHx8ICcnKTtcbiAgICAgICAgbGV0IGNvbnRlbnRDbGFzc2VzID0gJ3Njcm9sbGFyZWEtY29udGVudCAnICsgKGNvbnRlbnRDbGFzc05hbWUgfHwgJycpO1xuXG4gICAgICAgIGxldCBjb250ZW50U3R5bGUgPSB7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC10aGlzLnN0YXRlLnRvcFBvc2l0aW9uLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLXRoaXMuc3RhdGUubGVmdFBvc2l0aW9uXG4gICAgICAgIH07XG4gICAgICAgIGxldCBzcHJpbmdpZmllZENvbnRlbnRTdHlsZSA9IHdpdGhNb3Rpb24gPyBtb2RpZnlPYmpWYWx1ZXMoY29udGVudFN0eWxlLCB4ID0+IHNwcmluZyh4KSkgOiBjb250ZW50U3R5bGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb3Rpb24gc3R5bGU9e3NwcmluZ2lmaWVkQ29udGVudFN0eWxlfT5cbiAgICAgICAgICAgICAgICB7IHN0eWxlID0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLndyYXBwZXIgPSB4fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbldoZWVsPXt0aGlzLmhhbmRsZVdoZWVsLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ggPT4gdGhpcy5jb250ZW50ID0geH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyAuLi50aGlzLnByb3BzLmNvbnRlbnRTdHlsZSwgLi4uc3R5bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NvbnRlbnRDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5oYW5kbGVUb3VjaFN0YXJ0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlVG91Y2hNb3ZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVUb3VjaEVuZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RoaXMucHJvcHMuZm9jdXNhYmxlVGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2Nyb2xsYmFyWX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JvbGxiYXJYfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01vdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSwgZXZlbnRUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2Nyb2xsKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2Nyb2xsKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi5uZXdTdGF0ZSwgZXZlbnRUeXBlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGxldCB7dG91Y2hlc30gPSBlO1xuICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGxldCB7Y2xpZW50WCwgY2xpZW50WX0gPSB0b3VjaGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5ldmVudFByZXZpb3VzVmFsdWVzID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyxcbiAgICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsKCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQge3RvdWNoZXN9ID0gZTtcbiAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBsZXQge2NsaWVudFgsIGNsaWVudFl9ID0gdG91Y2hlc1swXTtcblxuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcy5jbGllbnRZIC0gY2xpZW50WTtcbiAgICAgICAgICAgIGxldCBkZWx0YVggPSB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMuY2xpZW50WCAtIGNsaWVudFg7XG5cbiAgICAgICAgICAgIHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICAgICAgZGVsdGFZLFxuICAgICAgICAgICAgICAgIGRlbHRhWCxcbiAgICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVgsIC1kZWx0YVkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvdWNoRW5kKGUpIHtcbiAgICAgICAgbGV0IHtkZWx0YVgsIGRlbHRhWSwgdGltZXN0YW1wfSA9IHRoaXMuZXZlbnRQcmV2aW91c1ZhbHVlcztcbiAgICAgICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnKSBkZWx0YVggPSAwO1xuICAgICAgICBpZiAodHlwZW9mIGRlbHRhWSA9PT0gJ3VuZGVmaW5lZCcpIGRlbHRhWSA9IDA7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gdGltZXN0YW1wIDwgMjAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlRnJvbUV2ZW50KHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVggKiAxMCwgLWRlbHRhWSAqIDEwKSwgZXZlbnRUeXBlcy50b3VjaEVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50UHJldmlvdXNWYWx1ZXMsXG4gICAgICAgICAgICBkZWx0YVk6IDAsXG4gICAgICAgICAgICBkZWx0YVg6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxiYXJNb3ZlKGRlbHRhWSwgZGVsdGFYKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5jb21wb3NlTmV3U3RhdGUoZGVsdGFYLCBkZWx0YVkpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxiYXJYUG9zaXRpb25DaGFuZ2UocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxYVG8ocG9zaXRpb24pO1xuICAgIH1cblxuICAgIGhhbmRsZVNjcm9sbGJhcllQb3NpdGlvbkNoYW5nZShwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnNjcm9sbFlUbyhwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaGFuZGxlV2hlZWwoZSkge1xuICAgICAgICBsZXQgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICAgIGxldCBkZWx0YVggPSBlLmRlbHRhWDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zd2FwV2hlZWxBeGVzKSB7XG4gICAgICAgICAgICBbZGVsdGFZLCBkZWx0YVhdID0gW2RlbHRhWCwgZGVsdGFZXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIFdoZWVsRXZlbnQuZGVsdGFNb2RlIGNhbiBkaWZmZXIgYmV0d2VlbiBicm93c2VycyBhbmQgbXVzdCBiZSBub3JtYWxpemVkXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAwOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gcGl4ZWxzXG4gICAgICAgICAqIGUuZGVsdGFNb2RlID09PSAxOiBUaGUgZGVsdGEgdmFsdWVzIGFyZSBzcGVjaWZpZWQgaW4gbGluZXNcbiAgICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQvZGVsdGFNb2RlXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgIGRlbHRhWSA9IGRlbHRhWSAqIHRoaXMubGluZUhlaWdodFB4O1xuICAgICAgICAgICAgZGVsdGFYID0gZGVsdGFYICogdGhpcy5saW5lSGVpZ2h0UHg7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YVkgPSBkZWx0YVkgKiB0aGlzLnByb3BzLnNwZWVkO1xuICAgICAgICBkZWx0YVggPSBkZWx0YVggKiB0aGlzLnByb3BzLnNwZWVkO1xuXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcG9zZU5ld1N0YXRlKC1kZWx0YVgsIC1kZWx0YVkpO1xuXG4gICAgICAgIGlmICgobmV3U3RhdGUudG9wUG9zaXRpb24gJiYgdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiAhPT0gbmV3U3RhdGUudG9wUG9zaXRpb24pIHx8XG4gICAgICAgICAgICAobmV3U3RhdGUubGVmdFBvc2l0aW9uICYmIHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uICE9PSBuZXdTdGF0ZS5sZWZ0UG9zaXRpb24pIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN0b3BTY3JvbGxQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQobmV3U3RhdGUsIGV2ZW50VHlwZXMud2hlZWwpO1xuICAgICAgICB0aGlzLmZvY3VzQ29udGVudCgpO1xuICAgIH1cblxuICAgIGhhbmRsZUtleURvd24oZSkge1xuICAgICAgICAvLyBvbmx5IGhhbmRsZSBpZiBzY3JvbGwgYXJlYSBpcyBpbiBmb2N1c1xuICAgICAgICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gMDtcbiAgICAgICAgICAgIGxldCBkZWx0YVggPSAwO1xuICAgICAgICAgICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHRQeCA/IHRoaXMubGluZUhlaWdodFB4IDogMTA7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgPSB0aGlzLnN0YXRlLmNvbnRhaW5lckhlaWdodCAtIGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzQ6IC8vIHBhZ2UgZG93blxuICAgICAgICAgICAgICAgICAgICBkZWx0YVkgPSAtdGhpcy5zdGF0ZS5jb250YWluZXJIZWlnaHQgKyBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWCA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWSA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzk6IC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWCA9IC1saW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQwOiAvLyBkb3duXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWSA9IC1saW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSBjb21wb3NlIG5ldyBzdGF0ZSBpZiBrZXkgY29kZSBtYXRjaGVzIHRob3NlIGFib3ZlXG4gICAgICAgICAgICBpZiAoZGVsdGFZICE9PSAwIHx8IGRlbHRhWCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKTtcblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSwgZXZlbnRUeXBlcy5rZXlQcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG4gICAgICAgIG5ld1N0YXRlID0gdGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudChuZXdTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29tcG9zZU5ld1N0YXRlKGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY29tcHV0ZVNpemVzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvcFBvc2l0aW9uID0gdGhpcy5jb21wdXRlVG9wUG9zaXRpb24oZGVsdGFZLCBuZXdTdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3U3RhdGUudG9wUG9zaXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhblNjcm9sbFgobmV3U3RhdGUpKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5sZWZ0UG9zaXRpb24gPSB0aGlzLmNvbXB1dGVMZWZ0UG9zaXRpb24oZGVsdGFYLCBuZXdTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgY29tcHV0ZVRvcFBvc2l0aW9uKGRlbHRhWSwgc2l6ZXMpIHtcbiAgICAgICAgbGV0IG5ld1RvcFBvc2l0aW9uID0gdGhpcy5zdGF0ZS50b3BQb3NpdGlvbiAtIGRlbHRhWTtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9ybWFsaXplVG9wUG9zaXRpb24obmV3VG9wUG9zaXRpb24sIHNpemVzKTtcbiAgICB9XG5cbiAgICBjb21wdXRlTGVmdFBvc2l0aW9uKGRlbHRhWCwgc2l6ZXMpIHtcbiAgICAgICAgbGV0IG5ld0xlZnRQb3NpdGlvbiA9IHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uIC0gZGVsdGFYO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVMZWZ0UG9zaXRpb24obmV3TGVmdFBvc2l0aW9uLCBzaXplcyk7XG4gICAgfVxuXG4gICAgbm9ybWFsaXplVG9wUG9zaXRpb24obmV3VG9wUG9zaXRpb24sIHNpemVzKSB7XG4gICAgICAgIGlmIChuZXdUb3BQb3NpdGlvbiA+IHNpemVzLnJlYWxIZWlnaHQgLSBzaXplcy5jb250YWluZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIG5ld1RvcFBvc2l0aW9uID0gc2l6ZXMucmVhbEhlaWdodCAtIHNpemVzLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3VG9wUG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICBuZXdUb3BQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RvcFBvc2l0aW9uO1xuICAgIH1cblxuICAgIG5vcm1hbGl6ZUxlZnRQb3NpdGlvbihuZXdMZWZ0UG9zaXRpb24sIHNpemVzKSB7XG4gICAgICAgIGlmIChuZXdMZWZ0UG9zaXRpb24gPiBzaXplcy5yZWFsV2lkdGggLSBzaXplcy5jb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgbmV3TGVmdFBvc2l0aW9uID0gc2l6ZXMucmVhbFdpZHRoIC0gc2l6ZXMuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3TGVmdFBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgbmV3TGVmdFBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdMZWZ0UG9zaXRpb247XG4gICAgfVxuXG4gICAgY29tcHV0ZVNpemVzKCkge1xuICAgICAgICBsZXQgcmVhbEhlaWdodCA9IHRoaXMuY29udGVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGxldCBjb250YWluZXJIZWlnaHQgPSB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZXQgcmVhbFdpZHRoID0gdGhpcy5jb250ZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBsZXQgY29udGFpbmVyV2lkdGggPSB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWxIZWlnaHQ6IHJlYWxIZWlnaHQsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgICAgIHJlYWxXaWR0aDogcmVhbFdpZHRoLFxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IGNvbnRhaW5lcldpZHRoXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0U2l6ZXNUb1N0YXRlKCkge1xuICAgICAgICBsZXQgc2l6ZXMgPSB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgICAgICBpZiAoc2l6ZXMucmVhbEhlaWdodCAhPT0gdGhpcy5zdGF0ZS5yZWFsSGVpZ2h0IHx8IHNpemVzLnJlYWxXaWR0aCAhPT0gdGhpcy5zdGF0ZS5yZWFsV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQodGhpcy5nZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKHNpemVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY3JvbGxUb3AoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWVRvKDApO1xuICAgIH1cblxuICAgIHNjcm9sbEJvdHRvbSgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxZVG8oKHRoaXMuc3RhdGUucmVhbEhlaWdodCAtIHRoaXMuc3RhdGUuY29udGFpbmVySGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgc2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxYVG8oMCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsWFRvKCh0aGlzLnN0YXRlLnJlYWxXaWR0aCAtIHRoaXMuc3RhdGUuY29udGFpbmVyV2lkdGgpKTtcbiAgICB9XG5cbiAgICBzY3JvbGxZVG8odG9wUG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsWSgpKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZVRvcFBvc2l0aW9uKHRvcFBvc2l0aW9uLCB0aGlzLmNvbXB1dGVTaXplcygpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVGcm9tRXZlbnQoe3RvcFBvc2l0aW9uOiBwb3NpdGlvbn0sIGV2ZW50VHlwZXMuYXBpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFhUbyhsZWZ0UG9zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuY2FuU2Nyb2xsWCgpKSB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZUxlZnRQb3NpdGlvbihsZWZ0UG9zaXRpb24sIHRoaXMuY29tcHV0ZVNpemVzKCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUZyb21FdmVudCh7bGVmdFBvc2l0aW9uOiBwb3NpdGlvbn0sIGV2ZW50VHlwZXMuYXBpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblNjcm9sbFkoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlWSA9IHN0YXRlLnJlYWxIZWlnaHQgPiBzdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIHJldHVybiBzY3JvbGxhYmxlWSAmJiB0aGlzLnByb3BzLnZlcnRpY2FsO1xuICAgIH1cblxuICAgIGNhblNjcm9sbFgoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgICAgIGxldCBzY3JvbGxhYmxlWCA9IHN0YXRlLnJlYWxXaWR0aCA+IHN0YXRlLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICByZXR1cm4gc2Nyb2xsYWJsZVggJiYgdGhpcy5wcm9wcy5ob3Jpem9udGFsO1xuICAgIH1cblxuICAgIGNhblNjcm9sbChzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuU2Nyb2xsWShzdGF0ZSkgfHwgdGhpcy5jYW5TY3JvbGxYKHN0YXRlKTtcbiAgICB9XG5cbiAgICBnZXRNb2RpZmllZFBvc2l0aW9uc0lmTmVlZGVkKG5ld1N0YXRlKSB7XG4gICAgICAgIGxldCBib3R0b21Qb3NpdGlvbiA9IG5ld1N0YXRlLnJlYWxIZWlnaHQgLSBuZXdTdGF0ZS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRvcFBvc2l0aW9uID49IGJvdHRvbVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS50b3BQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWShuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhib3R0b21Qb3NpdGlvbikgOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJpZ2h0UG9zaXRpb24gPSBuZXdTdGF0ZS5yZWFsV2lkdGggLSBuZXdTdGF0ZS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubGVmdFBvc2l0aW9uID49IHJpZ2h0UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLmxlZnRQb3NpdGlvbiA9IHRoaXMuY2FuU2Nyb2xsWChuZXdTdGF0ZSkgPyBwb3NpdGl2ZU9yWmVybyhyaWdodFBvc2l0aW9uKSA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuXG4gICAgZm9jdXNDb250ZW50KCkge1xuICAgICAgICBpZih0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGZpbmRET01Ob2RlKHRoaXMuY29udGVudCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuU2Nyb2xsQXJlYS5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBzY3JvbGxBcmVhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5TY3JvbGxBcmVhLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc3BlZWQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udGVudENsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50U3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdmVydGljYWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHZlcnRpY2FsQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdmVydGljYWxTY3JvbGxiYXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3Jpem9udGFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBob3Jpem9udGFsQ29udGFpbmVyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgaG9yaXpvbnRhbFNjcm9sbGJhclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uU2Nyb2xsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBjb250ZW50V2luZG93OiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICAgIG93bmVyRG9jdW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBtaW5TY3JvbGxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHN3YXBXaGVlbEF4ZXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHN0b3BTY3JvbGxQcm9wYWdhdGlvbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9jdXNhYmxlVGFiSW5kZXg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cblNjcm9sbEFyZWEuZGVmYXVsdFByb3BzID0ge1xuICAgIHNwZWVkOiAxLFxuICAgIHZlcnRpY2FsOiB0cnVlLFxuICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBzd2FwV2hlZWxBeGVzOiBmYWxzZSxcbiAgICBjb250ZW50V2luZG93OiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgPyB3aW5kb3cgOiB1bmRlZmluZWQsXG4gICAgb3duZXJEb2N1bWVudDogKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJvYmplY3RcIikgPyBkb2N1bWVudCA6IHVuZGVmaW5lZCxcbiAgICBmb2N1c2FibGVUYWJJbmRleDogMVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvU2Nyb2xsQXJlYS5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TW90aW9uLCBzcHJpbmd9IGZyb20gJ3JlYWN0LW1vdGlvbic7XG5pbXBvcnQge21vZGlmeU9ialZhbHVlc30gZnJvbSAnLi91dGlscyc7XG5cbmNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlU3RhdGUocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IG5ld1N0YXRlLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2Nyb2xsU2l6ZTogbmV3U3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbGFzdENsaWVudFBvc2l0aW9uOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYocHJvcHMudHlwZSA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSA9IHRoaXMuaGFuZGxlTW91c2VNb3ZlRm9yVmVydGljYWwuYmluZCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlID0gdGhpcy5oYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsLmJpbmQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXAgPSB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5iaW5kZWRIYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmNhbGN1bGF0ZVN0YXRlKG5leHRQcm9wcykpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuYmluZGVkSGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmJpbmRlZEhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uKHJlYWxDb250ZW50U2l6ZSwgY29udGFpbmVyU2l6ZSwgY29udGVudFBvc2l0aW9uKXtcbiAgICAgICAgbGV0IHJlbGF0aXZlU2l6ZSA9IHJlYWxDb250ZW50U2l6ZSAtIGNvbnRhaW5lclNpemU7XG5cbiAgICAgICAgcmV0dXJuIDEgLSAoKHJlbGF0aXZlU2l6ZSAtIGNvbnRlbnRQb3NpdGlvbikgLyByZWxhdGl2ZVNpemUpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN0YXRlKHByb3BzKXtcbiAgICAgICAgbGV0IGZyYWN0aW9uYWxQb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlRnJhY3Rpb25hbFBvc2l0aW9uKHByb3BzLnJlYWxTaXplLCBwcm9wcy5jb250YWluZXJTaXplLCBwcm9wcy5wb3NpdGlvbik7XG4gICAgICAgIGxldCBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplID0gcHJvcHMuY29udGFpbmVyU2l6ZSAqIHByb3BzLmNvbnRhaW5lclNpemUgLyBwcm9wcy5yZWFsU2l6ZTtcbiAgICAgICAgbGV0IHNjcm9sbFNpemUgPSBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIDwgcHJvcHMubWluU2Nyb2xsU2l6ZSA/IHByb3BzLm1pblNjcm9sbFNpemUgOiBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplO1xuXG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IChwcm9wcy5jb250YWluZXJTaXplIC0gc2Nyb2xsU2l6ZSkgKiBmcmFjdGlvbmFsUG9zaXRpb247XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JvbGxTaXplOiBzY3JvbGxTaXplLFxuICAgICAgICAgICAgcG9zaXRpb246IE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGxldCB7c21vb3RoU2Nyb2xsaW5nLCBpc0RyYWdnaW5nLCB0eXBlLCBzY3JvbGxiYXJTdHlsZSwgY29udGFpbmVyU3R5bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGlzVm9yaXppb250YWwgPSB0eXBlID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICAgIGxldCBpc1ZlcnRpY2FsID0gdHlwZSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgICAgbGV0IHNjcm9sbFN0eWxlcyA9IHRoaXMuY3JlYXRlU2Nyb2xsU3R5bGVzKCk7XG4gICAgICAgIGxldCBzcHJpbmdpZmllZFNjcm9sbFN0eWxlcyA9IHNtb290aFNjcm9sbGluZyA/IG1vZGlmeU9ialZhbHVlcyhzY3JvbGxTdHlsZXMsIHggPT4gc3ByaW5nKHgpKSA6IHNjcm9sbFN0eWxlcztcblxuICAgICAgICBsZXQgc2Nyb2xsYmFyQ2xhc3NlcyA9IGBzY3JvbGxiYXItY29udGFpbmVyICR7aXNEcmFnZ2luZyA/ICdhY3RpdmUnIDogJyd9ICR7aXNWb3JpemlvbnRhbCA/ICdob3Jpem9udGFsJyA6ICcnfSAke2lzVmVydGljYWwgPyAndmVydGljYWwnIDogJyd9YDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vdGlvbiBzdHlsZT17c3ByaW5naWZpZWRTY3JvbGxTdHlsZXN9PlxuICAgICAgICAgICAgICAgIHsgc3R5bGUgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzY3JvbGxiYXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2NvbnRhaW5lclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlU2Nyb2xsQmFyQ29udGFpbmVyQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17IHggPT4gdGhpcy5zY3JvbGxiYXJDb250YWluZXIgPSB4IH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbGJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uc2Nyb2xsYmFyU3R5bGUsIC4uLnN0eWxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01vdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGxCYXJDb250YWluZXJDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG4gICAgICAgIGxldCBjbGllbnRQb3NpdGlvbiA9IHRoaXMuaXNWZXJ0aWNhbCgpID8gZS5jbGllbnRZIDogZS5jbGllbnRYO1xuICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IHRoaXMuc2Nyb2xsYmFyQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgY2xpZW50U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IHRvcCA6IGxlZnQ7XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uID0gY2xpZW50UG9zaXRpb24gLSBjbGllbnRTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgbGV0IHByb3BvcnRpb25hbFRvUGFnZVNjcm9sbFNpemUgPSB0aGlzLnByb3BzLmNvbnRhaW5lclNpemUgKiB0aGlzLnByb3BzLmNvbnRhaW5lclNpemUgLyB0aGlzLnByb3BzLnJlYWxTaXplO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IHRydWUsIGxhc3RDbGllbnRQb3NpdGlvbjogY2xpZW50UG9zaXRpb24gfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25Qb3NpdGlvbkNoYW5nZSgocG9zaXRpb24gLSBwcm9wb3J0aW9uYWxUb1BhZ2VTY3JvbGxTaXplIC8gMikgLyBtdWx0aXBsaWVyKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmVGb3JIb3Jpem9udGFsKGUpe1xuICAgICAgICBsZXQgbXVsdGlwbGllciA9IHRoaXMuY29tcHV0ZU11bHRpcGxpZXIoKTtcblxuICAgICAgICBpZih0aGlzLnN0YXRlLmlzRHJhZ2dpbmcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IHRoaXMuc3RhdGUubGFzdENsaWVudFBvc2l0aW9uIC0gZS5jbGllbnRYO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RDbGllbnRQb3NpdGlvbjogZS5jbGllbnRYIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1vdmUoMCwgZGVsdGFYIC8gbXVsdGlwbGllcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU1vdmVGb3JWZXJ0aWNhbChlKXtcbiAgICAgICAgbGV0IG11bHRpcGxpZXIgPSB0aGlzLmNvbXB1dGVNdWx0aXBsaWVyKCk7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5pc0RyYWdnaW5nKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSB0aGlzLnN0YXRlLmxhc3RDbGllbnRQb3NpdGlvbiAtIGUuY2xpZW50WTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0Q2xpZW50UG9zaXRpb246IGUuY2xpZW50WSB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Nb3ZlKGRlbHRhWSAvIG11bHRpcGxpZXIsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VEb3duKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCBsYXN0Q2xpZW50UG9zaXRpb24gPSB0aGlzLmlzVmVydGljYWwoKSA/IGUuY2xpZW50WTogZS5jbGllbnRYO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0RyYWdnaW5nOiB0cnVlLCBsYXN0Q2xpZW50UG9zaXRpb246IGxhc3RDbGllbnRQb3NpdGlvbiB9KTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uRm9jdXMoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZVVwKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzRHJhZ2dpbmc6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVNjcm9sbFN0eWxlcygpe1xuICAgICAgICBpZih0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuc2Nyb2xsU2l6ZSxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IHRoaXMuc3RhdGUucG9zaXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLnNjcm9sbFNpemUsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5zdGF0ZS5wb3NpdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVNdWx0aXBsaWVyKCl7XG4gICAgICAgIHJldHVybiAodGhpcy5wcm9wcy5jb250YWluZXJTaXplKSAvIHRoaXMucHJvcHMucmVhbFNpemU7XG4gICAgfVxuXG4gICAgaXNWZXJ0aWNhbCgpe1xuICAgICAgIHJldHVybiB0aGlzLnByb3BzLnR5cGUgPT09ICd2ZXJ0aWNhbCc7XG4gICAgfVxufVxuXG5TY3JvbGxCYXIucHJvcFR5cGVzID0ge1xuICAgIG9uTW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Qb3NpdGlvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVhbFNpemU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgY29udGFpbmVyU2l6ZTogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBwb3NpdGlvbjogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb250YWluZXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzY3JvbGxiYXJTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10pLFxuICAgIG93bmVyRG9jdW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc21vb3RoU2Nyb2xsaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBtaW5TY3JvbGxTaXplOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG5TY3JvbGxCYXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGUgOiAndmVydGljYWwnLFxuICAgIHNtb290aFNjcm9sbGluZzogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBTY3JvbGxCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvU2Nyb2xsYmFyLmpzeCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqWydkZWZhdWx0J10gOiBvYmo7IH1cblxudmFyIF9Nb3Rpb24gPSByZXF1aXJlKCcuL01vdGlvbicpO1xuXG5leHBvcnRzLk1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShfTW90aW9uKTtcblxudmFyIF9TdGFnZ2VyZWRNb3Rpb24gPSByZXF1aXJlKCcuL1N0YWdnZXJlZE1vdGlvbicpO1xuXG5leHBvcnRzLlN0YWdnZXJlZE1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShfU3RhZ2dlcmVkTW90aW9uKTtcblxudmFyIF9UcmFuc2l0aW9uTW90aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uTW90aW9uJyk7XG5cbmV4cG9ydHMuVHJhbnNpdGlvbk1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZShfVHJhbnNpdGlvbk1vdGlvbik7XG5cbnZhciBfc3ByaW5nID0gcmVxdWlyZSgnLi9zcHJpbmcnKTtcblxuZXhwb3J0cy5zcHJpbmcgPSBfaW50ZXJvcFJlcXVpcmUoX3NwcmluZyk7XG5cbnZhciBfcHJlc2V0cyA9IHJlcXVpcmUoJy4vcHJlc2V0cycpO1xuXG5leHBvcnRzLnByZXNldHMgPSBfaW50ZXJvcFJlcXVpcmUoX3ByZXNldHMpO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxuZXhwb3J0cy5zdHJpcFN0eWxlID0gX2ludGVyb3BSZXF1aXJlKF9zdHJpcFN0eWxlKTtcblxuLy8gZGVwcmVjYXRlZCwgZHVtbXkgd2FybmluZyBmdW5jdGlvblxuXG52YXIgX3Jlb3JkZXJLZXlzID0gcmVxdWlyZSgnLi9yZW9yZGVyS2V5cycpO1xuXG5leHBvcnRzLnJlb3JkZXJLZXlzID0gX2ludGVyb3BSZXF1aXJlKF9yZW9yZGVyS2V5cyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvcmVhY3QtbW90aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX21hcFRvWmVybyA9IHJlcXVpcmUoJy4vbWFwVG9aZXJvJyk7XG5cbnZhciBfbWFwVG9aZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRvWmVybyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBfc3RlcHBlcjMgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIzKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWFjdENsYXNzKTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbnZhciBNb3Rpb24gPSBfY3JlYXRlUmVhY3RDbGFzczJbJ2RlZmF1bHQnXSh7XG4gIHByb3BUeXBlczoge1xuICAgIC8vIFRPT0Q6IHdhcm4gYWdhaW5zdCBwdXR0aW5nIGEgY29uZmlnIGluIGhlcmVcbiAgICBkZWZhdWx0U3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIpLFxuICAgIHN0eWxlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdE9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlciwgX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3RdKSkuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25SZXN0OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGVmYXVsdFN0eWxlID0gX3Byb3BzLmRlZmF1bHRTdHlsZTtcbiAgICB2YXIgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cbiAgICB2YXIgY3VycmVudFN0eWxlID0gZGVmYXVsdFN0eWxlIHx8IF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKHN0eWxlKTtcbiAgICB2YXIgY3VycmVudFZlbG9jaXR5ID0gX21hcFRvWmVybzJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGUpO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U3R5bGU6IGN1cnJlbnRTdHlsZSxcbiAgICAgIGN1cnJlbnRWZWxvY2l0eTogY3VycmVudFZlbG9jaXR5LFxuICAgICAgbGFzdElkZWFsU3R5bGU6IGN1cnJlbnRTdHlsZSxcbiAgICAgIGxhc3RJZGVhbFZlbG9jaXR5OiBjdXJyZW50VmVsb2NpdHlcbiAgICB9O1xuICB9LFxuXG4gIHdhc0FuaW1hdGluZzogZmFsc2UsXG4gIGFuaW1hdGlvbklEOiBudWxsLFxuICBwcmV2VGltZTogMCxcbiAgYWNjdW11bGF0ZWRUaW1lOiAwLFxuICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgY3VycmVudFN0eWxlJ3MgdmFsdWUgaXMgc3RhbGU6IGlmIHByb3BzIGlzIGltbWVkaWF0ZWx5XG4gIC8vIGNoYW5nZWQgZnJvbSAwIHRvIDQwMCB0byBzcHJpbmcoMCkgYWdhaW4sIHRoZSBhc3luYyBjdXJyZW50U3R5bGUgaXMgc3RpbGxcbiAgLy8gYXQgMCAoZGlkbid0IGhhdmUgdGltZSB0byB0aWNrIGFuZCBpbnRlcnBvbGF0ZSBldmVuIG9uY2UpLiBJZiB3ZSBuYWl2ZWx5XG4gIC8vIGNvbXBhcmUgY3VycmVudFN0eWxlIHdpdGggZGVzdFZhbCBpdCdsbCBiZSAwID09PSAwIChubyBhbmltYXRpb24sIHN0b3ApLlxuICAvLyBJbiByZWFsaXR5IGN1cnJlbnRTdHlsZSBzaG91bGQgYmUgNDAwXG4gIHVucmVhZFByb3BTdHlsZTogbnVsbCxcbiAgLy8gYWZ0ZXIgY2hlY2tpbmcgZm9yIHVucmVhZFByb3BTdHlsZSAhPSBudWxsLCB3ZSBtYW51YWxseSBnbyBzZXQgdGhlXG4gIC8vIG5vbi1pbnRlcnBvbGF0aW5nIHZhbHVlcyAodGhvc2UgdGhhdCBhcmUgYSBudW1iZXIsIHdpdGhvdXQgYSBzcHJpbmdcbiAgLy8gY29uZmlnKVxuICBjbGVhclVucmVhZFByb3BTdHlsZTogZnVuY3Rpb24gY2xlYXJVbnJlYWRQcm9wU3R5bGUoZGVzdFN0eWxlKSB7XG4gICAgdmFyIGRpcnR5ID0gZmFsc2U7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGN1cnJlbnRTdHlsZSA9IF9zdGF0ZS5jdXJyZW50U3R5bGU7XG4gICAgdmFyIGN1cnJlbnRWZWxvY2l0eSA9IF9zdGF0ZS5jdXJyZW50VmVsb2NpdHk7XG4gICAgdmFyIGxhc3RJZGVhbFN0eWxlID0gX3N0YXRlLmxhc3RJZGVhbFN0eWxlO1xuICAgIHZhciBsYXN0SWRlYWxWZWxvY2l0eSA9IF9zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0eTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkZXN0U3R5bGUpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc3RTdHlsZSwga2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlVmFsdWUgPSBkZXN0U3R5bGVba2V5XTtcbiAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICAgIGRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICBjdXJyZW50U3R5bGUgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlKTtcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdHkgPSBfZXh0ZW5kcyh7fSwgY3VycmVudFZlbG9jaXR5KTtcbiAgICAgICAgICBsYXN0SWRlYWxTdHlsZSA9IF9leHRlbmRzKHt9LCBsYXN0SWRlYWxTdHlsZSk7XG4gICAgICAgICAgbGFzdElkZWFsVmVsb2NpdHkgPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICBjdXJyZW50VmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgIGxhc3RJZGVhbFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICBsYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlydHkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3R5bGU6IGN1cnJlbnRTdHlsZSwgY3VycmVudFZlbG9jaXR5OiBjdXJyZW50VmVsb2NpdHksIGxhc3RJZGVhbFN0eWxlOiBsYXN0SWRlYWxTdHlsZSwgbGFzdElkZWFsVmVsb2NpdHk6IGxhc3RJZGVhbFZlbG9jaXR5IH0pO1xuICAgIH1cbiAgfSxcblxuICBzdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5OiBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBUT0RPOiB3aGVuIGNvbmZpZyBpcyB7YTogMTB9IGFuZCBkZXN0IGlzIHthOiAxMH0gZG8gd2UgcmFmIG9uY2UgYW5kXG4gICAgLy8gY2FsbCBjYj8gTm8sIG90aGVyd2lzZSBhY2NpZGVudGFsIHBhcmVudCByZXJlbmRlciBjYXVzZXMgY2IgdHJpZ2dlclxuICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBfcmFmMlsnZGVmYXVsdCddKGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgIC8vIGNoZWNrIGlmIHdlIG5lZWQgdG8gYW5pbWF0ZSBpbiB0aGUgZmlyc3QgcGxhY2VcbiAgICAgIHZhciBwcm9wc1N0eWxlID0gX3RoaXMucHJvcHMuc3R5bGU7XG4gICAgICBpZiAoX3Nob3VsZFN0b3BBbmltYXRpb24yWydkZWZhdWx0J10oX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlLCBwcm9wc1N0eWxlLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdHkpKSB7XG4gICAgICAgIGlmIChfdGhpcy53YXNBbmltYXRpbmcgJiYgX3RoaXMucHJvcHMub25SZXN0KSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25SZXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBuZWVkIHRvIGNhbmNlbCBhbmltYXRpb25JRCBoZXJlOyBzaG91bGRuJ3QgaGF2ZSBhbnkgaW4gZmxpZ2h0XG4gICAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgICAgX3RoaXMud2FzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMud2FzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGltZXN0YW1wIHx8IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgdmFyIHRpbWVEZWx0YSA9IGN1cnJlbnRUaW1lIC0gX3RoaXMucHJldlRpbWU7XG4gICAgICBfdGhpcy5wcmV2VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gX3RoaXMuYWNjdW11bGF0ZWRUaW1lICsgdGltZURlbHRhO1xuICAgICAgLy8gbW9yZSB0aGFuIDEwIGZyYW1lcz8gcHJvbGx5IHN3aXRjaGVkIGJyb3dzZXIgdGFiLiBSZXN0YXJ0XG4gICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID4gbXNQZXJGcmFtZSAqIDEwKSB7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPT09IDApIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBjYW5jZWwgYW5pbWF0aW9uSUQgaGVyZTsgc2hvdWxkbid0IGhhdmUgYW55IGluIGZsaWdodFxuICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudEZyYW1lQ29tcGxldGlvbiA9IChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpICogbXNQZXJGcmFtZSkgLyBtc1BlckZyYW1lO1xuICAgICAgdmFyIGZyYW1lc1RvQ2F0Y2hVcCA9IE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSk7XG5cbiAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZSA9IHt9O1xuICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXR5ID0ge307XG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlID0ge307XG4gICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0ge307XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wc1N0eWxlKSB7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzU3R5bGUsIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZVZhbHVlID0gcHJvcHNTdHlsZVtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlW2tleV07XG4gICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfdGhpcy5zdGF0ZS5sYXN0SWRlYWxWZWxvY2l0eVtrZXldO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVzVG9DYXRjaFVwOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBfc3RlcHBlciA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3N0ZXBwZXJbMF07XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gX3N0ZXBwZXJbMV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGVwcGVyMiA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgdmFyIG5leHRJZGVhbFggPSBfc3RlcHBlcjJbMF07XG4gICAgICAgICAgdmFyIG5leHRJZGVhbFYgPSBfc3RlcHBlcjJbMV07XG5cbiAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgKyAobmV4dElkZWFsWCAtIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgKyAobmV4dElkZWFsViAtIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVtrZXldID0gbmV3TGFzdElkZWFsU3R5bGVWYWx1ZTtcbiAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAvLyB0aGUgYW1vdW50IHdlJ3JlIGxvb3BlZCBvdmVyIGFib3ZlXG4gICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLT0gZnJhbWVzVG9DYXRjaFVwICogbXNQZXJGcmFtZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjdXJyZW50U3R5bGU6IG5ld0N1cnJlbnRTdHlsZSxcbiAgICAgICAgY3VycmVudFZlbG9jaXR5OiBuZXdDdXJyZW50VmVsb2NpdHksXG4gICAgICAgIGxhc3RJZGVhbFN0eWxlOiBuZXdMYXN0SWRlYWxTdHlsZSxcbiAgICAgICAgbGFzdElkZWFsVmVsb2NpdHk6IG5ld0xhc3RJZGVhbFZlbG9jaXR5XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMudW5yZWFkUHJvcFN0eWxlID0gbnVsbDtcblxuICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZSAhPSBudWxsKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGUpO1xuICAgIH1cblxuICAgIHRoaXMudW5yZWFkUHJvcFN0eWxlID0gcHJvcHMuc3R5bGU7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uSUQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV2VGltZSA9IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCAhPSBudWxsKSB7XG4gICAgICBfcmFmMlsnZGVmYXVsdCddLmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5zdGF0ZS5jdXJyZW50U3R5bGUpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvTW90aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG4vLyBjdXJyZW50bHkgdXNlZCB0byBpbml0aWF0ZSB0aGUgdmVsb2NpdHkgc3R5bGUgb2JqZWN0IHRvIDBcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1hcFRvWmVybztcblxuZnVuY3Rpb24gbWFwVG9aZXJvKG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgcmV0W2tleV0gPSAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9tYXBUb1plcm8uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLy8gdHVybiB7eDoge3ZhbDogMSwgc3RpZmZuZXNzOiAxLCBkYW1waW5nOiAyfSwgeTogMn0gZ2VuZXJhdGVkIGJ5XG4vLyBge3g6IHNwcmluZygxLCB7c3RpZmZuZXNzOiAxLCBkYW1waW5nOiAyfSksIHk6IDJ9YCBpbnRvIHt4OiAxLCB5OiAyfVxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzdHJpcFN0eWxlO1xuXG5mdW5jdGlvbiBzdHJpcFN0eWxlKHN0eWxlKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3R5bGUsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXRba2V5XSA9IHR5cGVvZiBzdHlsZVtrZXldID09PSAnbnVtYmVyJyA/IHN0eWxlW2tleV0gOiBzdHlsZVtrZXldLnZhbDtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9zdHJpcFN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuLy8gc3RlcHBlciBpcyB1c2VkIGEgbG90LiBTYXZlcyBhbGxvY2F0aW9uIHRvIHJldHVybiB0aGUgc2FtZSBhcnJheSB3cmFwcGVyLlxuLy8gVGhpcyBpcyBmaW5lIGFuZCBkYW5nZXItZnJlZSBhZ2FpbnN0IG11dGF0aW9ucyBiZWNhdXNlIHRoZSBjYWxsc2l0ZVxuLy8gaW1tZWRpYXRlbHkgZGVzdHJ1Y3R1cmVzIGl0IGFuZCBnZXRzIHRoZSBudW1iZXJzIGluc2lkZSB3aXRob3V0IHBhc3NpbmcgdGhlXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gc3RlcHBlcjtcblxudmFyIHJldXNlZFR1cGxlID0gWzAsIDBdO1xuXG5mdW5jdGlvbiBzdGVwcGVyKHNlY29uZFBlckZyYW1lLCB4LCB2LCBkZXN0WCwgaywgYiwgcHJlY2lzaW9uKSB7XG4gIC8vIFNwcmluZyBzdGlmZm5lc3MsIGluIGtnIC8gc14yXG5cbiAgLy8gZm9yIGFuaW1hdGlvbnMsIGRlc3RYIGlzIHJlYWxseSBzcHJpbmcgbGVuZ3RoIChzcHJpbmcgYXQgcmVzdCkuIGluaXRpYWxcbiAgLy8gcG9zaXRpb24gaXMgY29uc2lkZXJlZCBhcyB0aGUgc3RyZXRjaGVkL2NvbXByZXNzZWQgcG9zaXRpb24gb2YgYSBzcHJpbmdcbiAgdmFyIEZzcHJpbmcgPSAtayAqICh4IC0gZGVzdFgpO1xuXG4gIC8vIERhbXBpbmcsIGluIGtnIC8gc1xuICB2YXIgRmRhbXBlciA9IC1iICogdjtcblxuICAvLyB1c3VhbGx5IHdlIHB1dCBtYXNzIGhlcmUsIGJ1dCBmb3IgYW5pbWF0aW9uIHB1cnBvc2VzLCBzcGVjaWZ5aW5nIG1hc3MgaXMgYVxuICAvLyBiaXQgcmVkdW5kYW50LiB5b3UgY291bGQgc2ltcGx5IGFkanVzdCBrIGFuZCBiIGFjY29yZGluZ2x5XG4gIC8vIGxldCBhID0gKEZzcHJpbmcgKyBGZGFtcGVyKSAvIG1hc3M7XG4gIHZhciBhID0gRnNwcmluZyArIEZkYW1wZXI7XG5cbiAgdmFyIG5ld1YgPSB2ICsgYSAqIHNlY29uZFBlckZyYW1lO1xuICB2YXIgbmV3WCA9IHggKyBuZXdWICogc2Vjb25kUGVyRnJhbWU7XG5cbiAgaWYgKE1hdGguYWJzKG5ld1YpIDwgcHJlY2lzaW9uICYmIE1hdGguYWJzKG5ld1ggLSBkZXN0WCkgPCBwcmVjaXNpb24pIHtcbiAgICByZXVzZWRUdXBsZVswXSA9IGRlc3RYO1xuICAgIHJldXNlZFR1cGxlWzFdID0gMDtcbiAgICByZXR1cm4gcmV1c2VkVHVwbGU7XG4gIH1cblxuICByZXVzZWRUdXBsZVswXSA9IG5ld1g7XG4gIHJldXNlZFR1cGxlWzFdID0gbmV3VjtcbiAgcmV0dXJuIHJldXNlZFR1cGxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8gYXJyYXkgcmVmZXJlbmNlIGFyb3VuZC5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9zdGVwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuNy4xXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZXROYW5vU2Vjb25kcywgaHJ0aW1lLCBsb2FkVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBsb2FkVGltZSkgLyAxZTY7XG4gICAgfTtcbiAgICBocnRpbWUgPSBwcm9jZXNzLmhydGltZTtcbiAgICBnZXROYW5vU2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhyO1xuICAgICAgaHIgPSBocnRpbWUoKTtcbiAgICAgIHJldHVybiBoclswXSAqIDFlOSArIGhyWzFdO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBnZXROYW5vU2Vjb25kcygpO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3BlcmZvcm1hbmNlLW5vdy9saWIvcGVyZm9ybWFuY2Utbm93LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgcm9vdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93XG4gICwgdmVuZG9ycyA9IFsnbW96JywgJ3dlYmtpdCddXG4gICwgc3VmZml4ID0gJ0FuaW1hdGlvbkZyYW1lJ1xuICAsIHJhZiA9IHJvb3RbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IHJvb3RbJ2NhbmNlbCcgKyBzdWZmaXhdIHx8IHJvb3RbJ2NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxuXG5mb3IodmFyIGkgPSAwOyAhcmFmICYmIGkgPCB2ZW5kb3JzLmxlbmd0aDsgaSsrKSB7XG4gIHJhZiA9IHJvb3RbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gcm9vdFt2ZW5kb3JzW2ldICsgJ0NhbmNlbCcgKyBzdWZmaXhdXG4gICAgICB8fCByb290W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdCcgKyBzdWZmaXhdXG59XG5cbi8vIFNvbWUgdmVyc2lvbnMgb2YgRkYgaGF2ZSByQUYgYnV0IG5vdCBjQUZcbmlmKCFyYWYgfHwgIWNhZikge1xuICB2YXIgbGFzdCA9IDBcbiAgICAsIGlkID0gMFxuICAgICwgcXVldWUgPSBbXVxuICAgICwgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MFxuXG4gIHJhZiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgX25vdyA9IG5vdygpXG4gICAgICAgICwgbmV4dCA9IE1hdGgubWF4KDAsIGZyYW1lRHVyYXRpb24gLSAoX25vdyAtIGxhc3QpKVxuICAgICAgbGFzdCA9IG5leHQgKyBfbm93XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY3AgPSBxdWV1ZS5zbGljZSgwKVxuICAgICAgICAvLyBDbGVhciBxdWV1ZSBoZXJlIHRvIHByZXZlbnRcbiAgICAgICAgLy8gY2FsbGJhY2tzIGZyb20gYXBwZW5kaW5nIGxpc3RlbmVyc1xuICAgICAgICAvLyB0byB0aGUgY3VycmVudCBmcmFtZSdzIHF1ZXVlXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYoIWNwW2ldLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICBjcFtpXS5jYWxsYmFjayhsYXN0KVxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRocm93IGUgfSwgMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIE1hdGgucm91bmQobmV4dCkpXG4gICAgfVxuICAgIHF1ZXVlLnB1c2goe1xuICAgICAgaGFuZGxlOiArK2lkLFxuICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuIGlkXG4gIH1cblxuICBjYWYgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKHF1ZXVlW2ldLmhhbmRsZSA9PT0gaGFuZGxlKSB7XG4gICAgICAgIHF1ZXVlW2ldLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbikge1xuICAvLyBXcmFwIGluIGEgbmV3IGZ1bmN0aW9uIHRvIHByZXZlbnRcbiAgLy8gYGNhbmNlbGAgcG90ZW50aWFsbHkgYmVpbmcgYXNzaWduZWRcbiAgLy8gdG8gdGhlIG5hdGl2ZSByQUYgZnVuY3Rpb25cbiAgcmV0dXJuIHJhZi5jYWxsKHJvb3QsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShyb290LCBhcmd1bWVudHMpXG59XG5tb2R1bGUuZXhwb3J0cy5wb2x5ZmlsbCA9IGZ1bmN0aW9uKCkge1xuICByb290LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJhZlxuICByb290LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FmXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuMTIuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgZ2V0TmFub1NlY29uZHMsIGhydGltZSwgbG9hZFRpbWUsIG1vZHVsZUxvYWRUaW1lLCBub2RlTG9hZFRpbWUsIHVwVGltZTtcblxuICBpZiAoKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwZXJmb3JtYW5jZSAhPT0gbnVsbCkgJiYgcGVyZm9ybWFuY2Uubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKCh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzICE9PSBudWxsKSAmJiBwcm9jZXNzLmhydGltZSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKGdldE5hbm9TZWNvbmRzKCkgLSBub2RlTG9hZFRpbWUpIC8gMWU2O1xuICAgIH07XG4gICAgaHJ0aW1lID0gcHJvY2Vzcy5ocnRpbWU7XG4gICAgZ2V0TmFub1NlY29uZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBocjtcbiAgICAgIGhyID0gaHJ0aW1lKCk7XG4gICAgICByZXR1cm4gaHJbMF0gKiAxZTkgKyBoclsxXTtcbiAgICB9O1xuICAgIG1vZHVsZUxvYWRUaW1lID0gZ2V0TmFub1NlY29uZHMoKTtcbiAgICB1cFRpbWUgPSBwcm9jZXNzLnVwdGltZSgpICogMWU5O1xuICAgIG5vZGVMb2FkVGltZSA9IG1vZHVsZUxvYWRUaW1lIC0gdXBUaW1lO1xuICB9IGVsc2UgaWYgKERhdGUubm93KSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IERhdGUubm93KCk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxvYWRUaW1lO1xuICAgIH07XG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXJmb3JtYW5jZS1ub3cuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmFmL34vcGVyZm9ybWFuY2Utbm93L2xpYi9wZXJmb3JtYW5jZS1ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG4vLyB1c2FnZSBhc3N1bXB0aW9uOiBjdXJyZW50U3R5bGUgdmFsdWVzIGhhdmUgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ1dCBpdCBzYXlzXG4vLyBub3RoaW5nIG9mIHdoZXRoZXIgY3VycmVudFN0eWxlIGlzIHN0YWxlIChzZWUgdW5yZWFkUHJvcFN0eWxlKVxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2hvdWxkU3RvcEFuaW1hdGlvbjtcblxuZnVuY3Rpb24gc2hvdWxkU3RvcEFuaW1hdGlvbihjdXJyZW50U3R5bGUsIHN0eWxlLCBjdXJyZW50VmVsb2NpdHkpIHtcbiAgZm9yICh2YXIga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3R5bGUsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50VmVsb2NpdHlba2V5XSAhPT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBzdHlsZVZhbHVlID0gdHlwZW9mIHN0eWxlW2tleV0gPT09ICdudW1iZXInID8gc3R5bGVba2V5XSA6IHN0eWxlW2tleV0udmFsO1xuICAgIC8vIHN0ZXBwZXIgd2lsbCBoYXZlIGFscmVhZHkgdGFrZW4gY2FyZSBvZiByb3VuZGluZyBwcmVjaXNpb24gZXJyb3JzLCBzb1xuICAgIC8vIHdvbid0IGhhdmUgc3VjaCB0aGluZyBhcyAwLjk5OTkgIT09PSAxXG4gICAgaWYgKGN1cnJlbnRTdHlsZVtrZXldICE9PSBzdHlsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Nob3VsZFN0b3BBbmltYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAlc2AgcHJvcCBvbiBgJXNgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJyxcbiAgICAgICAgICAgICAgcHJvcEZ1bGxOYW1lLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzKTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAlcyBhdCBpbmRleCAlcy4nLFxuICAgICAgICAgIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSxcbiAgICAgICAgICBpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG4gIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKHR5cGVTcGVjcy5oYXNPd25Qcm9wZXJ0eSh0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gPT09ICdmdW5jdGlvbicsICclczogJXMgdHlwZSBgJXNgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tICcgKyAnUmVhY3QuUHJvcFR5cGVzLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSk7XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIHdhcm5pbmcoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnRmFpbGVkICVzIHR5cGU6ICVzJXMnLCBsb2NhdGlvbiwgZXJyb3IubWVzc2FnZSwgc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3RvcnknKTtcblxuaWYgKHR5cGVvZiBSZWFjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdGhyb3cgRXJyb3IoXG4gICAgJ2NyZWF0ZS1yZWFjdC1jbGFzcyBjb3VsZCBub3QgZmluZCB0aGUgUmVhY3Qgb2JqZWN0LiBJZiB5b3UgYXJlIHVzaW5nIHNjcmlwdCB0YWdzLCAnICtcbiAgICAgICdtYWtlIHN1cmUgdGhhdCBSZWFjdCBpcyBiZWluZyBsb2FkZWQgYmVmb3JlIGNyZWF0ZS1yZWFjdC1jbGFzcy4nXG4gICk7XG59XG5cbi8vIEhhY2sgdG8gZ3JhYiBOb29wVXBkYXRlUXVldWUgZnJvbSBpc29tb3JwaGljIFJlYWN0XG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSBuZXcgUmVhY3QuQ29tcG9uZW50KCkudXBkYXRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICBSZWFjdC5Db21wb25lbnQsXG4gIFJlYWN0LmlzVmFsaWRFbGVtZW50LFxuICBSZWFjdE5vb3BVcGRhdGVRdWV1ZVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jcmVhdGUtcmVhY3QtY2xhc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgZW1wdHlPYmplY3QgPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eU9iamVjdCcpO1xudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHdhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG59XG5cbnZhciBNSVhJTlNfS0VZID0gJ21peGlucyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBhbGxvdyB0aGUgY3JlYXRpb24gb2YgYW5vbnltb3VzIGZ1bmN0aW9ucyB3aGljaCBkbyBub3Rcbi8vIGhhdmUgLm5hbWUgc2V0IHRvIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBiZWluZyBhc3NpZ25lZCB0by5cbmZ1bmN0aW9uIGlkZW50aXR5KGZuKSB7XG4gIHJldHVybiBmbjtcbn1cblxudmFyIFJlYWN0UHJvcFR5cGVMb2NhdGlvbk5hbWVzO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7XG4gICAgcHJvcDogJ3Byb3AnLFxuICAgIGNvbnRleHQ6ICdjb250ZXh0JyxcbiAgICBjaGlsZENvbnRleHQ6ICdjaGlsZCBjb250ZXh0J1xuICB9O1xufSBlbHNlIHtcbiAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXMgPSB7fTtcbn1cblxuZnVuY3Rpb24gZmFjdG9yeShSZWFjdENvbXBvbmVudCwgaXNWYWxpZEVsZW1lbnQsIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlKSB7XG4gIC8qKlxuICAgKiBQb2xpY2llcyB0aGF0IGRlc2NyaWJlIG1ldGhvZHMgaW4gYFJlYWN0Q2xhc3NJbnRlcmZhY2VgLlxuICAgKi9cblxuICB2YXIgaW5qZWN0ZWRNaXhpbnMgPSBbXTtcblxuICAvKipcbiAgICogQ29tcG9zaXRlIGNvbXBvbmVudHMgYXJlIGhpZ2hlci1sZXZlbCBjb21wb25lbnRzIHRoYXQgY29tcG9zZSBvdGhlciBjb21wb3NpdGVcbiAgICogb3IgaG9zdCBjb21wb25lbnRzLlxuICAgKlxuICAgKiBUbyBjcmVhdGUgYSBuZXcgdHlwZSBvZiBgUmVhY3RDbGFzc2AsIHBhc3MgYSBzcGVjaWZpY2F0aW9uIG9mXG4gICAqIHlvdXIgbmV3IGNsYXNzIHRvIGBSZWFjdC5jcmVhdGVDbGFzc2AuIFRoZSBvbmx5IHJlcXVpcmVtZW50IG9mIHlvdXIgY2xhc3NcbiAgICogc3BlY2lmaWNhdGlvbiBpcyB0aGF0IHlvdSBpbXBsZW1lbnQgYSBgcmVuZGVyYCBtZXRob2QuXG4gICAqXG4gICAqICAgdmFyIE15Q29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICogICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj47XG4gICAqICAgICB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIFRoZSBjbGFzcyBzcGVjaWZpY2F0aW9uIHN1cHBvcnRzIGEgc3BlY2lmaWMgcHJvdG9jb2wgb2YgbWV0aG9kcyB0aGF0IGhhdmVcbiAgICogc3BlY2lhbCBtZWFuaW5nIChlLmcuIGByZW5kZXJgKS4gU2VlIGBSZWFjdENsYXNzSW50ZXJmYWNlYCBmb3JcbiAgICogbW9yZSB0aGUgY29tcHJlaGVuc2l2ZSBwcm90b2NvbC4gQW55IG90aGVyIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgaW4gdGhlXG4gICAqIGNsYXNzIHNwZWNpZmljYXRpb24gd2lsbCBiZSBhdmFpbGFibGUgb24gdGhlIHByb3RvdHlwZS5cbiAgICpcbiAgICogQGludGVyZmFjZSBSZWFjdENsYXNzSW50ZXJmYWNlXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmFyIFJlYWN0Q2xhc3NJbnRlcmZhY2UgPSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgTWl4aW4gb2JqZWN0cyB0byBpbmNsdWRlIHdoZW4gZGVmaW5pbmcgeW91ciBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgbWl4aW5zOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IHNob3VsZCBiZSBkZWZpbmVkIG9uXG4gICAgICogdGhlIGNvbXBvbmVudCdzIGNvbnN0cnVjdG9yIGluc3RlYWQgb2YgaXRzIHByb3RvdHlwZSAoc3RhdGljIG1ldGhvZHMpLlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBzdGF0aWNzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBwcm9wIHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgcHJvcFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29udGV4dFR5cGVzOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5pdGlvbiBvZiBjb250ZXh0IHR5cGVzIHRoaXMgY29tcG9uZW50IHNldHMgZm9yIGl0cyBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY2hpbGRDb250ZXh0VHlwZXM6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IERlZmluaXRpb24gbWV0aG9kcyA9PT09XG5cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBWYWx1ZXMgaW4gdGhlIG1hcHBpbmcgd2lsbCBiZSBzZXQgb25cbiAgICAgKiBgdGhpcy5wcm9wc2AgaWYgdGhhdCBwcm9wIGlzIG5vdCBzcGVjaWZpZWQgKGkuZS4gdXNpbmcgYW4gYGluYCBjaGVjaykuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIGJlZm9yZSBgZ2V0SW5pdGlhbFN0YXRlYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCByZWx5XG4gICAgICogb24gYHRoaXMuc3RhdGVgIG9yIHVzZSBgdGhpcy5zZXRTdGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb25jZSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdXNlZFxuICAgICAqIGFzIHRoZSBpbml0aWFsIHZhbHVlIG9mIGB0aGlzLnN0YXRlYC5cbiAgICAgKlxuICAgICAqICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBpc09uOiBmYWxzZSxcbiAgICAgKiAgICAgICBmb29CYXo6IG5ldyBCYXpGb28oKVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9XG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiAnREVGSU5FX01BTllfTUVSR0VEJyxcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge29iamVjdH1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBnZXRDaGlsZENvbnRleHQ6ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuXG4gICAgLyoqXG4gICAgICogVXNlcyBwcm9wcyBmcm9tIGB0aGlzLnByb3BzYCBhbmQgc3RhdGUgZnJvbSBgdGhpcy5zdGF0ZWAgdG8gcmVuZGVyIHRoZVxuICAgICAqIHN0cnVjdHVyZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogTm8gZ3VhcmFudGVlcyBhcmUgbWFkZSBhYm91dCB3aGVuIG9yIGhvdyBvZnRlbiB0aGlzIG1ldGhvZCBpcyBpbnZva2VkLCBzb1xuICAgICAqIGl0IG11c3Qgbm90IGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAqXG4gICAgICogICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAqICAgICB2YXIgbmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICAgKiAgICAgcmV0dXJuIDxkaXY+SGVsbG8sIHtuYW1lfSE8L2Rpdj47XG4gICAgICogICB9XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtSZWFjdENvbXBvbmVudH1cbiAgICAgKiBAcmVxdWlyZWRcbiAgICAgKi9cbiAgICByZW5kZXI6ICdERUZJTkVfT05DRScsXG5cbiAgICAvLyA9PT09IERlbGVnYXRlIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW5pdGlhbGx5IGNyZWF0ZWQgYW5kIGFib3V0IHRvIGJlIG1vdW50ZWQuXG4gICAgICogVGhpcyBtYXkgaGF2ZSBzaWRlIGVmZmVjdHMsIGJ1dCBhbnkgZXh0ZXJuYWwgc3Vic2NyaXB0aW9ucyBvciBkYXRhIGNyZWF0ZWRcbiAgICAgKiBieSB0aGlzIG1ldGhvZCBtdXN0IGJlIGNsZWFuZWQgdXAgaW4gYGNvbXBvbmVudFdpbGxVbm1vdW50YC5cbiAgICAgKlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIGNvbXBvbmVudFdpbGxNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgYW5kIGhhcyBhIERPTSByZXByZXNlbnRhdGlvbi5cbiAgICAgKiBIb3dldmVyLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgRE9NIG5vZGUgaXMgaW4gdGhlIGRvY3VtZW50LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gb3BlcmF0ZSBvbiB0aGUgRE9NIHdoZW4gdGhlIGNvbXBvbmVudCBoYXNcbiAgICAgKiBiZWVuIG1vdW50ZWQgKGluaXRpYWxpemVkIGFuZCByZW5kZXJlZCkgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtET01FbGVtZW50fSByb290Tm9kZSBET00gZWxlbWVudCByZXByZXNlbnRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudDogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMgbmV3IHByb3BzLlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gcmVhY3QgdG8gYSBwcm9wIHRyYW5zaXRpb24gYnkgdXBkYXRpbmcgdGhlXG4gICAgICogc3RhdGUgdXNpbmcgYHRoaXMuc2V0U3RhdGVgLiBDdXJyZW50IHByb3BzIGFyZSBhY2Nlc3NlZCB2aWEgYHRoaXMucHJvcHNgLlxuICAgICAqXG4gICAgICogICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAqICAgICAgIGxpa2VzSW5jcmVhc2luZzogbmV4dFByb3BzLmxpa2VDb3VudCA+IHRoaXMucHJvcHMubGlrZUNvdW50XG4gICAgICogICAgIH0pO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogTk9URTogVGhlcmUgaXMgbm8gZXF1aXZhbGVudCBgY29tcG9uZW50V2lsbFJlY2VpdmVTdGF0ZWAuIEFuIGluY29taW5nIHByb3BcbiAgICAgKiB0cmFuc2l0aW9uIG1heSBjYXVzZSBhIHN0YXRlIGNoYW5nZSwgYnV0IHRoZSBvcHBvc2l0ZSBpcyBub3QgdHJ1ZS4gSWYgeW91XG4gICAgICogbmVlZCBpdCwgeW91IGFyZSBwcm9iYWJseSBsb29raW5nIGZvciBgY29tcG9uZW50V2lsbFVwZGF0ZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmV4dFByb3BzXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogJ0RFRklORV9NQU5ZJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hpbGUgZGVjaWRpbmcgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgdXBkYXRlZCBhcyBhIHJlc3VsdCBvZlxuICAgICAqIHJlY2VpdmluZyBuZXcgcHJvcHMsIHN0YXRlIGFuZC9vciBjb250ZXh0LlxuICAgICAqXG4gICAgICogVXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gYHJldHVybiBmYWxzZWAgd2hlbiB5b3UncmUgY2VydGFpbiB0aGF0IHRoZVxuICAgICAqIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBwcm9wcy9zdGF0ZS9jb250ZXh0IHdpbGwgbm90IHJlcXVpcmUgYSBjb21wb25lbnRcbiAgICAgKiB1cGRhdGUuXG4gICAgICpcbiAgICAgKiAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICogICAgIHJldHVybiAhZXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fFxuICAgICAqICAgICAgICFlcXVhbChuZXh0U3RhdGUsIHRoaXMuc3RhdGUpIHx8XG4gICAgICogICAgICAgIWVxdWFsKG5leHRDb250ZXh0LCB0aGlzLmNvbnRleHQpO1xuICAgICAqICAgfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlLlxuICAgICAqIEBvcHRpb25hbFxuICAgICAqL1xuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogJ0RFRklORV9PTkNFJyxcblxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFib3V0IHRvIHVwZGF0ZSBkdWUgdG8gYSB0cmFuc2l0aW9uIGZyb21cbiAgICAgKiBgdGhpcy5wcm9wc2AsIGB0aGlzLnN0YXRlYCBhbmQgYHRoaXMuY29udGV4dGAgdG8gYG5leHRQcm9wc2AsIGBuZXh0U3RhdGVgXG4gICAgICogYW5kIGBuZXh0Q29udGV4dGAuXG4gICAgICpcbiAgICAgKiBVc2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBwZXJmb3JtIHByZXBhcmF0aW9uIGJlZm9yZSBhbiB1cGRhdGUgb2NjdXJzLlxuICAgICAqXG4gICAgICogTk9URTogWW91ICoqY2Fubm90KiogdXNlIGB0aGlzLnNldFN0YXRlKClgIGluIHRoaXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5leHRQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gbmV4dFN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBuZXh0Q29udGV4dFxuICAgICAqIEBwYXJhbSB7UmVhY3RSZWNvbmNpbGVUcmFuc2FjdGlvbn0gdHJhbnNhY3Rpb25cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKi9cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQncyBET00gcmVwcmVzZW50YXRpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIG9wZXJhdGUgb24gdGhlIERPTSB3aGVuIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogYmVlbiB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByZXZQcm9wc1xuICAgICAqIEBwYXJhbSB7P29iamVjdH0gcHJldlN0YXRlXG4gICAgICogQHBhcmFtIHs/b2JqZWN0fSBwcmV2Q29udGV4dFxuICAgICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gcm9vdE5vZGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiAnREVGSU5FX01BTlknLFxuXG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZCBmcm9tIGl0cyBwYXJlbnQgYW5kIGhhdmVcbiAgICAgKiBpdHMgRE9NIHJlcHJlc2VudGF0aW9uIGRlc3Ryb3llZC5cbiAgICAgKlxuICAgICAqIFVzZSB0aGlzIGFzIGFuIG9wcG9ydHVuaXR5IHRvIGRlYWxsb2NhdGUgYW55IGV4dGVybmFsIHJlc291cmNlcy5cbiAgICAgKlxuICAgICAqIE5PVEU6IFRoZXJlIGlzIG5vIGBjb21wb25lbnREaWRVbm1vdW50YCBzaW5jZSB5b3VyIGNvbXBvbmVudCB3aWxsIGhhdmUgYmVlblxuICAgICAqIGRlc3Ryb3llZCBieSB0aGF0IHBvaW50LlxuICAgICAqXG4gICAgICogQG9wdGlvbmFsXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6ICdERUZJTkVfTUFOWScsXG5cbiAgICAvLyA9PT09IEFkdmFuY2VkIG1ldGhvZHMgPT09PVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50J3MgY3VycmVudGx5IG1vdW50ZWQgRE9NIHJlcHJlc2VudGF0aW9uLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBpbXBsZW1lbnRzIFJlYWN0J3MgcmVuZGVyaW5nIGFuZCByZWNvbmNpbGlhdGlvbiBhbGdvcml0aG0uXG4gICAgICogU29waGlzdGljYXRlZCBjbGllbnRzIG1heSB3aXNoIHRvIG92ZXJyaWRlIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlYWN0UmVjb25jaWxlVHJhbnNhY3Rpb259IHRyYW5zYWN0aW9uXG4gICAgICogQGludGVybmFsXG4gICAgICogQG92ZXJyaWRhYmxlXG4gICAgICovXG4gICAgdXBkYXRlQ29tcG9uZW50OiAnT1ZFUlJJREVfQkFTRSdcbiAgfTtcblxuICAvKipcbiAgICogTWFwcGluZyBmcm9tIGNsYXNzIHNwZWNpZmljYXRpb24ga2V5cyB0byBzcGVjaWFsIHByb2Nlc3NpbmcgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBBbHRob3VnaCB0aGVzZSBhcmUgZGVjbGFyZWQgbGlrZSBpbnN0YW5jZSBwcm9wZXJ0aWVzIGluIHRoZSBzcGVjaWZpY2F0aW9uXG4gICAqIHdoZW4gZGVmaW5pbmcgY2xhc3NlcyB1c2luZyBgUmVhY3QuY3JlYXRlQ2xhc3NgLCB0aGV5IGFyZSBhY3R1YWxseSBzdGF0aWNcbiAgICogYW5kIGFyZSBhY2Nlc3NpYmxlIG9uIHRoZSBjb25zdHJ1Y3RvciBpbnN0ZWFkIG9mIHRoZSBwcm90b3R5cGUuIERlc3BpdGVcbiAgICogYmVpbmcgc3RhdGljLCB0aGV5IG11c3QgYmUgZGVmaW5lZCBvdXRzaWRlIG9mIHRoZSBcInN0YXRpY3NcIiBrZXkgdW5kZXJcbiAgICogd2hpY2ggYWxsIG90aGVyIHN0YXRpYyBtZXRob2RzIGFyZSBkZWZpbmVkLlxuICAgKi9cbiAgdmFyIFJFU0VSVkVEX1NQRUNfS0VZUyA9IHtcbiAgICBkaXNwbGF5TmFtZTogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGRpc3BsYXlOYW1lKSB7XG4gICAgICBDb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIH0sXG4gICAgbWl4aW5zOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgbWl4aW5zKSB7XG4gICAgICBpZiAobWl4aW5zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWl4aW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIG1peGluc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkQ29udGV4dFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgY2hpbGRDb250ZXh0VHlwZXMsICdjaGlsZENvbnRleHQnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzID0gX2Fzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIENvbnN0cnVjdG9yLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICBjaGlsZENvbnRleHRUeXBlc1xuICAgICAgKTtcbiAgICB9LFxuICAgIGNvbnRleHRUeXBlczogZnVuY3Rpb24oQ29uc3RydWN0b3IsIGNvbnRleHRUeXBlcykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFsaWRhdGVUeXBlRGVmKENvbnN0cnVjdG9yLCBjb250ZXh0VHlwZXMsICdjb250ZXh0Jyk7XG4gICAgICB9XG4gICAgICBDb25zdHJ1Y3Rvci5jb250ZXh0VHlwZXMgPSBfYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgQ29uc3RydWN0b3IuY29udGV4dFR5cGVzLFxuICAgICAgICBjb250ZXh0VHlwZXNcbiAgICAgICk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTcGVjaWFsIGNhc2UgZ2V0RGVmYXVsdFByb3BzIHdoaWNoIHNob3VsZCBtb3ZlIGludG8gc3RhdGljcyBidXQgcmVxdWlyZXNcbiAgICAgKiBhdXRvbWF0aWMgbWVyZ2luZy5cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBnZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gY3JlYXRlTWVyZ2VkUmVzdWx0RnVuY3Rpb24oXG4gICAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzLFxuICAgICAgICAgIGdldERlZmF1bHRQcm9wc1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzID0gZ2V0RGVmYXVsdFByb3BzO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcFR5cGVzOiBmdW5jdGlvbihDb25zdHJ1Y3RvciwgcHJvcFR5cGVzKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZVR5cGVEZWYoQ29uc3RydWN0b3IsIHByb3BUeXBlcywgJ3Byb3AnKTtcbiAgICAgIH1cbiAgICAgIENvbnN0cnVjdG9yLnByb3BUeXBlcyA9IF9hc3NpZ24oe30sIENvbnN0cnVjdG9yLnByb3BUeXBlcywgcHJvcFR5cGVzKTtcbiAgICB9LFxuICAgIHN0YXRpY3M6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgICBtaXhTdGF0aWNTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3Rvciwgc3RhdGljcyk7XG4gICAgfSxcbiAgICBhdXRvYmluZDogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVHlwZURlZihDb25zdHJ1Y3RvciwgdHlwZURlZiwgbG9jYXRpb24pIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiB0eXBlRGVmKSB7XG4gICAgICBpZiAodHlwZURlZi5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgLy8gdXNlIGEgd2FybmluZyBpbnN0ZWFkIG9mIGFuIF9pbnZhcmlhbnQgc28gY29tcG9uZW50c1xuICAgICAgICAvLyBkb24ndCBzaG93IHVwIGluIHByb2QgYnV0IG9ubHkgaW4gX19ERVZfX1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm5pbmcoXG4gICAgICAgICAgICB0eXBlb2YgdHlwZURlZltwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICtcbiAgICAgICAgICAgICAgJ1JlYWN0LlByb3BUeXBlcy4nLFxuICAgICAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q2xhc3MnLFxuICAgICAgICAgICAgUmVhY3RQcm9wVHlwZUxvY2F0aW9uTmFtZXNbbG9jYXRpb25dLFxuICAgICAgICAgICAgcHJvcE5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVNZXRob2RPdmVycmlkZShpc0FscmVhZHlEZWZpbmVkLCBuYW1lKSB7XG4gICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlLmhhc093blByb3BlcnR5KG5hbWUpXG4gICAgICA/IFJlYWN0Q2xhc3NJbnRlcmZhY2VbbmFtZV1cbiAgICAgIDogbnVsbDtcblxuICAgIC8vIERpc2FsbG93IG92ZXJyaWRpbmcgb2YgYmFzZSBjbGFzcyBtZXRob2RzIHVubGVzcyBleHBsaWNpdGx5IGFsbG93ZWQuXG4gICAgaWYgKFJlYWN0Q2xhc3NNaXhpbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgX2ludmFyaWFudChcbiAgICAgICAgc3BlY1BvbGljeSA9PT0gJ09WRVJSSURFX0JBU0UnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIG92ZXJyaWRlICcgK1xuICAgICAgICAgICdgJXNgIGZyb20geW91ciBjbGFzcyBzcGVjaWZpY2F0aW9uLiBFbnN1cmUgdGhhdCB5b3VyIG1ldGhvZCBuYW1lcyAnICtcbiAgICAgICAgICAnZG8gbm90IG92ZXJsYXAgd2l0aCBSZWFjdCBtZXRob2RzLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWxsb3cgZGVmaW5pbmcgbWV0aG9kcyBtb3JlIHRoYW4gb25jZSB1bmxlc3MgZXhwbGljaXRseSBhbGxvd2VkLlxuICAgIGlmIChpc0FscmVhZHlEZWZpbmVkKSB7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICBzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTlknIHx8IHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWV9NRVJHRUQnLFxuICAgICAgICAnUmVhY3RDbGFzc0ludGVyZmFjZTogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSAnICtcbiAgICAgICAgICAnYCVzYCBvbiB5b3VyIGNvbXBvbmVudCBtb3JlIHRoYW4gb25jZS4gVGhpcyBjb25mbGljdCBtYXkgYmUgZHVlICcgK1xuICAgICAgICAgICd0byBhIG1peGluLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1peGluIGhlbHBlciB3aGljaCBoYW5kbGVzIHBvbGljeSB2YWxpZGF0aW9uIGFuZCByZXNlcnZlZFxuICAgKiBzcGVjaWZpY2F0aW9uIGtleXMgd2hlbiBidWlsZGluZyBSZWFjdCBjbGFzc2VzLlxuICAgKi9cbiAgZnVuY3Rpb24gbWl4U3BlY0ludG9Db21wb25lbnQoQ29uc3RydWN0b3IsIHNwZWMpIHtcbiAgICBpZiAoIXNwZWMpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciB0eXBlb2ZTcGVjID0gdHlwZW9mIHNwZWM7XG4gICAgICAgIHZhciBpc01peGluVmFsaWQgPSB0eXBlb2ZTcGVjID09PSAnb2JqZWN0JyAmJiBzcGVjICE9PSBudWxsO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgIGlzTWl4aW5WYWxpZCxcbiAgICAgICAgICAgIFwiJXM6IFlvdSdyZSBhdHRlbXB0aW5nIHRvIGluY2x1ZGUgYSBtaXhpbiB0aGF0IGlzIGVpdGhlciBudWxsIFwiICtcbiAgICAgICAgICAgICAgJ29yIG5vdCBhbiBvYmplY3QuIENoZWNrIHRoZSBtaXhpbnMgaW5jbHVkZWQgYnkgdGhlIGNvbXBvbmVudCwgJyArXG4gICAgICAgICAgICAgICdhcyB3ZWxsIGFzIGFueSBtaXhpbnMgdGhleSBpbmNsdWRlIHRoZW1zZWx2ZXMuICcgK1xuICAgICAgICAgICAgICAnRXhwZWN0ZWQgb2JqZWN0IGJ1dCBnb3QgJXMuJyxcbiAgICAgICAgICAgIENvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8ICdSZWFjdENsYXNzJyxcbiAgICAgICAgICAgIHNwZWMgPT09IG51bGwgPyBudWxsIDogdHlwZW9mU3BlY1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9pbnZhcmlhbnQoXG4gICAgICB0eXBlb2Ygc3BlYyAhPT0gJ2Z1bmN0aW9uJyxcbiAgICAgIFwiUmVhY3RDbGFzczogWW91J3JlIGF0dGVtcHRpbmcgdG8gXCIgK1xuICAgICAgICAndXNlIGEgY29tcG9uZW50IGNsYXNzIG9yIGZ1bmN0aW9uIGFzIGEgbWl4aW4uIEluc3RlYWQsIGp1c3QgdXNlIGEgJyArXG4gICAgICAgICdyZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcbiAgICBfaW52YXJpYW50KFxuICAgICAgIWlzVmFsaWRFbGVtZW50KHNwZWMpLFxuICAgICAgXCJSZWFjdENsYXNzOiBZb3UncmUgYXR0ZW1wdGluZyB0byBcIiArXG4gICAgICAgICd1c2UgYSBjb21wb25lbnQgYXMgYSBtaXhpbi4gSW5zdGVhZCwganVzdCB1c2UgYSByZWd1bGFyIG9iamVjdC4nXG4gICAgKTtcblxuICAgIHZhciBwcm90byA9IENvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB2YXIgYXV0b0JpbmRQYWlycyA9IHByb3RvLl9fcmVhY3RBdXRvQmluZFBhaXJzO1xuXG4gICAgLy8gQnkgaGFuZGxpbmcgbWl4aW5zIGJlZm9yZSBhbnkgb3RoZXIgcHJvcGVydGllcywgd2UgZW5zdXJlIHRoZSBzYW1lXG4gICAgLy8gY2hhaW5pbmcgb3JkZXIgaXMgYXBwbGllZCB0byBtZXRob2RzIHdpdGggREVGSU5FX01BTlkgcG9saWN5LCB3aGV0aGVyXG4gICAgLy8gbWl4aW5zIGFyZSBsaXN0ZWQgYmVmb3JlIG9yIGFmdGVyIHRoZXNlIG1ldGhvZHMgaW4gdGhlIHNwZWMuXG4gICAgaWYgKHNwZWMuaGFzT3duUHJvcGVydHkoTUlYSU5TX0tFWSkpIHtcbiAgICAgIFJFU0VSVkVEX1NQRUNfS0VZUy5taXhpbnMoQ29uc3RydWN0b3IsIHNwZWMubWl4aW5zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHNwZWMpIHtcbiAgICAgIGlmICghc3BlYy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09IE1JWElOU19LRVkpIHtcbiAgICAgICAgLy8gV2UgaGF2ZSBhbHJlYWR5IGhhbmRsZWQgbWl4aW5zIGluIGEgc3BlY2lhbCBjYXNlIGFib3ZlLlxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BlcnR5ID0gc3BlY1tuYW1lXTtcbiAgICAgIHZhciBpc0FscmVhZHlEZWZpbmVkID0gcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSk7XG4gICAgICB2YWxpZGF0ZU1ldGhvZE92ZXJyaWRlKGlzQWxyZWFkeURlZmluZWQsIG5hbWUpO1xuXG4gICAgICBpZiAoUkVTRVJWRURfU1BFQ19LRVlTLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIFJFU0VSVkVEX1NQRUNfS0VZU1tuYW1lXShDb25zdHJ1Y3RvciwgcHJvcGVydHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2V0dXAgbWV0aG9kcyBvbiBwcm90b3R5cGU6XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbWVtYmVyIG1ldGhvZHMgc2hvdWxkIG5vdCBiZSBhdXRvbWF0aWNhbGx5IGJvdW5kOlxuICAgICAgICAvLyAxLiBFeHBlY3RlZCBSZWFjdENsYXNzIG1ldGhvZHMgKGluIHRoZSBcImludGVyZmFjZVwiKS5cbiAgICAgICAgLy8gMi4gT3ZlcnJpZGRlbiBtZXRob2RzICh0aGF0IHdlcmUgbWl4ZWQgaW4pLlxuICAgICAgICB2YXIgaXNSZWFjdENsYXNzTWV0aG9kID0gUmVhY3RDbGFzc0ludGVyZmFjZS5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIHZhciBzaG91bGRBdXRvQmluZCA9XG4gICAgICAgICAgaXNGdW5jdGlvbiAmJlxuICAgICAgICAgICFpc1JlYWN0Q2xhc3NNZXRob2QgJiZcbiAgICAgICAgICAhaXNBbHJlYWR5RGVmaW5lZCAmJlxuICAgICAgICAgIHNwZWMuYXV0b2JpbmQgIT09IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaG91bGRBdXRvQmluZCkge1xuICAgICAgICAgIGF1dG9CaW5kUGFpcnMucHVzaChuYW1lLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNBbHJlYWR5RGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHNwZWNQb2xpY3kgPSBSZWFjdENsYXNzSW50ZXJmYWNlW25hbWVdO1xuXG4gICAgICAgICAgICAvLyBUaGVzZSBjYXNlcyBzaG91bGQgYWxyZWFkeSBiZSBjYXVnaHQgYnkgdmFsaWRhdGVNZXRob2RPdmVycmlkZS5cbiAgICAgICAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICAgICAgIGlzUmVhY3RDbGFzc01ldGhvZCAmJlxuICAgICAgICAgICAgICAgIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJyB8fFxuICAgICAgICAgICAgICAgICAgc3BlY1BvbGljeSA9PT0gJ0RFRklORV9NQU5ZJyksXG4gICAgICAgICAgICAgICdSZWFjdENsYXNzOiBVbmV4cGVjdGVkIHNwZWMgcG9saWN5ICVzIGZvciBrZXkgJXMgJyArXG4gICAgICAgICAgICAgICAgJ3doZW4gbWl4aW5nIGluIGNvbXBvbmVudCBzcGVjcy4nLFxuICAgICAgICAgICAgICBzcGVjUG9saWN5LFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBGb3IgbWV0aG9kcyB3aGljaCBhcmUgZGVmaW5lZCBtb3JlIHRoYW4gb25jZSwgY2FsbCB0aGUgZXhpc3RpbmdcbiAgICAgICAgICAgIC8vIG1ldGhvZHMgYmVmb3JlIGNhbGxpbmcgdGhlIG5ldyBwcm9wZXJ0eSwgbWVyZ2luZyBpZiBhcHByb3ByaWF0ZS5cbiAgICAgICAgICAgIGlmIChzcGVjUG9saWN5ID09PSAnREVGSU5FX01BTllfTUVSR0VEJykge1xuICAgICAgICAgICAgICBwcm90b1tuYW1lXSA9IGNyZWF0ZU1lcmdlZFJlc3VsdEZ1bmN0aW9uKHByb3RvW25hbWVdLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNQb2xpY3kgPT09ICdERUZJTkVfTUFOWScpIHtcbiAgICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ocHJvdG9bbmFtZV0sIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBwcm9wZXJ0eTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIC8vIEFkZCB2ZXJib3NlIGRpc3BsYXlOYW1lIHRvIHRoZSBmdW5jdGlvbiwgd2hpY2ggaGVscHMgd2hlbiBsb29raW5nXG4gICAgICAgICAgICAgIC8vIGF0IHByb2ZpbGluZyB0b29scy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJyAmJiBzcGVjLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bbmFtZV0uZGlzcGxheU5hbWUgPSBzcGVjLmRpc3BsYXlOYW1lICsgJ18nICsgbmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1peFN0YXRpY1NwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzdGF0aWNzKSB7XG4gICAgaWYgKCFzdGF0aWNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIG5hbWUgaW4gc3RhdGljcykge1xuICAgICAgdmFyIHByb3BlcnR5ID0gc3RhdGljc1tuYW1lXTtcbiAgICAgIGlmICghc3RhdGljcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzUmVzZXJ2ZWQgPSBuYW1lIGluIFJFU0VSVkVEX1NQRUNfS0VZUztcbiAgICAgIF9pbnZhcmlhbnQoXG4gICAgICAgICFpc1Jlc2VydmVkLFxuICAgICAgICAnUmVhY3RDbGFzczogWW91IGFyZSBhdHRlbXB0aW5nIHRvIGRlZmluZSBhIHJlc2VydmVkICcgK1xuICAgICAgICAgICdwcm9wZXJ0eSwgYCVzYCwgdGhhdCBzaG91bGRuXFwndCBiZSBvbiB0aGUgXCJzdGF0aWNzXCIga2V5LiBEZWZpbmUgaXQgJyArXG4gICAgICAgICAgJ2FzIGFuIGluc3RhbmNlIHByb3BlcnR5IGluc3RlYWQ7IGl0IHdpbGwgc3RpbGwgYmUgYWNjZXNzaWJsZSBvbiB0aGUgJyArXG4gICAgICAgICAgJ2NvbnN0cnVjdG9yLicsXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG5cbiAgICAgIHZhciBpc0luaGVyaXRlZCA9IG5hbWUgaW4gQ29uc3RydWN0b3I7XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICAhaXNJbmhlcml0ZWQsXG4gICAgICAgICdSZWFjdENsYXNzOiBZb3UgYXJlIGF0dGVtcHRpbmcgdG8gZGVmaW5lICcgK1xuICAgICAgICAgICdgJXNgIG9uIHlvdXIgY29tcG9uZW50IG1vcmUgdGhhbiBvbmNlLiBUaGlzIGNvbmZsaWN0IG1heSBiZSAnICtcbiAgICAgICAgICAnZHVlIHRvIGEgbWl4aW4uJyxcbiAgICAgICAgbmFtZVxuICAgICAgKTtcbiAgICAgIENvbnN0cnVjdG9yW25hbWVdID0gcHJvcGVydHk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHR3byBvYmplY3RzLCBidXQgdGhyb3cgaWYgYm90aCBjb250YWluIHRoZSBzYW1lIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9uZSBUaGUgZmlyc3Qgb2JqZWN0LCB3aGljaCBpcyBtdXRhdGVkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdHdvIFRoZSBzZWNvbmQgb2JqZWN0XG4gICAqIEByZXR1cm4ge29iamVjdH0gb25lIGFmdGVyIGl0IGhhcyBiZWVuIG11dGF0ZWQgdG8gY29udGFpbiBldmVyeXRoaW5nIGluIHR3by5cbiAgICovXG4gIGZ1bmN0aW9uIG1lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMob25lLCB0d28pIHtcbiAgICBfaW52YXJpYW50KFxuICAgICAgb25lICYmIHR3byAmJiB0eXBlb2Ygb25lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdHdvID09PSAnb2JqZWN0JyxcbiAgICAgICdtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKCk6IENhbm5vdCBtZXJnZSBub24tb2JqZWN0cy4nXG4gICAgKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0d28pIHtcbiAgICAgIGlmICh0d28uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBfaW52YXJpYW50KFxuICAgICAgICAgIG9uZVtrZXldID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgJ21lcmdlSW50b1dpdGhOb0R1cGxpY2F0ZUtleXMoKTogJyArXG4gICAgICAgICAgICAnVHJpZWQgdG8gbWVyZ2UgdHdvIG9iamVjdHMgd2l0aCB0aGUgc2FtZSBrZXk6IGAlc2AuIFRoaXMgY29uZmxpY3QgJyArXG4gICAgICAgICAgICAnbWF5IGJlIGR1ZSB0byBhIG1peGluOyBpbiBwYXJ0aWN1bGFyLCB0aGlzIG1heSBiZSBjYXVzZWQgYnkgdHdvICcgK1xuICAgICAgICAgICAgJ2dldEluaXRpYWxTdGF0ZSgpIG9yIGdldERlZmF1bHRQcm9wcygpIG1ldGhvZHMgcmV0dXJuaW5nIG9iamVjdHMgJyArXG4gICAgICAgICAgICAnd2l0aCBjbGFzaGluZyBrZXlzLicsXG4gICAgICAgICAga2V5XG4gICAgICAgICk7XG4gICAgICAgIG9uZVtrZXldID0gdHdvW2tleV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvbmU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBtZXJnZXMgdGhlaXIgcmV0dXJuIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGludm9rZXMgdGhlIHR3byBhcmd1bWVudCBmdW5jdGlvbnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVNZXJnZWRSZXN1bHRGdW5jdGlvbihvbmUsIHR3bykge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRSZXN1bHQoKSB7XG4gICAgICB2YXIgYSA9IG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdmFyIGIgPSB0d28uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmIChhID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgICB9IGVsc2UgaWYgKGIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICAgIHZhciBjID0ge307XG4gICAgICBtZXJnZUludG9XaXRoTm9EdXBsaWNhdGVLZXlzKGMsIGEpO1xuICAgICAgbWVyZ2VJbnRvV2l0aE5vRHVwbGljYXRlS2V5cyhjLCBiKTtcbiAgICAgIHJldHVybiBjO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyB0d28gZnVuY3Rpb25zIGFuZCBpZ25vcmVzIHRoZWlyIHJldHVybiB2YWxlcy5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25lIEZ1bmN0aW9uIHRvIGludm9rZSBmaXJzdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdHdvIEZ1bmN0aW9uIHRvIGludm9rZSBzZWNvbmQuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGludm9rZXMgdGhlIHR3byBhcmd1bWVudCBmdW5jdGlvbnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24ob25lLCB0d28pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0d28uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIGEgbWV0aG9kIHRvIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kIE1ldGhvZCB0byBiZSBib3VuZC5cbiAgICogQHJldHVybiB7ZnVuY3Rpb259IFRoZSBib3VuZCBtZXRob2QuXG4gICAqL1xuICBmdW5jdGlvbiBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpIHtcbiAgICB2YXIgYm91bmRNZXRob2QgPSBtZXRob2QuYmluZChjb21wb25lbnQpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBib3VuZE1ldGhvZC5fX3JlYWN0Qm91bmRDb250ZXh0ID0gY29tcG9uZW50O1xuICAgICAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICAgICAgYm91bmRNZXRob2QuX19yZWFjdEJvdW5kQXJndW1lbnRzID0gbnVsbDtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lO1xuICAgICAgdmFyIF9iaW5kID0gYm91bmRNZXRob2QuYmluZDtcbiAgICAgIGJvdW5kTWV0aG9kLmJpbmQgPSBmdW5jdGlvbihuZXdUaGlzKSB7XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSxcbiAgICAgICAgICAgIF9rZXkgPSAxO1xuICAgICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICAgIF9rZXkrK1xuICAgICAgICApIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZXIgaXMgdHJ5aW5nIHRvIGJpbmQoKSBhbiBhdXRvYm91bmQgbWV0aG9kOyB3ZSBlZmZlY3RpdmVseSB3aWxsXG4gICAgICAgIC8vIGlnbm9yZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgdGhhdCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gdXNlLCBzb1xuICAgICAgICAvLyBsZXQncyB3YXJuLlxuICAgICAgICBpZiAobmV3VGhpcyAhPT0gY29tcG9uZW50ICYmIG5ld1RoaXMgIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdiaW5kKCk6IFJlYWN0IGNvbXBvbmVudCBtZXRob2RzIG1heSBvbmx5IGJlIGJvdW5kIHRvIHRoZSAnICtcbiAgICAgICAgICAgICAgICAnY29tcG9uZW50IGluc3RhbmNlLiBTZWUgJXMnLFxuICAgICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZyhcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICdiaW5kKCk6IFlvdSBhcmUgYmluZGluZyBhIGNvbXBvbmVudCBtZXRob2QgdG8gdGhlIGNvbXBvbmVudC4gJyArXG4gICAgICAgICAgICAgICAgJ1JlYWN0IGRvZXMgdGhpcyBmb3IgeW91IGF1dG9tYXRpY2FsbHkgaW4gYSBoaWdoLXBlcmZvcm1hbmNlICcgK1xuICAgICAgICAgICAgICAgICd3YXksIHNvIHlvdSBjYW4gc2FmZWx5IHJlbW92ZSB0aGlzIGNhbGwuIFNlZSAlcycsXG4gICAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBib3VuZE1ldGhvZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVib3VuZE1ldGhvZCA9IF9iaW5kLmFwcGx5KGJvdW5kTWV0aG9kLCBhcmd1bWVudHMpO1xuICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZENvbnRleHQgPSBjb21wb25lbnQ7XG4gICAgICAgIHJlYm91bmRNZXRob2QuX19yZWFjdEJvdW5kTWV0aG9kID0gbWV0aG9kO1xuICAgICAgICByZWJvdW5kTWV0aG9kLl9fcmVhY3RCb3VuZEFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgICAgIHJldHVybiByZWJvdW5kTWV0aG9kO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGJvdW5kTWV0aG9kO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmRzIGFsbCBhdXRvLWJvdW5kIG1ldGhvZHMgaW4gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgQ29tcG9uZW50IHdob3NlIG1ldGhvZCBpcyBnb2luZyB0byBiZSBib3VuZC5cbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRBdXRvQmluZE1ldGhvZHMoY29tcG9uZW50KSB7XG4gICAgdmFyIHBhaXJzID0gY29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgIHZhciBhdXRvQmluZEtleSA9IHBhaXJzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHBhaXJzW2kgKyAxXTtcbiAgICAgIGNvbXBvbmVudFthdXRvQmluZEtleV0gPSBiaW5kQXV0b0JpbmRNZXRob2QoY29tcG9uZW50LCBtZXRob2QpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBJc01vdW50ZWRQcmVNaXhpbiA9IHtcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIElzTW91bnRlZFBvc3RNaXhpbiA9IHtcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgbW9yZSB0byB0aGUgUmVhY3RDbGFzcyBiYXNlIGNsYXNzLiBUaGVzZSBhcmUgYWxsIGxlZ2FjeSBmZWF0dXJlcyBhbmRcbiAgICogdGhlcmVmb3JlIG5vdCBhbHJlYWR5IHBhcnQgb2YgdGhlIG1vZGVybiBSZWFjdENvbXBvbmVudC5cbiAgICovXG4gIHZhciBSZWFjdENsYXNzTWl4aW4gPSB7XG4gICAgLyoqXG4gICAgICogVE9ETzogVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgYmVjYXVzZSBzdGF0ZSBzaG91bGQgYWx3YXlzIGtlZXAgYSBjb25zaXN0ZW50XG4gICAgICogdHlwZSBzaWduYXR1cmUgYW5kIHRoZSBvbmx5IHVzZSBjYXNlIGZvciB0aGlzLCBpcyB0byBhdm9pZCB0aGF0LlxuICAgICAqL1xuICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24obmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVJlcGxhY2VTdGF0ZSh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2spO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBmaW5hbFxuICAgICAqL1xuICAgIGlzTW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIHRoaXMuX19kaWRXYXJuSXNNb3VudGVkLFxuICAgICAgICAgICclczogaXNNb3VudGVkIGlzIGRlcHJlY2F0ZWQuIEluc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCAnICtcbiAgICAgICAgICAgICdzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluIGNvbXBvbmVudFdpbGxVbm1vdW50IHRvICcgK1xuICAgICAgICAgICAgJ3ByZXZlbnQgbWVtb3J5IGxlYWtzLicsXG4gICAgICAgICAgKHRoaXMuY29uc3RydWN0b3IgJiYgdGhpcy5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSkgfHxcbiAgICAgICAgICAgIHRoaXMubmFtZSB8fFxuICAgICAgICAgICAgJ0NvbXBvbmVudCdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fX2RpZFdhcm5Jc01vdW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEhdGhpcy5fX2lzTW91bnRlZDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIFJlYWN0Q2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbigpIHt9O1xuICBfYXNzaWduKFxuICAgIFJlYWN0Q2xhc3NDb21wb25lbnQucHJvdG90eXBlLFxuICAgIFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZSxcbiAgICBSZWFjdENsYXNzTWl4aW5cbiAgKTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvbXBvc2l0ZSBjb21wb25lbnQgY2xhc3MgZ2l2ZW4gYSBjbGFzcyBzcGVjaWZpY2F0aW9uLlxuICAgKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy90b3AtbGV2ZWwtYXBpLmh0bWwjcmVhY3QuY3JlYXRlY2xhc3NcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHNwZWMgQ2xhc3Mgc3BlY2lmaWNhdGlvbiAod2hpY2ggbXVzdCBkZWZpbmUgYHJlbmRlcmApLlxuICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDbGFzcyhzcGVjKSB7XG4gICAgLy8gVG8ga2VlcCBvdXIgd2FybmluZ3MgbW9yZSB1bmRlcnN0YW5kYWJsZSwgd2UnbGwgdXNlIGEgbGl0dGxlIGhhY2sgaGVyZSB0b1xuICAgIC8vIGVuc3VyZSB0aGF0IENvbnN0cnVjdG9yLm5hbWUgIT09ICdDb25zdHJ1Y3RvcicuIFRoaXMgbWFrZXMgc3VyZSB3ZSBkb24ndFxuICAgIC8vIHVubmVjZXNzYXJpbHkgaWRlbnRpZnkgYSBjbGFzcyB3aXRob3V0IGRpc3BsYXlOYW1lIGFzICdDb25zdHJ1Y3RvcicuXG4gICAgdmFyIENvbnN0cnVjdG9yID0gaWRlbnRpdHkoZnVuY3Rpb24ocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgICAgIC8vIFRoaXMgY29uc3RydWN0b3IgZ2V0cyBvdmVycmlkZGVuIGJ5IG1vY2tzLiBUaGUgYXJndW1lbnQgaXMgdXNlZFxuICAgICAgLy8gYnkgbW9ja3MgdG8gYXNzZXJ0IG9uIHdoYXQgZ2V0cyBtb3VudGVkLlxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuaW5nKFxuICAgICAgICAgIHRoaXMgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcixcbiAgICAgICAgICAnU29tZXRoaW5nIGlzIGNhbGxpbmcgYSBSZWFjdCBjb21wb25lbnQgZGlyZWN0bHkuIFVzZSBhIGZhY3Rvcnkgb3IgJyArXG4gICAgICAgICAgICAnSlNYIGluc3RlYWQuIFNlZTogaHR0cHM6Ly9mYi5tZS9yZWFjdC1sZWdhY3lmYWN0b3J5J1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBXaXJlIHVwIGF1dG8tYmluZGluZ1xuICAgICAgaWYgKHRoaXMuX19yZWFjdEF1dG9CaW5kUGFpcnMubGVuZ3RoKSB7XG4gICAgICAgIGJpbmRBdXRvQmluZE1ldGhvZHModGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgICAgIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuXG4gICAgICAvLyBSZWFjdENsYXNzZXMgZG9lc24ndCBoYXZlIGNvbnN0cnVjdG9ycy4gSW5zdGVhZCwgdGhleSB1c2UgdGhlXG4gICAgICAvLyBnZXRJbml0aWFsU3RhdGUgYW5kIGNvbXBvbmVudFdpbGxNb3VudCBtZXRob2RzIGZvciBpbml0aWFsaXphdGlvbi5cblxuICAgICAgdmFyIGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID8gdGhpcy5nZXRJbml0aWFsU3RhdGUoKSA6IG51bGw7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBXZSBhbGxvdyBhdXRvLW1vY2tzIHRvIHByb2NlZWQgYXMgaWYgdGhleSdyZSByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGluaXRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgdGhpcy5nZXRJbml0aWFsU3RhdGUuX2lzTW9ja0Z1bmN0aW9uXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgcHJvYmFibHkgYmFkIHByYWN0aWNlLiBDb25zaWRlciB3YXJuaW5nIGhlcmUgYW5kXG4gICAgICAgICAgLy8gZGVwcmVjYXRpbmcgdGhpcyBjb252ZW5pZW5jZS5cbiAgICAgICAgICBpbml0aWFsU3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfaW52YXJpYW50KFxuICAgICAgICB0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpbml0aWFsU3RhdGUpLFxuICAgICAgICAnJXMuZ2V0SW5pdGlhbFN0YXRlKCk6IG11c3QgcmV0dXJuIGFuIG9iamVjdCBvciBudWxsJyxcbiAgICAgICAgQ29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgJ1JlYWN0Q29tcG9zaXRlQ29tcG9uZW50J1xuICAgICAgKTtcblxuICAgICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB9KTtcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBuZXcgUmVhY3RDbGFzc0NvbXBvbmVudCgpO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5fX3JlYWN0QXV0b0JpbmRQYWlycyA9IFtdO1xuXG4gICAgaW5qZWN0ZWRNaXhpbnMuZm9yRWFjaChtaXhTcGVjSW50b0NvbXBvbmVudC5iaW5kKG51bGwsIENvbnN0cnVjdG9yKSk7XG5cbiAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgSXNNb3VudGVkUHJlTWl4aW4pO1xuICAgIG1peFNwZWNJbnRvQ29tcG9uZW50KENvbnN0cnVjdG9yLCBzcGVjKTtcbiAgICBtaXhTcGVjSW50b0NvbXBvbmVudChDb25zdHJ1Y3RvciwgSXNNb3VudGVkUG9zdE1peGluKTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGRlZmF1bHRQcm9wcyBwcm9wZXJ0eSBhZnRlciBhbGwgbWl4aW5zIGhhdmUgYmVlbiBtZXJnZWQuXG4gICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgQ29uc3RydWN0b3IuZGVmYXVsdFByb3BzID0gQ29uc3RydWN0b3IuZ2V0RGVmYXVsdFByb3BzKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSB0YWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlIG9mIHRoZXNlIG1ldGhvZCBuYW1lcyBpcyBvayxcbiAgICAgIC8vIHNpbmNlIGl0J3MgdXNlZCB3aXRoIGNyZWF0ZUNsYXNzLiBJZiBpdCdzIG5vdCwgdGhlbiBpdCdzIGxpa2VseSBhXG4gICAgICAvLyBtaXN0YWtlIHNvIHdlJ2xsIHdhcm4geW91IHRvIHVzZSB0aGUgc3RhdGljIHByb3BlcnR5LCBwcm9wZXJ0eVxuICAgICAgLy8gaW5pdGlhbGl6ZXIgb3IgY29uc3RydWN0b3IgcmVzcGVjdGl2ZWx5LlxuICAgICAgaWYgKENvbnN0cnVjdG9yLmdldERlZmF1bHRQcm9wcykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZS5nZXRJbml0aWFsU3RhdGUuaXNSZWFjdENsYXNzQXBwcm92ZWQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfaW52YXJpYW50KFxuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlLnJlbmRlcixcbiAgICAgICdjcmVhdGVDbGFzcyguLi4pOiBDbGFzcyBzcGVjaWZpY2F0aW9uIG11c3QgaW1wbGVtZW50IGEgYHJlbmRlcmAgbWV0aG9kLidcbiAgICApO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgICFDb25zdHJ1Y3Rvci5wcm90b3R5cGUuY29tcG9uZW50U2hvdWxkVXBkYXRlLFxuICAgICAgICAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICtcbiAgICAgICAgICAnY29tcG9uZW50U2hvdWxkVXBkYXRlKCkuIERpZCB5b3UgbWVhbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKT8gJyArXG4gICAgICAgICAgJ1RoZSBuYW1lIGlzIHBocmFzZWQgYXMgYSBxdWVzdGlvbiBiZWNhdXNlIHRoZSBmdW5jdGlvbiBpcyAnICtcbiAgICAgICAgICAnZXhwZWN0ZWQgdG8gcmV0dXJuIGEgdmFsdWUuJyxcbiAgICAgICAgc3BlYy5kaXNwbGF5TmFtZSB8fCAnQSBjb21wb25lbnQnXG4gICAgICApO1xuICAgICAgd2FybmluZyhcbiAgICAgICAgIUNvbnN0cnVjdG9yLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjaWV2ZVByb3BzLFxuICAgICAgICAnJXMgaGFzIGEgbWV0aG9kIGNhbGxlZCAnICtcbiAgICAgICAgICAnY29tcG9uZW50V2lsbFJlY2lldmVQcm9wcygpLiBEaWQgeW91IG1lYW4gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpPycsXG4gICAgICAgIHNwZWMuZGlzcGxheU5hbWUgfHwgJ0EgY29tcG9uZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZWR1Y2UgdGltZSBzcGVudCBkb2luZyBsb29rdXBzIGJ5IHNldHRpbmcgdGhlc2Ugb24gdGhlIHByb3RvdHlwZS5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIFJlYWN0Q2xhc3NJbnRlcmZhY2UpIHtcbiAgICAgIGlmICghQ29uc3RydWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUNsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3JlYXRlLXJlYWN0LWNsYXNzL2ZhY3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eU9iamVjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvZW1wdHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX21hcFRvWmVybyA9IHJlcXVpcmUoJy4vbWFwVG9aZXJvJyk7XG5cbnZhciBfbWFwVG9aZXJvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcFRvWmVybyk7XG5cbnZhciBfc3RyaXBTdHlsZSA9IHJlcXVpcmUoJy4vc3RyaXBTdHlsZScpO1xuXG52YXIgX3N0cmlwU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RyaXBTdHlsZSk7XG5cbnZhciBfc3RlcHBlcjMgPSByZXF1aXJlKCcuL3N0ZXBwZXInKTtcblxudmFyIF9zdGVwcGVyNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0ZXBwZXIzKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWFjdENsYXNzKTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbmZ1bmN0aW9uIHNob3VsZFN0b3BBbmltYXRpb25BbGwoY3VycmVudFN0eWxlcywgc3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIV9zaG91bGRTdG9wQW5pbWF0aW9uMlsnZGVmYXVsdCddKGN1cnJlbnRTdHlsZXNbaV0sIHN0eWxlc1tpXSwgY3VycmVudFZlbG9jaXRpZXNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgU3RhZ2dlcmVkTW90aW9uID0gX2NyZWF0ZVJlYWN0Q2xhc3MyWydkZWZhdWx0J10oe1xuICBwcm9wVHlwZXM6IHtcbiAgICAvLyBUT09EOiB3YXJuIGFnYWluc3QgcHV0dGluZyBhIGNvbmZpZyBpbiBoZXJlXG4gICAgZGVmYXVsdFN0eWxlczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5udW1iZXIpKSxcbiAgICBzdHlsZXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWZhdWx0U3R5bGVzID0gX3Byb3BzLmRlZmF1bHRTdHlsZXM7XG4gICAgdmFyIHN0eWxlcyA9IF9wcm9wcy5zdHlsZXM7XG5cbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IGRlZmF1bHRTdHlsZXMgfHwgc3R5bGVzKCkubWFwKF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKTtcbiAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBjdXJyZW50U3R5bGVzLm1hcChmdW5jdGlvbiAoY3VycmVudFN0eWxlKSB7XG4gICAgICByZXR1cm4gX21hcFRvWmVybzJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGUpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgbGFzdElkZWFsU3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogY3VycmVudFZlbG9jaXRpZXNcbiAgICB9O1xuICB9LFxuXG4gIGFuaW1hdGlvbklEOiBudWxsLFxuICBwcmV2VGltZTogMCxcbiAgYWNjdW11bGF0ZWRUaW1lOiAwLFxuICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgY3VycmVudFN0eWxlJ3MgdmFsdWUgaXMgc3RhbGU6IGlmIHByb3BzIGlzIGltbWVkaWF0ZWx5XG4gIC8vIGNoYW5nZWQgZnJvbSAwIHRvIDQwMCB0byBzcHJpbmcoMCkgYWdhaW4sIHRoZSBhc3luYyBjdXJyZW50U3R5bGUgaXMgc3RpbGxcbiAgLy8gYXQgMCAoZGlkbid0IGhhdmUgdGltZSB0byB0aWNrIGFuZCBpbnRlcnBvbGF0ZSBldmVuIG9uY2UpLiBJZiB3ZSBuYWl2ZWx5XG4gIC8vIGNvbXBhcmUgY3VycmVudFN0eWxlIHdpdGggZGVzdFZhbCBpdCdsbCBiZSAwID09PSAwIChubyBhbmltYXRpb24sIHN0b3ApLlxuICAvLyBJbiByZWFsaXR5IGN1cnJlbnRTdHlsZSBzaG91bGQgYmUgNDAwXG4gIHVucmVhZFByb3BTdHlsZXM6IG51bGwsXG4gIC8vIGFmdGVyIGNoZWNraW5nIGZvciB1bnJlYWRQcm9wU3R5bGVzICE9IG51bGwsIHdlIG1hbnVhbGx5IGdvIHNldCB0aGVcbiAgLy8gbm9uLWludGVycG9sYXRpbmcgdmFsdWVzICh0aG9zZSB0aGF0IGFyZSBhIG51bWJlciwgd2l0aG91dCBhIHNwcmluZ1xuICAvLyBjb25maWcpXG4gIGNsZWFyVW5yZWFkUHJvcFN0eWxlOiBmdW5jdGlvbiBjbGVhclVucmVhZFByb3BTdHlsZSh1bnJlYWRQcm9wU3R5bGVzKSB7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBfc3RhdGUuY3VycmVudFN0eWxlcztcbiAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBfc3RhdGUuY3VycmVudFZlbG9jaXRpZXM7XG4gICAgdmFyIGxhc3RJZGVhbFN0eWxlcyA9IF9zdGF0ZS5sYXN0SWRlYWxTdHlsZXM7XG4gICAgdmFyIGxhc3RJZGVhbFZlbG9jaXRpZXMgPSBfc3RhdGUubGFzdElkZWFsVmVsb2NpdGllcztcblxuICAgIHZhciBzb21lRGlydHkgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVucmVhZFByb3BTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB1bnJlYWRQcm9wU3R5bGUgPSB1bnJlYWRQcm9wU3R5bGVzW2ldO1xuICAgICAgdmFyIGRpcnR5ID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB1bnJlYWRQcm9wU3R5bGUpIHtcbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodW5yZWFkUHJvcFN0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHVucmVhZFByb3BTdHlsZVtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaWYgKCFkaXJ0eSkge1xuICAgICAgICAgICAgZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgc29tZURpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFN0eWxlc1tpXSk7XG4gICAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXSA9IF9leHRlbmRzKHt9LCBjdXJyZW50VmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgICBsYXN0SWRlYWxTdHlsZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsU3R5bGVzW2ldKTtcbiAgICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBfZXh0ZW5kcyh7fSwgbGFzdElkZWFsVmVsb2NpdGllc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRTdHlsZXNbaV1ba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgY3VycmVudFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgICAgbGFzdElkZWFsU3R5bGVzW2ldW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc29tZURpcnR5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFN0eWxlczogY3VycmVudFN0eWxlcywgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLCBsYXN0SWRlYWxTdHlsZXM6IGxhc3RJZGVhbFN0eWxlcywgbGFzdElkZWFsVmVsb2NpdGllczogbGFzdElkZWFsVmVsb2NpdGllcyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeTogZnVuY3Rpb24gc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgIC8vIGNhbGwgY2I/IE5vLCBvdGhlcndpc2UgYWNjaWRlbnRhbCBwYXJlbnQgcmVyZW5kZXIgY2F1c2VzIGNiIHRyaWdnZXJcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gX3JhZjJbJ2RlZmF1bHQnXShmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICB2YXIgZGVzdFN0eWxlcyA9IF90aGlzLnByb3BzLnN0eWxlcyhfdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMpO1xuXG4gICAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgICBpZiAoc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCBkZXN0U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcykpIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBjYW5jZWwgYW5pbWF0aW9uSUQgaGVyZTsgc2hvdWxkbid0IGhhdmUgYW55IGluIGZsaWdodFxuICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGltZXN0YW1wIHx8IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgICAgdmFyIHRpbWVEZWx0YSA9IGN1cnJlbnRUaW1lIC0gX3RoaXMucHJldlRpbWU7XG4gICAgICBfdGhpcy5wcmV2VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lID0gX3RoaXMuYWNjdW11bGF0ZWRUaW1lICsgdGltZURlbHRhO1xuICAgICAgLy8gbW9yZSB0aGFuIDEwIGZyYW1lcz8gcHJvbGx5IHN3aXRjaGVkIGJyb3dzZXIgdGFiLiBSZXN0YXJ0XG4gICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID4gbXNQZXJGcmFtZSAqIDEwKSB7XG4gICAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPT09IDApIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBjYW5jZWwgYW5pbWF0aW9uSUQgaGVyZTsgc2hvdWxkbid0IGhhdmUgYW55IGluIGZsaWdodFxuICAgICAgICBfdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudEZyYW1lQ29tcGxldGlvbiA9IChfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpICogbXNQZXJGcmFtZSkgLyBtc1BlckZyYW1lO1xuICAgICAgdmFyIGZyYW1lc1RvQ2F0Y2hVcCA9IE1hdGguZmxvb3IoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC8gbXNQZXJGcmFtZSk7XG5cbiAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZXMgPSBbXTtcbiAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzID0gW107XG4gICAgICB2YXIgbmV3Q3VycmVudFN0eWxlcyA9IFtdO1xuICAgICAgdmFyIG5ld0N1cnJlbnRWZWxvY2l0aWVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVzdFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzdFN0eWxlID0gZGVzdFN0eWxlc1tpXTtcbiAgICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgbmV3Q3VycmVudFZlbG9jaXR5ID0ge307XG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZSA9IHt9O1xuICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHkgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVzdFN0eWxlKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdFN0eWxlLCBrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IGRlc3RTdHlsZVtrZXldO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG5ld0N1cnJlbnRTdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzW2ldW2tleV07XG4gICAgICAgICAgICB2YXIgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSA9IF90aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXNbaV1ba2V5XTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZnJhbWVzVG9DYXRjaFVwOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIF9zdGVwcGVyID0gX3N0ZXBwZXI0WydkZWZhdWx0J10obXNQZXJGcmFtZSAvIDEwMDAsIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUsIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUsIHN0eWxlVmFsdWUudmFsLCBzdHlsZVZhbHVlLnN0aWZmbmVzcywgc3R5bGVWYWx1ZS5kYW1waW5nLCBzdHlsZVZhbHVlLnByZWNpc2lvbik7XG5cbiAgICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSA9IF9zdGVwcGVyWzBdO1xuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gX3N0ZXBwZXJbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc3RlcHBlcjIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgdmFyIG5leHRJZGVhbFggPSBfc3RlcHBlcjJbMF07XG4gICAgICAgICAgICB2YXIgbmV4dElkZWFsViA9IF9zdGVwcGVyMlsxXTtcblxuICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlICsgKG5leHRJZGVhbFggLSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlKSAqIGN1cnJlbnRGcmFtZUNvbXBsZXRpb247XG4gICAgICAgICAgICBuZXdDdXJyZW50VmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgKyAobmV4dElkZWFsViAtIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlW2tleV0gPSBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdHlba2V5XSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IG5ld0N1cnJlbnRTdHlsZTtcbiAgICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBuZXdDdXJyZW50VmVsb2NpdHk7XG4gICAgICAgIG5ld0xhc3RJZGVhbFN0eWxlc1tpXSA9IG5ld0xhc3RJZGVhbFN0eWxlO1xuICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gbmV3TGFzdElkZWFsVmVsb2NpdHk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmFuaW1hdGlvbklEID0gbnVsbDtcbiAgICAgIC8vIHRoZSBhbW91bnQgd2UncmUgbG9vcGVkIG92ZXIgYWJvdmVcbiAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSAtPSBmcmFtZXNUb0NhdGNoVXAgKiBtc1BlckZyYW1lO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRTdHlsZXM6IG5ld0N1cnJlbnRTdHlsZXMsXG4gICAgICAgIGN1cnJlbnRWZWxvY2l0aWVzOiBuZXdDdXJyZW50VmVsb2NpdGllcyxcbiAgICAgICAgbGFzdElkZWFsU3R5bGVzOiBuZXdMYXN0SWRlYWxTdHlsZXMsXG4gICAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXM6IG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gbnVsbDtcblxuICAgICAgX3RoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIGlmICh0aGlzLnVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCkge1xuICAgICAgLy8gcHJldmlvdXMgcHJvcHMgaGF2ZW4ndCBoYWQgdGhlIGNoYW5jZSB0byBiZSBzZXQgeWV0OyBzZXQgdGhlbSBoZXJlXG4gICAgICB0aGlzLmNsZWFyVW5yZWFkUHJvcFN0eWxlKHRoaXMudW5yZWFkUHJvcFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gcHJvcHMuc3R5bGVzKHRoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXZUaW1lID0gX3BlcmZvcm1hbmNlTm93MlsnZGVmYXVsdCddKCk7XG4gICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEICE9IG51bGwpIHtcbiAgICAgIF9yYWYyWydkZWZhdWx0J10uY2FuY2VsKHRoaXMuYW5pbWF0aW9uSUQpO1xuICAgICAgdGhpcy5hbmltYXRpb25JRCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgIHJldHVybiByZW5kZXJlZENoaWxkcmVuICYmIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5vbmx5KHJlbmRlcmVkQ2hpbGRyZW4pO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gU3RhZ2dlcmVkTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1vdGlvbi9saWIvU3RhZ2dlcmVkTW90aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9tYXBUb1plcm8gPSByZXF1aXJlKCcuL21hcFRvWmVybycpO1xuXG52YXIgX21hcFRvWmVybzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBUb1plcm8pO1xuXG52YXIgX3N0cmlwU3R5bGUgPSByZXF1aXJlKCcuL3N0cmlwU3R5bGUnKTtcblxudmFyIF9zdHJpcFN0eWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0cmlwU3R5bGUpO1xuXG52YXIgX3N0ZXBwZXIzID0gcmVxdWlyZSgnLi9zdGVwcGVyJyk7XG5cbnZhciBfc3RlcHBlcjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGVwcGVyMyk7XG5cbnZhciBfbWVyZ2VEaWZmID0gcmVxdWlyZSgnLi9tZXJnZURpZmYnKTtcblxudmFyIF9tZXJnZURpZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWVyZ2VEaWZmKTtcblxudmFyIF9wZXJmb3JtYW5jZU5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpO1xuXG52YXIgX3BlcmZvcm1hbmNlTm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BlcmZvcm1hbmNlTm93KTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9zaG91bGRTdG9wQW5pbWF0aW9uID0gcmVxdWlyZSgnLi9zaG91bGRTdG9wQW5pbWF0aW9uJyk7XG5cbnZhciBfc2hvdWxkU3RvcEFuaW1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaG91bGRTdG9wQW5pbWF0aW9uKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJyk7XG5cbnZhciBfY3JlYXRlUmVhY3RDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZWFjdENsYXNzKTtcblxudmFyIG1zUGVyRnJhbWUgPSAxMDAwIC8gNjA7XG5cbi8vIHRoZSBjaGlsZHJlbiBmdW5jdGlvbiAmIChwb3RlbnRpYWwpIHN0eWxlcyBmdW5jdGlvbiBhc2tzIGFzIHBhcmFtIGFuXG4vLyBBcnJheTxUcmFuc2l0aW9uUGxhaW5TdHlsZT4sIHdoZXJlIGVhY2ggVHJhbnNpdGlvblBsYWluU3R5bGUgaXMgb2YgdGhlIGZvcm1hdFxuLy8ge2tleTogc3RyaW5nLCBkYXRhPzogYW55LCBzdHlsZTogUGxhaW5TdHlsZX0uIEhvd2V2ZXIsIHRoZSB3YXkgd2Uga2VlcFxuLy8gaW50ZXJuYWwgc3RhdGVzIGRvZXNuJ3QgY29udGFpbiBzdWNoIGEgZGF0YSBzdHJ1Y3R1cmUgKGNoZWNrIHRoZSBzdGF0ZSBhbmRcbi8vIFRyYW5zaXRpb25Nb3Rpb25TdGF0ZSkuIFNvIHdoZW4gY2hpbGRyZW4gZnVuY3Rpb24gYW5kIG90aGVycyBhc2sgZm9yIHN1Y2hcbi8vIGRhdGEgd2UgbmVlZCB0byBnZW5lcmF0ZSB0aGVtIG9uIHRoZSBmbHkgYnkgY29tYmluaW5nIG1lcmdlZFByb3BzU3R5bGVzIGFuZFxuLy8gY3VycmVudFN0eWxlcy9sYXN0SWRlYWxTdHlsZXNcbmZ1bmN0aW9uIHJlaHlkcmF0ZVN0eWxlcyhtZXJnZWRQcm9wc1N0eWxlcywgdW5yZWFkUHJvcFN0eWxlcywgcGxhaW5TdHlsZXMpIHtcbiAgLy8gQ29weSB0aGUgdmFsdWUgdG8gYSBgY29uc3RgIHNvIHRoYXQgRmxvdyB1bmRlcnN0YW5kcyB0aGF0IHRoZSBjb25zdCB3b24ndFxuICAvLyBjaGFuZ2UgYW5kIHdpbGwgYmUgbm9uLW51bGxhYmxlIGluIHRoZSBjYWxsYmFjayBiZWxvdy5cbiAgdmFyIGNVbnJlYWRQcm9wU3R5bGVzID0gdW5yZWFkUHJvcFN0eWxlcztcbiAgaWYgKGNVbnJlYWRQcm9wU3R5bGVzID09IG51bGwpIHtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHNTdHlsZXMubWFwKGZ1bmN0aW9uIChtZXJnZWRQcm9wc1N0eWxlLCBpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IG1lcmdlZFByb3BzU3R5bGUua2V5LFxuICAgICAgICBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlLmRhdGEsXG4gICAgICAgIHN0eWxlOiBwbGFpblN0eWxlc1tpXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkUHJvcHNTdHlsZXMubWFwKGZ1bmN0aW9uIChtZXJnZWRQcm9wc1N0eWxlLCBpKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBjVW5yZWFkUHJvcFN0eWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGNVbnJlYWRQcm9wU3R5bGVzW2pdLmtleSA9PT0gbWVyZ2VkUHJvcHNTdHlsZS5rZXkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IGNVbnJlYWRQcm9wU3R5bGVzW2pdLmtleSxcbiAgICAgICAgICBkYXRhOiBjVW5yZWFkUHJvcFN0eWxlc1tqXS5kYXRhLFxuICAgICAgICAgIHN0eWxlOiBwbGFpblN0eWxlc1tpXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBrZXk6IG1lcmdlZFByb3BzU3R5bGUua2V5LCBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlLmRhdGEsIHN0eWxlOiBwbGFpblN0eWxlc1tpXSB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChjdXJyZW50U3R5bGVzLCBkZXN0U3R5bGVzLCBjdXJyZW50VmVsb2NpdGllcywgbWVyZ2VkUHJvcHNTdHlsZXMpIHtcbiAgaWYgKG1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aCAhPT0gZGVzdFN0eWxlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1lcmdlZFByb3BzU3R5bGVzW2ldLmtleSAhPT0gZGVzdFN0eWxlc1tpXS5rZXkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyB3ZSBoYXZlIHRoZSBpbnZhcmlhbnQgdGhhdCBtZXJnZWRQcm9wc1N0eWxlcyBhbmRcbiAgLy8gY3VycmVudFN0eWxlcy9jdXJyZW50VmVsb2NpdGllcy9sYXN0KiBhcmUgc3luY2VkIGluIHRlcm1zIG9mIGNlbGxzLCBzZWVcbiAgLy8gbWVyZ2VBbmRTeW5jIGNvbW1lbnQgZm9yIG1vcmUgaW5mb1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG1lcmdlZFByb3BzU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFfc2hvdWxkU3RvcEFuaW1hdGlvbjJbJ2RlZmF1bHQnXShjdXJyZW50U3R5bGVzW2ldLCBkZXN0U3R5bGVzW2ldLnN0eWxlLCBjdXJyZW50VmVsb2NpdGllc1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gY29yZSBrZXkgbWVyZ2luZyBsb2dpY1xuXG4vLyB0aGluZ3MgdG8gZG86IHNheSBwcmV2aW91c2x5IG1lcmdlZCBzdHlsZSBpcyB7YSwgYn0sIGRlc3Qgc3R5bGUgKHByb3ApIGlzIHtiLFxuLy8gY30sIHByZXZpb3VzIGN1cnJlbnQgKGludGVycG9sYXRpbmcpIHN0eWxlIGlzIHthLCBifVxuLy8gKippbnZhcmlhbnQqKjogY3VycmVudFtpXSBjb3JyZXNwb25kcyB0byBtZXJnZWRbaV0gaW4gdGVybXMgb2Yga2V5XG5cbi8vIHN0ZXBzOlxuLy8gdHVybiBtZXJnZWQgc3R5bGUgaW50byB7YT8sIGIsIGN9XG4vLyAgICBhZGQgYywgdmFsdWUgb2YgYyBpcyBkZXN0U3R5bGVzLmNcbi8vICAgIG1heWJlIHJlbW92ZSBhLCBha2EgY2FsbCB3aWxsTGVhdmUoYSksIHRoZW4gbWVyZ2VkIGlzIGVpdGhlciB7YiwgY30gb3Ige2EsIGIsIGN9XG4vLyB0dXJuIGN1cnJlbnQgKGludGVycG9sYXRpbmcpIHN0eWxlIGZyb20ge2EsIGJ9IGludG8ge2E/LCBiLCBjfVxuLy8gICAgbWF5YmUgcmVtb3ZlIGFcbi8vICAgIGNlcnRhaW5seSBhZGQgYywgdmFsdWUgb2YgYyBpcyB3aWxsRW50ZXIoYylcbi8vIGxvb3Agb3ZlciBtZXJnZWQgYW5kIGNvbnN0cnVjdCBuZXcgY3VycmVudFxuLy8gZGVzdCBkb2Vzbid0IGNoYW5nZSwgdGhhdCdzIG93bmVyJ3NcbmZ1bmN0aW9uIG1lcmdlQW5kU3luYyh3aWxsRW50ZXIsIHdpbGxMZWF2ZSwgZGlkTGVhdmUsIG9sZE1lcmdlZFByb3BzU3R5bGVzLCBkZXN0U3R5bGVzLCBvbGRDdXJyZW50U3R5bGVzLCBvbGRDdXJyZW50VmVsb2NpdGllcywgb2xkTGFzdElkZWFsU3R5bGVzLCBvbGRMYXN0SWRlYWxWZWxvY2l0aWVzKSB7XG4gIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlcyA9IF9tZXJnZURpZmYyWydkZWZhdWx0J10ob2xkTWVyZ2VkUHJvcHNTdHlsZXMsIGRlc3RTdHlsZXMsIGZ1bmN0aW9uIChvbGRJbmRleCwgb2xkTWVyZ2VkUHJvcHNTdHlsZSkge1xuICAgIHZhciBsZWF2aW5nU3R5bGUgPSB3aWxsTGVhdmUob2xkTWVyZ2VkUHJvcHNTdHlsZSk7XG4gICAgaWYgKGxlYXZpbmdTdHlsZSA9PSBudWxsKSB7XG4gICAgICBkaWRMZWF2ZSh7IGtleTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5rZXksIGRhdGE6IG9sZE1lcmdlZFByb3BzU3R5bGUuZGF0YSB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoX3Nob3VsZFN0b3BBbmltYXRpb24yWydkZWZhdWx0J10ob2xkQ3VycmVudFN0eWxlc1tvbGRJbmRleF0sIGxlYXZpbmdTdHlsZSwgb2xkQ3VycmVudFZlbG9jaXRpZXNbb2xkSW5kZXhdKSkge1xuICAgICAgZGlkTGVhdmUoeyBrZXk6IG9sZE1lcmdlZFByb3BzU3R5bGUua2V5LCBkYXRhOiBvbGRNZXJnZWRQcm9wc1N0eWxlLmRhdGEgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHsga2V5OiBvbGRNZXJnZWRQcm9wc1N0eWxlLmtleSwgZGF0YTogb2xkTWVyZ2VkUHJvcHNTdHlsZS5kYXRhLCBzdHlsZTogbGVhdmluZ1N0eWxlIH07XG4gIH0pO1xuXG4gIHZhciBuZXdDdXJyZW50U3R5bGVzID0gW107XG4gIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IFtdO1xuICB2YXIgbmV3TGFzdElkZWFsU3R5bGVzID0gW107XG4gIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TWVyZ2VkUHJvcHNTdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwgPSBuZXdNZXJnZWRQcm9wc1N0eWxlc1tpXTtcbiAgICB2YXIgZm91bmRPbGRJbmRleCA9IG51bGw7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvbGRNZXJnZWRQcm9wc1N0eWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKG9sZE1lcmdlZFByb3BzU3R5bGVzW2pdLmtleSA9PT0gbmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwua2V5KSB7XG4gICAgICAgIGZvdW5kT2xkSW5kZXggPSBqO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVE9ETzoga2V5IHNlYXJjaCBjb2RlXG4gICAgaWYgKGZvdW5kT2xkSW5kZXggPT0gbnVsbCkge1xuICAgICAgdmFyIHBsYWluU3R5bGUgPSB3aWxsRW50ZXIobmV3TWVyZ2VkUHJvcHNTdHlsZUNlbGwpO1xuICAgICAgbmV3Q3VycmVudFN0eWxlc1tpXSA9IHBsYWluU3R5bGU7XG4gICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBwbGFpblN0eWxlO1xuXG4gICAgICB2YXIgdmVsb2NpdHkgPSBfbWFwVG9aZXJvMlsnZGVmYXVsdCddKG5ld01lcmdlZFByb3BzU3R5bGVDZWxsLnN0eWxlKTtcbiAgICAgIG5ld0N1cnJlbnRWZWxvY2l0aWVzW2ldID0gdmVsb2NpdHk7XG4gICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gdmVsb2NpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0N1cnJlbnRTdHlsZXNbaV0gPSBvbGRDdXJyZW50U3R5bGVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3TGFzdElkZWFsU3R5bGVzW2ldID0gb2xkTGFzdElkZWFsU3R5bGVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgICAgbmV3Q3VycmVudFZlbG9jaXRpZXNbaV0gPSBvbGRDdXJyZW50VmVsb2NpdGllc1tmb3VuZE9sZEluZGV4XTtcbiAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNbaV0gPSBvbGRMYXN0SWRlYWxWZWxvY2l0aWVzW2ZvdW5kT2xkSW5kZXhdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbbmV3TWVyZ2VkUHJvcHNTdHlsZXMsIG5ld0N1cnJlbnRTdHlsZXMsIG5ld0N1cnJlbnRWZWxvY2l0aWVzLCBuZXdMYXN0SWRlYWxTdHlsZXMsIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXNdO1xufVxuXG52YXIgVHJhbnNpdGlvbk1vdGlvbiA9IF9jcmVhdGVSZWFjdENsYXNzMlsnZGVmYXVsdCddKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdFN0eWxlczogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hcnJheU9mKF9wcm9wVHlwZXMyWydkZWZhdWx0J10uc2hhcGUoe1xuICAgICAga2V5OiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZGF0YTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5hbnksXG4gICAgICBzdHlsZTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vYmplY3RPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcikuaXNSZXF1aXJlZFxuICAgIH0pKSxcbiAgICBzdHlsZXM6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub25lT2ZUeXBlKFtfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsIF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYXJyYXlPZihfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnNoYXBlKHtcbiAgICAgIGtleTogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGE6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYW55LFxuICAgICAgc3R5bGU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0T2YoX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUoW19wcm9wVHlwZXMyWydkZWZhdWx0J10ubnVtYmVyLCBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm9iamVjdF0pKS5pc1JlcXVpcmVkXG4gICAgfSkpXSkuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5mdW5jLmlzUmVxdWlyZWQsXG4gICAgd2lsbEVudGVyOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsXG4gICAgd2lsbExlYXZlOiBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmMsXG4gICAgZGlkTGVhdmU6IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWxsRW50ZXI6IGZ1bmN0aW9uIHdpbGxFbnRlcihzdHlsZVRoYXRFbnRlcmVkKSB7XG4gICAgICAgIHJldHVybiBfc3RyaXBTdHlsZTJbJ2RlZmF1bHQnXShzdHlsZVRoYXRFbnRlcmVkLnN0eWxlKTtcbiAgICAgIH0sXG4gICAgICAvLyByZWNhbGw6IHJldHVybmluZyBudWxsIG1ha2VzIHRoZSBjdXJyZW50IHVubW91bnRpbmcgVHJhbnNpdGlvblN0eWxlXG4gICAgICAvLyBkaXNhcHBlYXIgaW1tZWRpYXRlbHlcbiAgICAgIHdpbGxMZWF2ZTogZnVuY3Rpb24gd2lsbExlYXZlKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgICBkaWRMZWF2ZTogZnVuY3Rpb24gZGlkTGVhdmUoKSB7fVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlZmF1bHRTdHlsZXMgPSBfcHJvcHMuZGVmYXVsdFN0eWxlcztcbiAgICB2YXIgc3R5bGVzID0gX3Byb3BzLnN0eWxlcztcbiAgICB2YXIgd2lsbEVudGVyID0gX3Byb3BzLndpbGxFbnRlcjtcbiAgICB2YXIgd2lsbExlYXZlID0gX3Byb3BzLndpbGxMZWF2ZTtcbiAgICB2YXIgZGlkTGVhdmUgPSBfcHJvcHMuZGlkTGVhdmU7XG5cbiAgICB2YXIgZGVzdFN0eWxlcyA9IHR5cGVvZiBzdHlsZXMgPT09ICdmdW5jdGlvbicgPyBzdHlsZXMoZGVmYXVsdFN0eWxlcykgOiBzdHlsZXM7XG5cbiAgICAvLyB0aGlzIGlzIHNwZWNpYWwuIGZvciB0aGUgZmlyc3QgdGltZSBhcm91bmQsIHdlIGRvbid0IGhhdmUgYSBjb21wYXJpc29uXG4gICAgLy8gYmV0d2VlbiBsYXN0IChubyBsYXN0KSBhbmQgY3VycmVudCBtZXJnZWQgcHJvcHMuIHdlJ2xsIGNvbXB1dGUgbGFzdCBzbzpcbiAgICAvLyBzYXkgZGVmYXVsdCBpcyB7YSwgYn0gYW5kIHN0eWxlcyAoZGVzdCBzdHlsZSkgaXMge2IsIGN9LCB3ZSdsbFxuICAgIC8vIGZhYnJpY2F0ZSBsYXN0IGFzIHthLCBifVxuICAgIHZhciBvbGRNZXJnZWRQcm9wc1N0eWxlcyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoZGVmYXVsdFN0eWxlcyA9PSBudWxsKSB7XG4gICAgICBvbGRNZXJnZWRQcm9wc1N0eWxlcyA9IGRlc3RTdHlsZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZE1lcmdlZFByb3BzU3R5bGVzID0gZGVmYXVsdFN0eWxlcy5tYXAoZnVuY3Rpb24gKGRlZmF1bHRTdHlsZUNlbGwpIHtcbiAgICAgICAgLy8gVE9ETzoga2V5IHNlYXJjaCBjb2RlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVzdFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChkZXN0U3R5bGVzW2ldLmtleSA9PT0gZGVmYXVsdFN0eWxlQ2VsbC5rZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXN0U3R5bGVzW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFN0eWxlQ2VsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgb2xkQ3VycmVudFN0eWxlcyA9IGRlZmF1bHRTdHlsZXMgPT0gbnVsbCA/IGRlc3RTdHlsZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gX3N0cmlwU3R5bGUyWydkZWZhdWx0J10ocy5zdHlsZSk7XG4gICAgfSkgOiBkZWZhdWx0U3R5bGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIF9zdHJpcFN0eWxlMlsnZGVmYXVsdCddKHMuc3R5bGUpO1xuICAgIH0pO1xuICAgIHZhciBvbGRDdXJyZW50VmVsb2NpdGllcyA9IGRlZmF1bHRTdHlsZXMgPT0gbnVsbCA/IGRlc3RTdHlsZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gX21hcFRvWmVybzJbJ2RlZmF1bHQnXShzLnN0eWxlKTtcbiAgICB9KSA6IGRlZmF1bHRTdHlsZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gX21hcFRvWmVybzJbJ2RlZmF1bHQnXShzLnN0eWxlKTtcbiAgICB9KTtcblxuICAgIHZhciBfbWVyZ2VBbmRTeW5jID0gbWVyZ2VBbmRTeW5jKFxuICAgIC8vIEJlY2F1c2UgdGhpcyBpcyBhbiBvbGQtc3R5bGUgY3JlYXRlUmVhY3RDbGFzcyBjb21wb25lbnQsIEZsb3cgZG9lc24ndFxuICAgIC8vIHVuZGVyc3RhbmQgdGhhdCB0aGUgd2lsbEVudGVyIGFuZCB3aWxsTGVhdmUgcHJvcHMgaGF2ZSBkZWZhdWx0IHZhbHVlc1xuICAgIC8vIGFuZCB3aWxsIGFsd2F5cyBiZSBwcmVzZW50LlxuICAgIHdpbGxFbnRlciwgd2lsbExlYXZlLCBkaWRMZWF2ZSwgb2xkTWVyZ2VkUHJvcHNTdHlsZXMsIGRlc3RTdHlsZXMsIG9sZEN1cnJlbnRTdHlsZXMsIG9sZEN1cnJlbnRWZWxvY2l0aWVzLCBvbGRDdXJyZW50U3R5bGVzLCAvLyBvbGRMYXN0SWRlYWxTdHlsZXMgcmVhbGx5XG4gICAgb2xkQ3VycmVudFZlbG9jaXRpZXMpO1xuXG4gICAgdmFyIG1lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlQW5kU3luY1swXTtcbiAgICB2YXIgY3VycmVudFN0eWxlcyA9IF9tZXJnZUFuZFN5bmNbMV07XG4gICAgdmFyIGN1cnJlbnRWZWxvY2l0aWVzID0gX21lcmdlQW5kU3luY1syXTtcbiAgICB2YXIgbGFzdElkZWFsU3R5bGVzID0gX21lcmdlQW5kU3luY1szXTtcbiAgICB2YXIgbGFzdElkZWFsVmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmNbNF07XG4gICAgLy8gb2xkTGFzdElkZWFsVmVsb2NpdGllcyByZWFsbHlcblxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50U3R5bGVzOiBjdXJyZW50U3R5bGVzLFxuICAgICAgY3VycmVudFZlbG9jaXRpZXM6IGN1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgbGFzdElkZWFsU3R5bGVzOiBsYXN0SWRlYWxTdHlsZXMsXG4gICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzOiBsYXN0SWRlYWxWZWxvY2l0aWVzLFxuICAgICAgbWVyZ2VkUHJvcHNTdHlsZXM6IG1lcmdlZFByb3BzU3R5bGVzXG4gICAgfTtcbiAgfSxcblxuICB1bm1vdW50aW5nOiBmYWxzZSxcbiAgYW5pbWF0aW9uSUQ6IG51bGwsXG4gIHByZXZUaW1lOiAwLFxuICBhY2N1bXVsYXRlZFRpbWU6IDAsXG4gIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjdXJyZW50U3R5bGUncyB2YWx1ZSBpcyBzdGFsZTogaWYgcHJvcHMgaXMgaW1tZWRpYXRlbHlcbiAgLy8gY2hhbmdlZCBmcm9tIDAgdG8gNDAwIHRvIHNwcmluZygwKSBhZ2FpbiwgdGhlIGFzeW5jIGN1cnJlbnRTdHlsZSBpcyBzdGlsbFxuICAvLyBhdCAwIChkaWRuJ3QgaGF2ZSB0aW1lIHRvIHRpY2sgYW5kIGludGVycG9sYXRlIGV2ZW4gb25jZSkuIElmIHdlIG5haXZlbHlcbiAgLy8gY29tcGFyZSBjdXJyZW50U3R5bGUgd2l0aCBkZXN0VmFsIGl0J2xsIGJlIDAgPT09IDAgKG5vIGFuaW1hdGlvbiwgc3RvcCkuXG4gIC8vIEluIHJlYWxpdHkgY3VycmVudFN0eWxlIHNob3VsZCBiZSA0MDBcbiAgdW5yZWFkUHJvcFN0eWxlczogbnVsbCxcbiAgLy8gYWZ0ZXIgY2hlY2tpbmcgZm9yIHVucmVhZFByb3BTdHlsZXMgIT0gbnVsbCwgd2UgbWFudWFsbHkgZ28gc2V0IHRoZVxuICAvLyBub24taW50ZXJwb2xhdGluZyB2YWx1ZXMgKHRob3NlIHRoYXQgYXJlIGEgbnVtYmVyLCB3aXRob3V0IGEgc3ByaW5nXG4gIC8vIGNvbmZpZylcbiAgY2xlYXJVbnJlYWRQcm9wU3R5bGU6IGZ1bmN0aW9uIGNsZWFyVW5yZWFkUHJvcFN0eWxlKHVucmVhZFByb3BTdHlsZXMpIHtcbiAgICB2YXIgX21lcmdlQW5kU3luYzIgPSBtZXJnZUFuZFN5bmModGhpcy5wcm9wcy53aWxsRW50ZXIsIHRoaXMucHJvcHMud2lsbExlYXZlLCB0aGlzLnByb3BzLmRpZExlYXZlLCB0aGlzLnN0YXRlLm1lcmdlZFByb3BzU3R5bGVzLCB1bnJlYWRQcm9wU3R5bGVzLCB0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMsIHRoaXMuc3RhdGUuY3VycmVudFZlbG9jaXRpZXMsIHRoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzLCB0aGlzLnN0YXRlLmxhc3RJZGVhbFZlbG9jaXRpZXMpO1xuXG4gICAgdmFyIG1lcmdlZFByb3BzU3R5bGVzID0gX21lcmdlQW5kU3luYzJbMF07XG4gICAgdmFyIGN1cnJlbnRTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jMlsxXTtcbiAgICB2YXIgY3VycmVudFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jMlsyXTtcbiAgICB2YXIgbGFzdElkZWFsU3R5bGVzID0gX21lcmdlQW5kU3luYzJbM107XG4gICAgdmFyIGxhc3RJZGVhbFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jMls0XTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdW5yZWFkUHJvcFN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHVucmVhZFByb3BTdHlsZSA9IHVucmVhZFByb3BTdHlsZXNbaV0uc3R5bGU7XG4gICAgICB2YXIgZGlydHkgPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHVucmVhZFByb3BTdHlsZSkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1bnJlYWRQcm9wU3R5bGUsIGtleSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdHlsZVZhbHVlID0gdW5yZWFkUHJvcFN0eWxlW2tleV07XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGVWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBpZiAoIWRpcnR5KSB7XG4gICAgICAgICAgICBkaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50U3R5bGVzW2ldID0gX2V4dGVuZHMoe30sIGN1cnJlbnRTdHlsZXNbaV0pO1xuICAgICAgICAgICAgY3VycmVudFZlbG9jaXRpZXNbaV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFZlbG9jaXRpZXNbaV0pO1xuICAgICAgICAgICAgbGFzdElkZWFsU3R5bGVzW2ldID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFN0eWxlc1tpXSk7XG4gICAgICAgICAgICBsYXN0SWRlYWxWZWxvY2l0aWVzW2ldID0gX2V4dGVuZHMoe30sIGxhc3RJZGVhbFZlbG9jaXRpZXNbaV0pO1xuICAgICAgICAgICAgbWVyZ2VkUHJvcHNTdHlsZXNbaV0gPSB7XG4gICAgICAgICAgICAgIGtleTogbWVyZ2VkUHJvcHNTdHlsZXNbaV0ua2V5LFxuICAgICAgICAgICAgICBkYXRhOiBtZXJnZWRQcm9wc1N0eWxlc1tpXS5kYXRhLFxuICAgICAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG1lcmdlZFByb3BzU3R5bGVzW2ldLnN0eWxlKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudFN0eWxlc1tpXVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgICBjdXJyZW50VmVsb2NpdGllc1tpXVtrZXldID0gMDtcbiAgICAgICAgICBsYXN0SWRlYWxTdHlsZXNbaV1ba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgbGFzdElkZWFsVmVsb2NpdGllc1tpXVtrZXldID0gMDtcbiAgICAgICAgICBtZXJnZWRQcm9wc1N0eWxlc1tpXS5zdHlsZVtrZXldID0gc3R5bGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVubGlrZSB0aGUgb3RoZXIgMiBjb21wb25lbnRzLCB3ZSBjYW4ndCBkZXRlY3Qgc3RhbGVuZXNzIGFuZCBvcHRpb25hbGx5XG4gICAgLy8gb3B0IG91dCBvZiBzZXRTdGF0ZSBoZXJlLiBlYWNoIHN0eWxlIG9iamVjdCdzIGRhdGEgbWlnaHQgY29udGFpbiBuZXdcbiAgICAvLyBzdHVmZiB3ZSdyZSBub3QvY2Fubm90IGNvbXBhcmVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRTdHlsZXM6IGN1cnJlbnRTdHlsZXMsXG4gICAgICBjdXJyZW50VmVsb2NpdGllczogY3VycmVudFZlbG9jaXRpZXMsXG4gICAgICBtZXJnZWRQcm9wc1N0eWxlczogbWVyZ2VkUHJvcHNTdHlsZXMsXG4gICAgICBsYXN0SWRlYWxTdHlsZXM6IGxhc3RJZGVhbFN0eWxlcyxcbiAgICAgIGxhc3RJZGVhbFZlbG9jaXRpZXM6IGxhc3RJZGVhbFZlbG9jaXRpZXNcbiAgICB9KTtcbiAgfSxcblxuICBzdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5OiBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy51bm1vdW50aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVE9ETzogd2hlbiBjb25maWcgaXMge2E6IDEwfSBhbmQgZGVzdCBpcyB7YTogMTB9IGRvIHdlIHJhZiBvbmNlIGFuZFxuICAgIC8vIGNhbGwgY2I/IE5vLCBvdGhlcndpc2UgYWNjaWRlbnRhbCBwYXJlbnQgcmVyZW5kZXIgY2F1c2VzIGNiIHRyaWdnZXJcbiAgICB0aGlzLmFuaW1hdGlvbklEID0gX3JhZjJbJ2RlZmF1bHQnXShmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY2hlbmdsb3UvcmVhY3QtbW90aW9uL3B1bGwvNDIwXG4gICAgICAvLyA+IGlmIGV4ZWN1dGlvbiBwYXNzZXMgdGhlIGNvbmRpdGlvbmFsIGlmICh0aGlzLnVubW91bnRpbmcpLCB0aGVuXG4gICAgICAvLyBleGVjdXRlcyBhc3luYyBkZWZhdWx0UmFmIGFuZCBhZnRlciB0aGF0IGNvbXBvbmVudCB1bm1vdW50cyBhbmQgYWZ0ZXJcbiAgICAgIC8vIHRoYXQgdGhlIGNhbGxiYWNrIG9mIGRlZmF1bHRSYWYgaXMgY2FsbGVkLCB0aGVuIHNldFN0YXRlIHdpbGwgYmUgY2FsbGVkXG4gICAgICAvLyBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlxuICAgICAgaWYgKF90aGlzLnVubW91bnRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcFN0eWxlcyA9IF90aGlzLnByb3BzLnN0eWxlcztcbiAgICAgIHZhciBkZXN0U3R5bGVzID0gdHlwZW9mIHByb3BTdHlsZXMgPT09ICdmdW5jdGlvbicgPyBwcm9wU3R5bGVzKHJlaHlkcmF0ZVN0eWxlcyhfdGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgX3RoaXMudW5yZWFkUHJvcFN0eWxlcywgX3RoaXMuc3RhdGUubGFzdElkZWFsU3R5bGVzKSkgOiBwcm9wU3R5bGVzO1xuXG4gICAgICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgICBpZiAoc2hvdWxkU3RvcEFuaW1hdGlvbkFsbChfdGhpcy5zdGF0ZS5jdXJyZW50U3R5bGVzLCBkZXN0U3R5bGVzLCBfdGhpcy5zdGF0ZS5jdXJyZW50VmVsb2NpdGllcywgX3RoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMpKSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IHRpbWVzdGFtcCB8fCBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50VGltZSAtIF90aGlzLnByZXZUaW1lO1xuICAgICAgX3RoaXMucHJldlRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIF90aGlzLmFjY3VtdWxhdGVkVGltZSA9IF90aGlzLmFjY3VtdWxhdGVkVGltZSArIHRpbWVEZWx0YTtcbiAgICAgIC8vIG1vcmUgdGhhbiAxMCBmcmFtZXM/IHByb2xseSBzd2l0Y2hlZCBicm93c2VyIHRhYi4gUmVzdGFydFxuICAgICAgaWYgKF90aGlzLmFjY3VtdWxhdGVkVGltZSA+IG1zUGVyRnJhbWUgKiAxMCkge1xuICAgICAgICBfdGhpcy5hY2N1bXVsYXRlZFRpbWUgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lID09PSAwKSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gY2FuY2VsIGFuaW1hdGlvbklEIGhlcmU7IHNob3VsZG4ndCBoYXZlIGFueSBpbiBmbGlnaHRcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgICBfdGhpcy5zdGFydEFuaW1hdGlvbklmTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRGcmFtZUNvbXBsZXRpb24gPSAoX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC0gTWF0aC5mbG9vcihfdGhpcy5hY2N1bXVsYXRlZFRpbWUgLyBtc1BlckZyYW1lKSAqIG1zUGVyRnJhbWUpIC8gbXNQZXJGcmFtZTtcbiAgICAgIHZhciBmcmFtZXNUb0NhdGNoVXAgPSBNYXRoLmZsb29yKF90aGlzLmFjY3VtdWxhdGVkVGltZSAvIG1zUGVyRnJhbWUpO1xuXG4gICAgICB2YXIgX21lcmdlQW5kU3luYzMgPSBtZXJnZUFuZFN5bmMoX3RoaXMucHJvcHMud2lsbEVudGVyLCBfdGhpcy5wcm9wcy53aWxsTGVhdmUsIF90aGlzLnByb3BzLmRpZExlYXZlLCBfdGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgZGVzdFN0eWxlcywgX3RoaXMuc3RhdGUuY3VycmVudFN0eWxlcywgX3RoaXMuc3RhdGUuY3VycmVudFZlbG9jaXRpZXMsIF90aGlzLnN0YXRlLmxhc3RJZGVhbFN0eWxlcywgX3RoaXMuc3RhdGUubGFzdElkZWFsVmVsb2NpdGllcyk7XG5cbiAgICAgIHZhciBuZXdNZXJnZWRQcm9wc1N0eWxlcyA9IF9tZXJnZUFuZFN5bmMzWzBdO1xuICAgICAgdmFyIG5ld0N1cnJlbnRTdHlsZXMgPSBfbWVyZ2VBbmRTeW5jM1sxXTtcbiAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdGllcyA9IF9tZXJnZUFuZFN5bmMzWzJdO1xuICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlcyA9IF9tZXJnZUFuZFN5bmMzWzNdO1xuICAgICAgdmFyIG5ld0xhc3RJZGVhbFZlbG9jaXRpZXMgPSBfbWVyZ2VBbmRTeW5jM1s0XTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdNZXJnZWRQcm9wc1N0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmV3TWVyZ2VkUHJvcHNTdHlsZSA9IG5ld01lcmdlZFByb3BzU3R5bGVzW2ldLnN0eWxlO1xuICAgICAgICB2YXIgbmV3Q3VycmVudFN0eWxlID0ge307XG4gICAgICAgIHZhciBuZXdDdXJyZW50VmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlID0ge307XG4gICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eSA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBuZXdNZXJnZWRQcm9wc1N0eWxlKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV3TWVyZ2VkUHJvcHNTdHlsZSwga2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlVmFsdWUgPSBuZXdNZXJnZWRQcm9wc1N0eWxlW2tleV07XG4gICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZVZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbmV3Q3VycmVudFN0eWxlW2tleV0gPSBzdHlsZVZhbHVlO1xuICAgICAgICAgICAgbmV3Q3VycmVudFZlbG9jaXR5W2tleV0gPSAwO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVba2V5XSA9IHN0eWxlVmFsdWU7XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgPSBuZXdMYXN0SWRlYWxTdHlsZXNbaV1ba2V5XTtcbiAgICAgICAgICAgIHZhciBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlID0gbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXVtrZXldO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmcmFtZXNUb0NhdGNoVXA7IGorKykge1xuICAgICAgICAgICAgICB2YXIgX3N0ZXBwZXIgPSBfc3RlcHBlcjRbJ2RlZmF1bHQnXShtc1BlckZyYW1lIC8gMTAwMCwgbmV3TGFzdElkZWFsU3R5bGVWYWx1ZSwgbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSwgc3R5bGVWYWx1ZS52YWwsIHN0eWxlVmFsdWUuc3RpZmZuZXNzLCBzdHlsZVZhbHVlLmRhbXBpbmcsIHN0eWxlVmFsdWUucHJlY2lzaW9uKTtcblxuICAgICAgICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlID0gX3N0ZXBwZXJbMF07XG4gICAgICAgICAgICAgIG5ld0xhc3RJZGVhbFZlbG9jaXR5VmFsdWUgPSBfc3RlcHBlclsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9zdGVwcGVyMiA9IF9zdGVwcGVyNFsnZGVmYXVsdCddKG1zUGVyRnJhbWUgLyAxMDAwLCBuZXdMYXN0SWRlYWxTdHlsZVZhbHVlLCBuZXdMYXN0SWRlYWxWZWxvY2l0eVZhbHVlLCBzdHlsZVZhbHVlLnZhbCwgc3R5bGVWYWx1ZS5zdGlmZm5lc3MsIHN0eWxlVmFsdWUuZGFtcGluZywgc3R5bGVWYWx1ZS5wcmVjaXNpb24pO1xuXG4gICAgICAgICAgICB2YXIgbmV4dElkZWFsWCA9IF9zdGVwcGVyMlswXTtcbiAgICAgICAgICAgIHZhciBuZXh0SWRlYWxWID0gX3N0ZXBwZXIyWzFdO1xuXG4gICAgICAgICAgICBuZXdDdXJyZW50U3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUgKyAobmV4dElkZWFsWCAtIG5ld0xhc3RJZGVhbFN0eWxlVmFsdWUpICogY3VycmVudEZyYW1lQ29tcGxldGlvbjtcbiAgICAgICAgICAgIG5ld0N1cnJlbnRWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSArIChuZXh0SWRlYWxWIC0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZSkgKiBjdXJyZW50RnJhbWVDb21wbGV0aW9uO1xuICAgICAgICAgICAgbmV3TGFzdElkZWFsU3R5bGVba2V5XSA9IG5ld0xhc3RJZGVhbFN0eWxlVmFsdWU7XG4gICAgICAgICAgICBuZXdMYXN0SWRlYWxWZWxvY2l0eVtrZXldID0gbmV3TGFzdElkZWFsVmVsb2NpdHlWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXdMYXN0SWRlYWxTdHlsZXNbaV0gPSBuZXdMYXN0SWRlYWxTdHlsZTtcbiAgICAgICAgbmV3TGFzdElkZWFsVmVsb2NpdGllc1tpXSA9IG5ld0xhc3RJZGVhbFZlbG9jaXR5O1xuICAgICAgICBuZXdDdXJyZW50U3R5bGVzW2ldID0gbmV3Q3VycmVudFN0eWxlO1xuICAgICAgICBuZXdDdXJyZW50VmVsb2NpdGllc1tpXSA9IG5ld0N1cnJlbnRWZWxvY2l0eTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgICAgLy8gdGhlIGFtb3VudCB3ZSdyZSBsb29wZWQgb3ZlciBhYm92ZVxuICAgICAgX3RoaXMuYWNjdW11bGF0ZWRUaW1lIC09IGZyYW1lc1RvQ2F0Y2hVcCAqIG1zUGVyRnJhbWU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudFN0eWxlczogbmV3Q3VycmVudFN0eWxlcyxcbiAgICAgICAgY3VycmVudFZlbG9jaXRpZXM6IG5ld0N1cnJlbnRWZWxvY2l0aWVzLFxuICAgICAgICBsYXN0SWRlYWxTdHlsZXM6IG5ld0xhc3RJZGVhbFN0eWxlcyxcbiAgICAgICAgbGFzdElkZWFsVmVsb2NpdGllczogbmV3TGFzdElkZWFsVmVsb2NpdGllcyxcbiAgICAgICAgbWVyZ2VkUHJvcHNTdHlsZXM6IG5ld01lcmdlZFByb3BzU3R5bGVzXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMudW5yZWFkUHJvcFN0eWxlcyA9IG51bGw7XG5cbiAgICAgIF90aGlzLnN0YXJ0QW5pbWF0aW9uSWZOZWNlc3NhcnkoKTtcbiAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcmV2VGltZSA9IF9wZXJmb3JtYW5jZU5vdzJbJ2RlZmF1bHQnXSgpO1xuICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICBpZiAodGhpcy51bnJlYWRQcm9wU3R5bGVzKSB7XG4gICAgICAvLyBwcmV2aW91cyBwcm9wcyBoYXZlbid0IGhhZCB0aGUgY2hhbmNlIHRvIGJlIHNldCB5ZXQ7IHNldCB0aGVtIGhlcmVcbiAgICAgIHRoaXMuY2xlYXJVbnJlYWRQcm9wU3R5bGUodGhpcy51bnJlYWRQcm9wU3R5bGVzKTtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gcHJvcHMuc3R5bGVzO1xuICAgIGlmICh0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnVucmVhZFByb3BTdHlsZXMgPSBzdHlsZXMocmVoeWRyYXRlU3R5bGVzKHRoaXMuc3RhdGUubWVyZ2VkUHJvcHNTdHlsZXMsIHRoaXMudW5yZWFkUHJvcFN0eWxlcywgdGhpcy5zdGF0ZS5sYXN0SWRlYWxTdHlsZXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51bnJlYWRQcm9wU3R5bGVzID0gc3R5bGVzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbklEID09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldlRpbWUgPSBfcGVyZm9ybWFuY2VOb3cyWydkZWZhdWx0J10oKTtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb25JZk5lY2Vzc2FyeSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bm1vdW50aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25JRCAhPSBudWxsKSB7XG4gICAgICBfcmFmMlsnZGVmYXVsdCddLmNhbmNlbCh0aGlzLmFuaW1hdGlvbklEKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSUQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgaHlkcmF0ZWRTdHlsZXMgPSByZWh5ZHJhdGVTdHlsZXModGhpcy5zdGF0ZS5tZXJnZWRQcm9wc1N0eWxlcywgdGhpcy51bnJlYWRQcm9wU3R5bGVzLCB0aGlzLnN0YXRlLmN1cnJlbnRTdHlsZXMpO1xuICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbihoeWRyYXRlZFN0eWxlcyk7XG4gICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGRyZW4gJiYgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkocmVuZGVyZWRDaGlsZHJlbik7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUcmFuc2l0aW9uTW90aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8vIGxpc3Qgb2Ygc3R5bGVzLCBlYWNoIGNvbnRhaW5pbmcgaW50ZXJwb2xhdGluZyB2YWx1ZXMuIFBhcnQgb2Ygd2hhdCdzIHBhc3NlZFxuLy8gdG8gY2hpbGRyZW4gZnVuY3Rpb24uIE5vdGljZSB0aGF0IHRoaXMgaXNcbi8vIEFycmF5PEFjdHVhbEludGVycG9sYXRpbmdTdHlsZU9iamVjdD4sIHdpdGhvdXQgdGhlIHdyYXBwZXIgdGhhdCBpcyB7a2V5OiAuLi4sXG4vLyBkYXRhOiAuLi4gc3R5bGU6IEFjdHVhbEludGVycG9sYXRpbmdTdHlsZU9iamVjdH0uIE9ubHkgbWVyZ2VkUHJvcHNTdHlsZXNcbi8vIGNvbnRhaW5zIHRoZSBrZXkgJiBkYXRhIGluZm8gKHNvIHRoYXQgd2Ugb25seSBoYXZlIGEgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aFxuLy8gZm9yIHRoZXNlLCBhbmQgdG8gc2F2ZSBzcGFjZSkuIENoZWNrIHRoZSBjb21tZW50IGZvciBgcmVoeWRyYXRlU3R5bGVzYCB0b1xuLy8gc2VlIGhvdyB3ZSByZWdlbmVyYXRlIHRoZSBlbnRpcmV0eSBvZiB3aGF0J3MgcGFzc2VkIHRvIGNoaWxkcmVuIGZ1bmN0aW9uXG5cbi8vIHRoZSBhcnJheSB0aGF0IGtlZXBzIHRyYWNrIG9mIGN1cnJlbnRseSByZW5kZXJlZCBzdHVmZiEgSW5jbHVkaW5nIHN0dWZmXG4vLyB0aGF0IHlvdSd2ZSB1bm1vdW50ZWQgYnV0IHRoYXQncyBzdGlsbCBhbmltYXRpbmcuIFRoaXMgaXMgd2hlcmUgaXQgbGl2ZXNcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9UcmFuc2l0aW9uTW90aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuLy8gY29yZSBrZXlzIG1lcmdpbmcgYWxnb3JpdGhtLiBJZiBwcmV2aW91cyByZW5kZXIncyBrZXlzIGFyZSBbYSwgYl0sIGFuZCB0aGVcbi8vIG5leHQgcmVuZGVyJ3MgW2MsIGIsIGRdLCB3aGF0J3MgdGhlIGZpbmFsIG1lcmdlZCBrZXlzIGFuZCBvcmRlcmluZz9cblxuLy8gLSBjIGFuZCBhIG11c3QgYm90aCBiZSBiZWZvcmUgYlxuLy8gLSBiIGJlZm9yZSBkXG4vLyAtIG9yZGVyaW5nIGJldHdlZW4gYSBhbmQgYyBhbWJpZ3VvdXNcblxuLy8gdGhpcyByZWR1Y2VzIHRvIG1lcmdpbmcgdHdvIHBhcnRpYWxseSBvcmRlcmVkIGxpc3RzIChlLmcuIGxpc3RzIHdoZXJlIG5vdFxuLy8gZXZlcnkgaXRlbSBoYXMgYSBkZWZpbml0ZSBvcmRlcmluZywgbGlrZSBjb21wYXJpbmcgYSBhbmQgYyBhYm92ZSkuIEZvciB0aGVcbi8vIGFtYmlndW91cyBvcmRlcmluZyB3ZSBkZXRlcm1pbmlzdGljYWxseSBjaG9vc2UgdG8gcGxhY2UgdGhlIG5leHQgcmVuZGVyJ3Ncbi8vIGl0ZW0gYWZ0ZXIgdGhlIHByZXZpb3VzJzsgc28gYyBhZnRlciBhXG5cbi8vIHRoaXMgaXMgY2FsbGVkIGEgdG9wb2xvZ2ljYWwgc29ydGluZy4gRXhjZXB0IHRoZSBleGlzdGluZyBhbGdvcml0aG1zIGRvbid0XG4vLyB3b3JrIHdlbGwgd2l0aCBqcyBiYyBvZiB0aGUgYW1vdW50IG9mIGFsbG9jYXRpb24sIGFuZCBpc24ndCBvcHRpbWl6ZWQgZm9yIG91clxuLy8gY3VycmVudCB1c2UtY2FzZSBiYyB0aGUgcnVudGltZSBpcyBsaW5lYXIgaW4gdGVybXMgb2YgZWRnZXMgKHNlZSB3aWtpIGZvclxuLy8gbWVhbmluZyksIHdoaWNoIGlzIGh1Z2Ugd2hlbiB0d28gbGlzdHMgaGF2ZSBtYW55IGNvbW1vbiBlbGVtZW50c1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWVyZ2VEaWZmO1xuXG5mdW5jdGlvbiBtZXJnZURpZmYocHJldiwgbmV4dCwgb25SZW1vdmUpIHtcbiAgLy8gYm9va2tlZXBpbmcgZm9yIGVhc2llciBhY2Nlc3Mgb2YgYSBrZXkncyBpbmRleCBiZWxvdy4gVGhpcyBpcyAyIGFsbG9jYXRpb25zICtcbiAgLy8gcG90ZW50aWFsbHkgdHJpZ2dlcmluZyBjaHJvbWUgaGFzaCBtYXAgbW9kZSBmb3Igb2JqcyAoc28gaXQgbWlnaHQgYmUgZmFzdGVyXG5cbiAgdmFyIHByZXZLZXlJbmRleCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZXYubGVuZ3RoOyBpKyspIHtcbiAgICBwcmV2S2V5SW5kZXhbcHJldltpXS5rZXldID0gaTtcbiAgfVxuICB2YXIgbmV4dEtleUluZGV4ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgIG5leHRLZXlJbmRleFtuZXh0W2ldLmtleV0gPSBpO1xuICB9XG5cbiAgLy8gZmlyc3QsIGFuIG92ZXJseSBlbGFib3JhdGUgd2F5IG9mIG1lcmdpbmcgcHJldiBhbmQgbmV4dCwgZWxpbWluYXRpbmdcbiAgLy8gZHVwbGljYXRlcyAoaW4gdGVybXMgb2Yga2V5cykuIElmIHRoZXJlJ3MgZHVwZSwga2VlcCB0aGUgaXRlbSBpbiBuZXh0KS5cbiAgLy8gVGhpcyB3YXkgb2Ygd3JpdGluZyBpdCBzYXZlcyBhbGxvY2F0aW9uc1xuICB2YXIgcmV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dC5sZW5ndGg7IGkrKykge1xuICAgIHJldFtpXSA9IG5leHRbaV07XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dEtleUluZGV4LCBwcmV2W2ldLmtleSkpIHtcbiAgICAgIC8vIHRoaXMgaXMgY2FsbGVkIG15IFRNJ3MgYG1lcmdlQW5kU3luY2AsIHdoaWNoIGNhbGxzIHdpbGxMZWF2ZS4gV2UgZG9uJ3RcbiAgICAgIC8vIG1lcmdlIGluIGtleXMgdGhhdCB0aGUgdXNlciBkZXNpcmVzIHRvIGtpbGxcbiAgICAgIHZhciBmaWxsID0gb25SZW1vdmUoaSwgcHJldltpXSk7XG4gICAgICBpZiAoZmlsbCAhPSBudWxsKSB7XG4gICAgICAgIHJldC5wdXNoKGZpbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyBhbGwgdGhlIGl0ZW1zIGFsbCBwcmVzZW50LiBDb3JlIHNvcnRpbmcgbG9naWMgdG8gaGF2ZSB0aGUgcmlnaHQgb3JkZXJcbiAgcmV0dXJuIHJldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG5leHRPcmRlckEgPSBuZXh0S2V5SW5kZXhbYS5rZXldO1xuICAgIHZhciBuZXh0T3JkZXJCID0gbmV4dEtleUluZGV4W2Iua2V5XTtcbiAgICB2YXIgcHJldk9yZGVyQSA9IHByZXZLZXlJbmRleFthLmtleV07XG4gICAgdmFyIHByZXZPcmRlckIgPSBwcmV2S2V5SW5kZXhbYi5rZXldO1xuXG4gICAgaWYgKG5leHRPcmRlckEgIT0gbnVsbCAmJiBuZXh0T3JkZXJCICE9IG51bGwpIHtcbiAgICAgIC8vIGJvdGgga2V5cyBpbiBuZXh0XG4gICAgICByZXR1cm4gbmV4dEtleUluZGV4W2Eua2V5XSAtIG5leHRLZXlJbmRleFtiLmtleV07XG4gICAgfSBlbHNlIGlmIChwcmV2T3JkZXJBICE9IG51bGwgJiYgcHJldk9yZGVyQiAhPSBudWxsKSB7XG4gICAgICAvLyBib3RoIGtleXMgaW4gcHJldlxuICAgICAgcmV0dXJuIHByZXZLZXlJbmRleFthLmtleV0gLSBwcmV2S2V5SW5kZXhbYi5rZXldO1xuICAgIH0gZWxzZSBpZiAobmV4dE9yZGVyQSAhPSBudWxsKSB7XG4gICAgICAvLyBrZXkgYSBpbiBuZXh0LCBrZXkgYiBpbiBwcmV2XG5cbiAgICAgIC8vIGhvdyB0byBkZXRlcm1pbmUgdGhlIG9yZGVyIGJldHdlZW4gYSBhbmQgYj8gV2UgZmluZCBhIFwicGl2b3RcIiAodGVybVxuICAgICAgLy8gYWJ1c2UpLCBhIGtleSBwcmVzZW50IGluIGJvdGggcHJldiBhbmQgbmV4dCwgdGhhdCBpcyBzYW5kd2ljaGVkIGJldHdlZW5cbiAgICAgIC8vIGEgYW5kIGIuIEluIHRoZSBjb250ZXh0IG9mIG91ciBhYm92ZSBleGFtcGxlLCBpZiB3ZSdyZSBjb21wYXJpbmcgYSBhbmRcbiAgICAgIC8vIGQsIGIncyAodGhlIG9ubHkpIHBpdm90XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBpdm90ID0gbmV4dFtpXS5rZXk7XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByZXZLZXlJbmRleCwgcGl2b3QpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dE9yZGVyQSA8IG5leHRLZXlJbmRleFtwaXZvdF0gJiYgcHJldk9yZGVyQiA+IHByZXZLZXlJbmRleFtwaXZvdF0pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dE9yZGVyQSA+IG5leHRLZXlJbmRleFtwaXZvdF0gJiYgcHJldk9yZGVyQiA8IHByZXZLZXlJbmRleFtwaXZvdF0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gcGx1Z2dhYmxlLiBkZWZhdWx0IHRvOiBuZXh0IGJpZ2dlciB0aGFuIHByZXZcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICAvLyBwcmV2T3JkZXJBLCBuZXh0T3JkZXJCXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGl2b3QgPSBuZXh0W2ldLmtleTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByZXZLZXlJbmRleCwgcGl2b3QpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRPcmRlckIgPCBuZXh0S2V5SW5kZXhbcGl2b3RdICYmIHByZXZPcmRlckEgPiBwcmV2S2V5SW5kZXhbcGl2b3RdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmIChuZXh0T3JkZXJCID4gbmV4dEtleUluZGV4W3Bpdm90XSAmJiBwcmV2T3JkZXJBIDwgcHJldktleUluZGV4W3Bpdm90XSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHBsdWdnYWJsZS4gZGVmYXVsdCB0bzogbmV4dCBiaWdnZXIgdGhhbiBwcmV2XG4gICAgcmV0dXJuIC0xO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyB0byBsb29wIHRocm91Z2ggYW5kIGZpbmQgYSBrZXkncyBpbmRleCBlYWNoIHRpbWUpLCBidXQgSSBubyBsb25nZXIgY2FyZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL21lcmdlRGlmZi5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBzcHJpbmc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9wcmVzZXRzID0gcmVxdWlyZSgnLi9wcmVzZXRzJyk7XG5cbnZhciBfcHJlc2V0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRzKTtcblxudmFyIGRlZmF1bHRDb25maWcgPSBfZXh0ZW5kcyh7fSwgX3ByZXNldHMyWydkZWZhdWx0J10ubm9Xb2JibGUsIHtcbiAgcHJlY2lzaW9uOiAwLjAxXG59KTtcblxuZnVuY3Rpb24gc3ByaW5nKHZhbCwgY29uZmlnKSB7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnLCB7IHZhbDogdmFsIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbW90aW9uL2xpYi9zcHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB7XG4gIG5vV29iYmxlOiB7IHN0aWZmbmVzczogMTcwLCBkYW1waW5nOiAyNiB9LCAvLyB0aGUgZGVmYXVsdCwgaWYgbm90aGluZyBwcm92aWRlZFxuICBnZW50bGU6IHsgc3RpZmZuZXNzOiAxMjAsIGRhbXBpbmc6IDE0IH0sXG4gIHdvYmJseTogeyBzdGlmZm5lc3M6IDE4MCwgZGFtcGluZzogMTIgfSxcbiAgc3RpZmY6IHsgc3RpZmZuZXNzOiAyMTAsIGRhbXBpbmc6IDIwIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3ByZXNldHMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlb3JkZXJLZXlzO1xuXG52YXIgaGFzV2FybmVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJlb3JkZXJLZXlzKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgaGFzV2FybmVkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2ByZW9yZGVyS2V5c2AgaGFzIGJlZW4gcmVtb3ZlZCwgc2luY2UgaXQgaXMgbm8gbG9uZ2VyIG5lZWRlZCBmb3IgVHJhbnNpdGlvbk1vdGlvblxcJ3MgbmV3IHN0eWxlcyBhcnJheSBBUEkuJyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tb3Rpb24vbGliL3Jlb3JkZXJLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCByZWFjdDEzID0gaXNSZWFjdDEzKFJlYWN0KTtcbnZhciBkaWRXYXJuQWJvdXRDaGlsZCA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZERPTU5vZGUoY29tcG9uZW50KXtcbiAgICBpZighcmVhY3QxMyl7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBSZWFjdC5maW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5BYm91dEZ1bmN0aW9uQ2hpbGQoKSB7XG4gICAgaWYgKGRpZFdhcm5BYm91dENoaWxkIHx8IHJlYWN0MTMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWRXYXJuQWJvdXRDaGlsZCA9IHRydWU7XG4gICAgY29uc29sZS5lcnJvcignV2l0aCBSZWFjdCAwLjE0IGFuZCBsYXRlciB2ZXJzaW9ucywgeW91IG5vIGxvbmdlciBuZWVkIHRvIHdyYXAgPFNjcm9sbEFyZWE+IGNoaWxkIGludG8gYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybkFib3V0RWxlbWVudENoaWxkKCkge1xuICAgIGlmIChkaWRXYXJuQWJvdXRDaGlsZCB8fCAhcmVhY3QxMykge1xuICAgICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaWRXYXJuQWJvdXRDaGlsZCA9IHRydWU7XG4gICAgY29uc29sZS5lcnJvciggJ1dpdGggUmVhY3QgMC4xMywgeW91IG5lZWQgdG8gd3JhcCA8U2Nyb2xsQXJlYT4gY2hpbGQgaW50byBhIGZ1bmN0aW9uLicgKTtcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpdmVPclplcm8obnVtYmVyKXtcbiAgICByZXR1cm4gbnVtYmVyIDwgMCA/IDAgOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2RpZnlPYmpWYWx1ZXMgKG9iaiwgbW9kaWZpZXIgPSB4ID0+IHgpe1xuICAgIGxldCBtb2RpZmllZE9iaiA9IHt9O1xuICAgIGZvcihsZXQga2V5IGluIG9iail7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSBtb2RpZmllZE9ialtrZXldID0gbW9kaWZpZXIob2JqW2tleV0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbW9kaWZpZWRPYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWN0MTMoUmVhY3QpIHtcbiAgICBjb25zdCB7IHZlcnNpb24gfSA9IFJlYWN0O1xuICAgIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgbWFqb3IgPSBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuICAgIGNvbnN0IG1pbm9yID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcblxuICAgIHJldHVybiBtYWpvciA9PT0gMCAmJiBtaW5vciA9PT0gMTM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMuanMiLCIvLyBMb2FkIGluIGRlcGVuZGVuY2llc1xudmFyIGNvbXB1dGVkU3R5bGUgPSByZXF1aXJlKCdjb21wdXRlZC1zdHlsZScpO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgYGxpbmUtaGVpZ2h0YCBvZiBhIGdpdmVuIG5vZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgRWxlbWVudCB0byBjYWxjdWxhdGUgbGluZSBoZWlnaHQgb2YuIE11c3QgYmUgaW4gdGhlIERPTS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGBsaW5lLWhlaWdodGAgb2YgdGhlIGVsZW1lbnQgaW4gcGl4ZWxzXG4gKi9cbmZ1bmN0aW9uIGxpbmVIZWlnaHQobm9kZSkge1xuICAvLyBHcmFiIHRoZSBsaW5lLWhlaWdodCB2aWEgc3R5bGVcbiAgdmFyIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKSxcbiAgICAgIGxuSGVpZ2h0ID0gcGFyc2VGbG9hdChsbkhlaWdodFN0ciwgMTApO1xuXG4gIC8vIElmIHRoZSBsaW5lSGVpZ2h0IGRpZCBub3QgY29udGFpbiBhIHVuaXQgKGkuZS4gaXQgd2FzIG51bWVyaWMpLCBjb252ZXJ0IGl0IHRvIGVtcyAoZS5nLiAnMi4zJyA9PT0gJzIuM2VtJylcbiAgaWYgKGxuSGVpZ2h0U3RyID09PSBsbkhlaWdodCArICcnKSB7XG4gICAgLy8gU2F2ZSB0aGUgb2xkIGxpbmVIZWlnaHQgc3R5bGUgYW5kIHVwZGF0ZSB0aGUgZW0gdW5pdCB0byB0aGUgZWxlbWVudFxuICAgIHZhciBfbG5IZWlnaHRTdHlsZSA9IG5vZGUuc3R5bGUubGluZUhlaWdodDtcbiAgICBub2RlLnN0eWxlLmxpbmVIZWlnaHQgPSBsbkhlaWdodFN0ciArICdlbSc7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVtIGJhc2VkIGhlaWdodFxuICAgIGxuSGVpZ2h0U3RyID0gY29tcHV0ZWRTdHlsZShub2RlLCAnbGluZS1oZWlnaHQnKTtcbiAgICBsbkhlaWdodCA9IHBhcnNlRmxvYXQobG5IZWlnaHRTdHIsIDEwKTtcblxuICAgIC8vIFJldmVydCB0aGUgbGluZUhlaWdodCBzdHlsZVxuICAgIGlmIChfbG5IZWlnaHRTdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZS5saW5lSGVpZ2h0ID0gX2xuSGVpZ2h0U3R5bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBub2RlLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHB0YCwgY29udmVydCBpdCB0byBwaXhlbHMgKDRweCBmb3IgM3B0KVxuICAvLyBERVY6IGBlbWAgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBgcHRgIGluIElFNlxuICAvLyBDb252ZXJzaW9uIHJhdGlvIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlbmd0aFxuICBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZigncHQnKSAhPT0gLTEpIHtcbiAgICBsbkhlaWdodCAqPSA0O1xuICAgIGxuSGVpZ2h0IC89IDM7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignbW0nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgbW1gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMjUuNG1tKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDI1LjQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignY20nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgY21gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMi41NGNtKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICAgIGxuSGVpZ2h0IC89IDIuNTQ7XG4gIH0gZWxzZSBpZiAobG5IZWlnaHRTdHIuaW5kZXhPZignaW4nKSAhPT0gLTEpIHtcbiAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgbGluZUhlaWdodCBpcyBpbiBgaW5gLCBjb252ZXJ0IGl0IHRvIHBpeGVscyAoOTZweCBmb3IgMWluKVxuICAgIGxuSGVpZ2h0ICo9IDk2O1xuICB9IGVsc2UgaWYgKGxuSGVpZ2h0U3RyLmluZGV4T2YoJ3BjJykgIT09IC0xKSB7XG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIGxpbmVIZWlnaHQgaXMgaW4gYHBjYCwgY29udmVydCBpdCB0byBwaXhlbHMgKDEycHQgZm9yIDFwYylcbiAgICBsbkhlaWdodCAqPSAxNjtcbiAgfVxuXG4gIC8vIENvbnRpbnVlIG91ciBjb21wdXRhdGlvblxuICBsbkhlaWdodCA9IE1hdGgucm91bmQobG5IZWlnaHQpO1xuXG4gIC8vIElmIHRoZSBsaW5lLWhlaWdodCBpcyBcIm5vcm1hbFwiLCBjYWxjdWxhdGUgYnkgZm9udC1zaXplXG4gIGlmIChsbkhlaWdodFN0ciA9PT0gJ25vcm1hbCcpIHtcbiAgICAvLyBDcmVhdGUgYSB0ZW1wb3Jhcnkgbm9kZVxuICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUsXG4gICAgICAgIF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG4gICAgX25vZGUuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG5cbiAgICAvLyBTZXQgdGhlIGZvbnQtc2l6ZSBvZiB0aGUgZWxlbWVudFxuICAgIHZhciBmb250U2l6ZVN0ciA9IGNvbXB1dGVkU3R5bGUobm9kZSwgJ2ZvbnQtc2l6ZScpO1xuICAgIF9ub2RlLnN0eWxlLmZvbnRTaXplID0gZm9udFNpemVTdHI7XG5cbiAgICAvLyBBcHBlbmQgaXQgdG8gdGhlIGJvZHlcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChfbm9kZSk7XG5cbiAgICAvLyBBc3N1bWUgdGhlIGxpbmUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGlzIHRoZSBoZWlnaHRcbiAgICB2YXIgaGVpZ2h0ID0gX25vZGUub2Zmc2V0SGVpZ2h0O1xuICAgIGxuSGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgLy8gUmVtb3ZlIG91ciBjaGlsZCBmcm9tIHRoZSBET01cbiAgICBib2R5LnJlbW92ZUNoaWxkKF9ub2RlKTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHRcbiAgcmV0dXJuIGxuSGVpZ2h0O1xufVxuXG4vLyBFeHBvcnQgbGluZUhlaWdodFxubW9kdWxlLmV4cG9ydHMgPSBsaW5lSGVpZ2h0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9saW5lLWhlaWdodC9saWIvbGluZS1oZWlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoaXMgY29kZSBoYXMgYmVlbiByZWZhY3RvcmVkIGZvciAxNDAgYnl0ZXNcbi8vIFlvdSBjYW4gc2VlIHRoZSBvcmlnaW5hbCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vdHdvbGZzb24vY29tcHV0ZWRTdHlsZS9ibG9iLzA0Y2QxZGEyZTMwZmE0NTg0NGY5NWY1Y2IxYWM4OThlOWI5ZWYwNTAvbGliL2NvbXB1dGVkU3R5bGUuanNcbnZhciBjb21wdXRlZFN0eWxlID0gZnVuY3Rpb24gKGVsLCBwcm9wLCBnZXRDb21wdXRlZFN0eWxlKSB7XG4gIGdldENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZTtcblxuICAvLyBJbiBvbmUgZmVsbCBzd29vcFxuICByZXR1cm4gKFxuICAgIC8vIElmIHdlIGhhdmUgZ2V0Q29tcHV0ZWRTdHlsZVxuICAgIGdldENvbXB1dGVkU3R5bGUgP1xuICAgICAgLy8gUXVlcnkgaXRcbiAgICAgIC8vIFRPRE86IEZyb20gQ1NTLVF1ZXJ5IG5vdGVzLCB3ZSBtaWdodCBuZWVkIChub2RlLCBudWxsKSBmb3IgRkZcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoZWwpIDpcblxuICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGluIElFIGFuZCB1c2UgY3VycmVudFN0eWxlXG4gICAgICBlbC5jdXJyZW50U3R5bGVcbiAgKVtcbiAgICAvLyBTd2l0Y2ggdG8gY2FtZWxDYXNlIGZvciBDU1NPTVxuICAgIC8vIERFVjogR3JhYmJlZCBmcm9tIGpRdWVyeVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS45LXN0YWJsZS9zcmMvY3NzLmpzI0wxOTEtTDE5NFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvMS45LXN0YWJsZS9zcmMvY29yZS5qcyNMNTkzLUw1OTdcbiAgICBwcm9wLnJlcGxhY2UoLy0oXFx3KS9naSwgZnVuY3Rpb24gKHdvcmQsIGxldHRlcikge1xuICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgIH0pXG4gIF07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXB1dGVkU3R5bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29tcHV0ZWQtc3R5bGUvZGlzdC9jb21wdXRlZFN0eWxlLmNvbW1vbmpzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9