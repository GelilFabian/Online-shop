<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const types = [
  { name: "Balerini", slug: "balerini" },
  { name: "Botine", slug: "botine" },
  { name: "Cizme de cauciuc", slug: "cizme" },
  { name: "Espadrile", slug: "espadrile" },
  { name: "Mocasini și pantofi", slug: "mocasini-pantofi" },
  { name: "Outdoor", slug: "outdoor" },
  { name: "Pantofi bebe", slug: "pantofi-bebe" },
  { name: "Papuci de casă", slug: "papuci-casa" },
  { name: "Papuci și sandale", slug: "papuci-sandale" },
  { name: "Pentru iarnă", slug: "iarna" },
  { name: "Sneakers", slug: "sneaker" },
  { name: "Pantofi sport", slug: "pantofi-sport" },
  { name: "Teniși", slug: "tenisi" },
];

const selectType = (type) => {
  window.location.href = `/showproducts?type=${type}`;
};
</script>

<template>
  <div class="sidebar-container">
    <div class="sidebar">
      <h2>Încălțăminte</h2>
      <ul>
        <li v-for="type in types" :key="type.slug" @click="selectType(type.slug)">
          {{ type.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar-container {
  position: relative;
  width: 250px;
  height: 100%;
}

.sidebar {
  position: sticky;
  top: 20px; /* Distanța de la partea de sus a viewport-ului */
  width: 250px;
  padding: 40px;
  text-align: left;
  max-height: calc(100vh - 40px); /* Înălțimea viewport-ului minus spațiul de sus și jos */
  overflow-y: auto; /* Permite scroll dacă conținutul este prea lung */
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

li:hover {
  background: #ddd;
}

/* Stilizare pentru scrollbar (opțional) */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.sidebar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>