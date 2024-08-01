import { createRouter, createWebHistory } from 'vue-router'
import AppLogin from '../components/AppLogin.vue'
import AppRegister from '../components/AppRegister.vue'
import AppTodo from '../components/AppTodo.vue'
import store from '../store'
import AppAnimation from '../components/AppAnimation.vue'

const routes = [

  {
    path: '/apptodo',
    name: 'AppTodo',
    component: AppTodo,
    meta: { requiresAuth: true }
  },

  {
    path: '/',
    name: 'AppLogin',
    component: AppLogin
  },

  {
    path: '/applogin',
    component: AppLogin
  },

  {
    path: '/appregister',
    name: 'AppRegister',
    component: AppRegister
  },

  {
    path: '/appanimation',
    name: 'AppAnimation',
    component: AppAnimation
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica se o usuário está autenticado (por exemplo, no seu state do Vuex)
    const isAuthenticated = store.state.user !== null;

    if (!isAuthenticated) {
      // Se não estiver autenticado, redireciona para a página de login
      next('/');
    } else {
      // Caso contrário, permite o acesso à rota protegida
      next();
    }
    } else {
      // Rotas que não requerem autenticação
      next();
  }
});

export default router;
