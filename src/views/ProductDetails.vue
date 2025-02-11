<script setup>
import { ref, computed } from 'vue';
import { useRoute } from "vue-router";
import { products } from "@/Products.js";

const route = useRoute();
const productId = Number(route.params.id);
const product = products.find(p => p.id === productId);

const selectedSize = ref('');
const currentImageIndex = ref(0);

// Create an array of images (in a real app, you would have multiple images per product)
const images = computed(() => [
  product.image,
  product.image,
  product.image,
  product.image
]);

const currentImage = computed(() => images.value[currentImageIndex.value]);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? images.value.length - 1 
    : currentImageIndex.value - 1;
};

const calculateDiscount = () => {
  if (!product.originalPrice) return 0;
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
};

const discount = computed(() => calculateDiscount());
</script>

<template>
  <div class="container">
    <div class="image-container">
      <!-- Thumbnails and main image section -->
      <div class="image-layout">
        <!-- Thumbnails -->
        <div class="thumbnails">
          <div 
            v-for="(image, index) in images" 
            :key="index"
            class="thumbnail"
            :class="{ 'active': currentImageIndex === index }"
            @click="currentImageIndex = index"
          >
            <img 
              :src="`/src/assets/products/${product.category}/${image}`" 
              :alt="`${product.name} view ${index + 1}`"
            />
          </div>
        </div>
        
        <!-- Main image -->
        <div class="main-image">
          <button class="nav-button prev" @click="previousImage">←</button>
          <img 
            :src="`/src/assets/products/${product.category}/${currentImage}`" 
            :alt="product.name"
          />
          <button class="nav-button next" @click="nextImage">→</button>
        </div>
      </div>
    </div>

    <div class="description-container">
      <!-- Product details section -->
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <p class="product-type">{{ product.type }}, ID: {{ product.id }}</p>

        <div class="price-info">
          <p class="discount-tag" v-if="discount > 0">-{{ discount }}% cu codul LOVE*</p>
          <div class="price-display">
            <span class="current-price">{{ product.price }} LEI</span>
            <span class="original-price" v-if="product.originalPrice">
              {{ product.originalPrice }} LEI
            </span>
          </div>
          <p class="price-history">{{ product.description }}</p>
        </div>

        <div class="size-selection">
          <select v-model="selectedSize">
            <option value="" disabled>Selectează o mărime</option>
            <option v-for="size in ['36', '37', '38', '39', '40', '41', '42']" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
          <a href="#" class="size-chart">Tabel cu mărimi</a>
        </div>

        <div class="action-buttons">
          <button 
            class="add-to-cart"
            :disabled="!selectedSize"
          >
            Adaugă în coș
          </button>
          <button class="wishlist">♡</button>
        </div>

        <div class="promo-box">
          <h3>LOVE IS THE ANSWER PÂNĂ LA -25%</h3>
          <p>
            *Comandă de min. 400 RON, folosește codul LOVE și obții -{{ discount }}% pentru acest produs. 
            Până pe 14.02.2025
          </p>
          <button>Vezi</button>
        </div>

        <div class="shipping-info">
          <div class="info-item">
            <span>🚚</span>
            <p>Livrare și retur gratuite de la 300 lei</p>
          </div>
          <div class="info-item">
            <span>🔄</span>
            <p>30 de zile pentru retur</p>
          </div>
          <div class="info-item">
            <span>💳</span>
            <p>Economisește prin Answear Club</p>
          </div>
        </div>

        <!-- Expandable sections -->
        <div class="expandable-sections">
          <div class="section-item">
            <button class="section-header">
              Despre produs
              <span class="arrow">↓</span>
            </button>
          </div>
          <div class="section-item">
            <button class="section-header">
              Compoziție
              <span class="arrow">↓</span>
            </button>
          </div>
          <div class="section-item">
            <button class="section-header">
              Livrare
              <span class="arrow">↓</span>
            </button>
          </div>
          <div class="section-item">
            <button class="section-header">
              Retururi și reclamații
              <span class="arrow">↓</span>
            </button>
          </div>
          <div class="section-item">
            <button class="section-header">
              Taguri
              <span class="arrow">↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.image-container {
  width: 65%;
  padding: 20px;
}

.description-container {
  width: 35%;
  padding: 20px;
  text-align: left;
}

.image-layout {
  display: flex;
  gap: 20px;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100px;
}

.thumbnail {
  cursor: pointer;
  border: 1px solid #ddd;
  padding: 5px;
  aspect-ratio: 1;
}

.thumbnail.active {
  border-color: #000;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-image {
  position: relative;
  flex-grow: 1;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.nav-button {
  position: absolute;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}

.prev { left: 10px; }
.next { right: 10px; }

/* Product details styling */
.product-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

.product-type {
  color: #666;
  font-size: 14px;
}

.price-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.discount-tag {
  color: #e11d48;
  font-weight: 600;
}

.price-display {
  display: flex;
  align-items: center;
  gap: 10px;
}

.current-price {
  font-size: 24px;
  font-weight: bold;
}

.original-price {
  color: #666;
  text-decoration: line-through;
}

.size-selection {
  display: flex;
  align-items: center;
  gap: 15px;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.size-chart {
  color: #666;
  text-decoration: underline;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.add-to-cart {
  flex-grow: 1;
  padding: 15px;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart:disabled {
  background: #ccc;
}

.wishlist {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
}

.promo-box {
  background: #991b1b;
  color: white;
  padding: 15px;
  border-radius: 4px;
}

.promo-box h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

.promo-box button {
  color: white;
  text-decoration: underline;
  background: none;
  border: none;
  margin-top: 10px;
}

.shipping-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.expandable-sections {
  margin-top: 20px;
}

.section-item {
  border-bottom: 1px solid #e5e5e5;
}

.section-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  text-align: left;
}

.arrow {
  font-size: 12px;
}
</style>