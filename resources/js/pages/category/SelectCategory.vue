<template>
  <div>
    <div>
      <label class="inline-block text-gray-800 text-sm sm:text-base mb-2" for="main">カテゴリー:</label>
      <select
        class="w-full bg-gray-50 text-black border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 mb-5"
        id="main" v-model="selectMain" @change="categorySub">
        <option disabled value="">選択してください</option>
        <option :value="mainCategory.id" v-for="mainCategory in mainCategories" :key="mainCategory.id">
          {{ mainCategory.name }}
        </option>
      </select>
      <div v-if="subCategory.length !== 0">
        <label class="inline-block text-gray-800 text-sm sm:text-base mb-2">サブカテゴリー:</label>
        <select
          class="w-full bg-gray-50 text-black border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 mb-5"
          id="sub" v-model="selectSub" @change="sendNew">
          <option disabled value="">選択してください</option>
          <option :value="sub.id" v-for="sub in subCategory" :key="sub.id">
            {{ sub.name }}
          </option>
        </select>
      </div>
      <input type="hidden" name="category_id" :value="here.id">
      <input type="hidden" name="category_name" :value="here.name">
    </div>
  </div>
</template>
 
<script>

import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      selectMain: '',
      selectSub: '',
    }
  },
  computed: {
    ...mapState(['mainCategories']),
    ...mapGetters(['subCategory', 'here'])
  },
  methods: {
    categorySub() {
      this.$store.dispatch('findSub', this.selectMain)
      this.$store.dispatch('hereCategory', this.selectMain)
    },
    sendNew() {
      this.$store.dispatch('hereCategory', this.selectSub)
    }
  }
}
</script>