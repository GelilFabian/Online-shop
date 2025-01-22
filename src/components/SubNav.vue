<template>
  <nav class="subnav" v-if="isCategoryPage">
    <ul>
      <li><router-link to="/">Noutăți</router-link></li>
      <li><router-link to="/">Winter Sale</router-link></li>
      <li><router-link to="/">Populare</router-link></li>
      <li><router-link to="/">Toate</router-link></li>
    </ul>
    <ul>
      <li class="search-bar">
        <input
            type="text"
            placeholder="Caută produse..."
            v-model="searchQuery"
            @keyup.enter="performSearch"
        />
        <button @click="performSearch">
          <img src="@/assets/images/search-icon.png" alt="Search Icon" />
        </button>
      </li>
    </ul>
  </nav>
  <nav class="subnav" v-else>
    <ul></ul>
    <ul>
      <li class="search-bar">
        <input
            type="text"
            placeholder="Caută produse..."
            v-model="searchQuery"
            @keyup.enter="performSearch"
        />
        <button @click="performSearch">
          <img src="@/assets/images/search-icon.png" alt="Search Icon" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

const route = useRoute();
const searchQuery = ref("");

const isCategoryPage = computed(() =>
    ["/barbati", "/femei", "/copii"].includes(route.path)
);

const performSearch = () => {
  console.log(`Searching for: ${searchQuery.value}`);
  // Implement the search logic here
};
</script>

<style scoped>
.subnav {
  background-color: #f2f2f2;
  padding: 10px 30px;
}

.subnav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
}

.subnav li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}

.search-bar {
  display: flex;
  border-bottom: 2px solid #333;
}

.search-bar input {
  border: none;
  padding: 5px;
  font-size: 14px;
  outline: none;
  background: transparent;
}

.search-bar input::placeholder {
  color: #aaa;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.search-bar img {
  height: 20px;
  width: 20px;
}
</style>
