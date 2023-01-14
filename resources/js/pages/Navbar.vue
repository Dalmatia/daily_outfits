<template>
  <div>
    <div class="border-b px-4 py-3 bg-white">
      <nav
        class="flex flex-wrap items-center justify-between md:justify-around"
      >
        <h1 class="font-aurore text-xl h-6">
          <router-link :to="{ name: 'Home' }">daily outfit</router-link>
        </h1>
        <div class="relative hidden sm:block text-gray-500">
          <input
            type="text"
            class="
              search
              max-w-xs
              border
              rounded
              bg-gray-200
              p-1
              px-2
              text-center
              outline-none
              focus:border-gray-400
            "
            name="search"
            placeholder="&#xF002;コーディネートを探す"
          />
        </div>
        <div>
          <div class="nav-icons">
            <router-link :to="{ name: 'Home' }">
              <i class="icon fa-solid fa-house text-xl md:px-1.5"></i>
            </router-link>
            <a href="#">
              <i class="icon fa-regular fa-plus text-xl md:px-1.5"></i>
            </a>
            <a href="#">
              <i class="icon fa-regular fa-heart text-xl md:px-1.5"></i>
            </a>
            <router-link :to="{ name: 'Profile' }">
              <i class="icon fa-regular fa-user text-xl md:px-1.5"></i>
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input.search {
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
}

.nav-icons {
  display: flex;
  align-items: center;
}

@media (max-width: 420px) {
  .nav-icons {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 8px;
    justify-content: space-around;
  }
}
</style>