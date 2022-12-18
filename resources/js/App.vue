<template>
  <div class="bg-gray-300">
    <header>
      <NavbarVue />
    </header>
    <main class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
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