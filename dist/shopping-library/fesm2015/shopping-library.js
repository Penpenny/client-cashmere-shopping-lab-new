import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable, Component, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { RequestOptions, Headers, Http } from '@angular/http';
class ShoppingLibraryService {
    // private httpDep: Http
    /**
     * @param {?} http
     * @param {?} router
     */
    constructor(http, router) {
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
    setUrl(url) {
        this.serverUrl = url;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    onSignIn(data) {
        return this.http
            .post(`${this.serverUrl}/api/v1/auth/login`, {
            email: data.email,
            password: data.password
        })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} userdata
     * @return {?}
     */
    onRegister(userdata) {
        return this.http
            .post(`${this.serverUrl}/api/v1/auth/signup`, userdata)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @return {?}
     */
    getProducts() {
        return this.http
            .get(`${this.serverUrl}/api/v1/products?filters=[{"field":"id","table":"product","operator":"<","value":""}]`)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getRandomProduct(id) {
        return this.http
            .get(`${this.serverUrl}/api/v1/products?filters=[{"field":"id","table":"product","operator":"<","value":"${id}"}]`)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getProductById(id) {
        return this.http
            .get(`${this.serverUrl}/api/v1/products?filters=[{"field":"id","table":"product","operator":"=","value":"${id}"}]`)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} inputData
     * @return {?}
     */
    getKitchenProducts(inputData) {
        /** @type {?} */
        let data = inputData.data;
        console.log(data);
        console.log(this.serverUrl);
        return this.http
            .get(`${this.serverUrl}/api/v1/products?filters=[{
      "field":"${data.field}",
      "table":"${data.table}",
      "operator":"${data.operator}",
      "value":"${data.value}"
    }]`)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /* parking app start */
    ///////////// START auth service ////////////
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    userLogin(email, password) {
        return this.http
            .post(this.serverUrl + '/auth/login', {
            email: email,
            password: password
        }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} email
     * @return {?}
     */
    sharePasswordLink(email) {
        return this.http
            .post(this.serverUrl + '/auth/passwordReset', { email: email }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} userData
     * @return {?}
     */
    userSignup(userData) {
        /** @type {?} */
        const headers = new Headers();
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
        }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    ///////////// auth service END ////////////
    ///////////// START user service ////////////
    /**
     * @param {?} user_id
     * @return {?}
     */
    getUserDetails(user_id) {
        return this.http
            .get(`${this.serverUrl}/users/${user_id}`)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} data
     * @param {?} user_id
     * @return {?}
     */
    editUserProfile(data, user_id) {
        // const user_id = localStorage.getItem('user_id');
        return this.http
            .put(`${this.serverUrl}/users/${user_id}`, {
            first_name: data.first_name,
            last_name: data.last_name,
            mobile_phone: data.mobile_phone,
            email: data.email
        })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
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
    addNewVehicle(vehicleMark, vehicleModel, vehicleColor, vehicleNumPlate, user_id) {
        /** @type {?} */
        const vehicle = {
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
        const headers = new Headers();
        // headers.append('auth-token', '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD');
        vehicle.user_id = user_id;
        // const options = new RequestOptions({ headers: headers });
        // .post(this.serverUrl + '/vehicles', vehicle, this.getHeader())
        return this.http
            .post(this.serverUrl + '/vehicles', vehicle)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @return {?}
     */
    getAllUserVehicles() {
        /** @type {?} */
        const headers = new Headers();
        // let id = localStorage.getItem('user_id');
        /** @type {?} */
        const u_id = localStorage.getItem('user_id');
        // headers.append('auth-token', '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD');
        // const options = new RequestOptions({ headers: headers });
        return this.http
            .get(this.serverUrl + `/vehicles/user/${u_id}`)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} data
     * @param {?} u_id
     * @return {?}
     */
    editUserVehicle(data, u_id) {
        /** @type {?} */
        const user_id = u_id;
        // const headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // const options = new RequestOptions({ headers: headers });
        return this.http
            .put(`${this.serverUrl}/vehicles/${data.id}`, {
            user_id: user_id,
            organization_id: 291,
            vrn: data.vrn,
            vehicle_type: 'rental',
            make: data.make,
            model: data.model,
            year: 2019,
            color: data.color
        })
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getVehicleById(data) {
        return this.http
            .get(`${this.serverUrl}/vehicles/` + data.id)
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => response)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteUserVehicle(id) {
        this.http.delete(`${this.serverUrl}/vehicles/${id}`).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => { }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            console.log(err);
        }));
    }
    ///////////// vehicle service END ////////////
    /* parking app end */
    /**
     * @return {?}
     */
    getHeader() {
        /** @type {?} */
        const aToken = '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD';
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Accept': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${aToken}`
            })
        };
        return httpOptions;
    }
    //////////////// START Create Sales Order ///////////////
    /////////// START api service ////////////
    /**
     * @param {?} data
     * @return {?}
     */
    createSalesOrder(data) {
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
                .post(`${this.serverUrl}/api/v1/order/default/create`, this.data)
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                return res;
            })));
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getOrderGuideData(id) {
        return this.http.get(`${this.serverUrl}/api/v1/products/merchant/${id}?limit=15`).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            return res;
        })));
    }
    /////////// api service END ////////////
    ////////// product service END /////////
    /**
     * @return {?}
     */
    getCustomersProducts() {
        return this.http.get(`${this.serverUrl}/api/v1/products?offset=0&limit=10000`).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            return response;
        })));
    }
    /**
     * @return {?}
     */
    getAllMerchants() {
        return this.http.get(`${this.serverUrl}/api/v1/merchants?offset=0&limit=10000`).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            return response;
        })));
    }
}
ShoppingLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ShoppingLibraryService.ctorParameters = () => [
    { type: HttpClient },
    { type: Router }
];
/** @nocollapse */ ShoppingLibraryService.ngInjectableDef = defineInjectable({ factory: function ShoppingLibraryService_Factory() { return new ShoppingLibraryService(inject(HttpClient), inject(Router)); }, token: ShoppingLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShoppingLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ShoppingLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'sl-shopping-library',
                template: `
    <p>
      shopping-library works!
    </p>
  `
            }] }
];
/** @nocollapse */
ShoppingLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShoppingLibraryModule {
}
ShoppingLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShoppingLibraryComponent],
                imports: [
                    HttpClientModule
                ],
                exports: [ShoppingLibraryComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ShoppingLibraryService, ShoppingLibraryComponent, ShoppingLibraryModule };

//# sourceMappingURL=shopping-library.js.map