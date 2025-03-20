<template>
    <div class="dashboard-container">
      <h1>Painel de Dados</h1>
  
      <!-- Seção de Estatísticas -->
      <section class="statistics">
        <div v-if="hasPermission('downloads')" class="stat-item">
          <h2>Downloads</h2>
          <p>330</p>
        </div>
        <div v-if="hasPermission('ratings')" class="stat-item">
          <h2>Avaliações</h2>
          <p>4.2/5</p>
        </div>
        <div v-if="hasPermission('errors')" class="stat-item">
          <h2>Erros</h2>
          <p>-240</p>
        </div>
      </section>
  
      <!-- Seção de Feedbacks -->
      <section class="feedbacks">
        <h2>Feedbacks</h2>
        <ul>
          <li v-for="(feedback, index) in feedbacks" :key="index">
            <p><strong>Avaliação:</strong> {{ feedback.rating }}</p>
            <p><strong>Comentário:</strong> {{ feedback.comment }}</p>
            <p><strong>Data:</strong> {{ feedback.date }}</p>
          </li>
        </ul>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Recupera o perfil do usuário armazenado no localStorage
  const userProfile = ref(localStorage.getItem('userProfile'));
  
  // Função para verificar permissões com base no perfil do usuário
  const hasPermission = (permission: string) => {
    const permissionsByProfile = {
        Admin: ['downloads', 'ratings', 'errors'],
        Desenvolvedor: ['downloads', 'ratings'],
        'Recursos Humanos': ['ratings'], // Adicionado aspas para corrigir o erro
  };

  return permissionsByProfile[userProfile.value]?.includes(permission);
};

  
  // Dados simulados para feedbacks
  const feedbacks = ref([
    {
      rating: 5,
      comment: 'Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados.',
      date: '01/04/2024',
    },
    {
      rating: 4,
      comment: 'Melhorias na usabilidade seriam bem-vindas.',
      date: '30/03/2024',
    },
  ]);
  </script>
  
  <style scoped>
  .dashboard-container {
    padding: 20px;
  }
  .statistics {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .stat-item {
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 150px;
  }
  .feedbacks ul {
    list-style: none;
    padding: 0;
  }
  .feedbacks li {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
  }
  </style>
  