<template>
    <div class="users-container">
      <h1>Gerenciamento de Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.profile }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Formulário para Adicionar Novo Usuário -->
      <form @submit.prevent="addUser">
        <input v-model="newUserName" placeholder="Nome" />
        <input v-model="newUserEmail" placeholder="Email" />
        <select v-model="newUserProfile">
          <option v-for="profile in profiles" :key="profile.name" :value="profile.name">
            {{ profile.name }}
          </option>
        </select>
        <button type="submit">Adicionar Usuário</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const profiles = ref(['Admin', 'Desenvolvedor', 'Recursos Humanos']);
  
  const users = ref([
    { name: 'Junior Luiz', email: 'junior@convicti.com.br', profile: 'Admin' },
    { name: 'João Lucas', email: 'joao.lucas@convicti.com.br', profile: 'Desenvolvedor' },
    { name: 'Cíntia Lopes', email: 'cintia.lopes@convicti.com.br', profile: 'Recursos Humanos' },
  ]);
  
  const newUserName = ref('');
  const newUserEmail = ref('');
  const newUserProfile = ref(profiles.value[0]);
  
  const addUser = () => {
    if (newUserName.value && newUserEmail.value && newUserProfile.value) {
      users.value.push({
        name: newUserName.value,
        email: newUserEmail.value,
        profile: newUserProfile.value,
      });
      newUserName.value = '';
      newUserEmail.value = '';
      newUserProfile.value = profiles.value[0];
    }
  };
  </script>
  
  <style scoped>
  .users-container {
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  </style>
  