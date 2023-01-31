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
                <a href="#">
                  <i class="icon fa-regular fa-plus text-xl md:px-1.5"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon fa-regular fa-heart text-xl md:px-1.5"></i>
                </a>
              </li>
              <li>
                <router-link :to="{ name: 'Profile' }">
                  <i class="icon fa-regular fa-user text-xl md:px-1.5"></i>
                </router-link>
              </li>
            </ul>
          </div>
          <button class="text-gray-500" v-if="loggedIn">
            <span>{{ name }}</span>
            <a href="#" @click="logout">ログアウト</a>
          </button>
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