<template>
  <div>
    <HeroBanner />
    <BrandSlider />
    <WinterSale :category="category" />
    <SeeAll />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import HeroBanner from "@/components/HeroBanner.vue";
import BrandSlider from "@/components/BrandSlider.vue";
import WinterSale from "@/components/WinterSale.vue"; // Corectat importul
import SeeAll from "@/components/SeeAll.vue";

const route = useRoute();
const category = route.params.category; // Obține genul din URL
</script>
