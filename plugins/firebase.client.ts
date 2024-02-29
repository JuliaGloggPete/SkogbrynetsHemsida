import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAuth } from "firebase/auth"
//import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyDR9MIgBIGhGz3_WWg2kXO-0ezn2-fd37U",
    authDomain: "skogbrynets-verkstad.firebaseapp.com",
    projectId: "skogbrynets-verkstad",
    storageBucket: "skogbrynets-verkstad.appspot.com",
    messagingSenderId: "887634919102",
    appId: "1:887634919102:web:b1ae2397146ea0388728ef",
    measurementId: "G-6KS25JGE27",
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  // const analytics = getAnalytics(app)
  //const auth = getAuth(app)
  //nuxtApp.vueApp.provide('auth', auth)
  //nuxtApp.provide('auth', auth)

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});
