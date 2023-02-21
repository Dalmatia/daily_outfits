<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-2 py-5 mx-auto lg:pt-12 lg:px-32">
      <h2>最近の投稿</h2>
      <div class="overflow-hidden text-gray-700">
        <article class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <OutfitImage />
          </div>
        </article>
      </div>
      <div class="pb-24"></div>
    </div>
  </section>
</template>

<script>
import OutfitImage from './OutfitImage.vue';
export default {
  emits: ['updateHeader'],
  components: {
    OutfitImage,
  },
};
</script>

<style></style>