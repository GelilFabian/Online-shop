<template>
  <header>
    <nav>
      <ul id="ul1">
        <li><router-link to="/" :class="{ 'active-link': isActive('/') }">Home</router-link></li>
        <li><router-link to="/femei" :class="{ 'active-link': isActive('/femei') }">Femei</router-link></li>
        <li><router-link to="/barbati" :class="{ 'active-link': isActive('/barbati') }">Bărbați</router-link></li>
        <li><router-link to="/copii" :class="{ 'active-link': isActive('/copii') }">Copii</router-link></li>
      </ul>
      <div class="title">
        <router-link to="/"><img src="@/assets/images/logo.png" alt="Logo"></router-link>
      </div>
      <ul id="ul2">
        <li><router-link to="/"><div class="custom-circle"><span>AC</span></div></router-link></li>
        <li><router-link to="/"><User class="w-6 h-6" /></router-link></li>
        <li><router-link to="/"><Heart class="w-6 h-6" /></router-link></li>
        <li><router-link to="/"><ShoppingBag class="w-6 h-6" /></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#ul1 {
  display: flex;
  list-style: none;
  margin: 0;
  gap: 35px;
  padding: 0 30px;
}
#ul1 li a {
  color: black;
  font-size: 16px;
}
nav img {
  margin-top:10px;
  height:50px;
  text-align: center;
}
#ul2 {
  display: flex;
  list-style: none;
  padding: 0 30px;
  margin: 0;
  gap: 35px;
}
#ul2 li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}
.custom-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  font-weight: bold;
  font-size: 14px;
}
.w-6 {
  width: 1.5rem;
  font-size: 25px;
  color: #333;
}
.h-6 {
  height: 1.5rem;
}
span {
  font-weight: 600;
}
.active-link {
  font-weight: bold;
  color: #000;
  position: relative;
}

.active-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -15px; /* Spațiu de 20px sub text */
  width: 100%;
  height: 2px; /* Grosimea sublinierii */
  background-color: #000; /* Culoarea sublinierii */
}
</style>

<script setup>
import { Heart, ShoppingBag, User } from "lucide-vue-next";
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = (path) => route.path === path;
</script>
