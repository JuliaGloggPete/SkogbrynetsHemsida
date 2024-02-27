<template>
  <div>
<h2>Produkter {{ productId }}</h2>
  </div>
</template>

<script setup >

const {productId} = useRoute().params

</script>

<style scoped>

</style>