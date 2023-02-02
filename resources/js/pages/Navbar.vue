<template>
  <div>
    <div class="border-b px-4 py-2.5 bg-white">
      <nav
        class="flex flex-wrap items-center justify-between md:justify-around"
      >
        <h1 class="font-aurore text-xl h-6">
          <router-link :to="{ name: 'Home' }">daily outfit</router-link>
        </h1>
        <div
          class="
            w-[250px]
            bg-gray-200
            py-1.5
            px-5
            rounded-md
            hidden
            sm:flex
            items-center
            space-x-2
          "
        >
          <i class="fas fa-search text-gray-400"></i>
          <input
            type="text"
            class="outline-0 bg-gray-200"
            name="search"
            placeholder="コーディネートを探す"
          />
        </div>
        <div>
          <div v-if="loggedIn">
            <ul class="nav-icons">
              <li>
                <router-link :to="{ name: 'Home' }">
                  <i class="icon fa-solid fa-house text-xl md:px-1.5"></i>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'CreatePosts' }">
                  <i class="icon fa-regular fa-plus text-xl md:px-1.5"></i>
                </router-link>
              </li>
              <li>
                <a href="#">
                  <i class="icon fa-regular fa-heart text-xl md:px-1.5"></i>
                </a>
              </li>
              <li class="md:hidden">
                <router-link :to="{ name: 'Profile' }">
                  <i class="icon fa-regular fa-user text-xl md:px-1.5"></i>
                </router-link>
              </li>
              <li class="hidden md:inline-block">
                <div class="relative">
                  <button @click="toggleVisibility">
                    <i class="icon fa-regular fa-user text-xl md:px-1.5"></i>
                  </button>
                  <div
                    v-if="menubar"
                    class="
                      absolute
                      w-48
                      mt-2
                      right-0
                      bg-white
                      rounded-md
                      shadow-inner
                      z-20
                    "
                  >
                    <router-link
                      :to="{ name: 'Profile' }"
                      class="
                        block
                        px-4
                        py-2
                        text-sm
                        capitalize
                        text-gray-500
                        hover:bg-black hover:text-white
                      "
                    >
                      プロフィール
                    </router-link>
                    <a
                      href="#"
                      class="
                        block
                        px-4
                        py-2
                        text-sm
                        capitalize
                        text-gray-500
                        hover:bg-black hover:text-white
                      "
                    >
                      設定
                    </a>
                    <a
                      href="#"
                      class="
                        block
                        px-4
                        py-2
                        text-sm
                        capitalize
                        text-gray-500
                        hover:bg-black hover:text-white
                      "
                      @click="logout"
                      >ログアウト</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            v-if="loggedIn"
            class="flex justify-center items-center md:hidden"
          >
            <div class="relative">
              <button
                class="text-gray-500 px-4 my-2 relative focus:outline-none"
                @click="toggleVisibility"
              >
                {{ name }}
              </button>
              <div
                v-if="menubar"
                class="
                  absolute
                  w-48
                  mt-2
                  right-0
                  bg-white
                  rounded-md
                  shadow-xl
                  z-20
                "
              >
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm
                    capitalize
                    text-gray-500
                    hover:bg-black hover:text-white
                  "
                >
                  設定
                </a>
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm
                    capitalize
                    text-gray-500
                    hover:bg-black hover:text-white
                  "
                  @click="logout"
                  >ログアウト</a
                >
              </div>
            </div>
          </div>
          <router-link
            v-if="!loggedIn"
            :to="{ name: 'Login' }"
            class="text-gray-500"
          >
            ログイン/ 新規登録
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      loggedIn: false,
      menubar: false,
    };
  },
  mounted() {
    if (localStorage.getItem('authenticated')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    axios
      .get('/api/user')
      .then((response) => {
        this.name = response.data.name;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.$emit('updateHeader');
          localStorage.removeItem('authenticated');
          this.$router.push({ name: 'Login' });
        }
      });
  },
  methods: {
    logout() {
      axios
        .post('/api/logout')
        .then((response) => {
          this.$router.push({ name: 'Home' });
          localStorage.removeItem('authenticated');
          this.$emit('updateHeader');
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toggleVisibility() {
      this.menubar = !this.menubar;
    },
  },
};
</script>

<style scoped>
.nav-icons {
  display: flex;
  align-items: center;
}

@media (max-width: 420px) {
  .nav-icons {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 8px;
    justify-content: space-around;
  }
}
</style>