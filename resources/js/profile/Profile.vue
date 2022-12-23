<template>
  <div class="container">
    <div class="flex space-x-24">
      <div
        class="
          rounded-full
          border border-gray-400
          p-1
          h-38
          flex
          items-center
          justify-center
        "
      >
        <img
          src="../images/166829202_353598529371128_5082416700019411320_n.jpg"
          class="w-32 rounded-full"
          alt=""
        />
      </div>
      <div>
        <div class="flex items-center justify-center">
          <div class="flex space-x-4">
            <span class="font-thin text-3xl">luck_pluck358</span>
            <span class="border border-gray-400 rounded py-1 px-2">編集</span>
            <div class="flex items-center justify-center">
              <i class="fa-solid fa-gear"></i>
            </div>
          </div>
        </div>
        <div class="flex justify-between pt-3 space-x-4">
          <span class="text-sm font-semibold">投稿11件</span>
          <span class="text-sm font-semibold">フォロワー64人</span>
          <span class="text-sm font-semibold">フォロー中898人</span>
        </div>
        <div class="pt-6 grid">
          <span class="text-lg font-semibold">Amadeusu</span>
        </div>
      </div>
    </div>
    <div class="pt-4"></div>
    <div class="border border-gray-400 w-95"></div>
    <div class="pt-3">
      <div>
        <ul class="tab-menu flex items-center justify-between">
          <li
            @click="select('PostList')"
            :class="{ active: tab === 'PostList' }"
          >
            <i class="fa-solid fa-camera-retro"></i>
          </li>
          <li
            @click="select('Calendar')"
            :class="{ active: tab === 'Calendar' }"
          >
            <i class="fa-regular fa-calendar-days"></i>
          </li>
          <li
            @click="select('CreatePost')"
            :class="{ active: tab === 'CreatePost' }"
          >
            <i class="fa-solid fa-circle-plus"></i>
          </li>
          <li
            @click="select('ItemList')"
            :class="{ active: tab === 'ItemList' }"
          >
            <img src="../icons/hanger.svg" class="h-5 w-5 text-black" alt="" />
          </li>
          <li
            @click="select('Bookmark')"
            :class="{ active: tab === 'Bookmark' }"
          >
            <i class="fa-regular fa-bookmark"></i>
          </li>
        </ul>
        <div class="tabs-content">
          <component :is="tab"></component>
        </div>
      </div>
    </div>
    <div class="pb-24"></div>
  </div>
</template>

<script>
import PostList from './PostList.vue';
import Calendar from './Calendar.vue';
import CreatePost from './CreatePost.vue';
import ItemList from './ItemList.vue';
import Bookmark from './Bookmark.vue';

export default {
  components: {
    PostList,
    Calendar,
    CreatePost,
    ItemList,
    Bookmark,
  },
  data() {
    return {
      tab: 'PostList',
    };
  },
  methods: {
    select: function (value) {
      this.tab = value;
    },
  },
};
</script>

<style scoped>
.tab-menu li.active {
  background: #d1d5de;
  color: black;
  border-bottom: 2px solid black;
}
</style>