<template>
  <nav class="subnav" v-if="activeRoute === '/barbati' || activeRoute === '/femei' || activeRoute === '/copii'">
    <ul>
      <li><router-link to="/">Noutăți</router-link></li>
      <li><router-link to="/">Winter Sale</router-link></li>
      <li><router-link to="/">Populare</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';
import {ref, watch} from "vue";

export default {
  setup() {
    const route = useRoute();
    const activeRoute = ref(route.path);

    watch(route, (newRoute) => {
      activeRoute.value = newRoute.path;
    });

    return { activeRoute };
  }
};
</script>

<style scoped>
.subnav {
  background-color: #f2f2f2;
  padding: 10px 30px;
}

.subnav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
}

.subnav li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
}
</style>
