<template>
  <HeroBanner />
  <BrandSlider />
  <ProductList />
</template>
<script>
import HeroBanner from "@/components/HeroBanner.vue";
import HomeCategories from "@/components/HomeCategories.vue";
import BrandSlider from "@/components/BrandSlider.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {ProductList, BrandSlider, HomeCategories, HeroBanner},
};
</script>