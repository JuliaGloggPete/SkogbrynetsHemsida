<template>
  <div>
    <h2>Home</h2>

  </div>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { defineComponent, reactive } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";

//https://firebase.google.com/docs/hosting/quickstart?hl=en&authuser=0&_gl=1*fowqte*_ga*MTUzNDgyNTU3Mi4xNzA4NTAyMjQ3*_ga_CW55HF8NVT*MTcwOTAzMDc3OS4yLjEuMTcwOTAzMDg0MC42MC4wLjA.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR9MIgBIGhGz3_WWg2kXO-0ezn2-fd37U",
  authDomain: "skogbrynets-verkstad.firebaseapp.com",
  projectId: "skogbrynets-verkstad",
  storageBucket: "skogbrynets-verkstad.appspot.com",
  messagingSenderId: "887634919102",
  appId: "1:887634919102:web:b1ae2397146ea0388728ef",
  measurementId: "G-6KS25JGE27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default defineComponent({
  async setup() {
    const productList = reactive({ list: [] });
    const db = getFirestore(app);
    await getProducts(db);
    async function getProducts(db) {
      const productsCol = collection(db, "Product");
      const productSnapshot = await getDocs(productsCol);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      productList.list = products;
      console.log(productList);
    }

    return {
      productList,
    };
  },
});
</script>

<style></style>
