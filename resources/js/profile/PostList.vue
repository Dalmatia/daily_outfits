<template>
    <div class="flex flex-wrap -mx-px md:-mx-3 mt-2">
        <div class="flex flex-wrap w-1/3" v-for="outfit in outfits" :key="outfit.id">
            <div class="rounded shadow w-full p-1 md:p-2">
                <router-link :to="{ name: 'OutfitDetail', params: { id: outfit.id } }">
                    <img :src="outfit.outfit_image" alt="" />
                </router-link>
                <div class="flex items-center justify-between p-1" style="cursor: auto;">
                    <div class="flex items-center space-x-2" style="cursor: auto;">
                        <div class="-space-y-1" style="cursor: auto;">
                            <i class="far fa-edit"></i>
                        </div>
                    </div>
                    <button type="button">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['updateHeader'],
    data() {
        return {
            outfits: [],
        };
    },
    mounted() {
        axios
            .get('/api/posts')
            .then((response) => (this.outfits = response.data.data))
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style></style>
