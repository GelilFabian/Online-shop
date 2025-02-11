<script setup>
import AllProducts from '@/components/AllProducts.vue';
import SidebarMenu from '@/components/SidebarMenu.vue';
</script>

<template>
<div class="show-products">
    <SidebarMenu class="sidebar" />
    <AllProducts class="products" />
</div>
</template>

<style scoped>
.show-products {
  display: flex;
  width: 100%;
}

.sidebar {
  width: 20%;
}

.products {
  width: 80%;
}
</style>