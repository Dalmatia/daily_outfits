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
                text-gray-800
                border
                focus:ring
                ring-indigo-300
                rounded
                outline-none
                transition
                duration-100
                px-3
                py-2
              "
              type="file"
              name="outfit"
              @change="onFileChange"
            />
            <output class="form-output" v-if="preview">
              <img class="img-fluid img-thumbnail" :src="preview" alt="" />
            </output>
          </div>

          <div>
            <label
              for="outfit"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >何か書く(コーディネートのポイントなど)</label
            >
            <textarea
              class="
                w-full
                h-24
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
              v-model="description"
            ></textarea>
          </div>

          <div>
            <label
              for=""
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >投稿日:
            </label>
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
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      outfit_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      modal: false,
      outfit: null,
      description: null,
      preview: null,
    };
  },
  methods: {
    submit: function () {
      const formData = new FormData();
      formData.append('outfit', this.outfit);
      formData.append('description', this.description);
      formData.append('outfit_date', this.outfit_date);

      axios
        .post('/api/outfits', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    onFileChange(event) {
      if (event.target.files.length === 0) {
        this.reset();
        return false;
      }

      if (!event.target.files[0].type.match('image.*')) {
        this.reset();
        return false;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        this.preview = e.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.outfit = event.target.files[0];
    },
    reset() {
      this.preview = '';
      this.outfit = null;
      this.$el.querySelector('input[type="file"]').value = null;
    },
  },
};
</script>

<style>
</style>