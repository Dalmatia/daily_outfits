<template>
  <div>
    <div
      class="
        flex flex-wrap
        sm:justify-start sm:flex-nowrap
        z-50
        w-full
        bg-white
        border-b border-gray-200
        text-sm
        py-3
        sm:py-0
      "
    >
      <nav
        class="
          relative
          max-w-[85rem]
          w-full
          mx-auto
          px-4
          sm:flex sm:items-center sm:justify-between sm:px-6
          lg:px-8
        "
      >
        <div class="flex items-center justify-center">
          <h1 class="font-aurore text-2xl my-3 md:px-2">
            <router-link :to="{ name: 'Home' }">daily outfit</router-link>
          </h1>
        </div>
        <div class="flex items-center justify-center">
          <input
            type="text"
            class="
              search
              px-6
              border
              bg-gray-200
              text-dark
              rounded-md
              p-1
              outline-none
              text-xl
              my-3
              md:px-2
            "
            name="search"
            placeholder="&#xF002;    コーディネートを探す"
          />
        </div>
        <div>
          <div class="nav-icons">
            <router-link :to="{ name: 'Home' }">
              <i class="icon fa-solid fa-house text-xl my-3 md:px-3"></i>
            </router-link>
            <a href="#">
              <i class="icon fa-regular fa-plus text-xl my-3 md:px-3"></i>
            </a>
            <a href="#">
              <i class="icon fa-regular fa-heart text-xl my-3 md:px-3"></i>
            </a>
            <router-link :to="{ name: 'Profile' }">
              <i class="icon fa-regular fa-user text-xl my-3 md:px-3"></i>
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
    padding: 0;
    justify-content: space-around;
  }
}
</style>