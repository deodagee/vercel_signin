exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 3968:
/***/ ((module) => {

// Exports
module.exports = {
	"parent": "header_parent__qeJ3n",
	"parent_wrapper": "header_parent_wrapper__kXAXu",
	"logo__signature_and_button_parent": "header_logo__signature_and_button_parent__Lo0cl",
	"logo_item": "header_logo_item__SNVa_",
	"header_logo": "header_header_logo__tL1AQ",
	"signature_item": "header_signature_item__TvLre",
	"header_signature": "header_header_signature__EODmu",
	"menu_bars_wrapper": "header_menu_bars_wrapper__c9x4B",
	"first_menubar": "header_first_menubar__GTtG1",
	"second_menubar": "header_second_menubar__5_iQt",
	"buttons": "header_buttons___jWnq",
	"register_button": "header_register_button__UB2RS",
	"login_button": "header_login_button__krhXy"
};


/***/ }),

/***/ 1820:
/***/ ((module) => {

// Exports
module.exports = {
	"parent": "header_xsm_mobile_parent__APaAc",
	"parent_wrapper": "header_xsm_mobile_parent_wrapper__D358d",
	"logo__signature_and_button_parent_xsm": "header_xsm_mobile_logo__signature_and_button_parent_xsm__kP_dM",
	"header_logo_xsm": "header_xsm_mobile_header_logo_xsm__8821l",
	"header_signature_xsm": "header_xsm_mobile_header_signature_xsm__biuiN",
	"first_menubar_xsm": "header_xsm_mobile_first_menubar_xsm__oY1kk",
	"second_menubar_xsm": "header_xsm_mobile_second_menubar_xsm__e_Zym",
	"buttons_xsm": "header_xsm_mobile_buttons_xsm__h0Dek",
	"register_button_xsm": "header_xsm_mobile_register_button_xsm__iYQ_I",
	"login_button_xsm": "header_xsm_mobile_login_button_xsm__dgVmA"
};


/***/ }),

/***/ 9745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3968);
/* harmony import */ var _styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1820);
/* harmony import */ var _styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);






function Header() {
    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().parent),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().parent_wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo__signature_and_button_parent)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo__signature_and_button_parent_xsm)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header_logo)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_logo_xsm)}`,
                                    alt: "logo",
                                    width: 50,
                                    height: 50,
                                    src: "/logored.png"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().signature_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header_signature)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_signature_xsm)}`,
                                    "aria-label": "signature",
                                    alt: "signature",
                                    width: 90,
                                    height: 90,
                                    src: "/signaturewhite.png"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttons)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttons_xsm)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().register),
                                    children: session ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().register_button)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().register_button_xsm)}`,
                                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)("github")(),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "signOut"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().register_button)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().register_button_xsm)}`,
                                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)("google")(),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "signOut"
                                                })
                                            })
                                        ]
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().login_button)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_button_xsm)}`,
                                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)("google"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "signIn"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().login_button)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_button_xsm)}`,
                                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)("github"),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "signIn"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu_bars_wrapper),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().first_menubar)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().first_menubar_xsm)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().first_menubar_item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().promo1),
                                            children: "Private Domains"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().first_menubar_item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().promo2),
                                            children: "Dall-E Engines"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().first_menubar_item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().promo3),
                                            children: "3D Renders"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().first_menubar_item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().promo4),
                                            children: "Wix?"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().first_menubar_item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().promo4),
                                            children: "Hostgator?"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: `${(_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar)} ${(_styles_components_header_xsm_mobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().second_menubar_xsm)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuitem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar_item),
                                                children: "Home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuitem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            legacyBehavior: true,
                                            href: "/services",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar_item),
                                                children: "Services"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuitem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            legacyBehavior: true,
                                            href: "/pricing",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar_item),
                                                children: "Pricing"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuitem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            legacyBehavior: true,
                                            href: "/projects",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar_item),
                                                children: "Projects"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuitem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            legacyBehavior: true,
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar_item),
                                                children: "Contact Me"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuitem),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            legacyBehavior: true,
                                            href: "https://github.com/deodagee?tab=repositories",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_components_header_module_css__WEBPACK_IMPORTED_MODULE_4___default().second_menubar_item),
                                                children: "Source Code"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;