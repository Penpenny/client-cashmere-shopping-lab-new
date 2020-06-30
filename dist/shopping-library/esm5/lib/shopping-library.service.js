/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
        }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .post(this.serverUrl + '/auth/passwordReset', { email: email }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
        }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
            .pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response; })));
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
        this.http.delete(this.serverUrl + "/vehicles/" + id).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
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
            headers: new HttpHeaders({
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
                .pipe(map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
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
        return this.http.get(this.serverUrl + "/api/v1/products/merchant/" + id + "?limit=15").pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
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
        return this.http.get(this.serverUrl + "/api/v1/products?offset=0&limit=10000").pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
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
        return this.http.get(this.serverUrl + "/api/v1/merchants?offset=0&limit=10000").pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            return response;
        })));
    };
    ShoppingLibraryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShoppingLibraryService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Router }
    ]; };
    /** @nocollapse */ ShoppingLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function ShoppingLibraryService_Factory() { return new ShoppingLibraryService(i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: ShoppingLibraryService, providedIn: "root" });
    return ShoppingLibraryService;
}());
export { ShoppingLibraryService };
if (false) {
    /** @type {?} */
    ShoppingLibraryService.prototype.serverUrl;
    /** @type {?} */
    ShoppingLibraryService.prototype.data;
    /**
     * @type {?}
     * @private
     */
    ShoppingLibraryService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ShoppingLibraryService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctbGlicmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hvcHBpbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zaG9wcGluZy1saWJyYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFHekM7SUFLRSx3QkFBd0I7SUFDeEIsZ0NBQW9CLElBQWdCLEVBQVUsTUFBYztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM1RCxTQUFJLEdBQUc7WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO0lBTDhELENBQUM7Ozs7O0lBTWpFLHVDQUFNOzs7O0lBQU4sVUFBTyxHQUFHO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCx5Q0FBUTs7OztJQUFSLFVBQVMsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQUksSUFBSSxDQUFDLFNBQVMsdUJBQW9CLEVBQUU7WUFDM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLEVBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsMkNBQVU7Ozs7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Q0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsMkNBQXdDLENBQUMsQ0FBQyxJQUFJLENBQ2xGLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQWtCO1lBQ3JCLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkE1UkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFSUSxVQUFVO2dCQUdWLE1BQU07OztpQ0FKZjtDQXdTQyxBQWpTRCxJQWlTQztTQTlSWSxzQkFBc0I7OztJQUNqQywyQ0FBa0I7O0lBR2xCLHNDQUlFOzs7OztJQUxVLHNDQUF3Qjs7Ozs7SUFBRSx3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQgeyBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycywgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpYnJhcnlTZXJ2aWNlIHtcbiAgc2VydmVyVXJsOiBzdHJpbmc7XG4gIC8vIHByaXZhdGUgaHR0cERlcDogSHR0cFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuICBkYXRhID0ge1xuICAgIGZpZWxkOiAnJyxcbiAgICBvcGVyYXRvcjogJycsXG4gICAgdmFsdWU6ICcnXG4gIH07XG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnNlcnZlclVybCA9IHVybDtcbiAgfVxuXG4gIG9uU2lnbkluKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdChgJHt0aGlzLnNlcnZlclVybH0vYXBpL3YxL2F1dGgvbG9naW5gLCB7XG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZFxuICAgICAgfSlcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgb25SZWdpc3Rlcih1c2VyZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KGAke3RoaXMuc2VydmVyVXJsfS9hcGkvdjEvYXV0aC9zaWdudXBgLCB1c2VyZGF0YSlcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgYCR7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsXG4gICAgICAgIH0vYXBpL3YxL3Byb2R1Y3RzP2ZpbHRlcnM9W3tcImZpZWxkXCI6XCJpZFwiLFwidGFibGVcIjpcInByb2R1Y3RcIixcIm9wZXJhdG9yXCI6XCI8XCIsXCJ2YWx1ZVwiOlwiXCJ9XWBcbiAgICAgIClcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgZ2V0UmFuZG9tUHJvZHVjdChpZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgIGAke1xuICAgICAgICB0aGlzLnNlcnZlclVybFxuICAgICAgICB9L2FwaS92MS9wcm9kdWN0cz9maWx0ZXJzPVt7XCJmaWVsZFwiOlwiaWRcIixcInRhYmxlXCI6XCJwcm9kdWN0XCIsXCJvcGVyYXRvclwiOlwiPFwiLFwidmFsdWVcIjpcIiR7aWR9XCJ9XWBcbiAgICAgIClcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KFxuICAgICAgICBgJHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmxcbiAgICAgICAgfS9hcGkvdjEvcHJvZHVjdHM/ZmlsdGVycz1be1wiZmllbGRcIjpcImlkXCIsXCJ0YWJsZVwiOlwicHJvZHVjdFwiLFwib3BlcmF0b3JcIjpcIj1cIixcInZhbHVlXCI6XCIke2lkfVwifV1gXG4gICAgICApXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG4gIGdldEtpdGNoZW5Qcm9kdWN0cyhpbnB1dERhdGEpIHtcbiAgICBsZXQgZGF0YSA9IGlucHV0RGF0YS5kYXRhO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmVyVXJsKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KFxuICAgICAgICBgJHt0aGlzLnNlcnZlclVybH0vYXBpL3YxL3Byb2R1Y3RzP2ZpbHRlcnM9W3tcbiAgICAgIFwiZmllbGRcIjpcIiR7ZGF0YS5maWVsZH1cIixcbiAgICAgIFwidGFibGVcIjpcIiR7ZGF0YS50YWJsZX1cIixcbiAgICAgIFwib3BlcmF0b3JcIjpcIiR7ZGF0YS5vcGVyYXRvcn1cIixcbiAgICAgIFwidmFsdWVcIjpcIiR7ZGF0YS52YWx1ZX1cIlxuICAgIH1dYFxuICAgICAgKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuXG4gIC8qIHBhcmtpbmcgYXBwIHN0YXJ0ICovXG5cblxuICAvLy8vLy8vLy8vLy8vIFNUQVJUIGF1dGggc2VydmljZSAvLy8vLy8vLy8vLy9cbiAgdXNlckxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh0aGlzLnNlcnZlclVybCArICcvYXV0aC9sb2dpbicsIHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICBzaGFyZVBhc3N3b3JkTGluayhlbWFpbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyAnL2F1dGgvcGFzc3dvcmRSZXNldCcsIHsgZW1haWw6IGVtYWlsIH0pLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuXG4gIHVzZXJTaWdudXAodXNlckRhdGEpIHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh0aGlzLnNlcnZlclVybCArICcvYXV0aC9zaWdudXAnLCB7XG4gICAgICAgIGVtYWlsOiB1c2VyRGF0YS5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXJEYXRhLnBhc3N3b3JkLFxuICAgICAgICB1c2VybmFtZTogdXNlckRhdGEudXNlcm5hbWUsXG4gICAgICAgIGZpcnN0X25hbWU6IHVzZXJEYXRhLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogdXNlckRhdGEubGFzdF9uYW1lLFxuICAgICAgICBtb2JpbGVfcGhvbmU6IHVzZXJEYXRhLm1vYmlsZV9udW1iZXIsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9uYW1lOiB1c2VyRGF0YS5vcmdhbml6YXRpb25fbmFtZVxuICAgICAgfSkucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuICAvLy8vLy8vLy8vLy8vIGF1dGggc2VydmljZSBFTkQgLy8vLy8vLy8vLy8vXG5cblxuXG4gIC8vLy8vLy8vLy8vLy8gU1RBUlQgdXNlciBzZXJ2aWNlIC8vLy8vLy8vLy8vL1xuXG4gIGdldFVzZXJEZXRhaWxzKHVzZXJfaWQpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuc2VydmVyVXJsfS91c2Vycy8ke3VzZXJfaWR9YClcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgZWRpdFVzZXJQcm9maWxlKGRhdGEsIHVzZXJfaWQpIHtcbiAgICAvLyBjb25zdCB1c2VyX2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KGAke3RoaXMuc2VydmVyVXJsfS91c2Vycy8ke3VzZXJfaWR9YCwge1xuICAgICAgICBmaXJzdF9uYW1lOiBkYXRhLmZpcnN0X25hbWUsXG4gICAgICAgIGxhc3RfbmFtZTogZGF0YS5sYXN0X25hbWUsXG4gICAgICAgIG1vYmlsZV9waG9uZTogZGF0YS5tb2JpbGVfcGhvbmUsXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsXG4gICAgICB9KVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLy8vIHVzZXIgc2VydmljZSBFTkQgLy8vLy8vLy8vLy8vXG5cblxuICAvLy8vLy8vLy8vLy8vIFNUQVJUIHZlaGljbGUgc2VydmljZSAvLy8vLy8vLy8vLy9cblxuICBhZGROZXdWZWhpY2xlKFxuICAgIHZlaGljbGVNYXJrOiBzdHJpbmcsXG4gICAgdmVoaWNsZU1vZGVsOiBzdHJpbmcsXG4gICAgdmVoaWNsZUNvbG9yOiBzdHJpbmcsXG4gICAgdmVoaWNsZU51bVBsYXRlOiBzdHJpbmcsXG4gICAgdXNlcl9pZFxuICApIHtcbiAgICBjb25zdCB2ZWhpY2xlID0ge1xuICAgICAgdXNlcl9pZDogdXNlcl9pZCxcbiAgICAgIG9yZ2FuaXphdGlvbl9pZDogMjkxLFxuICAgICAgdnJuOiB2ZWhpY2xlTnVtUGxhdGUsXG4gICAgICB2ZWhpY2xlX3R5cGU6ICdyZW50YWwnLFxuICAgICAgbWFrZTogdmVoaWNsZU1hcmssXG4gICAgICBtb2RlbDogdmVoaWNsZU1vZGVsLFxuICAgICAgeWVhcjogMjAxOSxcbiAgICAgIGNvbG9yOiB2ZWhpY2xlQ29sb3JcbiAgICB9O1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGhlYWRlcnMuYXBwZW5kKCdhdXRoLXRva2VuJywgJy1ZQVVxNWdiTVg5MVlwQWdBZFFBdFdpSkNTSzBBR1VEJyk7XG4gICAgdmVoaWNsZS51c2VyX2lkID0gdXNlcl9pZDtcbiAgICAvLyBjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAvLyAucG9zdCh0aGlzLnNlcnZlclVybCArICcvdmVoaWNsZXMnLCB2ZWhpY2xlLCB0aGlzLmdldEhlYWRlcigpKVxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHRoaXMuc2VydmVyVXJsICsgJy92ZWhpY2xlcycsIHZlaGljbGUpXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG5cbiAgZ2V0QWxsVXNlclZlaGljbGVzKCkge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIC8vIGxldCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJyk7XG4gICAgY29uc3QgdV9pZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJyk7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ2F1dGgtdG9rZW4nLCAnLVlBVXE1Z2JNWDkxWXBBZ0FkUUF0V2lKQ1NLMEFHVUQnKTtcbiAgICAvLyBjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuc2VydmVyVXJsICsgYC92ZWhpY2xlcy91c2VyLyR7dV9pZH1gKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuXG4gIGVkaXRVc2VyVmVoaWNsZShkYXRhLCB1X2lkKSB7XG4gICAgY29uc3QgdXNlcl9pZCA9IHVfaWQ7XG4gICAgLy8gY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAvLyBjb25zdCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KGAke3RoaXMuc2VydmVyVXJsfS92ZWhpY2xlcy8ke2RhdGEuaWR9YCwge1xuICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxuICAgICAgICBvcmdhbml6YXRpb25faWQ6IDI5MSxcbiAgICAgICAgdnJuOiBkYXRhLnZybixcbiAgICAgICAgdmVoaWNsZV90eXBlOiAncmVudGFsJyxcbiAgICAgICAgbWFrZTogZGF0YS5tYWtlLFxuICAgICAgICBtb2RlbDogZGF0YS5tb2RlbCxcbiAgICAgICAgeWVhcjogMjAxOSxcbiAgICAgICAgY29sb3I6IGRhdGEuY29sb3JcbiAgICAgIH0pXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG4gIGdldFZlaGljbGVCeUlkKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KGAke3RoaXMuc2VydmVyVXJsfS92ZWhpY2xlcy9gICsgZGF0YS5pZClcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cblxuICBkZWxldGVVc2VyVmVoaWNsZShpZCkge1xuICAgIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5zZXJ2ZXJVcmx9L3ZlaGljbGVzLyR7aWR9YCkuc3Vic2NyaWJlKFxuICAgICAgZGF0YSA9PiB7IH0sXG4gICAgICBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgLy8vLy8vLy8vLy8vLyB2ZWhpY2xlIHNlcnZpY2UgRU5EIC8vLy8vLy8vLy8vL1xuXG4gIC8qIHBhcmtpbmcgYXBwIGVuZCAqL1xuXG4gIGdldEhlYWRlcigpIHtcbiAgICBjb25zdCBhVG9rZW4gPSAnLVlBVXE1Z2JNWDkxWXBBZ0FkUUF0V2lKQ1NLMEFHVUQnO1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2FUb2tlbn1gXG4gICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4gaHR0cE9wdGlvbnM7XG4gIH1cblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8gU1RBUlQgQ3JlYXRlIFNhbGVzIE9yZGVyIC8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vLy8vLy8vLy8vIFNUQVJUIGFwaSBzZXJ2aWNlIC8vLy8vLy8vLy8vL1xuXG4gIGNyZWF0ZVNhbGVzT3JkZXIoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdzeW5jaW5nJyk7XG4gICAgaWYgKGRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLmRhdGFbJ29yZGVyX2l0ZW0nXSA9IGRhdGFbMF0ub3JkZXI7XG4gICAgICB0aGlzLmRhdGFbJ09yZGVyJ10ubWVyY2hhbnRfaWQgPSBkYXRhWzBdLm1lcmNoYW50SWQ7XG4gICAgICB0aGlzLmRhdGFbJ09yZGVyJ10uc2hpcHBpbmdfZGF0ZSA9IGRhdGFbMF0uc2hpcHBpbmdfZGF0ZTtcbiAgICAgIHRoaXMuZGF0YVsnT3JkZXInXS5wb3MgPSBkYXRhWzBdLnBvcztcbiAgICAgIHRoaXMuZGF0YVsnT3JkZXInXS5zZW5kX2NvbmZpcm1hdGlvbiA9IGRhdGFbMF0uc2VuZF9jb25maXJtYXRpb247XG4gICAgICB0aGlzLmRhdGFbJ09yZGVyJ10uY3JlYXRlX2JvbCA9IGRhdGFbMF0uY3JlYXRlX2JvbDtcblxuICAgICAgaWYgKGRhdGFbMF0uZXN0aW1hdGVkX2RlbGl2ZXJ5X2RhdGUpIHtcbiAgICAgICAgdGhpcy5kYXRhWydPcmRlciddLmVzdGltYXRlZF9kZWxpdmVyeV9kYXRlID0gZGF0YVswXS5lc3RpbWF0ZWRfZGVsaXZlcnlfZGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLnBvc3QoYCR7dGhpcy5zZXJ2ZXJVcmx9L2FwaS92MS9vcmRlci9kZWZhdWx0L2NyZWF0ZWAsIHRoaXMuZGF0YSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKHJlcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cblxuICBnZXRPcmRlckd1aWRlRGF0YShpZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuc2VydmVyVXJsfS9hcGkvdjEvcHJvZHVjdHMvbWVyY2hhbnQvJHtpZH0/bGltaXQ9MTVgKS5waXBlKG1hcChyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KSk7XG4gIH1cblxuICAvLy8vLy8vLy8vLyBhcGkgc2VydmljZSBFTkQgLy8vLy8vLy8vLy8vXG5cblxuICAvLy8vLy8vLy8vIHByb2R1Y3Qgc2VydmljZSBFTkQgLy8vLy8vLy8vXG4gIGdldEN1c3RvbWVyc1Byb2R1Y3RzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuc2VydmVyVXJsfS9hcGkvdjEvcHJvZHVjdHM/b2Zmc2V0PTAmbGltaXQ9MTAwMDBgKS5waXBlKFxuICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWxsTWVyY2hhbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuc2VydmVyVXJsfS9hcGkvdjEvbWVyY2hhbnRzP29mZnNldD0wJmxpbWl0PTEwMDAwYCkucGlwZShcbiAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8gcHJvZHVjdCBzZXJ2aWNlIEVORCAvLy8vLy8vLy9cblxuICAvLy8vLy8vLy8vLy8vLy8vIENyZWF0ZSBTYWxlcyBPcmRlciBFTkQgLy8vLy8vLy8vLy8vLy8vXG59XG4iXX0=