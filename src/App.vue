<template>

  <div class="layout">

    <nav class="menu">
      <router-link to="/">Professor</router-link>
      <router-link to="/salas">Salas</router-link>
    </nav>

    <main class="conteudo">
      <router-view />
    </main>

  </div>

</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

/* layout geral */
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* MENU */
.menu {
  background: #c00000;
  padding: 15px;
  display: flex;
  gap: 20px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu a.router-link-active {
  border-bottom: 2px solid white;
}

/* CONTEÚDO DAS PÁGINAS */
.conteudo {
  padding: 30px;
}
</style>