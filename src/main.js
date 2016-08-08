import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

var router = new VueRouter;

router.map({
    '*': {
        component: {
            template: '<h1>dsfsdfsdf</h1>'
        }
    },
    '/test': {
        title: 'Test',
        component: {
            template: '<h2>sdfsf</h2>'
        }
    },
})

router.beforeEach(function (transition) {
    transition.next()
})
router.start(App, 'app')