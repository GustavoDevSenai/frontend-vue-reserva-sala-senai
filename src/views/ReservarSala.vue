<script setup>
import axios from 'axios';
import { ref,onMounted } from 'vue';

const usuarios = ref([])
const salas = ref([])

const usuarioId = ref('')
const salaId = ref('')
const data = ref('')
const horaInicio = ref('')
const horaFim = ref('')



async function reservar() {

    const reserva = {
        data: data.value,
        horaInicio: horaInicio.value,
        horaFim: horaFim.value,
        status: "PENDENTE",

        usuario: {
            id:usuarioId.value
        },

        sala: {
            id:salaId.value
        }
    }

    const res = await axios.post("http://localhost:8081/reservas", reserva)

    try {
        if(res){
            alert("Reserva realizada")
        }
    } catch (error) {
        console.log(error)
    }

    
}

onMounted(()=>{
    carregarDados()
})


async function carregarDados() {
    const usuario = usuarios.value = (await axios.get("http://localhost:8081/usuarios")).data
    const sala = salas.value = (await axios.get("http://localhost:8081/salas")).data
    console.log(usuario)
    console.log(sala)
    
}
</script>


<template>
    
    <div class="card">
        
        <h2>Reservar Sala</h2>

        <select v-model="usuarioId">
            <option disabled value="">Professor</option>
            <option v-for="u in usuarios" :key="u.id" :value="u.id">
                {{ u.nome }}
            </option>
        </select>

        <select v-model="salaId">
            <option disabled value="">Sala</option>
            <option v-for="s in salas" :key="s.id" :value="s.id">
                {{ s.nome }}
            </option>
        </select>

        <input type="date" v-model="data">

        <label>Hora Inicio</label>
        <input type="time" v-model="horaInicio">

        <label for="">Hora Fim</label>
        <input type="time" v-model="horaFim">

        <button @click="reservar">
            Reservar Sala
        </button>
    </div>
</template>