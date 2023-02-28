<template>
  <div class="bg-slate-100">
    <header class="sticky top-0">
      <NavbarVue />
    </header>
    <main class="container mx-auto">
      <router-view @update-header="updateHeader" @show-edit-success="showEditSuccess"
        :editSuccess="editSuccess"></router-view>
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
      editSuccess: false,
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
    showEditSuccess() {
      this.editSuccess = true;
      setTimeout(() => {
        this.editSuccess = false;
      }, 2500);
    }
  },
};
</script>

<style scoped></style>