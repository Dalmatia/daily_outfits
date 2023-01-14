<template>
  <div class="bg-slate-100">
    <header>
      <NavbarVue />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavbarVue from './pages/Navbar.vue';
export default {
  components: {
    NavbarVue,
  },
};
</script>

<style scoped>
</style>