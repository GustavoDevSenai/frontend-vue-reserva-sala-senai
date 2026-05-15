<script setup>
import axios from 'axios';
import { ref } from 'vue';




const nome = ref('')
const salas = ref([])

async function cadastrarSala() {
    
    const sala = {
        nome: nome.value
    }

    const res = await axios.post("http://localhost:8081/salas", sala)

    nome.value = ''

}
</script>

<template>
    <img src="../assets//senai.png" width="200" class="imagem" alt="">
    <h2>Cadastrar Sala</h2>
    
    <input v-model="nome" placeholder="Ex: Sala 05">

    <button @click="cadastrarSala">
        Cadastrar Sala
    </button>
</template>

<style>

</style>