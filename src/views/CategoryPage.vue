<template>
  <div>
    <HeroBanner />
    <BrandSlider />
    <WinterSale :category="currentCategory" />
    <SeeAll />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from "vue-router";
import HeroBanner from "@/components/HeroBanner.vue";
import BrandSlider from "@/components/BrandSlider.vue";
import WinterSale from "@/components/WinterSale.vue";
import SeeAll from "@/components/SeeAll.vue";

const route = useRoute();
const currentCategory = computed(() => route.params.category);
</script>