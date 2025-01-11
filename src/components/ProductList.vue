<template>
  <div class="product-list">
    <h1>Special Offer!</h1>
    <swiper
        :modules="modules"
        :slides-per-view="4"
        :slides-per-group="4"
        :space-between="30"
        :loop="true"
        :navigation="true"
        :speed="1000"
        class="mySwiper"
        :breakpoints="{
        1600: { slidesPerView: 4, slidesPerGroup: 4 },
        1200: { slidesPerView: 3, slidesPerGroup: 3},
        800: { slidesPerView: 2, slidesPerGroup: 2 },
        480: { slidesPerView: 1, slidesPerGroup: 1 },
        0:{ slidesPerView: 1, slidesPerGroup: 1},
      }"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="product-card">
          <img :src="`/src/assets/products/${product.image}`" :alt="product.name" />
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price + " Lei" }}</p>
            <p class="original-price">Preț normal: {{ product.originalPrice }} Lei</p>
            <p class="description">{{ product.description }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.product-list {
  margin: 0 70px;
  padding: 2rem 2rem;
  background: #fff;
}

.product-list h1 {
  text-align:left;
  color:red;
  margin-bottom:50px;
}

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.product-card img {
  height:700px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-details {
  padding: 15px;
  text-align:left;
}

.product-details h3 {
  margin: 10px 0 5px;
  font-size: 1.2em;
  font-weight: bold;
  color:black;
}

.product-details .price {
  font-size: 1.2em;
  color: red;
}

.product-details .original-price {
  font-size: 0.9em;
  text-decoration: line-through;
  color: #888;
  margin-top:10px;
}

.product-details .description {
  font-size: 0.9em;
  color: #555;
}

.product-card img:hover {
  transform: scale(1.05);
}

.product-card p {
  font-size: 1em;
  color: #333;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background-color: #fff; /* Fundal alb */
  border: 1px solid #ccc; /* Bordura */
  border-radius: 50%; /* Colțuri rotunjite */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Umbra */
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 20px; /* Dimensiunea săgeții */
  color: #000; /* Culoarea săgeții */
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: #f0f0f0; /* Fundal la hover */
}

:deep(.swiper-button-next:focus),
:deep(.swiper-button-prev:focus) {
  outline: none;
}

:deep(.swiper-button-disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .product-list {
    padding: 1rem 2rem;
  }
}
</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Autoplay, Navigation];

const products = [
  {id: 1, name: 'BOSS bocanci de piele Nebular', price: 879.90, originalPrice: 1299.90, image: 'bocanci-boss.png', description: 'Cel mai mic preț din ultimele 30 de zile înainte de reducere: 979.90 LEI', isFavorite: false},
  {id: 2, name: "HUGO pantofi Urian", price: 769.90, originalPrice: 989.90, image: 'bocanci-hugo.png', description: 'Cel mai mic preț de la lansare: 890.90 LEI', isFavorite: false},
  {id: 3, name: "Karl Lagerfeld sneakers din piele KAPRI MENS", price: 669.90, originalPrice: 1009.90, image: 'sneaker-kl.png', description: 'Cel mai mic preț de la lansare: 719.90 LEI', isFavorite: false},
  {id: 4, name: "Calvin Klein Jeans ghete chelsea de piele EVA BOOT MID CHELSEA ICONIC DR", price: 599.90, originalPrice: 849.90, image: 'ghete-ck.png', description: 'Cel mai mic preț de la lansare: 629.90 LEI', isFavorite: false},
  {id: 5, name: 'BOSS bocanci de piele Nebular', price: 479.90, originalPrice: 1299.90, image: 'bocanci-boss.png', description: 'Cel mai mic preț din ultimele 30 de zile înainte de reducere: 979.90 LEI', isFavorite: false},
  {id: 6, name: "HUGO pantofi Urian", price: 769.90, originalPrice: 989.90, image: 'bocanci-hugo.png', description: 'Cel mai mic preț de la lansare: 890.90 LEI', isFavorite: false},
  {id: 7, name: "Karl Lagerfeld sneakers din piele KAPRI MENS", price: 669.90, originalPrice: 1009.90, image: 'sneaker-kl.png', description: 'Cel mai mic preț de la lansare: 719.90 LEI', isFavorite: false},
  {id: 8, name: "Calvin Klein Jeans ghete chelsea de piele EVA BOOT MID CHELSEA ICONIC DR", price: 599.90, originalPrice: 849.90, image: 'ghete-ck.png', description: 'Cel mai mic preț de la lansare: 629.90 LEI', isFavorite: false},
];
</script>