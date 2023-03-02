<template>
  <div class="bg-slate-50 my-6 py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
        アイテム投稿画面
      </h2>

      <div class="success-msg" v-if="success">
        <i class="fa fa-check"></i>
        投稿が完了しました!
      </div>
      <form class="max-w-lg border rounded-lg mx-auto" @submit.prevent="submit">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <div>
              <label for="item_name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">アイテム名:</label>
              <input type="text" id="item_name"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 mb-5"
                v-model="fields.item_name" />
              <span v-if="errors.item_name" class="error">{{ errors.item_name[0] }}</span>
            </div>

            <label for="item" class="inline-block text-gray-800 text-sm sm:text-base mb-2">
              アイテム画像:
            </label>
            <input
              class="w-full bg-gray-50 text-gray-400 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 mb-2"
              type="file" name="item" @input="grabFile" />
            <output class="preview" v-if="preview">
              <img class="object-scale-down h-80 w-[28rem]" :src="preview" alt="" />
            </output>
            <span v-if="errors.item" class="error">
              {{ errors.item[0] }}
            </span>
          </div>

          <div>
            <label for="categories" class="inline-block text-gray-800 text-sm sm:text-base mb-2">
              アイテムカテゴリー:
            </label>
            <select
              class="w-full bg-gray-50 text-gray-400 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 mb-2"
              v-model="fields.category_id" id="categories">
              <option disabled value="">Select option</option>
              <option :value="category.id" v-for="category in categories" :key="category.id">
                {{ category.name }}
              </option>
            </select>
            <span v-if="errors.category_id" class="error">
              {{ errors.category_id[0] }}
            </span>
          </div>

          <button type="submit"
            class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            投稿する
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="pb-32"></div>
</template>

<script>
import axios from 'axios';
export default {
  emits: ['updateHeader'],
  data() {
    return {
      success: false,
      fields: {
        category_id: null,
      },
      preview: '',
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numMonths: 2,
        },
        {
          breakpoint: '1200px',
          numMonths: 1,
        },
      ],
      errors: {},
    };
  },
  methods: {
    grabFile(e) {
      const file = e.target.files[0];
      this.fields.item = file;
      this.preview = URL.createObjectURL(file);
      URL.revokeObjectURL(file);
    },
    submit() {
      axios
        .post('/api/items', this.fields, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(() => {
          this.fields = {};
          this.preview = null;
          this.fields.category_id = null;
          this.errors = {};
          this.success = true;
          setTimeout(() => {
            this.success = false;
            this.$router.push({ name: 'ItemList' });
          }, 2500);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.success = false;
        });
    },
  },
};
</script>

<style></style>