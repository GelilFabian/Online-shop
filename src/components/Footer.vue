<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Main Grid -->
      <div class="footer__grid">
        <!-- Informații -->
        <div class="footer__column">
          <h3 class="footer__heading">Informații</h3>
          <ul class="footer__list">
            <li v-for="(item, index) in informationLinks" :key="index">
              <a :href="item.link" class="footer__link">{{ item.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Livrare -->
        <div class="footer__column">
          <h3 class="footer__heading">Livrare</h3>
          <ul class="footer__list">
            <li v-for="(item, index) in deliveryLinks" :key="index">
              <a :href="item.link" class="footer__link">{{ item.text }}</a>
            </li>
          </ul>
          <div class="footer__payment-methods">
            <img
                v-for="(method, index) in deliveryLinks"
                :key="index"
                :src="method.icon"
                :alt="method.name"
                class="footer__payment-icon"
            />
          </div>
        </div>

        <!-- Plată -->
        <div class="footer__column">
          <h3 class="footer__heading">Plată</h3>
          <ul class="footer__list">
            <li class="footer__text">Plata la livrare</li>
            <li class="footer__text">Plata online</li>
          </ul>
          <div class="footer__payment-methods">
            <img
                v-for="(method, index) in paymentMethods"
                :key="index"
                :src="method.icon"
                :alt="method.name"
                class="footer__payment-icon"
            />
          </div>
        </div>

        <!-- Mobile App -->
        <div class="footer__column">
          <div class="mobile-app">
            <h3 class="footer__heading">MOBILE APP</h3>
            <div class="footer__mobile">
              <!-- App Store Buttons -->
              <div class="footer__app-stores">
                <a
                    v-for="(store, index) in appStores"
                    :key="index"
                    :href="store.link"
                    class="footer__store-link"
                >
                  <img :src="store.icon" :alt="store.name" class="footer__store-icon" />
                </a>
              </div>
              <!-- QR Code -->
              <div class="footer__qr">
                <img src="@/assets/qr-code.png" alt="QR Code" class="footer__qr-code" />
              </div>
            </div>
          </div>
          <div class="social">
            <h3 class="footer__heading">URMĂREȘTE-NE</h3>
            <div class="footer__social">
              <a v-for="(social, index) in socialMedia" :key="index" :href="social.link" class="footer__social-link">
                <component :is="social.icon" class="footer__social-icon" />
              </a>
            </div>
            <div class="footer__legal">
              <img
                  v-for="(method, index) in legal"
                  :key="index"
                  :src="method.icon"
                  :alt="method.name"
                  class="footer__legal-icon"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="footer__bottom">

        <div class="footer__legal">
          <a v-for="(link, index) in bottomLinks" :key="index" :href="link.url" class="footer__legal-link">
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-vue-next';

const informationLinks = [
  { text: 'Contact', link: '#' },
  { text: 'Ajutor', link: '#' },
  { text: 'Retur', link: '#' },
  { text: 'Reclamații', link: '#' },
  { text: 'Termeni și condiții', link: '#' },
  { text: 'Alți termeni', link: '#' },
  { text: 'Împachetează pentru cadou', link: '#' },
  { text: 'Card cadou', link: '#' },
  { text: 'Politica de confidențialitate', link: '#' },
  { text: 'Raportarea încălcărilor (whistleblowing)', link: '#' },
  { text: 'Despre ANSWEAR.ro', link: '#' },
  { text: 'Social responsibility', link: '#' },
  { text: 'ANPC', link: '#' },
  { text: 'Blog', link: '#' },
];

const deliveryLinks = [
  { text: 'Fan Courier', icon: '/delivery/fan.svg', link: '#' },
  { text: 'Termenul de realizare a comenzii', link: '#' },
  { text: 'FAN Courier FANbox', link: '#' },
  { text: 'Sameday', icon: '/delivery/sameday.png', link: '#' },
];

const paymentMethods = [
  { name: 'PayU', icon: '/payments/payU.svg' },
  { name: 'Mastercard', icon: '/payments/mastercard.svg' },
  { name: 'Visa', icon: '/payments/visa.svg' },
  { name: 'Apple Pay', icon: '/payments/applePay.svg' },
  { name: 'Google Pay', icon: '/payments/googlePay.svg' },
];

const appStores = [
  { name: 'Google Play', icon: '/mobileapp/google-play.png', link: '#' },
  { name: 'App Store', icon: '/mobileapp/app-store.png', link: '#' },
  { name: 'AppGallery', icon: '/mobileapp/app-gallery.png', link: '#' },
];

const socialMedia = [
  { name: 'Facebook', icon: FacebookIcon, link: '#' },
  { name: 'Instagram', icon: InstagramIcon, link: '#' },
  { name: 'YouTube', icon: YoutubeIcon, link: '#' },
];

const legal = [
  { name: 'ANPC', icon:'/legal/ANPC.PNG', link:'#'},
  { name: 'Litigii', icon:'/legal/LITIGII.PNG', link:'#'},
];

const bottomLinks = [
  { text: 'Politica De Confidențialitate', url: '#' },
  { text: 'Termeni și Condiții', url: '#' },
  { text: 'Cookie-Urile Tale', url: '#' },
  { text: 'Harta Site-Ului', url: '#' },
];
</script>

<style scoped>
.footer {
  padding: 40px 0;
  border-top: 1px solid #e0e0e0;
  font-family: Arial, sans-serif;
}

.footer__container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 50px;
  text-align:left;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.footer__column{
  border-right: 1px solid #e0e0e0;
}

.footer__heading {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.footer__list {
  list-style: none;
  padding: 0;
}

.footer__link {
  color: #555;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: #000;
}

.footer__text {
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
}

.footer__payment-methods {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.footer__payment-icon {
  height: 30px;
}

.footer__app-stores {
  display: flex;
  flex-direction: column;

}

.footer__mobile {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer__qr {
  display: inline-block;
}

.footer__store-link {
  display: inline-block;
}

.footer__store-icon {
  height: 38px;
  width: auto;
}

.footer__qr-code {
  width: 140px;
  height: 140px;
}

.mobile-app {
  margin-bottom: 40px;
}

.footer__bottom {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  text-align: center;
}

.footer__social {
  display: flex;
  gap: 16px;
  margin-bottom: 25px;
}

.footer__social-icon {
  width: 24px;
  height: 24px;
  color: #555;
  transition: color 0.2s ease;
}

.footer__social-link:hover .footer__social-icon {
  color: #000;
}

.footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.footer__legal-link {
  color: #555;
  text-decoration: none;
  font-size: 13px;
}

.footer__legal-icon {
  width: 250px;
}

.footer__legal-link:hover {
  color: #000;
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
