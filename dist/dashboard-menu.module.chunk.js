webpackJsonp(["dashboard-menu.module"],{

/***/ "../../../../../src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/_resolves/dashboard.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__ = __webpack_require__("../../../../../src/app/_services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_user__ = __webpack_require__("../../../../../src/app/_models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashboardResolver = (function () {
    function DashboardResolver(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    DashboardResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.userService.userIdentity()
            .map(function (response) {
            var responseUser = response.result;
            if (responseUser) {
                var user = new __WEBPACK_IMPORTED_MODULE_8__models_user__["a" /* User */]();
                user.id = responseUser.id;
                user.firstName = responseUser.firstName;
                user.lastName = responseUser.lastName;
                user.username = responseUser.userName;
                user.email = responseUser.email;
                user.photo = responseUser.photo;
                user.roles = responseUser.roles;
                var adminRole = user.roles.includes('Admin');
                if (adminRole) {
                    _this.authService.user = user;
                    return user;
                }
                else
                    return null;
            }
            _this.router.navigate(['/login']);
            return null;
        })
            .catch(function (error) {
            console.log("User retrieval error: " + error);
            _this.router.navigate(['/login']);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        });
    };
    return DashboardResolver;
}());
DashboardResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_users_users_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
], DashboardResolver);

var _a, _b, _c;
//# sourceMappingURL=dashboard.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/_services/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.apiURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + 'api/admin/';
    }
    DashboardService.prototype.getDashFigures = function () {
        return this.http.get(this.apiURL + 'dashboard').map(function (res) {
            return res;
        });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard-menu/dashboard-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-body {\r\n  margin-left: 135px;\r\n}\r\n\r\n#header {\r\n  height: 75px;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n#top-logo {\r\n  height: 60px;\r\n}\r\n\r\n#notifications {\r\n  color: blue;\r\n  float: right;\r\n}\r\n\r\n#sidenav, #sidenav-mini {\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 75px;\r\n  padding-left: 0px;\r\n  padding-top: 3px;\r\n  background-color: #eceadf;\r\n}\r\n\r\n#content-body {\r\n padding-top: 75px;\r\n}\r\n\r\n#minigutter {\r\n  display:none;\r\n}\r\n\r\n/*\r\n\r\n@media screen and (min-width: 40.063em) {\r\n*/\r\n\r\n@media only screen and (max-width: 1000px) {\r\n\r\n  #sidegutter {\r\n    display: none;\r\n  }\r\n\r\n  #minigutter {\r\n    display: block;\r\n  }\r\n\r\n}\r\n\r\n/*\r\n@media only screen and (max-width: 40em) {\r\n*/\r\n\r\n@media only screen and (max-width: 400px) {\r\n\r\n\r\n  #sidegutter {\r\n    display: none;\r\n  }\r\n\r\n  #minigutter {\r\n    display: block;\r\n  }\r\n}\r\n\r\n>>> .dashContainer {\r\n  font-family: \"Roboto\";\r\n  margin-right: 10px;\r\n}\r\n\r\n>>> .header {\r\n  padding: 1em;\r\n  color: white;\r\n  background-color: #ba8787;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n>>> .dashContainer .header h1 {margin:0;}\r\n\r\n>>> .ui-inputgroup { margin: auto; position: relative; top: 11px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-menu/dashboard-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-g-nopad\" id=\"header\">\r\n    <div class=\"ui-g-10\">\r\n        <img src=\"../../assets/img/nexus-logo.jpg\"  id=\"top-logo\" />\r\n    </div>\r\n    <div class=\"ui-g-2\" id=\"notifications\">\r\n\r\n    </div>\r\n</div>\r\n<div class=\"ui-g ui-g-nopad\">\r\n    <div class=\"ui-g-2 ui-g-nopad\" id=\"sidegutter\">\r\n        <div id=\"sidenav\">\r\n            <p-menu #bigMenu [model]=\"menuItems\"></p-menu>  \r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2 ui-g-nopad\" id=\"minigutter\">\r\n        <div id=\"sidenav-mini\">\r\n            <p-menu #smallMenu [model]=\"miniMenuItems\"></p-menu> \r\n        </div>\r\n    </div>\r\n       \r\n\r\n    <div id=\"content-body\" class=\"ui-g-10 ui-g-nopad\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard-menu/dashboard-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__ = __webpack_require__("../../../../primeng/components/menu/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardMenuComponent = (function () {
    function DashboardMenuComponent(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
    }
    DashboardMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (user) {
            var admin = user.user;
            if (admin != null) {
                var role = admin.roles.includes('Admin');
                if (!role)
                    _this.router.navigate(['/login']);
            }
            else
                _this.router.navigate(['/login']);
        });
        var handleSelected = function (event) {
            var allMenus = jQuery(event.originalEvent.target).closest('ul');
            var allLinks = allMenus.find('.menu-selected');
            allLinks.removeClass("menu-selected");
            var selected = jQuery(event.originalEvent.target).closest('a');
            selected.addClass('menu-selected');
        };
        this.menuItems = [
            { label: 'Dashboard', icon: 'fa-bar-chart', styleClass: 'menu-selected', routerLink: ['/dashboard', 'main'], command: function (event) { return handleSelected(event); } },
            { label: 'Users', icon: 'fa-users', routerLink: ['/dashboard', 'users'], command: function (event) { return handleSelected(event); } },
            { label: 'Online', icon: 'fa-plug', routerLink: ['/dashboard', 'online'], command: function (event) { return handleSelected(event); } },
            { label: 'Chasers', icon: 'fa-diamond', routerLink: ['/dashboard', 'chasers'], command: function (event) { return handleSelected(event); } },
            { label: 'Broadcasts', icon: 'fa-wifi', routerLink: ['/dashboard', 'broadcasts'], command: function (event) { return handleSelected(event); } },
            { label: 'My Profile', icon: 'fa-user-circle' },
            { label: 'Settings', icon: 'fa-sliders' },
        ];
        this.miniMenuItems = [];
        this.menuItems.forEach(function (item) {
            var miniItem = { icon: item.icon, routerLink: item.routerLink };
            _this.miniMenuItems.push(miniItem);
        });
    };
    return DashboardMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bigMenu'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"]) === "function" && _a || Object)
], DashboardMenuComponent.prototype, "bigMenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('smallMenu'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_menu_menu__["Menu"]) === "function" && _b || Object)
], DashboardMenuComponent.prototype, "smallMenu", void 0);
DashboardMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/dashboard-menu/dashboard-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard-menu/dashboard-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _e || Object])
], DashboardMenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard-menu/dashboard-menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMenuModule", function() { return DashboardMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolves_dashboard_resolve__ = __webpack_require__("../../../../../src/app/_resolves/dashboard.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_searchOptions_service__ = __webpack_require__("../../../../../src/app/_services/searchOptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/_services/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__broadcasts_broadcasts_module__ = __webpack_require__("../../../../../src/app/broadcasts/broadcasts.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__online_online_module__ = __webpack_require__("../../../../../src/app/online/online.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_menu_component__ = __webpack_require__("../../../../../src/app/dashboard-menu/dashboard-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// App wide services


// feature modules




// components


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__dashboard_menu_component__["a" /* DashboardMenuComponent */],
        resolve: { user: __WEBPACK_IMPORTED_MODULE_2__resolves_dashboard_resolve__["a" /* DashboardResolver */] },
        children: [
            { path: 'main', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'users', loadChildren: '../users/users.module#UsersModule' },
            { path: 'online', loadChildren: '../online/online.module#OnlineModule' },
            { path: 'broadcasts', loadChildren: '../broadcasts/broadcasts.module#BroadcastsModule' },
            { path: 'chasers', loadChildren: '../chasers/chasers.module#ChasersModule' }
        ]
    }
];
var DashboardMenuModule = (function () {
    function DashboardMenuModule() {
    }
    return DashboardMenuModule;
}());
DashboardMenuModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* Shared_Module */],
            __WEBPACK_IMPORTED_MODULE_6__users_users_module__["UsersModule"],
            __WEBPACK_IMPORTED_MODULE_7__broadcasts_broadcasts_module__["BroadcastsModule"],
            __WEBPACK_IMPORTED_MODULE_8__online_online_module__["OnlineModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__dashboard_menu_component__["a" /* DashboardMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__resolves_dashboard_resolve__["a" /* DashboardResolver */],
            __WEBPACK_IMPORTED_MODULE_4__services_dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_3__services_searchOptions_service__["a" /* SearchOptionsService */]
        ]
    })
], DashboardMenuModule);

//# sourceMappingURL=dashboard-menu.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ">>> .ui-panel .ui-panel-titlebar { text-align:center }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\r\n    <at-statistic label=\"Users\" [value]=\"totalUsers\" icon=\"fa-users\" colour=\"#00ACAC\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\r\n\r\n    <at-statistic label=\"New Users\" [value]=\"newUsers\" icon=\"fa-plus\" colour=\"#2F8EE5\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\r\n\r\n    <at-statistic label=\"Online\" [value]=\"onlineUsers\" icon=\"fa-plug\" colour=\"#6C76AF\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\r\n\r\n    <at-statistic label=\"Broadcasting\" [value]=\"broadcastUsers\" icon=\"fa-wifi\" colour=\"#EFA64C\" class=\"ui-g-12 ui-md-6 ui-lg-3\"></at-statistic>\r\n\r\n</div>\r\n\r\n<div class=\"ui-g\">\r\n\r\n    <p-panel header=\"Newest\" class=\"ui-g-12 ui-md-6\">\r\n        <app-userstable [collection]=\"users\"></app-userstable>\r\n    </p-panel>\r\n\r\n    <p-panel header=\"Broadcasting\" class=\"ui-g-12 ui-md-6\">\r\n        <app-userstable [collection]=\"broadcasters\"></app-userstable>\r\n    </p-panel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/_services/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__ = __webpack_require__("../../../../../src/app/_services/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_broadcasts_broadcasts_service__ = __webpack_require__("../../../../../src/app/_services/broadcasts/broadcasts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(dashService, userService, broadcastService) {
        this.dashService = dashService;
        this.userService = userService;
        this.broadcastService = broadcastService;
        this.users = [];
        this.broadcasters = [];
        this.setupConfig = function (data) {
            data.config = {
                firstCol: "false",
                lastCol: "false",
                emailCol: "false",
                activeCol: "false",
                sortFirst: false,
                sortLast: false,
                sortUsername: false,
                sortEmail: false,
                sortDate: false
            };
            return data;
        };
        this.users.config = {};
        this.broadcasters.config = {};
        this.broadcasters.loading = true;
        this.users.loading = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashService.getDashFigures().subscribe(function (data) {
            return _this.MapDash(data);
        });
        var query = {
            first: 0,
            rows: 10
        };
        this.userService.getUsers(query).subscribe(function (data) {
            return _this.setupUsersComponent(data);
        });
        this.broadcastService.getBroadcasters(query).subscribe(function (data) {
            return _this.setupBroadcastComponent(data);
        });
    };
    DashboardComponent.prototype.MapDash = function (data) {
        this.totalUsers = data.users;
        this.onlineUsers = data.online;
        this.broadcastUsers = data.broadcasting;
        this.newUsers = data.newUsers;
    };
    ;
    DashboardComponent.prototype.setupUsersComponent = function (data) {
        this.users = this.setupConfig(this.users);
        this.users.index = data.index;
        this.users.total = data.total;
        this.users.results = data.results;
    };
    DashboardComponent.prototype.setupBroadcastComponent = function (data) {
        this.broadcasters = this.setupConfig(this.broadcasters);
        this.broadcasters.loading = false;
        this.broadcasters.index = data.index;
        this.broadcasters.total = data.total;
        this.broadcasters.results = data.results;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_broadcasts_broadcasts_service__["a" /* BroadcastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_broadcasts_broadcasts_service__["a" /* BroadcastService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var of_1 = __webpack_require__("../../../../rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/catch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var catch_1 = __webpack_require__("../../../../rxjs/operator/catch.js");
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ })

});
//# sourceMappingURL=dashboard-menu.module.chunk.js.map