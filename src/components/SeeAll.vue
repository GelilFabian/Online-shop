<script setup>

</script>

<template>
  <div class="zigzag-layout">
    <div class="section men">
      <div class="content">
        <div class="text">
          <h1>Afișați toată colecția</h1>
          <router-link to="/barbati"><button class="hero-button">Vezi</button></router-link>
        </div>
        <div class="image">
          <img src="@/assets/images/seeAll.png" alt="Barbati">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zigzag-layout {
  margin-top:60px;
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
</style>