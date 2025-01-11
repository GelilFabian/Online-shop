<script>
export default {
};
</script>
<template>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">
        WINTER SALE<br>
        PÂNĂ LA<br>
        -50%
      </h1>
      <button class="hero-button">Vezi</button>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  height: 600px;
  background-image: url('@/assets/images/adidas.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-content {
  position: absolute;
  left: 30px;
  width: 20%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #000;
  line-height: 1.2;
  margin-top:200px;
}

.hero-button {
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