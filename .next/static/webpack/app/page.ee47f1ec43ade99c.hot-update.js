"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/machine.tsx":
/*!*****************************!*\
  !*** ./src/app/machine.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ \"(app-client)/./node_modules/xstate/es/Machine.js\");\n/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xstate */ \"(app-client)/./node_modules/xstate/es/index.js\");\n\nconst machine = (0,xstate__WEBPACK_IMPORTED_MODULE_0__.createMachine)({\n    context: {\n        email: \"\",\n        topic: \"\",\n        emailInput: null\n    },\n    id: \"New Machine\",\n    initial: \"Ready\",\n    // tsTypes: {},\n    schema: {\n    },\n    states: {\n        Ready: {\n            states: {\n                Error: {\n                    initial: \"None\",\n                    states: {\n                        None: {\n                            type: \"final\"\n                        },\n                        Network: {\n                            type: \"final\"\n                        }\n                    }\n                },\n                Email: {\n                    initial: \"Ready\",\n                    states: {\n                        Ready: {\n                            on: {\n                                SUBMIT: [\n                                    {\n                                        target: \"Submitting\",\n                                        cond: \"isEmailValid\"\n                                    },\n                                    {\n                                        target: \"Error\",\n                                        actions: \"showValidationError\"\n                                    }\n                                ]\n                            }\n                        },\n                        Submitting: {\n                            type: \"final\"\n                        },\n                        Error: {}\n                    },\n                    on: {\n                        \"INPUT.EMAIL\": {\n                            target: \".Ready\",\n                            actions: \"cacheEmail\"\n                        }\n                    }\n                },\n                Topic: {\n                    initial: \"Empty\",\n                    states: {\n                        Empty: {\n                            on: {\n                                SUBMIT: {\n                                    target: \"Error\"\n                                }\n                            }\n                        },\n                        Selected: {\n                            on: {\n                                SUBMIT: {\n                                    target: \"Submitting\"\n                                }\n                            }\n                        },\n                        Error: {},\n                        Submitting: {\n                            type: \"final\"\n                        }\n                    },\n                    on: {\n                        \"INPUT.TOPIC\": [\n                            {\n                                target: \".Selected\",\n                                cond: \"isTopicValid\",\n                                actions: \"cacheTopic\"\n                            },\n                            {\n                                target: \".Empty\",\n                                actions: \"cacheTopic\"\n                            }\n                        ]\n                    }\n                }\n            },\n            type: \"parallel\",\n            onDone: {\n                target: \"Submitting\"\n            }\n        },\n        Submitting: {\n            invoke: {\n                src: \"createUser\",\n                id: \"createUser\",\n                onDone: [\n                    {\n                        target: \"Success\"\n                    }\n                ],\n                onError: [\n                    {\n                        target: \"#New Machine.Ready.Error.Network\"\n                    }\n                ]\n            }\n        },\n        Success: {\n            type: \"final\"\n        }\n    },\n    predictableActionArguments: true,\n    preserveActionOrder: true\n}, {\n    actions: {\n        cacheEmail: (0,xstate__WEBPACK_IMPORTED_MODULE_1__.assign)((_, event)=>{\n            return {\n                email: event.data\n            };\n        }),\n        cacheTopic: (0,xstate__WEBPACK_IMPORTED_MODULE_1__.assign)((_, event)=>{\n            return {\n                topic: event.data\n            };\n        }),\n        showValidationError: (context)=>{\n            if (context.emailInput.current) {\n                context.emailInput.current.reportValidity();\n            }\n        }\n    },\n    guards: {\n        isTopicValid: (_, event)=>{\n            return !!event.data;\n        },\n        isEmailValid: (context)=>{\n            const isEmpty = context.email.trim().length === 0;\n            if (isEmpty) {\n                return false;\n            }\n            return context.emailInput.current && context.emailInput.current.checkValidity();\n        }\n    },\n    services: {\n        createUser: (context)=>{\n            const { email, topic } = context;\n            return new Promise((resolve)=>{\n                setTimeout(resolve, 1500);\n            });\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (machine);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXpCLE9BQU8sSUFBSStDLFFBQVEsQ0FBQ0M7Z0JBQ2xCQyxXQUFXRCxTQUFTO1lBQ3RCO1FBQ0Y7SUFDRjtBQUNGO0FBR0YsK0RBQWVqRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFjaGluZS50c3g/ODkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNYWNoaW5lLCBhc3NpZ24gfSBmcm9tIFwieHN0YXRlXCI7XG5cbmNvbnN0IG1hY2hpbmUgPSBjcmVhdGVNYWNoaW5lKFxuICB7XG4gICAgY29udGV4dDoge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICB0b3BpYzogXCJcIixcbiAgICAgIGVtYWlsSW5wdXQ6IG51bGxcbiAgICB9LFxuICAgIGlkOiBcIk5ldyBNYWNoaW5lXCIsXG4gICAgaW5pdGlhbDogXCJSZWFkeVwiLFxuICAgIC8vIHRzVHlwZXM6IHt9LFxuICAgIHNjaGVtYToge1xuICAgIC8vICAgY29udGV4dDoge30gYXMge1xuICAgIC8vICAgICBlbWFpbDogc3RyaW5nO1xuICAgIC8vICAgICB0b3BpYzogc3RyaW5nO1xuICAgIC8vICAgICBlbWFpbElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBldmVudHM6IHt9IGFzIFxuICAgIC8vICAgICB7IHR5cGU6IFwiU1VCTUlUXCIgfVxuICAgIC8vICAgICB8IHsgdHlwZTogXCJJTlBVVC5FTUFJTFwiOyBkYXRhOiBzdHJpbmcgfVxuICAgIC8vICAgICB8IHsgdHlwZTogXCJJTlBVVC5UT1BJQ1wiOyBkYXRhOiBzdHJpbmcgfVxuICAgIC8vICAgfVxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBSZWFkeToge1xuICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICBFcnJvcjoge1xuICAgICAgICAgICAgaW5pdGlhbDogXCJOb25lXCIsXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgTm9uZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmluYWxcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBOZXR3b3JrOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJmaW5hbFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEVtYWlsOiB7XG4gICAgICAgICAgICBpbml0aWFsOiBcIlJlYWR5XCIsXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgUmVhZHk6IHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgU1VCTUlUOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiU3VibWl0dGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbmQ6IFwiaXNFbWFpbFZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFwic2hvd1ZhbGlkYXRpb25FcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFN1Ym1pdHRpbmc6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZpbmFsXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgRXJyb3I6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJJTlBVVC5FTUFJTFwiOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIi5SZWFkeVwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFwiY2FjaGVFbWFpbFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFRvcGljOiB7XG4gICAgICAgICAgICBpbml0aWFsOiBcIkVtcHR5XCIsXG4gICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgRW1wdHk6IHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgU1VCTUlUOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJFcnJvclwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBTZWxlY3RlZDoge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBTVUJNSVQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIlN1Ym1pdHRpbmdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgRXJyb3I6IHt9LFxuICAgICAgICAgICAgICBTdWJtaXR0aW5nOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJmaW5hbFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcIklOUFVULlRPUElDXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiLlNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgICAgICBjb25kOiBcImlzVG9waWNWYWxpZFwiLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uczogXCJjYWNoZVRvcGljXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogXCIuRW1wdHlcIixcbiAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFwiY2FjaGVUb3BpY1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiBcInBhcmFsbGVsXCIsXG4gICAgICAgIG9uRG9uZToge1xuICAgICAgICAgIHRhcmdldDogXCJTdWJtaXR0aW5nXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFN1Ym1pdHRpbmc6IHtcbiAgICAgICAgaW52b2tlOiB7XG4gICAgICAgICAgc3JjOiBcImNyZWF0ZVVzZXJcIixcbiAgICAgICAgICBpZDogXCJjcmVhdGVVc2VyXCIsXG4gICAgICAgICAgb25Eb25lOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRhcmdldDogXCJTdWNjZXNzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG9uRXJyb3I6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIiNOZXcgTWFjaGluZS5SZWFkeS5FcnJvci5OZXR3b3JrXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBTdWNjZXNzOiB7XG4gICAgICAgIHR5cGU6IFwiZmluYWxcIlxuICAgICAgfVxuICAgIH0sXG4gICAgcHJlZGljdGFibGVBY3Rpb25Bcmd1bWVudHM6IHRydWUsXG4gICAgcHJlc2VydmVBY3Rpb25PcmRlcjogdHJ1ZVxuICB9LFxuICB7XG4gICAgYWN0aW9uczoge1xuICAgICAgY2FjaGVFbWFpbDogYXNzaWduKChfLCBldmVudCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVtYWlsOiBldmVudC5kYXRhXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIGNhY2hlVG9waWM6IGFzc2lnbigoXywgZXZlbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3BpYzogZXZlbnQuZGF0YVxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICBzaG93VmFsaWRhdGlvbkVycm9yOiAoY29udGV4dCkgPT4ge1xuICAgICAgICBpZiAoY29udGV4dC5lbWFpbElucHV0LmN1cnJlbnQpIHtcbiAgICAgICAgICBjb250ZXh0LmVtYWlsSW5wdXQuY3VycmVudC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBndWFyZHM6IHtcbiAgICAgIGlzVG9waWNWYWxpZDogKF8sIGV2ZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAhIWV2ZW50LmRhdGE7XG4gICAgICB9LFxuICAgICAgaXNFbWFpbFZhbGlkOiAoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpc0VtcHR5ID0gY29udGV4dC5lbWFpbC50cmltKCkubGVuZ3RoID09PSAwO1xuICAgICAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29udGV4dC5lbWFpbElucHV0LmN1cnJlbnQgJiZcbiAgICAgICAgICBjb250ZXh0LmVtYWlsSW5wdXQuY3VycmVudC5jaGVja1ZhbGlkaXR5KClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNlcnZpY2VzOiB7XG4gICAgICBjcmVhdGVVc2VyOiAoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IGVtYWlsLCB0b3BpYyB9ID0gY29udGV4dDtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDE1MDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1hY2hpbmU7XG4iXSwibmFtZXMiOlsiY3JlYXRlTWFjaGluZSIsImFzc2lnbiIsIm1hY2hpbmUiLCJjb250ZXh0IiwiZW1haWwiLCJ0b3BpYyIsImVtYWlsSW5wdXQiLCJpZCIsImluaXRpYWwiLCJzY2hlbWEiLCJzdGF0ZXMiLCJSZWFkeSIsIkVycm9yIiwiTm9uZSIsInR5cGUiLCJOZXR3b3JrIiwiRW1haWwiLCJvbiIsIlNVQk1JVCIsInRhcmdldCIsImNvbmQiLCJhY3Rpb25zIiwiU3VibWl0dGluZyIsIlRvcGljIiwiRW1wdHkiLCJTZWxlY3RlZCIsIm9uRG9uZSIsImludm9rZSIsInNyYyIsIm9uRXJyb3IiLCJTdWNjZXNzIiwicHJlZGljdGFibGVBY3Rpb25Bcmd1bWVudHMiLCJwcmVzZXJ2ZUFjdGlvbk9yZGVyIiwiY2FjaGVFbWFpbCIsIl8iLCJldmVudCIsImRhdGEiLCJjYWNoZVRvcGljIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsImN1cnJlbnQiLCJyZXBvcnRWYWxpZGl0eSIsImd1YXJkcyIsImlzVG9waWNWYWxpZCIsImlzRW1haWxWYWxpZCIsImlzRW1wdHkiLCJ0cmltIiwibGVuZ3RoIiwiY2hlY2tWYWxpZGl0eSIsInNlcnZpY2VzIiwiY3JlYXRlVXNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/machine.tsx\n"));

/***/ })

});