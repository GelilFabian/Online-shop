<template>
  <div class="zigzag-layout">
    <div class="section men">
      <div class="content">
        <div class="text">
          <h1>Bărbați</h1>
          <p>Căutați pantofi de bărbați</p>
          <router-link to="/barbati"><button class="hero-button">Vezi</button></router-link>
        </div>
        <div class="image">
          <img src="@/assets/images/men.jpg" alt="Barbati">
        </div>
      </div>
    </div>
    <div class="section women">
      <div class="content">
        <div class="image">
          <img src="@/assets/images/women.jpg" alt="Femei">
        </div>
        <div class="text">
          <h1>Colecția de Femei</h1>
          <p>Căutați pantofi de femei</p>
          <router-link to="/femei"><button class="hero-button">Vezi</button></router-link>
        </div>
      </div>
    </div>
    <div class="section men">
      <div class="content">
        <div class="text">
          <h1>Copii</h1>
          <p>Căutați pantofi de copii</p>
          <router-link to="/copii"><button class="hero-button">Vezi</button></router-link>
        </div>
        <div class="image">
          <img src="@/assets/images/kids.jpg" alt="Copii">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
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
.men {
  background-color: #ffffff;
  flex-direction: row;
}
.women {
  background-color: #f8f8f8;
  flex-direction: row-reverse;
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
.men .text{
  text-align: left;
}
.women .text{
  text-align: right;
}
.men .image {
  justify-content: right;
}
.image {
  flex: 1;
  display: flex;
  padding: 40px;
}
.image img {
  max-width: 900px;
  height: 650px;
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
h1{
  color:black;
  font-weight: 600;
}
p{
  color:black;
  font-size:15px;
}
a {
  color:white;
}
</style>