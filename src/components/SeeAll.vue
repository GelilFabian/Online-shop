<script setup>
import { useRoute, useRouter } from "vue-router";

// Obținem informațiile despre rută
const route = useRoute();
const router = useRouter();
const category = route.params.category; // Extragem categoria din URL

// Mapăm conținutul pentru fiecare categorie, inclusiv imaginile specifice
const categoryData = {
  barbati: {
    title: "Colecția pentru Bărbați",
    image: import("src/assets/images/seeAllMen.png"),
    buttonText: "Vezi colecția pentru Bărbați",
  },
  femei: {
    title: "Colecția pentru Femei",
    image: import("src/assets/images/seeAllWomen.png"),
    buttonText: "Vezi colecția pentru Femei",
  },
  copii: {
    title: "Colecția pentru Copii",
    image: import("src/assets/images/seeAllKids.png"),
    buttonText: "Vezi colecția pentru Copii",
  },
};

// Fallback în cazul în care categoria nu este validă
const categoryContent = categoryData[category] || {
  title: "Colecție necunoscută",
  image: () => import("@/assets/images/seeAllMen.png"),
  buttonText: "Vezi colecția",
};

// Navigare programatică la categoria selectată
function handleSeeAll() {
  router.push(`/${category}`);
}
</script>

<template>
  <div class="zigzag-layout">
    <div class="section">
      <div class="content">
        <div class="text">
          <h1>{{ categoryContent.title }}</h1>
          <button class="hero-button" @click="handleSeeAll">
            {{ categoryContent.buttonText }}
          </button>
        </div>
        <div class="image">
          <img v-if="categoryContent.image" :src="categoryContent.image" :alt="categoryContent.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zigzag-layout {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
.section {
  display: flex;
  align-items: center;
  padding: 20px;
}
.content {
  display: flex;
  align-items: center;
  width: 100%;
}
.text {
  flex: 1;
  padding: 60px;
}
.hero-button {
  margin-top: 15px;
  background-color: #000;
  color: white;
  padding: 1.25rem 4rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.hero-button:hover {
  opacity: 0.9;
}
.image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
