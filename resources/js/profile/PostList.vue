<template>
  <div class="flex flex-wrap -mx-px md:-mx-3">
    <div
      class="flex flex-wrap w-1/3"
      v-for="outfit in outfits"
      :key="outfit.id"
    >
      <div class="w-full p-1 md:p-2">
        <router-link :to="{ name: 'OutfitDetail', params: { id: outfit.id } }">
          <img :src="outfit.outfit_image" width="246" class="h-80" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['updateHeader'],
  data() {
    return {
      outfits: [],
    };
  },
  mounted() {
    axios
      .get('/api/posts')
      .then((response) => (this.outfits = response.data.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>