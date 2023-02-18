<template>
  <div class="container mx-auto">
    <div
      class="flex items-center justify-between p-3 bg-white"
      style="cursor: auto"
    >
      <div class="flex items-center space-x-2" style="cursor: auto">
        <img
          src="https://stackdiary.com/140x100.png"
          alt=""
          class="
            object-cover object-center
            w-8
            h-8
            rounded-full
            shadow-sm
            bg-coolGray-500
            border-coolGray-700
          "
          style="cursor: auto"
        />
        <div class="-space-y-1" style="cursor: auto">
          <router-link
            :to="{ name: 'Profile' }"
            class="text-sm font-semibold leading-none"
            style="cursor: auto"
          >
            {{ outfit.user }}
          </router-link>
        </div>
      </div>
      <a
        href="#"
        class="
          float-right
          bg-blue-500
          text-white
          font-semibold
          text-sm
          rounded
          text-center
          md:inline-block
          p-3
        "
      >
        フォロー
      </a>
    </div>
    <div
      class="
        space-y-4
        lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0
      "
      style="cursor: auto"
    >
      <div
        class="p-3 px-6 min-h-48 flex justify-center items-center"
        style="cursor: auto"
      >
        <custom-card3>
          <div
            class="
              rounded-md
              shadow-md
              sm:w-96
              md:w-auto
              bg-white
              text-coolGray-100
            "
          >
            <img
              :src="`/${outfit.outfit_image}`"
              alt=""
              class="object-cover"
              style="cursor: auto"
            />
            <div class="p-3" style="cursor: auto">
              <div
                class="flex items-center justify-between"
                style="cursor: auto"
              >
                <div class="flex items-center space-x-3">
                  <button
                    type="button"
                    title="Like post"
                    class="flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-5 h-5 fill-current"
                    >
                      <path
                        d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Add a comment"
                    class="flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-5 h-5 fill-current"
                    >
                      <path
                        d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Share post"
                    class="flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-5 h-5 fill-current"
                    >
                      <path
                        d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  title="Bookmark post"
                  class="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="w-5 h-5 fill-current"
                  >
                    <path
                      d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="flex flex-wrap items-center pt-3 pb-1"
                style="cursor: auto"
              >
                <div class="flex items-center space-x-2">
                  <div class="flex -space-x-1">
                    <img
                      alt=""
                      class="
                        w-5
                        h-5
                        border
                        rounded-full
                        bg-coolGray-500
                        border-coolGray-800
                      "
                      src="https://stackdiary.com/140x100.png"
                    />
                    <img
                      alt=""
                      class="
                        w-5
                        h-5
                        border
                        rounded-full
                        bg-coolGray-500
                        border-coolGray-800
                      "
                      src="https://stackdiary.com/140x100.png"
                    />
                    <img
                      alt=""
                      class="
                        w-5
                        h-5
                        border
                        rounded-full
                        bg-coolGray-500
                        border-coolGray-800
                      "
                      src="https://stackdiary.com/140x100.png"
                    />
                  </div>
                  <span class="text-sm">
                    Liked by <span class="font-semibold">Pixels</span> and
                    <span class="font-semibold">20 others</span>
                  </span>
                </div>
              </div>
              <div class="space-y-3" style="cursor: auto">
                <p class="text-sm" style="cursor: auto">
                  <span class="text-base font-semibold">External_</span> It's
                  getting cold out there!
                </p>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  class="
                    w-full
                    py-0.5
                    bg-transparent
                    border-none
                    rounded
                    text-sm
                    pl-0
                    text-coolGray-100
                    outline-none
                  "
                  style="cursor: auto"
                />
              </div>
            </div>
          </div>
        </custom-card3>
      </div>
      <div class="sm:col-span-2 p-4" style="cursor: auto">
        <div class="bg-white rounded-lg shadow-md" style="cursor: auto">
          <h4
            class="
              text-lg
              leading-6
              font-semibold font-sans
              text-skin-inverted
              group-hover:text-skin-primary
              border-b
              p-3
            "
            style="cursor: auto"
          >
            {{ outfit.user }} さんのコーディネート
          </h4>

          <p
            class="mt-1 font-normal text-skin-base leading-5 m-4"
            style="cursor: auto"
          >
            {{ outfit.description }}
          </p>
          <div class="mt-3 flex items-center font-sans" style="cursor: auto">
            <div class="ml-3">
              <div
                class="flex space-x-1 text-sm text-skin-muted"
                style="cursor: auto"
              >
                <span class="text-gray-400">
                  <i class="far fa-clock text-gray-400"></i>
                  投稿日:{{ outfit.post_date }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-3 p-2" style="cursor: auto">
            <div class="flex items-center space-x-2" style="cursor: auto">
              <span
                class="
                  inline-flex
                  items-center
                  leading-none
                  px-2.5
                  py-1.5
                  text-sm
                  font-medium
                  text-skin-inverted
                  rounded-full
                  border border-skin-input
                  bg-white
                "
                style="cursor: auto"
              >
                <svg
                  class="mr-1.5 h-2 w-2 brand-react"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Tag #1
              </span>

              <span
                class="
                  inline-flex
                  items-center
                  leading-none
                  px-2.5
                  py-1.5
                  text-sm
                  font-medium
                  text-skin-inverted
                  rounded-full
                  border border-skin-input
                  bg-white
                "
                style="cursor: auto"
              >
                <svg
                  class="mr-1.5 h-2 w-2 brand-packages"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Tag #2
              </span>

              <span
                class="
                  inline-flex
                  items-center
                  leading-none
                  px-2.5
                  py-1.5
                  text-sm
                  font-medium
                  text-skin-inverted
                  rounded-full
                  border border-skin-input
                  bg-white
                "
                style="cursor: auto"
              >
                <svg
                  class="mr-1.5 h-2 w-2 brand-tutoriel"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3"></circle>
                </svg>
                Tag #3
              </span>
            </div>
          </div>
        </div>
        <div class="mt-10 bg-white rounded-lg shadow-md" style="cursor: auto">
          <h4
            class="
              text-lg
              leading-6
              font-semibold font-sans
              text-skin-inverted
              group-hover:text-skin-primary
              border-b
              p-3
            "
            style="cursor: auto"
          >
            着用アイテム
          </h4>
          <div
            class="mt-5 flex space-x-2 items-center justify-center flex-wrap"
          >
            <div
              class="
                story-item
                relative
                hover:opacity-90
                cursor-pointer
                transition
                duration-200
                ease-in-out
              "
              style="width: 136px"
            >
              <img
                src="https://picsum.photos/id/23/200/300"
                class="rounded-xl"
              />
              <div
                class="
                  absolute
                  flex flex-col
                  justify-between
                  h-full
                  w-full
                  top-0
                  left-0
                  py-4
                "
              >
                <img
                  src="https://picsum.photos/id/237/50/50"
                  class="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
                />
                <div class="text-center text-white">John Doe</div>
              </div>
            </div>
            <div
              class="
                story-item
                relative
                hover:opacity-90
                cursor-pointer
                transition
                duration-200
                ease-in-out
              "
              style="width: 136px"
            >
              <img
                src="https://picsum.photos/id/29/200/300"
                class="rounded-xl"
              />
              <div
                class="
                  absolute
                  flex flex-col
                  justify-between
                  h-full
                  w-full
                  top-0
                  left-0
                  py-4
                "
              >
                <img
                  src="https://picsum.photos/id/237/50/50"
                  class="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
                />
                <div class="text-center text-white">John Doe</div>
              </div>
            </div>
            <div
              class="
                story-item
                relative
                hover:opacity-90
                cursor-pointer
                transition
                duration-200
                ease-in-out
              "
              style="width: 136px"
            >
              <img
                src="https://picsum.photos/id/230/200/300"
                class="rounded-xl"
              />
              <div
                class="
                  absolute
                  flex flex-col
                  justify-between
                  h-full
                  w-full
                  top-0
                  left-0
                  py-4
                "
              >
                <img
                  src="https://picsum.photos/id/237/50/50"
                  class="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
                />
                <div class="text-center text-white">John Doe</div>
              </div>
            </div>
            <div
              class="
                story-item
                relative
                hover:opacity-90
                cursor-pointer
                transition
                duration-200
                ease-in-out
              "
              style="width: 136px"
            >
              <img
                src="https://picsum.photos//id/63/200/300"
                class="rounded-xl"
              />
              <div
                class="
                  absolute
                  flex flex-col
                  justify-between
                  h-full
                  w-full
                  top-0
                  left-0
                  py-4
                "
              >
                <img
                  src="https://picsum.photos/id/237/50/50"
                  class="rounded-full w-10 h-10 border-4 border-blue-500 ml-4"
                />
                <div class="text-center text-white">John Doe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-24"></div>
</template>

<script>
export default {
  emits: ['updateHeader'],
  props: ['id'],
  data() {
    return {
      outfit: {},
    };
  },
  mounted() {
    axios
      .get('/api/posts/' + this.id)
      .then((response) => (this.outfit = response.data.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>