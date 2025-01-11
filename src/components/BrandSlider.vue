<template>
  <div class="brand-slider">
    <swiper
        :modules="modules"
        :slides-per-view="7"
        :slides-per-group="7"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 7000, disableOnInteraction: false }"
        :navigation="true"
        :speed="3000"
        class="mySwiper"
        :breakpoints="{
        1024: { slidesPerView: 5, slidesPerGroup: 5 },
        768: { slidesPerView: 3, slidesPerGroup: 3 },
        480: { slidesPerView: 2, slidesPerGroup: 2 }
      }"
    >
      <swiper-slide v-for="brand in brands" :key="brand.alt">
        <img :src="`/src/assets/brands/${brand.image}`" :alt="brand.alt" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const modules = [Autoplay, Navigation];

const brands = [
  { image: 'tommy.png', alt: 'Tommy Jeans' },
  { image: 'boss.png', alt: 'Boss' },
  { image: 'calvin-klein.png', alt: 'Calvin Klein' },
  { image: 'ralph-lauren.png', alt: 'Ralph Lauren' },
  { image: 'michael-kors.png', alt: 'Michael Kors' },
  { image: 'armani-exchange.png', alt: 'Armani Exchange' },
  { image: 'adidas.png', alt: 'Adidas' },
  { image: 'ea7.png', alt: 'EA7' },
  { image: 'new-balance.png', alt: 'New Balance' },
  { image: 'nike.png', alt: 'Nike' },
  { image: 'karl-lagerfeld.png', alt: 'Karl Lagerfeld' },
  { image: 'hugo.png', alt: 'Hugo' },
  { image: 'emporio-armani.png', alt: 'Emporio Armani' },
  { image: 'guess.png', alt: 'Guess' },
  { image: 'levis.png', alt: 'Levi\'s' },
  { image: 'ralph-lauren.png', alt: 'Ralph Lauren' }
];
</script>

<style scoped>
.brand-slider {
  margin: 50px 0 0 0;
  padding: 2rem 2rem;
  background: #fff;
}

.swiper-slide img {
  max-width: 120px;
  height: auto;
  object-fit: contain;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.swiper-slide img:hover {
  opacity: 1;
  transform: scale(1.05);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  background-color: transparent;
  border: none;
  width: 40px; /* Dimensiune mai mare pentru butoane */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 30px; /* Dimensiune mai mare pentru săgeți */
  font-weight: bold; /* Grosime mai mare pentru săgeți */
  color: #666;
  content: '>'; /* Săgeată dreapta pentru butonul next */
}

:deep(.swiper-button-prev::after) {
  content: '<'; /* Săgeată stânga pentru butonul prev */
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #000; /* Culoarea săgeții la hover */
}

:deep(.swiper-button-disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .brand-slider {
    padding: 1rem 2rem;
  }
}
</style>
