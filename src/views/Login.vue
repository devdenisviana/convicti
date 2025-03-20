<template>
    <div class="login-container">
      <h1>Bem-vindo de volta</h1>
      <form @submit.prevent="handleLogin">
        <label for="email">Seu e-mail</label>
        <input type="email" v-model="email" id="email" placeholder="Digite seu e-mail" />
        
        <label for="password">Sua senha</label>
        <input type="password" v-model="password" id="password" placeholder="Digite sua senha" />
  
        <button type="submit">Entrar</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

// Lista de usuários fictícios
const users = [
  { email: 'admin@convicti.com', password: '12345678', profile: 'Admin' },
  { email: 'dev@convicti.com', password: '12345678', profile: 'Desenvolvedor' },
  { email: 'rh@convicti.com', password: '12345678', profile: 'Recursos Humanos' },
];

const handleLogin = () => {
  const user = users.find(u => u.email === email.value && u.password === password.value);

  if (user) {
    localStorage.setItem('userProfile', user.profile); // Armazena o perfil do usuário
    router.push('/dashboard'); // Redireciona para o painel
  } else {
    error.value = 'Credenciais inválidas. Tente novamente.';
  }
};
</script>

  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  </style>
  