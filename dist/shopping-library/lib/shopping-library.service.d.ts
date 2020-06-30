import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
export declare class ShoppingLibraryService {
    private http;
    private router;
    serverUrl: string;
    constructor(http: HttpClient, router: Router);
    data: {
        field: string;
        operator: string;
        value: string;
    };
    setUrl(url: any): void;
    onSignIn(data: any): import("rxjs").Observable<Object>;
    onRegister(userdata: any): import("rxjs").Observable<Object>;
    getProducts(): import("rxjs").Observable<Object>;
    getRandomProduct(id: any): import("rxjs").Observable<Object>;
    getProductById(id: any): import("rxjs").Observable<Object>;
    getKitchenProducts(inputData: any): import("rxjs").Observable<Object>;
    userLogin(email: string, password: string): import("rxjs").Observable<Object>;
    sharePasswordLink(email: string): import("rxjs").Observable<Object>;
    userSignup(userData: any): import("rxjs").Observable<Object>;
    getUserDetails(user_id: any): import("rxjs").Observable<Object>;
    editUserProfile(data: any, user_id: any): import("rxjs").Observable<Object>;
    addNewVehicle(vehicleMark: string, vehicleModel: string, vehicleColor: string, vehicleNumPlate: string, user_id: any): import("rxjs").Observable<Object>;
    getAllUserVehicles(): import("rxjs").Observable<Object>;
    editUserVehicle(data: any, u_id: any): import("rxjs").Observable<Object>;
    getVehicleById(data: any): import("rxjs").Observable<Object>;
    deleteUserVehicle(id: any): void;
    getHeader(): {
        headers: HttpHeaders;
    };
    createSalesOrder(data: any): import("rxjs").Observable<Object>;
    getOrderGuideData(id: any): import("rxjs").Observable<Object>;
    getCustomersProducts(): import("rxjs").Observable<Response>;
    getAllMerchants(): import("rxjs").Observable<Response>;
}
