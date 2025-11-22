<template>  <div class="product-image">
    <img v-bind:src="image" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const product = "Socks";
const image = new URL("@/assets/images/WechatIMG265.jpeg", import.meta.url).href
</script>

<style scoped>
img {
    width: 300px;
    height: auto;
}
</style>