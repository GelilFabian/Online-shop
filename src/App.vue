<template>
  <Banner />
  <Header />
  <div id="app">
    <RouterView />
  </div>
  <Newsletter />
  <Footer />
</template>

<script setup>
import Header from "@/components/Nav.vue";
import Banner from "@/components/Anouncement.vue";
import Footer from "@/components/Footer.vue";
import Newsletter from "@/components/Newsletter.vue";
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
