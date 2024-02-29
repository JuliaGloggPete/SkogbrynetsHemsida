<template>
  <div class="card">
    <h2 class="font-bold text-lg">{{ product.productTitle }}</h2>
    <p>{{ product.productDescription }}</p>
    <p>
      <strong>Produktinformation: </strong> {{ product.productInformation }}
    </p>
    <p><strong>Pris: </strong> {{ product.price }}</p>
    <p><strong>Förpackningssstorlek:</strong> {{ product.packaging }}</p>
    <p>Disponibel in:</p>
    <div v-for="color in product.colors">
      <p>{{ color.colorName }}</p>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
