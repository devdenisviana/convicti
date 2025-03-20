import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Profiles from '../views/Profiles.vue';
import Users from '../views/Users.vue';

// Lista consolidada de rotas (elimina duplicações)
const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profiles', name: 'Profiles', component: Profiles },
  { path: '/users', name: 'Users', component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
