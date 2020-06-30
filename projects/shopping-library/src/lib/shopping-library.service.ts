import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { RequestOptions, Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingLibraryService {
  serverUrl: string;
  // private httpDep: Http
  constructor(private http: HttpClient, private router: Router) { }
  data = {
    field: '',
    operator: '',
    value: ''
  };
  setUrl(url) {
    this.serverUrl = url;
  }

  onSignIn(data) {
    return this.http
      .post(`${this.serverUrl}/api/v1/auth/login`, {
        email: data.email,
        password: data.password
      })
      .pipe(map(response => response));
  }

  onRegister(userdata) {
    return this.http
      .post(`${this.serverUrl}/api/v1/auth/signup`, userdata)
      .pipe(map(response => response));
  }

  getProducts() {
    return this.http
      .get(
        `${
        this.serverUrl
        }/api/v1/products?filters=[{"field":"id","table":"product","operator":"<","value":""}]`
      )
      .pipe(map(response => response));
  }

  getRandomProduct(id) {
    return this.http
      .get(
        `${
        this.serverUrl
        }/api/v1/products?filters=[{"field":"id","table":"product","operator":"<","value":"${id}"}]`
      )
      .pipe(map(response => response));
  }

  getProductById(id) {
    return this.http
      .get(
        `${
        this.serverUrl
        }/api/v1/products?filters=[{"field":"id","table":"product","operator":"=","value":"${id}"}]`
      )
      .pipe(map(response => response));
  }

  getKitchenProducts(inputData) {
    let data = inputData.data;
    console.log(data);
    console.log(this.serverUrl);
    return this.http
      .get(
        `${this.serverUrl}/api/v1/products?filters=[{
      "field":"${data.field}",
      "table":"${data.table}",
      "operator":"${data.operator}",
      "value":"${data.value}"
    }]`
      )
      .pipe(map(response => response));
  }


  /* parking app start */


  ///////////// START auth service ////////////
  userLogin(email: string, password: string) {
    return this.http
      .post(this.serverUrl + '/auth/login', {
        email: email,
        password: password
      }).pipe(map(response => response));
  }

  sharePasswordLink(email: string) {
    return this.http
      .post(this.serverUrl + '/auth/passwordReset', { email: email }).pipe(map(response => response));
  }


  userSignup(userData) {
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
      }).pipe(map(response => response));
  }
  ///////////// auth service END ////////////



  ///////////// START user service ////////////

  getUserDetails(user_id) {
    return this.http
      .get(`${this.serverUrl}/users/${user_id}`)
      .pipe(map(response => response));
  }

  editUserProfile(data, user_id) {
    // const user_id = localStorage.getItem('user_id');
    return this.http
      .put(`${this.serverUrl}/users/${user_id}`, {
        first_name: data.first_name,
        last_name: data.last_name,
        mobile_phone: data.mobile_phone,
        email: data.email
      })
      .pipe(map(response => response));
  }

  ///////////// user service END ////////////


  ///////////// START vehicle service ////////////

  addNewVehicle(
    vehicleMark: string,
    vehicleModel: string,
    vehicleColor: string,
    vehicleNumPlate: string,
    user_id
  ) {
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
    const headers = new Headers();
    // headers.append('auth-token', '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD');
    vehicle.user_id = user_id;
    // const options = new RequestOptions({ headers: headers });
    // .post(this.serverUrl + '/vehicles', vehicle, this.getHeader())
    return this.http
      .post(this.serverUrl + '/vehicles', vehicle)
      .pipe(map(response => response));
  }


  getAllUserVehicles() {
    const headers = new Headers();
    // let id = localStorage.getItem('user_id');
    const u_id = localStorage.getItem('user_id');
    // headers.append('auth-token', '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD');
    // const options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.serverUrl + `/vehicles/user/${u_id}`)
      .pipe(map(response => response));
  }


  editUserVehicle(data, u_id) {
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
      .pipe(map(response => response));
  }

  getVehicleById(data) {
    return this.http
      .get(`${this.serverUrl}/vehicles/` + data.id)
      .pipe(map(response => response));
  }


  deleteUserVehicle(id) {
    this.http.delete(`${this.serverUrl}/vehicles/${id}`).subscribe(
      data => { },
      err => {
        console.log(err);
      }
    );
  }
  ///////////// vehicle service END ////////////

  /* parking app end */

  getHeader() {
    const aToken = '-YAUq5gbMX91YpAgAdQAtWiJCSK0AGUD';

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
        .pipe(
          map(res => {
            return res;
          })
        );
    }
  }


  getOrderGuideData(id) {
    return this.http.get(`${this.serverUrl}/api/v1/products/merchant/${id}?limit=15`).pipe(map(res => {
      return res;
    }));
  }

  /////////// api service END ////////////


  ////////// product service END /////////
  getCustomersProducts() {
    return this.http.get(`${this.serverUrl}/api/v1/products?offset=0&limit=10000`).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }

  getAllMerchants() {
    return this.http.get(`${this.serverUrl}/api/v1/merchants?offset=0&limit=10000`).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }

  ////////// product service END /////////

  //////////////// Create Sales Order END ///////////////
}
