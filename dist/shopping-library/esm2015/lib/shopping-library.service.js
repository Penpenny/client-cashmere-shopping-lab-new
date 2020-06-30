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
export class ShoppingLibraryService {
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
/** @nocollapse */ ShoppingLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function ShoppingLibraryService_Factory() { return new ShoppingLibraryService(i0.inject(i1.HttpClient), i0.inject(i2.Router)); }, token: ShoppingLibraryService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctbGlicmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2hvcHBpbmctbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zaG9wcGluZy1saWJyYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFNekMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBR2pDLFlBQW9CLElBQWdCLEVBQVUsTUFBYztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM1RCxTQUFJLEdBQUc7WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO0lBTDhELENBQUM7Ozs7O0lBTWpFLE1BQU0sQ0FBQyxHQUFHO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxvQkFBb0IsRUFBRTtZQUMzQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxRQUFRO1FBQ2pCLE9B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QUNSLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztTQUNMO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyw2QkFBNkIsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9GLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQU1ELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsdUNBQXVDLENBQUMsQ0FBQyxJQUFJLENBQ2pGLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtZQUN6QixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsd0NBQXdDLENBQUMsQ0FBQyxJQUFJLENBQ2xGLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRTtZQUN6QixPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBNVJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFVBQVU7WUFHVixNQUFNOzs7OztJQU9iLDJDQUFrQjs7SUFHbEIsc0NBSUU7Ozs7O0lBTFUsc0NBQXdCOzs7OztJQUFFLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlicmFyeVNlcnZpY2Uge1xuICBzZXJ2ZXJVcmw6IHN0cmluZztcbiAgLy8gcHJpdmF0ZSBodHRwRGVwOiBIdHRwXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG4gIGRhdGEgPSB7XG4gICAgZmllbGQ6ICcnLFxuICAgIG9wZXJhdG9yOiAnJyxcbiAgICB2YWx1ZTogJydcbiAgfTtcbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMuc2VydmVyVXJsID0gdXJsO1xuICB9XG5cbiAgb25TaWduSW4oZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KGAke3RoaXMuc2VydmVyVXJsfS9hcGkvdjEvYXV0aC9sb2dpbmAsIHtcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkXG4gICAgICB9KVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICBvblJlZ2lzdGVyKHVzZXJkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QoYCR7dGhpcy5zZXJ2ZXJVcmx9L2FwaS92MS9hdXRoL3NpZ251cGAsIHVzZXJkYXRhKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICBnZXRQcm9kdWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KFxuICAgICAgICBgJHtcbiAgICAgICAgdGhpcy5zZXJ2ZXJVcmxcbiAgICAgICAgfS9hcGkvdjEvcHJvZHVjdHM/ZmlsdGVycz1be1wiZmllbGRcIjpcImlkXCIsXCJ0YWJsZVwiOlwicHJvZHVjdFwiLFwib3BlcmF0b3JcIjpcIjxcIixcInZhbHVlXCI6XCJcIn1dYFxuICAgICAgKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICBnZXRSYW5kb21Qcm9kdWN0KGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgYCR7XG4gICAgICAgIHRoaXMuc2VydmVyVXJsXG4gICAgICAgIH0vYXBpL3YxL3Byb2R1Y3RzP2ZpbHRlcnM9W3tcImZpZWxkXCI6XCJpZFwiLFwidGFibGVcIjpcInByb2R1Y3RcIixcIm9wZXJhdG9yXCI6XCI8XCIsXCJ2YWx1ZVwiOlwiJHtpZH1cIn1dYFxuICAgICAgKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICBnZXRQcm9kdWN0QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgIGAke1xuICAgICAgICB0aGlzLnNlcnZlclVybFxuICAgICAgICB9L2FwaS92MS9wcm9kdWN0cz9maWx0ZXJzPVt7XCJmaWVsZFwiOlwiaWRcIixcInRhYmxlXCI6XCJwcm9kdWN0XCIsXCJvcGVyYXRvclwiOlwiPVwiLFwidmFsdWVcIjpcIiR7aWR9XCJ9XWBcbiAgICAgIClcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgZ2V0S2l0Y2hlblByb2R1Y3RzKGlucHV0RGF0YSkge1xuICAgIGxldCBkYXRhID0gaW5wdXREYXRhLmRhdGE7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmwpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgIGAke3RoaXMuc2VydmVyVXJsfS9hcGkvdjEvcHJvZHVjdHM/ZmlsdGVycz1be1xuICAgICAgXCJmaWVsZFwiOlwiJHtkYXRhLmZpZWxkfVwiLFxuICAgICAgXCJ0YWJsZVwiOlwiJHtkYXRhLnRhYmxlfVwiLFxuICAgICAgXCJvcGVyYXRvclwiOlwiJHtkYXRhLm9wZXJhdG9yfVwiLFxuICAgICAgXCJ2YWx1ZVwiOlwiJHtkYXRhLnZhbHVlfVwiXG4gICAgfV1gXG4gICAgICApXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG5cbiAgLyogcGFya2luZyBhcHAgc3RhcnQgKi9cblxuXG4gIC8vLy8vLy8vLy8vLy8gU1RBUlQgYXV0aCBzZXJ2aWNlIC8vLy8vLy8vLy8vL1xuICB1c2VyTG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHRoaXMuc2VydmVyVXJsICsgJy9hdXRoL2xvZ2luJywge1xuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSkucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG4gIHNoYXJlUGFzc3dvcmRMaW5rKGVtYWlsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh0aGlzLnNlcnZlclVybCArICcvYXV0aC9wYXNzd29yZFJlc2V0JywgeyBlbWFpbDogZW1haWwgfSkucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG5cbiAgdXNlclNpZ251cCh1c2VyRGF0YSkge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHRoaXMuc2VydmVyVXJsICsgJy9hdXRoL3NpZ251cCcsIHtcbiAgICAgICAgZW1haWw6IHVzZXJEYXRhLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdXNlckRhdGEucGFzc3dvcmQsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyRGF0YS51c2VybmFtZSxcbiAgICAgICAgZmlyc3RfbmFtZTogdXNlckRhdGEuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiB1c2VyRGF0YS5sYXN0X25hbWUsXG4gICAgICAgIG1vYmlsZV9waG9uZTogdXNlckRhdGEubW9iaWxlX251bWJlcixcbiAgICAgICAgb3JnYW5pemF0aW9uX25hbWU6IHVzZXJEYXRhLm9yZ2FuaXphdGlvbl9uYW1lXG4gICAgICB9KS5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG4gIC8vLy8vLy8vLy8vLy8gYXV0aCBzZXJ2aWNlIEVORCAvLy8vLy8vLy8vLy9cblxuXG5cbiAgLy8vLy8vLy8vLy8vLyBTVEFSVCB1c2VyIHNlcnZpY2UgLy8vLy8vLy8vLy8vXG5cbiAgZ2V0VXNlckRldGFpbHModXNlcl9pZCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L3VzZXJzLyR7dXNlcl9pZH1gKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuICBlZGl0VXNlclByb2ZpbGUoZGF0YSwgdXNlcl9pZCkge1xuICAgIC8vIGNvbnN0IHVzZXJfaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9pZCcpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L3VzZXJzLyR7dXNlcl9pZH1gLCB7XG4gICAgICAgIGZpcnN0X25hbWU6IGRhdGEuZmlyc3RfbmFtZSxcbiAgICAgICAgbGFzdF9uYW1lOiBkYXRhLmxhc3RfbmFtZSxcbiAgICAgICAgbW9iaWxlX3Bob25lOiBkYXRhLm1vYmlsZV9waG9uZSxcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWxcbiAgICAgIH0pXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8gdXNlciBzZXJ2aWNlIEVORCAvLy8vLy8vLy8vLy9cblxuXG4gIC8vLy8vLy8vLy8vLy8gU1RBUlQgdmVoaWNsZSBzZXJ2aWNlIC8vLy8vLy8vLy8vL1xuXG4gIGFkZE5ld1ZlaGljbGUoXG4gICAgdmVoaWNsZU1hcms6IHN0cmluZyxcbiAgICB2ZWhpY2xlTW9kZWw6IHN0cmluZyxcbiAgICB2ZWhpY2xlQ29sb3I6IHN0cmluZyxcbiAgICB2ZWhpY2xlTnVtUGxhdGU6IHN0cmluZyxcbiAgICB1c2VyX2lkXG4gICkge1xuICAgIGNvbnN0IHZlaGljbGUgPSB7XG4gICAgICB1c2VyX2lkOiB1c2VyX2lkLFxuICAgICAgb3JnYW5pemF0aW9uX2lkOiAyOTEsXG4gICAgICB2cm46IHZlaGljbGVOdW1QbGF0ZSxcbiAgICAgIHZlaGljbGVfdHlwZTogJ3JlbnRhbCcsXG4gICAgICBtYWtlOiB2ZWhpY2xlTWFyayxcbiAgICAgIG1vZGVsOiB2ZWhpY2xlTW9kZWwsXG4gICAgICB5ZWFyOiAyMDE5LFxuICAgICAgY29sb3I6IHZlaGljbGVDb2xvclxuICAgIH07XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ2F1dGgtdG9rZW4nLCAnLVlBVXE1Z2JNWDkxWXBBZ0FkUUF0V2lKQ1NLMEFHVUQnKTtcbiAgICB2ZWhpY2xlLnVzZXJfaWQgPSB1c2VyX2lkO1xuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIC8vIC5wb3N0KHRoaXMuc2VydmVyVXJsICsgJy92ZWhpY2xlcycsIHZlaGljbGUsIHRoaXMuZ2V0SGVhZGVyKCkpXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodGhpcy5zZXJ2ZXJVcmwgKyAnL3ZlaGljbGVzJywgdmVoaWNsZSlcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cblxuICBnZXRBbGxVc2VyVmVoaWNsZXMoKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gbGV0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKTtcbiAgICBjb25zdCB1X2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZCgnYXV0aC10b2tlbicsICctWUFVcTVnYk1YOTFZcEFnQWRRQXRXaUpDU0swQUdVRCcpO1xuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5zZXJ2ZXJVcmwgKyBgL3ZlaGljbGVzL3VzZXIvJHt1X2lkfWApXG4gICAgICAucGlwZShtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpKTtcbiAgfVxuXG5cbiAgZWRpdFVzZXJWZWhpY2xlKGRhdGEsIHVfaWQpIHtcbiAgICBjb25zdCB1c2VyX2lkID0gdV9pZDtcbiAgICAvLyBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L3ZlaGljbGVzLyR7ZGF0YS5pZH1gLCB7XG4gICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXG4gICAgICAgIG9yZ2FuaXphdGlvbl9pZDogMjkxLFxuICAgICAgICB2cm46IGRhdGEudnJuLFxuICAgICAgICB2ZWhpY2xlX3R5cGU6ICdyZW50YWwnLFxuICAgICAgICBtYWtlOiBkYXRhLm1ha2UsXG4gICAgICAgIG1vZGVsOiBkYXRhLm1vZGVsLFxuICAgICAgICB5ZWFyOiAyMDE5LFxuICAgICAgICBjb2xvcjogZGF0YS5jb2xvclxuICAgICAgfSlcbiAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZSkpO1xuICB9XG5cbiAgZ2V0VmVoaWNsZUJ5SWQoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L3ZlaGljbGVzL2AgKyBkYXRhLmlkKVxuICAgICAgLnBpcGUobWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKSk7XG4gIH1cblxuXG4gIGRlbGV0ZVVzZXJWZWhpY2xlKGlkKSB7XG4gICAgdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnNlcnZlclVybH0vdmVoaWNsZXMvJHtpZH1gKS5zdWJzY3JpYmUoXG4gICAgICBkYXRhID0+IHsgfSxcbiAgICAgIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICAvLy8vLy8vLy8vLy8vIHZlaGljbGUgc2VydmljZSBFTkQgLy8vLy8vLy8vLy8vXG5cbiAgLyogcGFya2luZyBhcHAgZW5kICovXG5cbiAgZ2V0SGVhZGVyKCkge1xuICAgIGNvbnN0IGFUb2tlbiA9ICctWUFVcTVnYk1YOTFZcEFnQWRRQXRXaUpDU0swQUdVRCc7XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YVRva2VufWBcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHJldHVybiBodHRwT3B0aW9ucztcbiAgfVxuXG5cbiAgLy8vLy8vLy8vLy8vLy8vLyBTVEFSVCBDcmVhdGUgU2FsZXMgT3JkZXIgLy8vLy8vLy8vLy8vLy8vXG5cbiAgLy8vLy8vLy8vLy8gU1RBUlQgYXBpIHNlcnZpY2UgLy8vLy8vLy8vLy8vXG5cbiAgY3JlYXRlU2FsZXNPcmRlcihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ3N5bmNpbmcnKTtcbiAgICBpZiAoZGF0YS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuZGF0YVsnb3JkZXJfaXRlbSddID0gZGF0YVswXS5vcmRlcjtcbiAgICAgIHRoaXMuZGF0YVsnT3JkZXInXS5tZXJjaGFudF9pZCA9IGRhdGFbMF0ubWVyY2hhbnRJZDtcbiAgICAgIHRoaXMuZGF0YVsnT3JkZXInXS5zaGlwcGluZ19kYXRlID0gZGF0YVswXS5zaGlwcGluZ19kYXRlO1xuICAgICAgdGhpcy5kYXRhWydPcmRlciddLnBvcyA9IGRhdGFbMF0ucG9zO1xuICAgICAgdGhpcy5kYXRhWydPcmRlciddLnNlbmRfY29uZmlybWF0aW9uID0gZGF0YVswXS5zZW5kX2NvbmZpcm1hdGlvbjtcbiAgICAgIHRoaXMuZGF0YVsnT3JkZXInXS5jcmVhdGVfYm9sID0gZGF0YVswXS5jcmVhdGVfYm9sO1xuXG4gICAgICBpZiAoZGF0YVswXS5lc3RpbWF0ZWRfZGVsaXZlcnlfZGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGFbJ09yZGVyJ10uZXN0aW1hdGVkX2RlbGl2ZXJ5X2RhdGUgPSBkYXRhWzBdLmVzdGltYXRlZF9kZWxpdmVyeV9kYXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAucG9zdChgJHt0aGlzLnNlcnZlclVybH0vYXBpL3YxL29yZGVyL2RlZmF1bHQvY3JlYXRlYCwgdGhpcy5kYXRhKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAocmVzID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuXG4gIGdldE9yZGVyR3VpZGVEYXRhKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L2FwaS92MS9wcm9kdWN0cy9tZXJjaGFudC8ke2lkfT9saW1pdD0xNWApLnBpcGUobWFwKHJlcyA9PiB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pKTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vIGFwaSBzZXJ2aWNlIEVORCAvLy8vLy8vLy8vLy9cblxuXG4gIC8vLy8vLy8vLy8gcHJvZHVjdCBzZXJ2aWNlIEVORCAvLy8vLy8vLy9cbiAgZ2V0Q3VzdG9tZXJzUHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L2FwaS92MS9wcm9kdWN0cz9vZmZzZXQ9MCZsaW1pdD0xMDAwMGApLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBbGxNZXJjaGFudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5zZXJ2ZXJVcmx9L2FwaS92MS9tZXJjaGFudHM/b2Zmc2V0PTAmbGltaXQ9MTAwMDBgKS5waXBlKFxuICAgICAgbWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8vLy8vLy8vLyBwcm9kdWN0IHNlcnZpY2UgRU5EIC8vLy8vLy8vL1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8gQ3JlYXRlIFNhbGVzIE9yZGVyIEVORCAvLy8vLy8vLy8vLy8vLy9cbn1cbiJdfQ==