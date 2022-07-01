"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry-edit-card/entry-edit-card.component */ 8120);
/* harmony import */ var _if_entry_if_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../if-entry/if-entry.component */ 4902);
/* harmony import */ var _emotion_emotion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emotion/emotion.component */ 1753);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _if_entry_if_entry_component__WEBPACK_IMPORTED_MODULE_3__.IfEntryComponent, _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent, _emotion_emotion_component__WEBPACK_IMPORTED_MODULE_4__.EmotionComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry-edit-card/entry-edit-card.component */ 8120);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);







let HomePage = class HomePage {
    constructor(modalController, entry) {
        this.modalController = modalController;
        this.entry = entry;
        this.title = '';
        this.content = '';
        this.screenW = window.innerWidth;
        this.screenH = window.innerHeight;
    }
    delAllEntrys() {
        this.entry.deleteAll();
        this.entry.save();
    }
    newEntry() {
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.id = this.id;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.content = this.content;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.title = this.title;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.dateTime = this.dateTime;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.emotion = this.emotion;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.emotionWeight = this.emotionWeight;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.autoGrow = false;
        this.modalController.create({ component: _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent, cssClass: ['fullscreen'] }).then((modalElement) => {
            modalElement.present();
        });
    }
    deleteEntry(myId) {
        this.entry.deleteNote(myId);
    }
    editEntry(id, title, content, emotion, emotionWeight, dateTime) {
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.id = id;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.content = content;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.title = title;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.dateTime = dateTime;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.emotion = emotion;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.emotionWeight = emotionWeight;
        this.modalController.create({ component: _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent, cssClass: ['fullscreen'] }).then((modalElement) => {
            modalElement.present();
        });
    }
    ngOnInit() {
        this.entry.load();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/if-entry/if-entry.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfEntryComponent": () => (/* binding */ IfEntryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _if_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./if-entry.component.html?ngResource */ 4164);
/* harmony import */ var _if_entry_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./if-entry.component.scss?ngResource */ 9912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




//import {EntryEditCardComponent} from "../entry-edit-card/entry-edit-card.component";
let IfEntryComponent = class IfEntryComponent {
    constructor() {
        this.emotionColors = ['#00aaff', '#e9ce00', '#55aa7f', '#ff0012'];
        this.xS = window.visualViewport.width;
        this.yS = window.visualViewport.height;
    }
    ngOnInit() {
        this.scaleColor = this.emotionColors[this.emotion];
        this.scaleWidth = this.xS / 10;
        this.emotionWeight = this.scaleWidth * (this.emotionWeight / 100);
    }
};
IfEntryComponent.ctorParameters = () => [];
IfEntryComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    emotion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    emotionWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    dateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
IfEntryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-if-entry',
        template: _if_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_if_entry_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IfEntryComponent);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#john {\n  width: 300px;\n  height: 300px;\n  background-color: #bfbfff;\n  left: 50%;\n  margin: 0px auto;\n}\n\n@keyframes john {\n  100% {\n    transform: rotate(720deg);\n  }\n}\n\n#john:hover {\n  animation: 1s john 1;\n}\n\n#lala:hover {\n  animation: 1s john Infinite;\n}\n\n#details {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSx5QkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2pvaG57XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWl4KGJsdWUsd2hpdGUsIDI1JSk7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuQGtleWZyYW1lcyBqb2huIHtcbiAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICB9XG59XG5cbiNqb2huOmhvdmVye1xuICBhbmltYXRpb246IDFzIGpvaG4gMTtcbn1cblxuI2xhbGE6aG92ZXJ7XG4gIGFuaW1hdGlvbjogMXMgam9obiBJbmZpbml0ZTtcbn1cblxuI2RldGFpbHN7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 9912:
/*!*************************************************************!*\
  !*** ./src/app/if-entry/if-entry.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  display: block;\n  width: 99%;\n  height: auto;\n  margin: 0 auto;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-card-title {\n  font-size: medium;\n}\n\nion-textarea {\n  margin: 0px;\n  padding: 0px !important;\n}\n\n#scaleParent {\n  height: 10px;\n  margin-top: -10px !important;\n  background: #a102a1;\n  overflow: hidden;\n  border: none;\n  box-shadow: 1px 1px 2px rgba(142, 26, 185, 0.66);\n}\n\n#scaleParent #scale {\n  height: 10px;\n  border: none;\n}\n\nion-card-title {\n  color: white;\n}\n\nion-item {\n  display: initial;\n  --ion-item-background: purple;\n  --padding-bottom: 0px !important;\n}\n\nion-item native {\n  box-shadow: inline 10px -10px 2px rgba(0, 0, 0, 0.66);\n}\n\nion-card-content {\n  height: auto;\n  box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.34);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmLWVudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBR0EsY0FBQTtFQUNBLGVBQUE7RUFDRCxrQkFBQTtBQUZEOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtBQUhGOztBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUpGOztBQUtFO0VBQU8scURBQUE7QUFGVDs7QUFLQTtFQUNDLFlBQUE7RUFDQSxpREFBQTtBQUZEIiwiZmlsZSI6ImlmLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG5cbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5OSU7XG4gIGhlaWdodDogYXV0bztcblxuXG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gbWFyZ2luLWJvdHRvbTogNXB4O1xuXG5cbn1cblxuaW9uLWNhcmQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG5pb24tdGV4dGFyZWF7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbiNzY2FsZVBhcmVudCB7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ExMDJhMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDE0MiwgMjYsIDE4NSwgMC42Nik7XG4gICNzY2FsZXtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gIH1cbn1cblxuaW9uLWNhcmQtdGl0bGV7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW17XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIHB1cnBsZTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG5hdGl2ZXtib3gtc2hhZG93OiBpbmxpbmUgMTBweCAtMTBweCAycHggcmdiYSgwLCAwLCAwLCAwLjY2KTt9XG59XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gaGVpZ2h0OiBhdXRvO1xuIGJveC1zaGFkb3c6IGluc2V0IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNCk7XG59XG5cblxuXG5cblxuIl19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" fill=\"clear\" (click)=\"lala()\" >\n      <ion-button ><ion-icon style=\"color: grey\" name=\"menu-outline\"></ion-icon></ion-button>\n\n    </ion-buttons>\n    <ion-buttons slot=\"primary\" fill=\"clear\">\n      <ion-button (click)=\"newEntry()\"><ion-icon style=\"color: grey\" icon=\"add\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title style=\"color: purple\" class=\"ion-text-center\">Introflect Diary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-sliding style=\"z-index: 555; \" *ngFor=\"let data of entry.getAll(); index as i\">\n    <ion-item-options style=\"z-index: 555\">\n      <ion-item-option style=\"z-index: 555; box-shadow: -3px 1px 10px 0px black; width: 20vw; border-top-left-radius: 99px\" side=\"end\" color=\"danger\" (click)=\"deleteEntry(data.id)\"><ion-icon size=\"large\" name=\"trash-outline\"></ion-icon></ion-item-option>\n\n    </ion-item-options>\n  <app-if-entry  id=\"{{data.id}}}\" title=\"{{data.title}}\" content=\"{{data.content}}\" emotion=\"{{data.emotion}}\" emotionWeight=\"{{data.emotionWeight}}\" dateTime=\"{{data.dateTime}}\" (click)=\"editEntry(data.id, data.title, data.content,data.emotion, data.emotionWeight, data.dateTime)\"></app-if-entry>\n\n  </ion-item-sliding>\n  <ion-button (click)=\"delAllEntrys()\">PUSH ME HARD</ion-button>\n</ion-content>\n\n";

/***/ }),

/***/ 4164:
/*!*************************************************************!*\
  !*** ./src/app/if-entry/if-entry.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-card button=\"true\">\n  <ion-item lines=\"none\">\n    <ion-card-title slot=\"start\">{{title}}</ion-card-title>\n    <div slot=\"end\" id=\"scaleParent\" style=\"width:{{scaleWidth}}px\"><div  style=\"width:{{emotionWeight}}px; background-color:{{scaleColor}}\" id=\"scale\"></div></div>\n  </ion-item>\n  <ion-card-content>{{content}}</ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map