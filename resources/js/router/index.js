import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Profile from '../profile/Profile.vue';
import OutfitDetail from '../pages/OutfitDetail.vue';
import CreatePosts from '../pages/posts/CreatePosts.vue';
import EditPosts from '../pages/posts/EditPosts.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiresGuest: true },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/outfit/:id',
        name: 'OutfitDetail',
        component: OutfitDetail,
        props: true,
    },
    {
        path: '/posts/create',
        name: 'CreatePosts',
        component: CreatePosts,
        meta: { requiresAuth: true },
    },
    {
        path: '/posts/:id/edit',
        name: 'EditPosts',
        component: EditPosts,
        meta: { requiresAuth: true },
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const authenticated = localStorage.getItem('authenticated');

    if (to.meta.requiresGuest && authenticated) {
        return {
            name: 'Home',
        };
    } else if (to.meta.requiresAuth && !authenticated) {
        return {
            name: 'Login',
        };
    }
});

export default router;
