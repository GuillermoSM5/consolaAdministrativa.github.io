// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const ENV_URLS = {
//   urlProd: '',
//   urlDevUsr: '', // User dev
//   urlDev: 'http://lnxcheque01d.dev.unix.banorte.com:9080/echeck-admin', // Dev
//   urlLocal: '',
// };

const urlhttp = 'http://lnxcheque01d.dev.unix.banorte.com:9080/echeck-admin';
const urlHttps = 'https://lnxcheque01d.dev.unix.banorte.com:9443/echeck-admin';
const urlBalanceador =
  'https://lnxcheque03d.dev.unix.banorte.com:8443/echeck-admin';

export const environment = {
  production: false,
  apiUrl: urlHttps,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
