<template>
  <div class="lg:w-8/12 lg:mx-auto mb-8">
    <div class="success-msg" v-if="editSuccess">
      <i class="fa fa-check"></i>
      編集が完了しました!
    </div>
    <header class="flex flex-wrap items-center p-4 md:py-8">
      <div class="md:w-3/12 md:ml-16">
        <!-- profile image -->
        <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-gray-600 p-1"
          src="../images/166829202_353598529371128_5082416700019411320_n.jpg" alt="profile" />
      </div>

      <!-- profile meta -->
      <div class="w-8/12 md:w-7/12 ml-4">
        <div class="md:flex md:flex-wrap md:items-center mb-4">
          <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
            luck_pluck358
          </h2>
          <!-- follow button -->
          <a href="#"
            class="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block md:m-1">
            フォロー
          </a>
        </div>

        <!-- post, following, followers list for medium screens -->
        <ul class="hidden md:flex space-x-8 mb-4">
          <li>
            <span class="font-semibold">136</span>
            投稿
          </li>

          <li>
            <span class="font-semibold">40.5k</span>
            フォロワー
          </li>
          <li>
            <span class="font-semibold">302</span>
            フォロー中
          </li>
        </ul>

        <!-- user meta form medium screens -->
        <div class="hidden md:block">
          <h1 class="font-semibold">Amadeusu</h1>
        </div>
      </div>

      <!-- user meta form small screens -->
      <div class="md:hidden text-sm my-2">
        <h1 class="font-semibold">Amadeusu</h1>
      </div>
    </header>

    <!-- posts -->
    <div class="px-px md:px-3">
      <!-- user following for mobile only -->
      <ul class="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
        <li>
          <span class="font-semibold text-gray-800 block">136</span>
          投稿
        </li>

        <li>
          <span class="font-semibold text-gray-800 block">40</span>
          フォロワー
        </li>
        <li>
          <span class="font-semibold text-gray-800 block">302</span>
          フォロー中
        </li>
      </ul>

      <ul
        class="tab-menu flex items-center justify-around space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
        <li @click="select('PostList')" :class="{ active: tab === 'PostList' }">
          <i class="fa-solid fa-camera-retro inline-block p-1 text-xl"></i>
        </li>
        <li @click="select('Calendar')" :class="{ active: tab === 'Calendar' }">
          <i class="fa-regular fa-calendar-days inline-block p-1 text-xl"></i>
        </li>
        <li @click="select('CreatePost')" :class="{ active: tab === 'CreatePost' }">
          <i class="fas fa-plus-circle inline-block p-1 text-xl"></i>
        </li>
        <li @click="select('ItemList')" :class="{ active: tab === 'ItemList' }">
          <img src="../icons/hanger.svg" class="inline-block h-7 w-7 p-1" alt="" />
        </li>
        <li @click="select('Bookmark')" :class="{ active: tab === 'Bookmark' }">
          <i class="fa-regular fa-bookmark inline-block p-1 text-xl"></i>
        </li>
      </ul>
      <div class="tabs-content">
        <component :is="tab"></component>
      </div>
    </div>
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
  props: ['editSuccess'],
  data() {
    return {
      tab: 'PostList',
      success: false
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
  background: #f1f5f9;
  color: black;
  border-bottom: 2px solid black;
}
</style>