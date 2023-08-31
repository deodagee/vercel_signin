exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 4741:
/***/ ((module) => {

// Exports
module.exports = {
	"parentcontainer": "glb_parentcontainer__Hm3O3",
	"container": "glb_container__i5bIm",
	"button": "glb_button__NGmc1",
	"paragraph": "glb_paragraph__2I0H1"
};


/***/ }),

/***/ 1258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ loadGLTFModel)
/* harmony export */ });
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1217);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__]);
three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function loadGLTFModel(scene, glbPath, options = {
    receiveShadow: true,
    castShadow: true
}) {
    const { receiveShadow, castShadow } = options;
    return new Promise((resolve, reject)=>{
        const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__/* .GLTFLoader */ .E();
        loader.load(glbPath, (gltf)=>{
            const obj = gltf.scene;
            obj.name = "dog";
            obj.position.y = 0;
            obj.position.x = 0;
            obj.receiveShadow = receiveShadow;
            obj.castShadow = castShadow;
            scene.add(obj);
            obj.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;
                }
            });
            resolve(obj);
        }, undefined, function(error) {
            reject(error);
        });
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2949);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9365);
/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1258);
/* harmony import */ var _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3928);
/* harmony import */ var _styles_glb_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4741);
/* harmony import */ var _styles_glb_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_glb_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_2__, _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__, three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__, _lib_model__WEBPACK_IMPORTED_MODULE_5__]);
([three__WEBPACK_IMPORTED_MODULE_2__, _voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__, three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__, _lib_model__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}
const VoxelDog = ()=>{
    const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const urlDogGLB = "/dog.glb";
    const handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const { current: renderer } = refRenderer;
        const { current: container } = refContainer;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            renderer.setSize(scW, scH);
        }
    }, []);
    const [controlsEnabled, setControlsEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [buttonClicked, setButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { current: container } = refContainer;
        if (container) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_2__.sRGBEncoding;
            container.appendChild(renderer.domElement);
            refRenderer.current = renderer;
            const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
            const target = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-0.5, 1.2, 0);
            const initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(20 * Math.sin(0.2 * Math.PI), 8, 20 * Math.cos(0.2 * Math.PI));
            // 640 -> 240
            // 8   -> 6
            const scale = scH * 0.005 + 5.8;
            const camera = new three__WEBPACK_IMPORTED_MODULE_2__.OrthographicCamera(-scale, scale, scale, -scale, 9.01);
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_2__.AmbientLight(0xcccccc, 1);
            scene.add(ambientLight);
            const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__/* .OrbitControls */ .z(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.enabled = controlsEnabled;
            controls.target = target;
            (0,_lib_model__WEBPACK_IMPORTED_MODULE_5__/* .loadGLTFModel */ .D)(scene, urlDogGLB, {
                receiveShadow: false,
                castShadow: false
            }).then(()=>{
                animate();
                setLoading(false);
            });
            let req = null;
            let frame = 0;
            const animate = ()=>{
                req = requestAnimationFrame(animate);
                frame = frame <= 100 ? frame + 1 : frame;
                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
                    camera.position.y = 17;
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }
                renderer.render(scene, camera);
            };
            return ()=>{
                cancelAnimationFrame(req);
                renderer.domElement.remove();
                renderer.dispose();
            };
        }
    }, [
        controlsEnabled
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("resize", handleWindowResize, false);
        return ()=>{
            window.removeEventListener("resize", handleWindowResize, false);
        };
    }, [
        handleWindowResize
    ]);
    const handleButtonClick = ()=>{
        if (!buttonClicked) {
            setControlsEnabled(true); // Enable controls when the button is clicked for the first time
        } else {
            setControlsEnabled(false); // Disable controls when the button is clicked again
        }
        setButtonClicked((prevClicked)=>!prevClicked); // Toggle the button click status
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_glb_module_css__WEBPACK_IMPORTED_MODULE_6___default().parentcontainer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogContainer, {
                    ref: refContainer,
                    children: loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_voxel_dog_loader__WEBPACK_IMPORTED_MODULE_3__.DogSpinner, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_glb_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                            onClick: handleButtonClick,
                            children: buttonClicked ? "Release Animation" : "Click to control Glb"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_styles_glb_module_css__WEBPACK_IMPORTED_MODULE_6___default().paragraph),
                            children: "For The Curious: Click the button to interact with the GLB Image above. Click again to Release controls. A GLB file is a binary file format used for storing 3D models and their associated data. GLB files are widely used in web-based 3D applications, virtual reality (VR) experiences, augmented reality (AR) applications, and game development. They are supported by various 3D software, libraries, and engines, as well as web browsers with WebGL capabilities!"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VoxelDog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;