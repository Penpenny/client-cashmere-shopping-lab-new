# Angular SDK

Cashmere Angular SDK

## Installing it

You have to install with npm to use this library.

```bash
npm install git+https://myselfjivan@bitbucket.org/imcmanus6/cash-angular-sdk.git
```

## ShoppingLibrary Helper

This will help you to use different library functions.

### Import package in your component.

```js
import { ShoppingLibraryService } from "shopping-library";

constructor(private shoppingLibrary: ShoppingLibraryService){}
```

### Sign In

```js
shoppingLibrary.onSignIn({ email: email, password: password });
```

### Registration

```js
shoppingLibrary.onRegister({
  email: email,
  password: password,
  username: username,
  first_name: first_name,
  last_name: last_name,
  mobile_phone: mobile_phone
});
```

### Get Products

```js
shoppingLibrary.getProducts();
```

### Get Kitchen Products

```js
shoppingLibrary.getKitchenProducts();
```

### Get Product by Id

```js
shoppingLibrary.getProductById(id);
```
