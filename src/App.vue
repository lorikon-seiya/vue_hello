<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'event-list' }">Posts</RouterLink>
        <RouterLink :to="{ name: 'about' }">About Me</RouterLink>
        <RouterLink :to="{ name: 'socks' }">Photos</RouterLink>
        <RouterLink :to="{ name: 'todo-list' }">ToDoList</RouterLink>
      </nav>
    </div>
  </header>
  <div id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* 全局布局 */
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9;
  min-height: 100vh;
}

/* Flash 消息样式 */
#flashMessage {
  display: inline-block;
  margin: 20px auto;
  padding: 12px 24px;
  background-color: #fff8c5;
  border: 1px solid #ffe58f;
  border-radius: 8px;
  color: #665200;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  animation: yellowfade 4s ease forwards;
}

/* Flash 消息动画 */
@keyframes yellowfade {
  0% {
    background-color: #fff8c5;
  }
  100% {
    background-color: transparent;
  }
}

header {
  background-color: #f9f9f9;
  padding: 10px 0;
  /* border-bottom: 1px solid #e0e0e0; */
}

.wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 默认水平布局 */
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* 屏幕小的时候自动换行 */
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 5px;
  transition: all 0.2s ease;
}

nav a:hover,
nav a.router-link-exact-active {
  background-color: #42b983;
  color: #fff;
}

main {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 20px 40px 20px;
  /* text-align: left; */
}
</style>

<script setup>
import { computed, inject, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const page = computed(() => {
  return parseInt(route.query.page) || 1;
  // console.log(parseInt(route.query.page) || 1)
});

const GStore = inject("GStore");

const showMenu = ref(false);
</script>
