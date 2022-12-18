<template>
  <div class="bg-white px-64 p-3 border-b border-gray-400">
    <div class="flex justify-between">
      <h1 class="font-aurore items-center justify-center">
        <router-link :to="{ name: 'Home' }">daily outfit</router-link>
      </h1>
      <div class="flex items-center justify-center">
        <input
          type="text"
          class="
            search
            px-6
            border
            bg-gray-300
            text-dark
            rounded-md
            p-1
            outline-none
          "
          name="search"
          placeholder="&#xF002;コーディネートを探す"
        />
      </div>
      <div class="flex space-x-4 items-center justify-center">
        <router-link :to="{ name: 'Home' }">
          <i class="fa-solid fa-house"></i>
        </router-link>
        <a href="#"><i class="fa-regular fa-plus"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        <router-link :to="{ name: 'Profile' }"
          ><i class="fa-regular fa-user"></i
        ></router-link>
      </div>
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
</style>