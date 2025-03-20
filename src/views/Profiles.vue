<template>
    <div class="profiles-container">
      <h1>Gerenciamento de Perfis</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Permissões</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(profile, index) in profiles" :key="index">
            <td>{{ profile.name }}</td>
            <td>{{ profile.permissions.join(', ') }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Formulário para Adicionar Novo Perfil -->
      <form @submit.prevent="addProfile">
        <input v-model="newProfileName" placeholder="Nome do Perfil" />
        <input v-model="newProfilePermissions" placeholder="Permissões (separadas por vírgula)" />
        <button type="submit">Adicionar Perfil</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const profiles = ref([
    { name: 'Admin', permissions: ['Tudo'] },
    { name: 'Desenvolvedor', permissions: ['Downloads', 'Avaliações', 'Erro'] },
    { name: 'Recursos Humanos', permissions: ['Avaliações'] },
  ]);
  
  const newProfileName = ref('');
  const newProfilePermissions = ref('');
  
  const addProfile = () => {
    if (newProfileName.value && newProfilePermissions.value) {
      profiles.value.push({
        name: newProfileName.value,
        permissions: newProfilePermissions.value.split(',').map(p => p.trim()),
      });
      newProfileName.value = '';
      newProfilePermissions.value = '';
    }
  };
  </script>
  
  <style scoped>
  .profiles-container {
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
  