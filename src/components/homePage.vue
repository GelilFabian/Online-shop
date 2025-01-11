<template>
  <HeroBanner />
  <HomeCategories />
</template>
<script>
import HeroBanner from "@/components/HeroBanner.vue";
import HomeCategories from "@/components/HomeCategories.vue";

export default {
  components: {HomeCategories, HeroBanner},
};
</script>