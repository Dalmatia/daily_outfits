<template>
  <div class="flex flex-wrap w-1/3" v-for="outfit in outfits" :key="outfit.id">
    <div class="w-96 bg-white mx-1 mt-2">
      <router-link :to="{ name: 'OutfitDetail', params: { id: outfit.id } }">
        <img :src="outfit.outfit_image" alt="" />
      </router-link>
      <p class="mr-8">{{ outfit.post_date }}</p>
      <div>
        <div class="px-4 py-1 flex items-center justify-between">
          <div class="flex items-center">
            <router-link :to="{ name: 'Profile' }" class="text-gray-500">
              {{ outfit.user }}
            </router-link>
          </div>
          <a
            href="#"
            class="
              float-right
              bg-blue-500
              py-1
              text-white
              font-semibold
              text-sm
              rounded
              text-center
              hidden
              md:inline-block
            "
          >
            フォロー
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      outfits: [],
    };
  },
  mounted() {
    axios
      .get('/api/home-posts')
      .then((response) => (this.outfits = response.data.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>