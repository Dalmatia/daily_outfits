<template>
  <div class="bg-white my-6 py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2
        class="
          text-gray-800 text-2xl
          lg:text-3xl
          font-bold
          text-center
          mb-4
          md:mb-8
        "
      >
        投稿画面
      </h2>

      <div class="success-msg" v-if="success">
        <i class="fa fa-check"></i>
        投稿が完了しました!
      </div>
      <form class="max-w-lg border rounded-lg mx-auto" @submit.prevent="submit">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <div>
            <label
              for="outfit"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              コーディネート写真:
            </label>
            <input
              class="
                w-full
                bg-gray-50
                text-gray-400
                border
                focus:ring
                ring-indigo-300
                rounded
                outline-none
                transition
                duration-100
                px-3
                py-2
                mb-2
              "
              type="file"
              name="outfit"
              @input="grabFile"
            />
            <output class="preview" v-if="preview">
              <img
                class="object-scale-down h-80 w-[28rem]"
                :src="preview"
                alt=""
              />
            </output>
            <span v-if="errors.outfit" class="error">
              {{ errors.outfit[0] }}
            </span>
          </div>

          <div>
            <label
              for="description"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >何か書く(コーディネートのポイントなど):</label
            >
            <textarea
              class="
                w-full
                bg-gray-50
                text-gray-800
                border
                rounded
                outline-none
                transition
                duration-100
                px-3
                py-2
              "
              maxlength="200"
              name="description"
              v-model="fields.description"
            ></textarea>
          </div>

          <div>
            <label
              for="post_date"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >投稿日:
            </label>
            <Calendar
              class="
                w-full
                text-gray-800
                rounded
                outline-none
                transition
                duration-100
                px-3
                py-2
              "
              input-id="post_date"
              dateFormat="yy-mm-dd"
              v-model="fields.post_date"
              :show-icon="true"
              placeholder="日付を選択する"
            />
            <span v-if="errors.post_date" class="error">
              {{ errors.post_date[0] }}
            </span>
          </div>

          <button
            type="submit"
            class="
              block
              bg-gray-800
              hover:bg-gray-700
              active:bg-gray-600
              focus-visible:ring
              ring-gray-300
              text-white text-sm
              md:text-base
              font-semibold
              text-center
              rounded-lg
              outline-none
              transition
              duration-100
              px-8
              py-3
            "
          >
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
  data() {
    return {
      success: false,
      fields: {
        post_date: null,
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
      this.fields.outfit = file;
      this.preview = URL.createObjectURL(file);
      URL.revokeObjectURL(file);
    },
    submit() {
      axios
        .post('/api/posts', this.fields, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(() => {
          this.fields = {};
          this.preview = null;
          this.fields.post_date = null;
          this.errors = {};
          this.success = true;
          setTimeout(() => {
            this.success = false;
          }, 2500);
          // this.$router.push({ name: 'Home' });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.success = false;
        });
    },
  },
};
</script>

<style>
</style>