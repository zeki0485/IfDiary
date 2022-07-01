(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 7566);
/* harmony import */ var _emotion_emotion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion/emotion.component */ 1753);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.IonicStorageModule.forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy }, _emotion_emotion_component__WEBPACK_IMPORTED_MODULE_2__.EmotionComponent],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        exports: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        ]
    })
], AppModule);



/***/ }),

/***/ 1753:
/*!**********************************************!*\
  !*** ./src/app/emotion/emotion.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmotionComponent": () => (/* binding */ EmotionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _emotion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emotion.component.html?ngResource */ 1596);
/* harmony import */ var _emotion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emotion.component.scss?ngResource */ 2136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entry-edit-card/entry-edit-card.component */ 8120);






let EmotionComponent = class EmotionComponent {
    constructor(animiCtrl) {
        this.animiCtrl = animiCtrl;
        this.emotionSet = false;
        this.animiBackwards = false;
        this.emojis = [['./assets/emojis/happy.svg', 'happy', '#00aaff'], ['./assets/emojis/fear.svg', 'fear', '#e9ce00'],
            ['./assets/emojis/sad.svg', 'sad', '#55aa7f'], ['./assets/emojis/angry.svg', 'angry', '#ff0012']];
        this.emoHoodSrc = './assets/emojis/feeling.svg';
    }
    ngOnInit() {
        this.screenW = window.innerWidth;
        this.screenH = window.innerHeight;
        this.emojiSize = this.screenW / 8;
        this.barWidth = this.screenW * 0.9 - this.emojiSize;
        this.barBegin = (this.screenW - this.barWidth) / 2;
        this.barEnd = this.screenW - this.barBegin;
        this.barHeight = this.emojiSize / 6;
    }
    ngAfterViewInit() {
        //Emoji Position und Größe übergeben
        this.setEmojiPositionSize();
        this.setBar();
        //Animationen generieren
        this.createAnimations();
    }
    centerX(position, objectWidth) {
        return position - objectWidth / 2;
    }
    //Y-Position zentriert zurückgeben
    centerY(position, objectHeight) {
        return position - objectHeight / 2;
    }
    //alle Emojis ausblenden
    hideEmojis() {
        for (const index of this.emojis) {
            document.getElementById(this.emojis[this.emojis.indexOf(index)][1]).style.visibility = 'hidden';
        }
    }
    //alle Emojis einblenden
    unhideEmojis() {
        for (const index of this.emojis) {
            document.getElementById(this.emojis[this.emojis.indexOf(index)][0]).style.visibility = 'visible';
        }
    }
    //Bar
    setBar() {
        document.getElementById('bar').style.top = this.pixValue((this.screenH - this.emojiSize * 3) + this.emojiSize / 2);
        document.getElementById('barVal').style.top = this.pixValue((this.screenH - this.emojiSize * 3) + this.emojiSize / 2);
    }
    //Emojis Position und Größen übergeben
    setEmojiPositionSize() {
        //Emotion Emojis Position und Größe übergeben
        const he = document.getElementsByClassName('emojis');
        for (let i = 0; i < 4; i++) {
            he[i].style.left = this.pixValue(this.screenW / 2 - this.emojiSize / 2);
            he[i].style.top = this.pixValue(this.screenH - this.emojiSize * 3);
            he[i].style.width = this.pixValue(this.emojiSize);
            he[i].style.height = this.pixValue(this.emojiSize);
        }
        //EmoHood Position und Größe übergeben
        const emoHood = document.getElementById('emoHood');
        emoHood.style.left = this.pixValue(this.screenW / 2 - this.emojiSize / 2);
        const emoHoodTop = this.screenH - this.emojiSize * 3;
        emoHood.style.top = this.pixValue(emoHoodTop);
        emoHood.style.width = this.pixValue(this.emojiSize);
        emoHood.style.height = this.pixValue(this.emojiSize);
        //bar Positionieren und Ausrichten
        const myBar = document.getElementById('bar').style;
        myBar.left = this.pixValue(this.barBegin);
        myBar.height = this.pixValue(this.barHeight);
        myBar.width = this.pixValue(this.barWidth);
        const myBarVal = document.getElementById('barVal').style;
        myBarVal.left = this.pixValue(this.barBegin);
        myBarVal.height = this.pixValue(this.barHeight);
        myBarVal.width = this.pixValue(this.barWidth);
    }
    //Emojis auf- und zuklappen
    emojiShow() {
        if (this.emotionSet === false) {
            if (!this.emoAnimation.isRunning()) {
                switch (this.animiBackwards) {
                    case false:
                        {
                            this.emoAnimation.direction('normal');
                        }
                        break;
                    case true:
                        {
                            this.emoAnimation.direction('reverse');
                        }
                        break;
                }
                this.emoAnimation.play().then();
                this.animiBackwards = !this.animiBackwards;
            }
        }
    }
    //Auswahl der Emotion
    setEmotion(no) {
        this.emotion = no;
        _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.emotion = no;
        this.emoAnimation.direction('reverse');
        this.animiBackwards = false;
        this.emoAnimation.play().then(() => this.hideEmojis()).then(() => this.emoHoodSrc = this.emojis[no][0]).then(() => this.barStart.play());
        this.emotionSet = true;
    }
    //Emotionsskala bedienen
    setEmotionWeight(event) {
        if (this.emotionSet === true && !this.barStart.isRunning() && !this.emoAnimation.isRunning()) {
            this.barStart.stop();
            this.emoAnimation.stop();
            document.getElementById('bar').style.opacity = '100%';
            const barV = document.getElementById('barVal').style;
            barV.opacity = '100%';
            const emojiMin = this.barBegin - this.emojiSize / 2;
            const emojiMax = this.barEnd - this.emojiSize / 2;
            const emojiX = this.constrain(event.touches[0].clientX - this.emojiSize / 2, emojiMin, emojiMax);
            document.getElementById('emoHood').style.left = this.pixValue(emojiX);
            const myBarVal = document.getElementById('barVal').style;
            myBarVal.width = this.pixValue(emojiX / (this.barWidth) * this.barWidth);
            myBarVal.backgroundColor = this.emojis[this.emotion][2];
            const percent = Math.floor(this.map(emojiX, emojiMin, emojiMax, 0, 100));
            this.emotionWeight = percent;
            _entry_edit_card_entry_edit_card_component__WEBPACK_IMPORTED_MODULE_2__.EntryEditCardComponent.prototype.emotionWeight = percent;
        }
    }
    map(value, min, max, newMin, newMax) {
        let val = (value - min) * (newMax - newMin) / (max - min) + newMin;
        if (val < newMin) {
            val = newMin;
        }
        else if (val > newMax) {
            val = newMax;
        }
        return val;
    }
    constrain(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }
    //Erstellen der Animationen
    createAnimations() {
        this.emoA = this.animiCtrl.create()
            .addElement(document.getElementById(this.emojis[0][1]))
            .duration(600)
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, transform: 'scale(0.1) rotate(0deg)' },
            {
                offset: 1,
                transform: 'scale(1.3) translateX(-' + this.pixValue(this.emojiSize * 0.9) + ') ' +
                    'translateY(-' + this.pixValue(this.emojiSize * 3) + ') rotate(-360deg)',
                filter: 'drop-shadow(0px 5px 2px rgb(0 0 0 / 0.4))'
            }
        ]);
        this.emoB = this.animiCtrl.create()
            .addElement(document.getElementById(this.emojis[1][1]))
            .duration(600)
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, transform: 'scale(0.1) rotate(0deg)' },
            {
                offset: 1, transform: 'scale(1.3) translateX(' + this.pixValue(this.emojiSize * 2.5) + ') ' +
                    'translateY(-' + this.pixValue(this.emojiSize * 1.5) + ') rotate(720deg)',
                filter: 'drop-shadow(-3px 5px 2px rgb(0 0 0 / 0.4))'
            }
        ]);
        this.emoC = this.animiCtrl.create()
            .addElement(document.getElementById(this.emojis[2][1]))
            .duration(600)
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, transform: 'scale(0.1) rotate(0deg)' },
            {
                offset: 1,
                transform: 'scale(1.3) translateX(-' + this.pixValue(this.emojiSize * 2.5) + ') ' +
                    'translateY(-' + this.pixValue(this.emojiSize * 1.5) + ') rotate(-720deg)',
                filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
            }
        ]);
        this.emoD = this.animiCtrl.create()
            .addElement(document.getElementById(this.emojis[3][1]))
            .duration(600)
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, transform: 'scale(0.1) rotate(0deg)' },
            {
                offset: 1,
                transform: 'scale(1.3) translateX(' + this.pixValue(this.emojiSize * 0.9) + ') ' +
                    'translateY(-' + this.pixValue(this.emojiSize * 3) + ') rotate(720deg)',
                filter: 'drop-shadow(0px 5px 2px rgb(0 0 0 / 0.4))'
            }
        ]);
        this.emoHood = this.animiCtrl.create()
            .addElement(document.getElementById('emoHood'))
            .duration(700)
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 1, transform: ' scale(1.2)', filter: 'drop-shadow(0px 0px 10px rgb(0 0 0 / 0.5))' }
        ]);
        this.bar = this.animiCtrl.create()
            .addElement(document.getElementById('bar'))
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, opacity: '0%' },
            { offset: 1, opacity: '100%' }
        ]);
        this.barVal = this.animiCtrl.create()
            .addElement(document.getElementById('barVal'))
            .easing('ease-in-out')
            .keyframes([
            { offset: 0, opacity: '0%', width: this.pixValue(this.screenW / 2) },
            { offset: 1, opacity: '100%', width: '0px' }
        ]);
        this.rollback = this.animiCtrl.create()
            .addElement(document.getElementById('emoHood'))
            .easing('ease-in-out')
            .duration(300)
            .keyframes([
            { offset: 0, left: this.pixValue(this.screenW / 2 - this.emojiSize / 2), transform: 'rotate(0)' },
            { offset: 1, left: this.pixValue(this.barBegin - this.emojiSize / 2), transform: 'rotate(-360deg)' }
        ]);
        //Bar Anzeige Animation
        this.barStart = this.animiCtrl.create()
            .iterations(1)
            .addAnimation([this.bar, this.barVal, this.rollback]);
        //Emoji Animationen Gruppieren
        this.emoAnimation = this.animiCtrl.create()
            .iterations(1)
            .addAnimation([this.emoA, this.emoB, this.emoC, this.emoD, this.emoHood]);
    }
    //Rückgabewert als String mit "px"
    pixValue(value) {
        return Math.floor(value).toString() + 'px';
    }
};
EmotionComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController }
];
EmotionComponent.propDecorators = {
    emotion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    emotionWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
EmotionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: '.app-emotion',
        template: _emotion_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_emotion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmotionComponent);



/***/ }),

/***/ 8120:
/*!**************************************************************!*\
  !*** ./src/app/entry-edit-card/entry-edit-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntryEditCardComponent": () => (/* binding */ EntryEditCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _entry_edit_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry-edit-card.component.html?ngResource */ 1123);
/* harmony import */ var _entry_edit_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entry-edit-card.component.scss?ngResource */ 5051);
/* harmony import */ var _emotion_emotion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../emotion/emotion.component.scss?ngResource */ 2136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);







let EntryEditCardComponent = class EntryEditCardComponent {
    constructor(modalController, entry) {
        this.modalController = modalController;
        this.entry = entry;
        this.autoGrow = false;
        this.screenW = window.innerWidth;
        this.screenH = window.innerHeight;
        this.buttonLeft = 20;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    //X-Position zentriert zurückgeben
    centerX(position, objectWidth) {
        return position - objectWidth / 2;
    }
    //Y-Position zentriert zurückgeben
    centerY(position, objectHeight) {
        return position - objectHeight / 2;
    }
    setEmotion(emotion) {
        this.emotion = emotion;
    }
    setEmotionWeight(emotionWeight) {
        this.emotionWeight = emotionWeight;
    }
    close() {
        this.modalController.dismiss();
    }
    //Einstrag speichern und PopUp schließen
    saveEntry() {
        let msg = null;
        if (this.title === '') {
            const conrad = document.getElementById('title').style;
            conrad.border = '1px solid rgba(142,0,130,0.2)';
            conrad.borderRadius = '12px';
            msg++;
        }
        if (this.content === '') {
            const conrad = document.getElementById('content').style;
            conrad.border = '1px solid rgba(142,0,130,0.2)';
            conrad.borderRadius = '12px';
            msg++;
        }
        if (msg === null) {
            const date = new Date();
            this.entry.createNote(this.id, this.title, this.content, this.emotion, this.emotionWeight, date.getDate() + '.'
                + date.getMonth() + '.' + date.getFullYear());
            this.modalController.dismiss();
        }
    }
    //Blockieren der Enter-Taste
    blockEnter($event) {
        if ($event.key === 'Enter') {
            $event.preventDefault();
        }
    }
    //Rückgabewert als String mit "px"
    pixValue(value) {
        return Math.floor(value).toString() + 'px';
    }
};
EntryEditCardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
EntryEditCardComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    dateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    emotion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    emotionWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
EntryEditCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-entry-edit-card',
        template: _entry_edit_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_entry_edit_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__, _emotion_emotion_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], EntryEditCardComponent);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 190);



let DataService = class DataService {
    constructor(storage) {
        this.storage = storage;
        this.entry = [];
        this.loaded = false;
        this.storage.create();
    }
    load() {
        return new Promise((resolve) => {
            this.storage.get('entry').then((entry) => {
                if (entry != null) {
                    this.entry = entry;
                }
                this.loaded = true;
                resolve(true);
            });
        });
    }
    save() {
        this.storage.set('entry', this.entry);
        console.log(this.entry.length);
    }
    getData(id) {
        return this.entry.find(entry => entry.id === id);
    }
    getAll() {
        return this.entry;
    }
    getKey() {
        return this.entry.keys();
    }
    createNote(myId, title, content, emotion, emotionWeight, dateTime) {
        if (myId === undefined) {
            console.log('new Entry');
            const id = Math.max(...this.entry.map(note => parseInt(note.id, 10)), 0) + 1;
            this.entry.push({
                id: id.toString(),
                title,
                content,
                emotion,
                emotionWeight,
                dateTime,
            });
        }
        else {
            const index = this.entry.indexOf(this.getData(myId));
            console.log(this.getData(myId));
            console.log('index ist: ' + index + '  myId ist: ' + myId);
            this.entry[index] =
                { id: myId.toString(),
                    title,
                    content,
                    emotion,
                    emotionWeight,
                    dateTime
                };
        }
        this.save();
    }
    deleteNote(myId) {
        const index = this.entry.indexOf(this.getData(myId));
        if (index > -1) {
            this.entry.splice(index, 1);
            this.save();
        }
    }
    deleteAll() {
        for (let i = this.entry.length; i > -1; i--) {
            this.entry.splice(i, 1);
        }
        this.save();
    }
};
DataService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		102,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2136:
/*!***********************************************************!*\
  !*** ./src/app/emotion/emotion.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".emojis {\n  position: absolute;\n  z-index: 444;\n  transform: scale(0.1);\n  background-color: transparent;\n  color: transparent;\n  margin: 0px auto;\n  top: 70vh;\n}\n\n#emoHood {\n  position: absolute;\n  background-color: transparent;\n  color: transparent;\n  z-index: 999;\n}\n\n#bar {\n  position: absolute;\n  z-index: 10;\n  background-color: transparent;\n  border-radius: 99px;\n  opacity: 0%;\n  box-shadow: inset 3px 1px 2px rgba(0, 0, 0, 0.4);\n}\n\n#barVal {\n  position: absolute;\n  border-radius: 99px;\n  opacity: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtb3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBR0EsNkJBQUE7RUFHQSxrQkFBQTtFQUNBLFlBQUE7QUFORjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBSUEsZ0RBQUE7QUFWRjs7QUFlQTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0FBYkYiLCJmaWxlIjoiZW1vdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmVtb2ppc3tcbiAgLy9ib3JkZXItcmFkaXVzOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDQ0NDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gIHRvcDogNzB2aDtcbn1cblxuI2Vtb0hvb2R7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC8vYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4IGxpZ2h0Z3JheTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiA5OTk7XG59XG5cblxuI2JhcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5cHg7XG4gIG9wYWNpdHk6IDAlO1xuXG4gIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLy9ib3JkZXItcmlnaHQ6ICAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiBpbnNldCAoM3B4IDFweCAycHggcmdiKDAgMCAwIC8gMC40KSk7XG5cblxufVxuXG4jYmFyVmFse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgYm9yZGVyLXJhZGl1czogOTlweDtcbiAgb3BhY2l0eTogMCU7XG5cbiAgLy9ib3gtc2hhZG93OiBpbnNldCAoM3B4IDFweCAycHggcmdiKDAgMCAwIC8gMC40KSk7XG5cblxufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 5051:
/*!***************************************************************************!*\
  !*** ./src/app/entry-edit-card/entry-edit-card.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@keyframes popUp {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.bigTitle {\n  color: white;\n  --ion-item-background: purple;\n}\n#content {\n  font-size: medium;\n}\n#title {\n  font-size: large;\n  color: purple;\n  min-height: 30px;\n}\nion-card, .card-ios, .card-md {\n  border: none !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n}\n.card {\n  border: none !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n}\n#footer {\n  position: absolute;\n  bottom: 0;\n  height: 40px;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJ5LWVkaXQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFO0lBQ0EsV0FBQTtFQUhBO0VBS0E7SUFDRSxVQUFBO0VBSEY7QUFDRjtBQU9BO0VBQ0MsWUFBQTtFQUNDLDZCQUFBO0FBTEY7QUFXQTtFQUNFLGlCQUFBO0FBUkY7QUFZQTtFQUNDLGdCQUFBO0VBQ0EsYUFBQTtFQUNDLGdCQUFBO0FBVEY7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBVkY7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBVkY7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVZGIiwiZmlsZSI6ImVudHJ5LWVkaXQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuQGtleWZyYW1lcyBwb3BVcCB7XG4gIDAle1xuICBvcGFjaXR5OiAwJTtcbn1cbiAgMTAwJXtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuLmJpZ1RpdGxle1xuIGNvbG9yOiB3aGl0ZTtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAgcHVycGxlO1xuXG59XG5cblxuXG4jY29udGVudHtcbiAgZm9udC1zaXplOm1lZGl1bTtcblxufVxuXG4jdGl0bGV7XG4gZm9udC1zaXplOiBsYXJnZTtcbiBjb2xvcjogcHVycGxlO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufVxuXG5cbmlvbi1jYXJkLCAuY2FyZC1pb3MsIC5jYXJkLW1kIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuXG59XG4uY2FyZHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgYm90dG9tIDogMDtcbiAgaGVpZ2h0IDogNDBweDtcbiAgbWFyZ2luLXRvcCA6IDQwcHg7XG59XG5cblxuXG5cbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 1596:
/*!***********************************************************!*\
  !*** ./src/app/emotion/emotion.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-icon src=\"{{emoHoodSrc}}\" (touchmove)=\"setEmotionWeight($event)\" id=\"emoHood\" (click)=\"emojiShow()\"></ion-icon>\n<ion-icon button=\"true\" (click)=\"setEmotion(i)\" class=\"emojis\" *ngFor=\"let item of emojis; index as i\" src=\"{{emojis[i][0]}}\" id=\"{{emojis[i][1]}}\"></ion-icon>\n<div id=\"barVal\"></div><div id=\"bar\"></div>\n";

/***/ }),

/***/ 1123:
/*!***************************************************************************!*\
  !*** ./src/app/entry-edit-card/entry-edit-card.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\" style=\"box-shadow: 0px 0px 10px 1px grey\">\n  <ion-item  class=\"bigTitle\" lines=\"none\">\n    <ion-label class=\"ion-text-center\">Details</ion-label>\n  </ion-item>\n</ion-header >\n<ion-content class=\"ion-no-padding ion-no-margin\">\n<ion-card class=\"ion-no-padding ion-no-margin\">\n<ion-card-header>\n  <ion-card-title class=\"ion-text-end\" style=\"font-size: small; color: darkgray\" >{{dateTime}}</ion-card-title>\n  <ion-card-subtitle style=\"font-size: medium\">\n    <ion-item class=\"ion-no-padding\" > <ion-input enterkeyhint=\"done\" [(ngModel)]=\"title\" id=\"title\" (keydown)=\"blockEnter($event)\" maxlength=\"35\" placeholder=\"Ereignis Überschrift\"  type=\"text\" >\n    </ion-input>\n    </ion-item>\n  </ion-card-subtitle>\n</ion-card-header>\n  <ion-card-content>\n    <ion-item  class=\"ion-no-padding\">\n    <ion-textarea enterkeyhint=\"done\" [(ngModel)]=\"content\" (keydown)=\"blockEnter($event)\" autoGrow=\"{{autoGrow}}\" rows=\"10\" cols=\"10\" maxlength=\"500\"  id=\"content\" placeholder=\"Beschreibe was du denkst\" type=\"text\" ></ion-textarea>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n  <div class=\"app-emotion\"></div>\n</ion-content>\n<ion-footer class=\"ion-float-sm-left\" style=\"bottom: 0px; margin:0px auto; width: 100%; box-shadow: 1px 0px 5px 1px darkgray\">\n  <ion-buttons style=\"background: purple;\" class=\"ion-no-padding\">\n   <ion-button  fill=\"clear\" style=\"width: 50%; color: white;  border-right: 1px solid white\" id=\"saveButton\" (click)=\"saveEntry()\"> <ion-icon slot=\"start\" name=\"checkmark-sharp\"></ion-icon>Save</ion-button>\n  <ion-button  fill=\"clear\" style=\"width: 50%; color: white\" id=\"closeButton\" (click)=\"close()\"><ion-icon slot=\"start\" name=\"close-sharp\"></ion-icon>\n    Close</ion-button>\n  </ion-buttons>\n</ion-footer>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map