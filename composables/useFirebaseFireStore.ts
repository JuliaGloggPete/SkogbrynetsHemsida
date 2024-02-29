
/*import {  collection, getDocs } from "firebase/firestore";

//https://medium.com/codex/using-firebase-in-nuxt3-the-right-way-bebbb6d8c4dd

export default function(){
 
    const productList = reactive({ list: [] });
 
    async function getProducts(db) {
      const productsCol = collection(db, "Product");
      const productSnapshot = await getDocs(productsCol);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      productList.list = products;
      
    }

    return {
    
    };
  }*/
