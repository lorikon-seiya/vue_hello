<template>
  <div v-if="event" class="container">
    <!-- <h1 class="title">{{ event.title }}</h1> -->

    <router-view :event="event" />

    <div id="nav" class="nav-links">
      <router-link :to="{ name: 'event-details' }" class="nav-btn">Details</router-link>
      <router-link :to="{ name: 'event-register' }" class="nav-btn">Register</router-link>
      <router-link :to="{ name: 'event-edit' }" class="nav-btn">Edit</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* 标题居中 */
  color: #333;
}

/* 导航容器居中 */
.nav-links {
  margin-top: 30px;
  display: flex;
  justify-content: center; /* 水平居中 */
  gap: 12px; /* 链接间距 */
}

/* 链接按钮化样式 */
.nav-btn {
  display: inline-block;
  padding: 10px 18px;
  background-color: #4f46e5; /* 蓝紫色背景 */
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-align: center;
}

.nav-btn:hover {
  background-color: #6366f1;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* 当前激活路由高亮 */
.router-link-exact-active {
  background-color: #3730a3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>

<script setup>
// import router from "@/routesr";
import EventService from "@/services/EventService";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const { id } = defineProps(["id"]);

const event = ref(null);

const router = useRouter();

onMounted(() => {
  EventService.getEvent(id)
    .then((res) => {
      event.value = res.data;
    })
    .catch((e) => {
      if (e.response && e.response.status == 404) {
        router.push({
          name: "404-resource",
          params: { resource: "event" },
        });
      } else {
        router.push({ name: "network-error" });
      }
    });
});
</script>
