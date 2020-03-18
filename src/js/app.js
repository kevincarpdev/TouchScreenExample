/**
 * Echo Lake Touchscreen
 * @author Adam Dorsey/Piccirilli Dorsey
 */

// Dependencies
import './bootstrap';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Pages
import About from './components/About';
import Amenities from './components/Amenities';
import Construction from './components/Construction';
import Gallery from './components/Gallery';
import Community from './components/Community';
import HealthAndWellness from './components/HealthAndWellness';
import MainMenu from './components/MainMenu';
import Residences from './components/Residences';
import Floor from './components/Floor';
import Unit from './components/Unit';
import VirtualTours from './components/VirtualTours';

// Store data
import Store from './store';

// Load the router
Vue.use(VueRouter);

// Load state management (vuex)
Vue.use(Vuex);

// Define the global store
const store = new Vuex.Store(Store);

// Routes
const routes = [
    {
        path: '/main',
        component: MainMenu
    },
    {
        path: '/residences',
        component: Residences,
        name: 'residences',
        redirect: { name: 'floor', params: { floor: 1 }},

        children: [
            {
                path: 'floor/:floor',
                component: Floor,
                name: 'floor',
            },
            {
                path: 'floor/:floor/unit/:id',
                component: Unit,
                name: 'unit'
            }
        ]
    },
    {
        path: '/amenities',
        component: Amenities,
        name: 'amenities'
    },
    {
        path: '/gallery',
        component: Gallery,
        name: 'gallery'
    },
    {
        path: '/virtual-tours',
        component: VirtualTours,
        name: 'tours'
    },
    {
        path: '/community',
        component: Community,
        name: 'community'
    },
    {
        path: '/health-and-wellness',
        component: HealthAndWellness,
        name: 'health'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/construction',
        component: Construction,
        name: 'construction'
    },
    // Default redirect to main menu (naked url)
    {
        path: '*',
        redirect: '/main'
    }
];

// Router (pass in the routes from above)
const router = new VueRouter({
    routes // short for `routes: routes`
});

// Vue Application
let app = new Vue({
    store,
    router,
    el: '.o-app',
    data: {},
    mounted () {
        //
    },
    methods: {}
});

global.app = app;
