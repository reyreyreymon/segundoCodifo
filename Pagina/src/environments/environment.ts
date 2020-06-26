// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: { //Coneccion a la base de datos "papeleria"
    apiKey: "AIzaSyDHE-rzQ-0x0fh8oUctjURM9SXT7ClMQfw",
    authDomain: "papeleria-f3646.firebaseapp.com",
    databaseURL: "https://papeleria-f3646.firebaseio.com",
    projectId: "papeleria-f3646",
    storageBucket: "papeleria-f3646.appspot.com",
    messagingSenderId: "467335093472",
    appId: "1:467335093472:web:fc9c0e98dfbd39b8b70485",
    measurementId: "G-1HC8WB0WV5"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
