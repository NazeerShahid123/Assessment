"use strict";
(self["webpackChunkAssessment"] = self["webpackChunkAssessment"] || []).push([["src_app_image-grid_image-grid_component_ts"],{

/***/ 4678:
/*!****************************************************!*\
  !*** ./src/app/image-grid/image-grid.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageGridComponent: () => (/* binding */ ImageGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 2152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);










function ImageGridComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 7)(1, "td", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ImageGridComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ImageGridComponent_For_20_Template_tr_click_0_listener() {
      const photo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onPhotoClick(photo_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](photo_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](photo_r2.albumId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](photo_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSrc", photo_r2.url)("alt", photo_r2.title);
  }
}
function ImageGridComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 9)(1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
class ImageGridComponent {
  constructor(http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), router) {
    this.http = http;
    this.router = router;
    this.photos = [];
    this.errorMessage = null;
    this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(true);
  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(photos => this.photos = photos), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      this.errorMessage = 'An error occurred while fetching photos.';
      console.error(error);
      this.isLoading$.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    })).subscribe(() => this.isLoading$.next(false));
  }
  onPhotoClick(photo) {
    this.router.navigate(['/photos', photo.id]);
  }
  static #_ = this.ɵfac = function ImageGridComponent_Factory(t) {
    return new (t || ImageGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ImageGridComponent,
    selectors: [["app-image-grid"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 22,
    vars: 4,
    consts: [[1, "flex", "flex-col", "items-center"], [1, "overflow-x-auto", "sm:-mx-6", "lg:-mx-8", "w-full", "max-w-8xl"], [1, "inline-block", "min-w-full", "py-16", "sm:px-6", "lg:px-8"], [1, "overflow-hidden", "shadow-lg", "rounded-lg"], [1, "min-w-full", "text-left", "text-sm", "font-light", "text-surface", "dark:text-white"], [1, "border-b", "border-neutral-200", "font-medium", "dark:border-white/10", "bg-blue-600", "text-white"], ["scope", "col", 1, "px-6", "py-4", "text-lg", "font-bold"], [1, "text-center", "py-8"], [1, "border-b", "border-neutral-200", "dark:border-white/10", "hover:bg-blue-50", "transition-colors", "duration-200", "cursor-pointer"], [1, "text-center", "text-red-500"], ["colspan", "4"], [1, "loader"], [1, "border-b", "border-neutral-200", "dark:border-white/10", "hover:bg-blue-50", "transition-colors", "duration-200", "cursor-pointer", 3, "click"], [1, "whitespace-nowrap", "px-6", "py-4", "text-gray-700"], [1, "whitespace-nowrap", "px-6", "py-4"], ["priority", "", "width", "78", "height", "78", 1, "object-cover", "rounded-md", "shadow-sm", 3, "ngSrc", "alt"]],
    template: function ImageGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "table", 4)(6, "thead", 5)(7, "tr")(8, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Album ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ImageGridComponent_Conditional_17_Template, 4, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](19, ImageGridComponent_For_20_Template, 9, 5, "tr", 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ImageGridComponent_Conditional_21_Template, 3, 1, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 2, ctx.isLoading$) ? 17 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.photos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](21, ctx.errorMessage ? 21 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgOptimizedImage, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbWFnZS1ncmlkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW1hZ2UtZ3JpZC9pbWFnZS1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_image-grid_image-grid_component_ts.js.map