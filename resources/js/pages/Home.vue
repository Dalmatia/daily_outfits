<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-2 py-5 mx-auto lg:pt-12 lg:px-32">
      <h2>最近の投稿</h2>
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div
          class="flex flex-wrap w-1/3"
          v-for="outfit in outfits"
          :key="outfit.id"
        >
          <div class="w-full p-1 md:p-2">
            <img :src="outfit.outfit_image" width="246" class="h-80" alt="" />
          </div>
          <p>
            {{ outfit.created_at }}
          </p>
          <span>
            {{ outfit.user }}
          </span>
        </div>
      </div>
      <div class="pb-24"></div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  emits: ['updateHeader'],
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