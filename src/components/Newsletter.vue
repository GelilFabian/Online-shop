<template>
  <div>
    <!-- Info Banner -->
    <div class="info-banner">
      <div class="info-banner__container">
        <div class="info-banner__item">
          <div class="info-banner__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="1" y="3" width="15" height="13" />
              <polyline points="16 8 20 8 23 11 23 16 20 16 16 16 16 8" />
              <circle cx="5" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
            </svg>
          </div>
          <div class="info-banner__content">
            <h3 class="info-banner__title">Livrare și retur gratuite</h3>
            <p class="info-banner__text">Comandă cu încredere și returnează ce nu-ți place! Livrarea și returul sunt gratuite, pentru clienții înregistrați, la toate comenzile de cel puțin 300 RON</p>
          </div>
        </div>

        <div class="info-banner__item">
          <div class="info-banner__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div class="info-banner__content">
            <h3 class="info-banner__title">Expediere în 24h</h3>
            <p class="info-banner__text">1 eco-pack</p>
          </div>
        </div>

        <div class="info-banner__item">
          <div class="info-banner__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div class="info-banner__content">
            <h3 class="info-banner__title">Answear Club</h3>
            <p class="info-banner__text">Înscrie-te într-un program de loialitate care îți oferă beneficii reale! Cu punctele colectate îți poți reduce prețul comenzilor cu până la 50%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <section class="newsletter">
      <div class="newsletter__container">
        <div class="newsletter__content">
          <h2 class="newsletter__title">
            Abonează-te la newsletter-ul nostru și primești o reducere de
            <span class="newsletter__highlight">-15%**</span> la prima ta achiziție.
          </h2>
          <p class="newsletter__description">
            Alătură-te comunității noastre pentru a primi informații despre cele mai recente promoții și produse.
          </p>
          <p class="newsletter__disclaimer">
            **Discountul este valabil la toate produsele cu preț întreg de pe ANSWEAR.ro și poate fi folosit o singură dată, la o comandă de peste 250 lei. Reducerea nu poate fi cumulată cu alte promoții, iar unele produse pot fi excluse din reducere. Detalii pe site: <a href="#" class="newsletter__link">exclusieri din promoție</a>.
          </p>
          <form @submit.prevent="handleSubmit" class="newsletter__form">
            <div class="newsletter__input-wrapper">
              <span class="newsletter__input-icon">✉</span>
              <input
                  type="email"
                  v-model="email"
                  placeholder="E-mail"
                  class="newsletter__input"
              >
            </div>
            <button type="submit" class="newsletter__button">
              Înregistrează-te
            </button>
          </form>
        </div>

        <div class="newsletter__content">
          <h2 class="newsletter__title">Answear Club</h2>
          <p class="newsletter__description">
            Creează-ți un cont și economisește la fiecare achiziție. Poți beneficia de o reducere de 10% la fiecare comandă și poți reduce prețul produselor cu până la -50%!          </p>
          <button type="submit" class="newsletter__button">
            Află mai multe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubmit = async () => {
  try {
    console.log('Subscribing email:', email.value)
    email.value = ''
  } catch (error) {
    console.error('Subscription error:', error)
  }
}
</script>

<style scoped>
/* Info Banner Styles */
.info-banner {
  border-top: 1px solid #e0e0e0;
  padding: 40px 20px;
  background-color: white;
}

.info-banner__container {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.info-banner__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.info-banner__icon {
  margin-bottom: 16px;
  color: #000;
}

.info-banner__icon svg {
  width: 80px;
  height: 80px;
  stroke-width: 1.5;
}

.info-banner__title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #000;
}

.info-banner__text {
  font-size: 14px;
  line-height: 1.5;
  color: #666;
}

/* Newsletter Styles */
.newsletter {
  padding: 40px 20px;
}

.newsletter__container {
  max-width: 100%;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
}

.newsletter__content {
  max-width: 49%;
  padding: 40px 100px;
  background-color: #f8f8f8;
  border-radius: 4px;
  text-align:left;
}

.newsletter__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
}

.newsletter__highlight {
  font-weight: 800;
}

.newsletter__description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.newsletter__form {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.newsletter__input-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.newsletter__input-icon {
  position: absolute;
  left: 12px;
  color: #666;
  font-size: 16px;
}

.newsletter__input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  font-size: 14px;
  border-radius: 0;
}

.newsletter__button {
  background: #000;
  color: #fff;
  padding: 12px 24px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.newsletter__button:hover {
  background: #333;
}

.newsletter__disclaimer {
  font-size: 12px;
  color: #999;
  line-height: 1.5;
}

.newsletter__link {
  color: inherit;
  text-decoration: underline;
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

@media (max-width: 768px) {
  .info-banner__container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .newsletter__form {
    flex-direction: column;
  }

  .newsletter__button {
    width: 100%;
  }

  .newsletter__content {
    padding: 20px;
  }
}
</style>