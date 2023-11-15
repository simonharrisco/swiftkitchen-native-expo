import {store} from '../app/store.js';

function baseurl() {
  // get data from the store
  if (store.getState().auth.endpointbaseurl) {
    console.log(
      'https://api-' +
        store.getState().auth.endpointbaseurl +
        '.swiftkitchen.co.uk/api',
    );
    return (
      'https://api-' +
      store.getState().auth.endpointbaseurl +
      '.swiftkitchen.co.uk/api'
    );
  }

  return 'https://api-main.swiftkitchen.co.uk/api';
}

//Authentication
export const ENDPOINT_LOGIN = () => {
  return baseurl() + '/login';
};
export const ENDPOINT_LOGIN_ADVANCED = () => {
  return baseurl() + '/login/advanced';
};
export const ENDPOINT_LOGIN_DEVICE = () => {
  return baseurl() + '/login/device';
};
export const ENDPOINT_LOGOUT = () => {
  return baseurl() + '/user/logout';
};
export const ENDPOINT_RESET_PASSWORD = () => {
  return baseurl() + '/forgotpassword';
};
export const ENDPOINT_GET_TWO_FACTOR = () => {
  return baseurl() + '/user/twofactor/details';
};
export const ENDPOINT_ENABLE_TWO_FACTOR = () => {
  return baseurl() + '/user/twofactor/totp/enable';
};
export const ENDPOINT_DISABLE_TWO_FACTOR = () => {
  return baseurl() + '/user/twofactor/totp/disable';
};
export const ENDPOINT_REGISTER = () => {
  return baseurl() + '/register';
};
export const ENDPOINT_REGISTER_FROM_INVITATION = () => {
  return baseurl() + '/register/invitation';
};
// export const ENDPOINT_ACCEPT_COMPANY_INVITATION = '/user/invitation/accept';
export const ENDPOINT_VERIFY_EMAIL = () => {
  return baseurl() + '/verifyemail';
};

// Allergens
export const ENDPOINT_GET_ALLERGENS = () => {
  return baseurl() + '/allergens';
};

//Consumer codes
export const ENDPOINT_GET_LINKED_CONSUMER_CODES = () => {
  return baseurl() + '/user/consumers ';
};
export const ENDPOINT_LOOKUP_CONSUMER_CODE = () => {
  return baseurl() + '/consumers/lookup';
};
export const ENDPOINT_ASSIGN_CONSUMER_CODE = () => {
  return baseurl() + '/user/consumers/assign';
};
export const ENDPOINT_UNASSIGN_CONSUMER_CODE = () => {
  return baseurl() + '/user/consumer/remove';
};
export const ENDPOINT_REFRESH_CONSUMER_CODE = () => {
  return baseurl() + '/consumer/refreshcode';
};

export const ENDPOINT_USER_UPDATE = () => {
  return baseurl() + '/user/update';
};
export const ENDPOINT_USER_UPDATE_MARKETING_PREFERENCES = () => {
  return baseurl() + '/user/update/marketingpreferences';
};

//Ordering
export const ENDPOINT_GET_ORDERING_CALENDAR = () => {
  return baseurl() + '/orders/calendar';
};
export const ENDPOINT_GET_CALENDAR_MEALS = () => {
  return baseurl() + '/orders/calendar/meals';
};
export const ENDPOINT_GET_USER_ORDERS = () => {
  return baseurl() + '/user/orders';
};
export const ENDPOINT_CANCEL_ORDER = () => {
  return baseurl() + '/user/order/cancel';
};
export const ENDPOINT_CANCEL_ORDER_AS_ADMIN = () => {
  return baseurl() + '/order/cancel';
};

//Wallet
export const ENDPOINT_GET_WALLETS = () => {
  return baseurl() + '/user/wallets';
};

//External user transactions ..ie, user on the app is looking at their own transactions
export const ENDPOINT_GET_EXTERNAL_USER_TRANSACTIONS = () => {
  return baseurl() + '/user/transactions';
};

//Checkout
export const ENDPOINT_VALIDATE_BASKET = () => {
  return baseurl() + '/orders/calendar/validate';
};

export const ENDPOINT_CHECKOUT_BASKET = () => {
  return baseurl() + '/orders/calendar/checkout';
};

// PostPayment
export const ENDPOINT_POSTPAYEMENT_CHECKS = () => {
  return baseurl() + '/orders/calendar/checkout/postpayment';
};

//Direct Debits
export const ENDPOINT_GET_DIRECT_DEBITS = () => {
  return baseurl() + '/directdebits';
};
export const ENDPOINT_GET_DIRECT_DEBIT = () => {
  return baseurl() + '/directdebit';
};

export const ENDPOINT_GET_DIRECT_DEBITS_CREATION_LINK = () => {
  return baseurl() + '/directdebits/create';
};
export const ENDPOINT_GET_DIRECT_DEBITS_SESSION = () => {
  return baseurl() + '/directdebits/create/session';
};
export const ENDPOINT_DIRECT_DEBIT_DELETE = () => {
  return baseurl() + '/directdebit/delete';
};
export const ENDPOINT_UPDATE_DIRECT_DEBIT = () => {
  return baseurl() + '/directdebit/update';
};

export const ENDPOINT_GET_USER_COMPANIES = () => {
  return baseurl() + '/user/companies';
};

export const PRIVACY_POLICY =
  'https://app.termly.io/document/privacy-policy/c84fa524-4b67-46d5-a283-67799ddd8786';
export const TERMS_OF_SERVICE =
  'https://app.termly.io/document/terms-of-service/7d7edfc7-3575-45f8-83e5-20bea6ca5726';
export const ACCEPTABLE_USE_POLICY =
  'https://app.termly.io/document/acceptable-use/9f971d90-081b-4026-9bf0-82457c145883';
