webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cspi-interface-detail/cspi-interface-detail.module": [
		271,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSPIInterfaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the CSPIInterfaceService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CSPIInterfaceService = (function () {
    function CSPIInterfaceService(http) {
        this.http = http;
        //private url : string ="../assets/risk.json";
        this.url = 'https://sheetsu.com/apis/v1.0/e44d479d622b';
    }
    CSPIInterfaceService.prototype.getData = function () {
        return this.http.get(this.url)
            .map(function (res) {
            return res.json();
        });
    };
    ;
    CSPIInterfaceService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CSPIInterfaceService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return CSPIInterfaceService;
}());
CSPIInterfaceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CSPIInterfaceService);

//# sourceMappingURL=cspi-interface-service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cspi_interface_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cspi_interface_detail_cspi_interface_detail__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, navParams, cspiInterfaceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cspiInterfaceService = cspiInterfaceService;
        this.term = "";
        this.showSpinner = false;
        this.showSpinner = true;
    }
    HomePage.prototype.ngOnInit = function () {
        this.loadAll();
    };
    HomePage.prototype.loadAll = function () {
        var _this = this;
        this.cspiInterfaceService.getData().subscribe(function (data) {
            _this.data = data;
            (function (error) { return _this.errorMessage = error; });
            _this.showSpinner = false;
        });
    };
    HomePage.prototype.searchFn = function (ev) {
        this.term = ev.target.value;
    };
    HomePage.prototype.showDetails = function (details) {
        var det = JSON.stringify(details);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_cspi_interface_detail_cspi_interface_detail__["a" /* CSPIInterfaceDetail */], { paramPassed: det });
    };
    HomePage.prototype.onCancel = function (ev) {
        ev.target.value = '';
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',
        styles: ["\n    .even { background-color: white;  border-bottom: 1px solid black; }\n    .odd { background-color: #e0e0e0;  border-bottom: 1px solid black;}  \n     "],template:/*ion-inline-start:"F:\Mobile_UI_Ver2\Test_App_ver4\CSPIInterface\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CSPI Interfaces</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n<ion-searchbar class="searchbar"\n  [(ngModel)]="searchText"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="searchFn($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n<!--ion-spinner class="spinner" name="ios" *ngIf="showSpinner"></ion-spinner-->\n<ion-grid>\n  <ion-row align-items-start class="header">\n    <ion-col col-2>\n      ID\n    </ion-col >\n     <ion-col col-2>\n      FNMA Used\n    </ion-col >\n    <ion-col col-6>\n     Function/Interface Description\n    </ion-col>\n    <ion-col col-2 style="text-align:right">\n     View\n    </ion-col>\n  </ion-row>\n\n  \n<ion-spinner class="spinner" name="ios" *ngIf="showSpinner"></ion-spinner>\n  <ion-row  align-items-start *ngFor="let det of data | search :searchText ; let index=index;  let odd=odd; let even=even;"\n  class="row"\n  [ngClass]="{ odd: odd, even: even }" >\n    <ion-col col-2 >\n     {{det ? det.id : ""}}\n    </ion-col>\n    <ion-col col-2 >\n     <ion-icon name="checkmark-circle-outline" item-left *ngIf="det.FNMAUsed === \'TRUE\'" ></ion-icon>\n    </ion-col>\n    <ion-col col-7  *ngIf=\'det.titleMain !== ""\' style="font-weight:bold">\n      {{det ? det.titleMain :""}} {{det?det.title :""}} {{det?det.desc :""}}\n    </ion-col>\n    <ion-col col-7 *ngIf=\'det.titleMain === ""\'>\n       {{det?det.title :""}} {{det?det.desc :""}}\n    </ion-col>\n    <ion-col col-1 >\n     <ion-icon name="eye" item-left (click) = "showDetails(det)" *ngIf="det.FNMAUsed === \'TRUE\'"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n<ion-footer>\n        <p class="text-color">@Fannie Mae</p>\n </ion-footer>\n'/*ion-inline-end:"F:\Mobile_UI_Ver2\Test_App_ver4\CSPIInterface\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_cspi_interface_service__["a" /* CSPIInterfaceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cspi_interface_service__["a" /* CSPIInterfaceService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cspi_interface_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_search_text__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_safe_url__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cspi_interface_detail_cspi_interface_detail__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sms__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_search_text__["a" /* SearchText */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_safe_url__["a" /* SafeUrl */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cspi_interface_detail_cspi_interface_detail__["a" /* CSPIInterfaceDetail */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cspi-interface-detail/cspi-interface-detail.module#CSPIInterfaceDetailModule', name: 'CSPIInterfaceDetail', segment: 'cspi-interface-detail', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cspi_interface_detail_cspi_interface_detail__["a" /* CSPIInterfaceDetail */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_cspi_interface_service__["a" /* CSPIInterfaceService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_sms__["a" /* SMS */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchText; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchText pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SearchText = (function () {
    function SearchText() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchText.prototype.transform = function (list, searchTerm) {
        if (searchTerm) {
            //searchTerm = searchTerm.toUpperCase();
            return list.filter(function (item) {
                return (item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (item.desc.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (item.titleMain.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (item.title.toLowerCase().includes(searchTerm.toLowerCase())));
            });
        }
        else {
            return list;
        }
    };
    return SearchText;
}());
SearchText = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'search',
    })
], SearchText);

//# sourceMappingURL=search-text.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SafeUrl pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SafeUrl = (function () {
    function SafeUrl(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeUrl.prototype.transform = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafeUrl;
}());
SafeUrl = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'safeUrl',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], SafeUrl);

//# sourceMappingURL=safe-url.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Mobile_UI_Ver2\Test_App_ver4\CSPIInterface\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\Mobile_UI_Ver2\Test_App_ver4\CSPIInterface\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSPIInterfaceDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CSPIInterfaceDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CSPIInterfaceDetail = (function () {
    function CSPIInterfaceDetail(navCtrl, navParams, smsVar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.smsVar = smsVar;
        this.showMessageCard = false;
        this.parameter1 = navParams.get('paramPassed');
        this.param1 = JSON.parse(this.parameter1);
    }
    CSPIInterfaceDetail.prototype.ionViewDidLoad = function () {
    };
    CSPIInterfaceDetail.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CSPIInterfaceDetail.prototype.send = function (num) {
        this.showMessageCard = true;
        this.numSMS = num;
    };
    CSPIInterfaceDetail.prototype.sendSMS = function () {
        var _this = this;
        var options = {
            replaceLineBreaks: true
        };
        this.smsVar.send(this.numSMS, this.textMessage, options)
            .then(function () {
            alert("Message sent successfully!");
            _this.showMessageCard = false;
        }, function () {
            alert("Message not sent");
            _this.showMessageCard = false;
        });
    };
    CSPIInterfaceDetail.prototype.close = function () {
        this.showMessageCard = false;
    };
    return CSPIInterfaceDetail;
}());
CSPIInterfaceDetail = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cspi-interface-detail',template:/*ion-inline-start:"F:\Mobile_UI_Ver2\Test_App_ver4\CSPIInterface\src\pages\cspi-interface-detail\cspi-interface-detail.html"*/'<ion-header>\n  <ion-navbar (click)="goBack()">\n    <ion-buttons left style="margin-left:-45px;">\n      <button ion-button icon-only>\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Interfaces Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n\n  <ion-grid>\n    <ion-row align-items-start class="header">\n      <ion-col col-4>\n        Title\n      </ion-col>\n      <ion-col col-8>\n        Details\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="showMessageCard">\n    	<ion-card >\n	<ion-item>\n		<ion-label class="message-label">Message : </ion-label>\n		<ion-input [(ngModel)]="textMessage" type="text" class="message-input"></ion-input>\n	</ion-item>\n	<ion-item>\n		<button ion-button small item-right (click) = "sendSMS()">\n			Send\n		</button>\n		<button ion-button color="light" small item-left (click) = "close()">\n			Close\n		</button>\n	</ion-item>\n</ion-card>\n    </ion-row>\n    <ion-row align-items-start class="table-row-odd">\n      <ion-col col-4 class="table-head">\n        Sourcing Interface ID\n      </ion-col>\n      <ion-col col-8>\n        {{param1.id}}\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-start class="table-row-even">\n      <ion-col col-4 class="table-head">\n        Sourcing Interface Name\n      </ion-col>\n      <ion-col col-8>\n       {{param1.title ? param1.title : ""}} {{param1.desc ? param1.desc : ""}}\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-start class="table-row-odd">\n      <ion-col col-4 class="table-head">\n        Producer\n      </ion-col>\n      <ion-col col-8>\n        <p class="poc-business" *ngIf=\'param1["producer.producerFirst"] !== ""\'>{{param1 ? param1[\'producer.producerFirst\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["producer.producerSecond"]!== ""\'> {{param1? param1[\'producer.producerSecond\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["producer.producerThird"]!== ""\'> {{param1? param1[\'producer.producerThird\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["producer.producerFourth"] !== ""\'> {{param1? param1[\'producer.producerFourth\'] : ""}} </p>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-start class="table-row-even">\n      <ion-col col-4 class="table-head">\n        Enterprise Vend Name\n      </ion-col>\n      <ion-col col-8>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameFirst"] !== ""\'>{{param1 ? param1[\'enterpriseVendName.vendNameFirst\']: ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameSecond"] !== ""\'>{{param1? param1[\'enterpriseVendName.vendNameSecond\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameThird"] !== ""\'>{{param1? param1[\'enterpriseVendName.vendNameThird\']: ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameFourth"] !== ""\'>{{param1? param1[\'enterpriseVendName.vendNameFourth\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameFifth"] !== ""\'>{{param1 ? param1[\'enterpriseVendName.vendNameFifth\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameSixth"] !== ""\'>{{param1 ? param1[\'enterpriseVendName.vendNameSixth\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameSeventh"] !== ""\'>{{param1 ? param1[\'enterpriseVendName.vendNameSeventh\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["enterpriseVendName.vendNameEighth"] !== ""\'>{{param1 ? param1[\'enterpriseVendName.vendNameEighth\']: ""}} </p>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-start class="table-row-odd">\n      <ion-col col-4 class="table-head">\n        END Consumer\n      </ion-col>\n      <ion-col col-8>\n        {{param1.consumer}}\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-start class="table-row-even">\n      <ion-col col-4 class="table-head">\n        Consumer POC\n      </ion-col>\n      <ion-col col-8>\n        <p class="poc"> {{param1 ? param1[\'POC.POCFirst\'] : ""}}</p>\n        <a *ngIf=\'param1["POC.POCFirstContact"] !== ""\' href="tel:{{param1? param1[\'POC.POCFirstContact\'] : \'\'}}" class="call">\n          <ion-icon name="call" item-left></ion-icon>\n        </a>\n        <a *ngIf=\'param1["POC.POCFirstContact"] !== ""\'>\n          <ion-icon name="text" item-left (click) = "send(param1[\'POC.POCFirstContact\'])"></ion-icon>\n        </a>\n        <p class="poc"> {{param1 ? param1[\'POC.POCSecond\'] : ""}} </p>\n        <a *ngIf=\'param1["POC.POCSecondContact"] !== ""\' href="tel:{{param1? param1[\'POC.POCSecondContact\'] : \'\'}}" class="call">\n          <ion-icon name="call" item-left ></ion-icon>\n        </a>\n        <a *ngIf=\'param1["POC.POCSecondContact"] !== ""\'>\n          <ion-icon name="text" item-left (click) = "send(param1[\'POC.POCSecondContact\'])"></ion-icon>\n        </a>\n        <p class="poc"> {{param1 ? param1[\'POC.POCThird\'] : ""}} </p>\n        <a *ngIf=\'param1["POC.POCThirdContact"] !== ""\' href="tel::{{param1 ? param1[\'POC.POCThirdContact\'] : \'\'}}" class="call">\n          <ion-icon name="call" item-left></ion-icon>\n        </a>\n        <a *ngIf=\'param1["POC.POCThirdContact"] !== ""\'>\n          <ion-icon name="text" item-left (click) = "send(param1[\'POC.POCThirdContact\'])"></ion-icon>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-start class="table-row-odd">\n      <ion-col col-4 class="table-head">\n        Business Vending Event Type\n      </ion-col>\n      <ion-col col-8>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameFirst"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameFirst\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameSecond"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameSecond\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameThird"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameThird\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameFourth"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameFourth\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameFifth"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameFifth\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameSixth"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameSixth\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameSeventh"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameSeventh\'] : ""}} </p>\n        <p class="poc-business" *ngIf=\'param1["businessVendEventType.businessVendNameEighth"] !== ""\'>{{param1? param1[\'businessVendEventType.businessVendNameEighth\'] : ""}} </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <p class="text-color">@Fannie Mae</p>\n</ion-footer>\n'/*ion-inline-end:"F:\Mobile_UI_Ver2\Test_App_ver4\CSPIInterface\src\pages\cspi-interface-detail\cspi-interface-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */]])
], CSPIInterfaceDetail);

//# sourceMappingURL=cspi-interface-detail.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map