<template>
<nav class="navbar">

    <div class="logo">
        SENAI<br>Reservas
    </div>

    <div class="menu">
        <router-link to="/">Professores</router-link>
        <router-link to="/salas">Salas</router-link>
    </div>

</nav>
</template>

<style scoped>

.navbar{
    display:flex;
    justify-content:space-between;
    align-items:center;

    background:#0b3d91;
    padding:20px 40px;
    border-radius:10px;
}

/* LOGO */
.logo{
    color:white;
    font-size:26px;
    font-weight:bold;
}

/* MENU */
.menu{
    display:flex;
    gap:30px; /* ⭐ ESPAÇO ENTRE LINKS */
}

/* LINKS */
.menu a{
    color:white;
    text-decoration:none;
    font-size:18px;
    font-weight:bold;
    transition:.3s;
}

.menu a:hover{
    color:#00c3ff;
}

/* LINK ATIVO */
.router-link-active{
    border-bottom:3px solid #00c3ff;
}

</style>