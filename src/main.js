import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

var router = new VueRouter;

router.map({
    '/login' : {
        name: 'login',
        component: require('./components/Login'),
        auth: true
    },
    '*': {
        component: {
            template: '<h1>dsfsdfsdf</h1>'
        }
    }
})

router.beforeEach(function (transition) {
    transition.next()
})
router.start(App, 'app')