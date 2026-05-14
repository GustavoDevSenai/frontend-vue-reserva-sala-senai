<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';



//estados
const nome = ref('')
const email = ref('')
const role = ref('PROFESSOR')
const usuarios = ref([])

async function cadastrarUsuario() {


  const usuarios = {
    nome:nome.value,
    email: email.value,
    role: role.value
  }

  console.log(usuarios)

  const res = await axios.post("http://localhost:8081/usuarios",usuarios)
  
  if(res){
    alert("Usuario cadastrado com sucesso!")
  }
  nome.value = ""
  email.value = ""
  carregarUsuarios()
}

async function carregarUsuarios() {
  const response = await axios.get("http://localhost:8081/usuarios")
  usuarios.value = response.data
}
onMounted(()=>{
  carregarUsuarios()
})

</script>
<template>
  
  <img
  src="../assets/senai.png"
  width="200"
  class="imagem"
  />
  
  <h2>Cadastrar Professor</h2>

  <input v-model="nome" placeholder="Nome...">
  <input v-model="email" placeholder="Email...">

  <select v-model="role">
      <option value="PROFESSOR">Professor</option>
      <option value="ADMIN">Admin</option>
  </select>

  <button @click="cadastrarUsuario">
    Cadastrar
  </button>

</template>

