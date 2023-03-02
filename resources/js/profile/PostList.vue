<template>
    <div class="flex flex-wrap -mx-px md:-mx-3 mt-2">
        <div class="success-msg" v-if="success">
            <i class="fa fa-check"></i>
            投稿の削除が完了しました!
        </div>
        <div class="flex flex-wrap w-1/3" v-for="outfit in outfits" :key="outfit.id">
            <div class="rounded shadow w-full p-1 md:p-2 m-1">
                <router-link :to="{ name: 'OutfitDetail', params: { id: outfit.id } }">
                    <img class="h-52 w-64 md:h-80" :src="outfit.outfit_image" alt="" />
                </router-link>
                <div class="flex items-center justify-between p-1" style="cursor: auto;">
                    <div class="flex items-center space-x-2" style="cursor: auto;">
                        <router-link :to="{ name: 'EditPosts', params: { id: outfit.id } }" class="-space-y-1"
                            style="cursor: auto;">
                            <i class="far fa-edit"></i>
                        </router-link>
                    </div>
                    <button type="button" class="delete-btn" @click="destroy(outfit.id)">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    emits: ['updateHeader'],
    data() {
        return {
            outfits: [],
            success: false
        };
    },
    methods: {
        destroy(id) {
            axios.delete(`/api/posts/${id}`)
                .then(() => {
                    this.fetchPosts();
                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                    }, 2500);
                })
                .catch((error) => {
                    console.log(error.response.data);
                })
        },
        fetchPosts() {
            axios
                .get('/api/posts')
                .then((response) => (this.outfits = response.data.data))
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>

<style></style>
