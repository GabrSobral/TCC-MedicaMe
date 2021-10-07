(self["webpackChunkMedicaMe"] = self["webpackChunkMedicaMe"] || []).push([["src_app_D_home_home_module_ts"],{

/***/ 8550:
/*!***********************************************!*\
  !*** ./src/app/D/home/home-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 5799);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8627:
/*!***************************************!*\
  !*** ./src/app/D/home/home.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 8550);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 5799);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 5799:
/*!*************************************!*\
  !*** ./src/app/D/home/home.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 3455);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 8399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() { }
    //#region Abrir e Fechar o Menu
    open() {
        var menu = document.getElementById('dHome');
        menu.classList.remove('invisivel');
    }
    close() {
        var menu = document.getElementById('dHome');
        menu.classList.add('invisivel');
    }
    //#endregion
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 8399:
/*!***************************************!*\
  !*** ./src/app/D/home/home.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/*#region Mid Geral*/\n.meio {\n  width: 90%;\n  margin-top: calc((100vw / 5) + 20px);\n  margin-left: 5%;\n}\n.meio .top {\n  background-color: var(--dark-space-cadet);\n  width: 100%;\n  min-height: 40px;\n  box-sizing: border-box;\n  padding: 0px 10px 0px 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n.meio .top h3 {\n  color: var(--white) !important;\n}\n.meio .content, .meio .bot {\n  background-color: var(--lavander);\n  overflow: hidden;\n  border-radius: 10px;\n}\n/*#endregion*/\n/*#region Medicamentos*/\n.meio .content {\n  width: 100%;\n  margin-bottom: 180px;\n}\n.meio .content .line {\n  width: 90%;\n  margin-left: 5%;\n  border-color: var(--state-blue);\n  border-width: 2px 0px 0px 0px;\n  border-style: solid;\n}\n.medicamento {\n  width: 90%;\n  min-height: 200px;\n  margin-left: 5%;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.medicamento img {\n  width: 35%;\n  max-height: 170px;\n}\n.medicamento .text {\n  width: 60%;\n  margin-left: 5%;\n}\n.medicamento .text h3 {\n  margin-top: 7px;\n  font-size: 2em;\n}\n.medicamento .text p {\n  margin-top: 7px;\n  font-size: 1.3em;\n  color: var(--space-cadet) !important;\n}\n/*#endregion*/\n/*#region Alarme*/\n.alarm {\n  margin-bottom: 180px;\n}\n.alarm .medicamento {\n  background-color: var(--lavander);\n  width: 100%;\n  margin: 0;\n  border-radius: 0px 0px 10px 10px;\n}\n.alarm div:nth-of-type(3) {\n  justify-content: space-between;\n}\n.alarm button {\n  width: calc((90vw / 2) - 20px);\n  height: calc((90vw / 2) - 20px);\n  margin-top: 30px;\n  border-radius: 20px;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 2em;\n}\n.alarm button svg {\n  width: 100%;\n  height: 55%;\n}\n.alarm .danger {\n  fill: var(--white);\n}\n/*#endregion*/\n/*#region Bottom*/\n.meio .bot {\n  width: 90%;\n  position: fixed;\n  bottom: 20px;\n}\n.meio .bot .mid {\n  height: 100px;\n}\n.meio .bot .mid button {\n  width: 90%;\n}\n/*#endregion*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFBO0FBQ0E7RUFFSSxVQUFBO0VBRUEsb0NBQUE7RUFDQSxlQUFBO0FBREo7QUFHSTtFQUVJLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7RUFDQSwwQkFBQTtFQUVBLGdDQUFBO0FBSlI7QUFNUTtFQUVJLDhCQUFBO0FBTFo7QUFTSTtFQUVJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtBQVRSO0FBWUEsYUFBQTtBQUVBLHVCQUFBO0FBQ0E7RUFFSSxXQUFBO0VBRUEsb0JBQUE7QUFaSjtBQWNJO0VBRUksVUFBQTtFQUVBLGVBQUE7RUFFQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFmUjtBQW1CQTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUFuQko7QUFxQkk7RUFFSSxVQUFBO0VBRUEsaUJBQUE7QUFyQlI7QUF3Qkk7RUFFSSxVQUFBO0VBRUEsZUFBQTtBQXhCUjtBQTBCUTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FBekJaO0FBNEJRO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUEzQlo7QUErQkEsYUFBQTtBQUVBLGlCQUFBO0FBQ0E7RUFFSSxvQkFBQTtBQTlCSjtBQWdDSTtFQUVJLGlDQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7RUFFQSxnQ0FBQTtBQWpDUjtBQW9DSTtFQUVJLDhCQUFBO0FBbkNSO0FBc0NJO0VBRUksOEJBQUE7RUFDQSwrQkFBQTtFQUVBLGdCQUFBO0VBRUEsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBekNSO0FBMkNRO0VBRUksV0FBQTtFQUNBLFdBQUE7QUExQ1o7QUE4Q0k7RUFFSSxrQkFBQTtBQTdDUjtBQWdEQSxhQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUVJLFVBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtBQWhESjtBQWtESTtFQUVJLGFBQUE7QUFqRFI7QUFtRFE7RUFFSSxVQUFBO0FBbERaO0FBc0RBLGFBQUEiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiNyZWdpb24gTWlkIEdlcmFsKi9cclxuLm1laW9cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCgxMDB2dyAvIDUpICsgMjBweCk7XHJcbiAgICBtYXJnaW4tbGVmdDogIDUlO1xyXG5cclxuICAgIC50b3BcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNwYWNlLWNhZGV0KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuXHJcbiAgICAgICAgaDNcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQsIC5ib3RcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlcik7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIE1lZGljYW1lbnRvcyovXHJcbi5tZWlvIC5jb250ZW50XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xyXG5cclxuICAgIC5saW5lXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXN0YXRlLWJsdWUpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZWRpY2FtZW50b1xyXG57XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIGltZ1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcblxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG5cclxuICAgICAgICBoM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNwYWNlLWNhZGV0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIEFsYXJtZSovXHJcbi5hbGFybVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxODBweDtcclxuXHJcbiAgICAubWVkaWNhbWVudG9cclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZhbmRlcik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2Om50aC1vZi10eXBlKDMpXHJcbiAgICB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvblxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKCg5MHZ3IC8gMikgLSAyMHB4KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoKDkwdncgLyAyKSAtIDIwcHgpO1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG5cclxuICAgICAgICBzdmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRhbmdlclxyXG4gICAge1xyXG4gICAgICAgIGZpbGw6IHZhcigtLXdoaXRlKTtcclxuICAgIH1cclxufVxyXG4vKiNlbmRyZWdpb24qL1xyXG5cclxuLyojcmVnaW9uIEJvdHRvbSovXHJcbi5tZWlvIC5ib3Rcclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcblxyXG4gICAgLm1pZFxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyojZW5kcmVnaW9uKi9cclxuIl19 */");

/***/ }),

/***/ 3455:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/D/home/home.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"nav vertical flex\">\r\n    <img src=\"../../../assets/IMG/Logo/Light (Simples).png\" alt=\"Logo do aplicativo: MedicaMe\">\r\n    <div class=\"button full flex\" (click)=\"open()\">\r\n      <svg viewBox=\"0 0 24 24\">\r\n        <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"dHome\" class=\"menu invisivel\">\r\n    <div id=\"back\" (click)=\"close()\"></div>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"top full flex\">\r\n        <h3>Configurações</h3>\r\n\r\n        <div class=\"button full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"/>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mid\">\r\n        <div class=\"itens vertical flex\" (click)=\"tutorial()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25s-.559 1.25-1.25 1.25zm1.961-5.928c-.904.975-.947 1.514-.935 2.178h-2.005c-.007-1.475.02-2.125 1.431-3.468.573-.544 1.025-.975.962-1.821-.058-.805-.73-1.226-1.365-1.226-.709 0-1.538.527-1.538 2.013h-2.01c0-2.4 1.409-3.95 3.59-3.95 1.036 0 1.942.339 2.55.955.57.578.865 1.372.854 2.298-.016 1.383-.857 2.291-1.534 3.021z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Tutorial</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"dadosAdicionais()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Dados adicionais</h3>\r\n        </div>\r\n\r\n        <div class=\"itens vertical flex\" (click)=\"sair()\">\r\n          <div class=\"button full flex\">\r\n            <svg viewBox=\"0 0 24 24\">\r\n              <path d=\"M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z\"/>\r\n            </svg>\r\n          </div>\r\n          <h3>Sair</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"meio\">\r\n    <div class=\"alarm\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>O alarme disparou!</h3>\r\n      </div>\r\n\r\n      <div class=\"medicamento full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Comprimido.png\" alt=\"Comprimido\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZac</h3>\r\n          <p>Tomar às: <b>13:30</b></p>\r\n          <p><b>1</b> comprimido</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"full flex\">\r\n        <button class=\"danger full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z\"/>\r\n          </svg>\r\n          Cancelei\r\n        </button>\r\n  \r\n        <button class=\"important full flex\">\r\n          <svg viewBox=\"0 0 24 24\">\r\n            <path d=\"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z\"/>\r\n          </svg>\r\n          Tomei\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content invisivel\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>Próximos Medicamentos</h3>\r\n      </div>\r\n\r\n      <div class=\"medicamento full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Comprimido.png\" alt=\"Comprimido\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZac</h3>\r\n          <p>Tomar às: <b>13:30</b></p>\r\n          <p><b>1</b> comprimido</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"medicamento full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/ContaGotas.png\" alt=\"Conta gotas\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZac</h3>\r\n          <p>Tomar às: <b>13:30</b></p>\r\n          <p><b>20</b> gotas</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"medicamento full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Comprimido.png\" alt=\"Comprimido\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZac</h3>\r\n          <p>Tomar às: <b>13:30</b></p>\r\n          <p><b>1</b> comprimido</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"medicamento full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/ContaGotas.png\" alt=\"Conta gotas\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZac</h3>\r\n          <p>Tomar às: <b>13:30</b></p>\r\n          <p><b>20</b> gotas</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"line\"></div>\r\n\r\n      <div class=\"medicamento full flex\">\r\n        <img src=\"../../../assets/IMG/Icon/Comprimido.png\" alt=\"Comprimido\">\r\n\r\n        <div class=\"text leftA\">\r\n          <h3>DipperZac</h3>\r\n          <p>Tomar às: <b>13:30</b></p>\r\n          <p><b>1</b> comprimido</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"bot\">\r\n      <div class=\"top vertical flex\">\r\n        <h3>Está se sentindo bem?</h3>\r\n      </div>\r\n\r\n      <div class=\"mid full flex\">\r\n        <button class=\"normal\" (click)=\"sintomas()\">Escrever meus sintomas</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_D_home_home_module_ts.js.map