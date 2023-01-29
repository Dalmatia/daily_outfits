<template>
  <div class="bg-slate-100">
    <header>
      <NavbarVue />
    </header>
    <main class="container mx-auto">
      <router-view @update-header="updateHeader"></router-view>
    </main>
  </div>
</template>

<script>
import NavbarVue from './pages/Navbar.vue';
export default {
  components: {
    NavbarVue,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  mounted() {
    if (localStorage.getItem('authenticated')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
  methods: {
    updateHeader() {
      this.loggedIn = !this.loggedIn;
    },
  },
};
</script>

<style scoped>
</style>