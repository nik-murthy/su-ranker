import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About';
import Suburbs from '../components/Suburbs';
import SuburbDetail from '../components/SuburbDetail';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/suburbs',
            name: 'suburbs',
            component: Suburbs
        },
        {
            path: '/suburb/:suburbId',
            name: 'suburb',
            props: true,
            component: SuburbDetail
        }
    ]
})