<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { products } from "@/Products.js";

const route = useRoute();

// Referințe pentru toate filtrele
const selectedPopularity = ref("all");
const selectedCategory = ref(route.query.category || "all");
const selectedSize = ref("all");
const selectedBrand = ref("all");
const selectedColor = ref("all");
const selectedPrice = ref("all");
const selectedOfferType = ref("all");

// Obține toate opțiunile unice pentru fiecare filtru
const getUniqueValues = (field) => {
  return ["all", ...new Set(products.map(product => product[field]))];
};

// Computed properties pentru opțiunile filtrelor
const categories = computed(() => getUniqueValues("category"));
const sizes = computed(() => getUniqueValues("size"));
const brands = computed(() => getUniqueValues("brand"));
const colors = computed(() => getUniqueValues("color"));
const prices = computed(() => getUniqueValues("price"));
const offerTypes = computed(() => getUniqueValues("offerType"));
const popularityOptions = computed(() => ["all", "most_popular", "newest"]);

// Filtrarea produselor
const filteredProducts = computed(() => {
  return products.filter(product => {
    return (selectedCategory.value === "all" || product.category === selectedCategory.value) &&
           (selectedSize.value === "all" || product.size === selectedSize.value) &&
           (selectedBrand.value === "all" || product.brand === selectedBrand.value) &&
           (selectedColor.value === "all" || product.color === selectedColor.value) &&
           (selectedPrice.value === "all" || product.price === selectedPrice.value) &&
           (selectedOfferType.value === "all" || product.offerType === selectedOfferType.value);
  });
});

// Funcții pentru actualizarea filtrelor
const updateFilter = (filterType, value) => {
  switch(filterType) {
    case 'popularity':
      selectedPopularity.value = value;
      break;
    case 'category':
      selectedCategory.value = value;
      break;
    case 'size':
      selectedSize.value = value;
      break;
    case 'brand':
      selectedBrand.value = value;
      break;
    case 'color':
      selectedColor.value = value;
      break;
    case 'price':
      selectedPrice.value = value;
      break;
    case 'offerType':
      selectedOfferType.value = value;
      break;
  }
};
</script>

<template>
  <div class="products-container">
    <h1>Încălțăminte {{ selectedCategory }}</h1>

    <!-- Bara de filtre -->
    <div class="filters-bar">
      <!-- Cele mai populare -->
      <div class="filter-group">
        <select v-model="selectedPopularity" @change="updateFilter('popularity', selectedPopularity)">
          <option value="all">Cele mai populare</option>
          <option v-for="option in popularityOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>

      <!-- Categorie -->
      <div class="filter-group">
        <select v-model="selectedCategory" @change="updateFilter('category', selectedCategory)">
          <option value="all">Categorie</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Mărime -->
      <div class="filter-group">
        <select v-model="selectedSize" @change="updateFilter('size', selectedSize)">
          <option value="all">Mărime</option>
          <option v-for="size in sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>

      <!-- Brand -->
      <div class="filter-group">
        <select v-model="selectedBrand" @change="updateFilter('brand', selectedBrand)">
          <option value="all">Brand</option>
          <option v-for="brand in brands" :key="brand" :value="brand">
            {{ brand }}
          </option>
        </select>
      </div>

      <!-- Culoare -->
      <div class="filter-group">
        <select v-model="selectedColor" @change="updateFilter('color', selectedColor)">
          <option value="all">Culoare</option>
          <option v-for="color in colors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>

      <!-- Preț -->
      <div class="filter-group">
        <select v-model="selectedPrice" @change="updateFilter('price', selectedPrice)">
          <option value="all">Preț</option>
          <option v-for="price in prices" :key="price" :value="price">
            {{ price }}
          </option>
        </select>
      </div>

      <!-- Tipul ofertei -->
      <div class="filter-group">
        <select v-model="selectedOfferType" @change="updateFilter('offerType', selectedOfferType)">
          <option value="all">Tipul ofertei</option>
          <option v-for="type in offerTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>
    </div>

    <!-- Lista de produse -->
    <div v-if="filteredProducts.length" class="product-list">
      <div v-for="product in filteredProducts" :key="product.id" class="product">
        <img :src="`/src/assets/products/${product.category}/${product.image}`" :alt="product.name" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} LEI</p>
      </div>
    </div>

    <p v-else>Nicio produs disponibil.</p>
  </div>
</template>

<style scoped>
.products-container {
  flex: 1;
  padding: 40px;
  text-align: left;
}

.filters-bar {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-group {
  min-width: 120px;
}

.filter-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.product {
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 8px;
}

.product img {
  max-width: 100%;
  height: auto;
}

.product h2 {
  font-size: 16px;
  margin: 5px 0;
}

.product p {
  font-size: 14px;
  color: #555;
}
</style>