<template>
  <HeroBanner />
  <BrandSlider />
  <ProductList :category="'copii'" />
</template>

<script setup>
import HeroBanner from "@/components/HeroBanner.vue";
import BrandSlider from "@/components/BrandSlider.vue";
import ProductList from "@/components/ProductList.vue";
</script>