<template>
  <div>
    <h2>Produkter {{ productId }}</h2>
    <ProductDetails :product="productData" />
  </div>
</template>

<script>
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default defineComponent({
  async setup() {
    const firestore = inject("firestore");
    const { productId } = useRoute().params;

    const db = getFirestore(firestore);
    const docRef = doc(db, "Product", productId);
    const docSnap = await getDoc(docRef);
    let productData = null;

    if (docSnap.exists()) {
      productData = docSnap.data();

      console.log("Document data:", productData);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    return { productId, productData };
  },

  //const {data: product} =
});
</script>

<style scoped></style>
