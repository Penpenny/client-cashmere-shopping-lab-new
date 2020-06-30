(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/router'), require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('shopping-library', ['exports', 'rxjs/operators', '@angular/router', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['shopping-library'] = {}),global.rxjs.operators,global.ng.router,global.ng.core,global.ng.common.http));
}(this, (function (exports,operators,i2,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { RequestOptions, Headers, Http } from '@angular/http';
    var ShoppingLibraryService = /** @class */ (function () {
        // private httpDep: Http
        function ShoppingLibraryService(http, router) {
            this.http = http;
            this.router = router;
            this.data = {
                field: '',
                operator: '',
                value: ''
            };
        }
        /**
         * @param {?} url
         * @return {?}
         */
        ShoppingLibraryService.prototype.setUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.serverUrl = url;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ShoppingLibraryService.prototype.onSignIn = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return this.http
                    .post(this.serverUrl + "/api/v1/auth/login", {
                    email: data.email,
                    password: data.password
                })
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} userdata
         * @return {?}
         */
        ShoppingLibraryService.prototype.onRegister = /**
         * @param {?} userdata
         * @return {?}
         */
            function (userdata) {
                return this.http
                    .post(this.serverUrl + "/api/v1/auth/signup", userdata)
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @return {?}
         */
        ShoppingLibraryService.prototype.getProducts = /**
         * @return {?}
         */
            function () {
                return this.http
                    .get(this.serverUrl + "/api/v1/products?filters=[{\"field\":\"id\",\"table\":\"product\",\"operator\":\"<\",\"value\":\"\"}]")
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        ShoppingLibraryService.prototype.getRandomProduct = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.http
                    .get(this.serverUrl + "/api/v1/products?filters=[{\"field\":\"id\",\"table\":\"product\",\"operator\":\"<\",\"value\":\"" + id + "\"}]")
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        ShoppingLibraryService.prototype.getProductById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.http
                    .get(this.serverUrl + "/api/v1/products?filters=[{\"field\":\"id\",\"table\":\"product\",\"operator\":\"=\",\"value\":\"" + id + "\"}]")
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} inputData
         * @return {?}
         */
        ShoppingLibraryService.prototype.getKitchenProducts = /**
         * @param {?} inputData
         * @return {?}
         */
            function (inputData) {
                /** @type {?} */
                var data = inputData.data;
                console.log(data);
                console.log(this.serverUrl);
                return this.http
                    .get(this.serverUrl + "/api/v1/products?filters=[{\n      \"field\":\"" + data.field + "\",\n      \"table\":\"" + data.table + "\",\n      \"operator\":\"" + data.operator + "\",\n      \"value\":\"" + data.value + "\"\n    }]")
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /* parking app start */
        ///////////// START auth service ////////////
        /* parking app start */
        ///////////// START auth service ////////////
        /**
         * @param {?} email
         * @param {?} password
         * @return {?}
         */
        ShoppingLibraryService.prototype.userLogin = /* parking app start */
            ///////////// START auth service ////////////
            /**
             * @param {?} email
             * @param {?} password
             * @return {?}
             */
            function (email, password) {
                return this.http
                    .post(this.serverUrl + '/auth/login', {
                    email: email,
                    password: password
                }).pipe(operators.map(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) { return response; })));
            };
        /**
         * @param {?} email
         * @return {?}
         */
        ShoppingLibraryService.prototype.sharePasswordLink = /**
         * @param {?} email
         * @return {?}
         */
            function (email) {
                return this.http
                    .post(this.serverUrl + '/auth/passwordReset', { email: email }).pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} userData
         * @return {?}
         */
        ShoppingLibraryService.prototype.userSignup = /**
         * @param {?} userData
         * @return {?}
         */
            function (userData) {
                /** @type {?} */
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                return this.http
                    .post(this.serverUrl + '/auth/signup', {
                    email: userData.email,
                    password: userData.password,
                    username: userData.username,
                    first_name: userData.first_name,
                    last_name: userData.last_name,
                    mobile_phone: userData.mobile_number,
                    organization_name: userData.organization_name
                }).pipe(operators.map(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) { return response; })));
            };
        ///////////// auth service END ////////////
        ///////////// START user service ////////////
        ///////////// auth service END ////////////
        ///////////// START user service ////////////
        /**
         * @param {?} user_id
         * @return {?}
         */
        ShoppingLibraryService.prototype.getUserDetails =
            ///////////// auth service END ////////////
            ///////////// START user service ////////////
            /**
             * @param {?} user_id
             * @return {?}
             */
            function (user_id) {
                return this.http
                    .get(this.serverUrl + "/users/" + user_id)
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} data
         * @param {?} user_id
         * @return {?}
         */
        ShoppingLibraryService.prototype.editUserProfile = /**
         * @param {?} data
         * @param {?} user_id
         * @return {?}
         */
            function (data, user_id) {
                // const user_id = localStorage.getItem('user_id');
                return this.http
                    .put(this.serverUrl + "/users/" + user_id, {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    mobile_phone: data.mobile_phone,
                    email: data.email
                })
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        ///////////// user service END ////////////
        ///////////// START vehicle service ////////////
        ///////////// user service END ////////////
        ///////////// START vehicle service ////////////
        /**
         * @param {?} vehicleMark
         * @param {?} vehicleModel
         * @param {?} vehicleColor
         * @param {?} vehicleNumPlate
         * @param {?} user_id
         * @return {?}
         */
        ShoppingLibraryService.prototype.addNewVehicle =
            ///////////// user service END ////////////
            ///////////// START vehicle service ////////////
            /**
             * @param {?} vehicleMark
             * @param {?} vehicleModel
             * @param {?} vehicleColor
             * @param {?} vehicleNumPlate
             * @param {?} user_id
             * @return {?}
             */
            function (vehicleMark, vehicleModel, vehicleColor, vehicleNumPlate, user_id) {
                /** @type {?} */
                var vehicle = {
                    user_id: user_id,
                    organization_id: 291,
                    vrn: vehicleNumPlate,
                    vehicle_type: 'rental',
                    make: vehicleMark,
                    model: vehicleModel,
                    year: 2019,
                    color: vehicleColor
                };
                /** @type {?} */
                var headers = new Headers();
                // headers.append('auth-token', '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD');
                vehicle.user_id = user_id;
                // const options = new RequestOptions({ headers: headers });
                // .post(this.serverUrl + '/vehicles', vehicle, this.getHeader())
                return this.http
                    .post(this.serverUrl + '/vehicles', vehicle)
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @return {?}
         */
        ShoppingLibraryService.prototype.getAllUserVehicles = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var headers = new Headers();
                // let id = localStorage.getItem('user_id');
                /** @type {?} */
                var u_id = localStorage.getItem('user_id');
                // headers.append('auth-token', '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD');
                // const options = new RequestOptions({ headers: headers });
                return this.http
                    .get(this.serverUrl + ("/vehicles/user/" + u_id))
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} data
         * @param {?} u_id
         * @return {?}
         */
        ShoppingLibraryService.prototype.editUserVehicle = /**
         * @param {?} data
         * @param {?} u_id
         * @return {?}
         */
            function (data, u_id) {
                /** @type {?} */
                var user_id = u_id;
                // const headers = new Headers();
                // headers.append('Content-Type', 'application/x-www-form-urlencoded');
                // const options = new RequestOptions({ headers: headers });
                return this.http
                    .put(this.serverUrl + "/vehicles/" + data.id, {
                    user_id: user_id,
                    organization_id: 291,
                    vrn: data.vrn,
                    vehicle_type: 'rental',
                    make: data.make,
                    model: data.model,
                    year: 2019,
                    color: data.color
                })
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ShoppingLibraryService.prototype.getVehicleById = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                return this.http
                    .get(this.serverUrl + "/vehicles/" + data.id)
                    .pipe(operators.map(( /**
             * @param {?} response
             * @return {?}
             */function (response) { return response; })));
            };
        /**
         * @param {?} id
         * @return {?}
         */
        ShoppingLibraryService.prototype.deleteUserVehicle = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.http.delete(this.serverUrl + "/vehicles/" + id).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) { }), ( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log(err);
                }));
            };
        ///////////// vehicle service END ////////////
        /* parking app end */
        ///////////// vehicle service END ////////////
        /* parking app end */
        /**
         * @return {?}
         */
        ShoppingLibraryService.prototype.getHeader =
            ///////////// vehicle service END ////////////
            /* parking app end */
            /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var aToken = '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD';
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Accept': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + aToken
                    })
                };
                return httpOptions;
            };
        //////////////// START Create Sales Order ///////////////
        /////////// START api service ////////////
        //////////////// START Create Sales Order ///////////////
        /////////// START api service ////////////
        /**
         * @param {?} data
         * @return {?}
         */
        ShoppingLibraryService.prototype.createSalesOrder =
            //////////////// START Create Sales Order ///////////////
            /////////// START api service ////////////
            /**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log('syncing');
                if (data.length !== 0) {
                    this.data['order_item'] = data[0].order;
                    this.data['Order'].merchant_id = data[0].merchantId;
                    this.data['Order'].shipping_date = data[0].shipping_date;
                    this.data['Order'].pos = data[0].pos;
                    this.data['Order'].send_confirmation = data[0].send_confirmation;
                    this.data['Order'].create_bol = data[0].create_bol;
                    if (data[0].estimated_delivery_date) {
                        this.data['Order'].estimated_delivery_date = data[0].estimated_delivery_date;
                    }
                    return this.http
                        .post(this.serverUrl + "/api/v1/order/default/create", this.data)
                        .pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                        return res;
                    })));
                }
            };
        /**
         * @param {?} id
         * @return {?}
         */
        ShoppingLibraryService.prototype.getOrderGuideData = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                return this.http.get(this.serverUrl + "/api/v1/products/merchant/" + id + "?limit=15").pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    return res;
                })));
            };
        /////////// api service END ////////////
        ////////// product service END /////////
        /////////// api service END ////////////
        ////////// product service END /////////
        /**
         * @return {?}
         */
        ShoppingLibraryService.prototype.getCustomersProducts =
            /////////// api service END ////////////
            ////////// product service END /////////
            /**
             * @return {?}
             */
            function () {
                return this.http.get(this.serverUrl + "/api/v1/products?offset=0&limit=10000").pipe(operators.map(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    return response;
                })));
            };
        /**
         * @return {?}
         */
        ShoppingLibraryService.prototype.getAllMerchants = /**
         * @return {?}
         */
            function () {
                return this.http.get(this.serverUrl + "/api/v1/merchants?offset=0&limit=10000").pipe(operators.map(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                    return response;
                })));
            };
        ShoppingLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ShoppingLibraryService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.Router }
            ];
        };
        /** @nocollapse */ ShoppingLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function ShoppingLibraryService_Factory() { return new ShoppingLibraryService(i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: ShoppingLibraryService, providedIn: "root" });
        return ShoppingLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShoppingLibraryComponent = /** @class */ (function () {
        function ShoppingLibraryComponent() {
        }
        /**
         * @return {?}
         */
        ShoppingLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ShoppingLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sl-shopping-library',
                        template: "\n    <p>\n      shopping-library works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ShoppingLibraryComponent.ctorParameters = function () { return []; };
        return ShoppingLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShoppingLibraryModule = /** @class */ (function () {
        function ShoppingLibraryModule() {
        }
        ShoppingLibraryModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ShoppingLibraryComponent],
                        imports: [
                            i1.HttpClientModule
                        ],
                        exports: [ShoppingLibraryComponent]
                    },] }
        ];
        return ShoppingLibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ShoppingLibraryService = ShoppingLibraryService;
    exports.ShoppingLibraryComponent = ShoppingLibraryComponent;
    exports.ShoppingLibraryModule = ShoppingLibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=shopping-library.umd.js.map