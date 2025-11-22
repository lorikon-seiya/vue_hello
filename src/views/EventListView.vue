<script setup>
import EventCard from "@/components/EventCard.vue";
import { computed, onMounted, ref, watch } from "vue";
// import axios from "axios";
import EventService from "@/services/EventService";
import { useRouter } from "vue-router";
const events = ref(null);

const props = defineProps(["page"]);

const page = computed(() => props.page);

const totalEvents = ref(0);

const router = useRouter();

const hasNextPage = computed(() => {
  console.log(totalEvents.value);
  const totalPages = Math.ceil(totalEvents.value / 4);
  return props.page < totalPages;
});

const fetchEvents = () => {
  EventService.getEvents(4, props.page)
    .then((res) => {
      events.value = res.data;
      totalEvents.value = res.headers["x-total-count"];
    })
    .catch((e) => {
      router.push({ name: "netword-error" });
    });
};

onMounted(() => {
  fetchEvents();
});

watch(
  () => props.page,
  () => {
    events.value = null;
    fetchEvents();
  }
);
</script>
<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        ← Prev Page
      </router-link>
      <router-link
        id="page-next"
        :to="{ name: 'event-list', query: { page: Number.parseInt(page) + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page →
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* 事件列表容器 */
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* 卡片间距 */
  padding: 20px;
}

/* 分页容器 */
.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

/* 分页链接 */
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
  text-align: center;
  padding: 8px 0;
  transition: all 0.3s ease;
  border-radius: 8px;
}

/* 悬停效果 */
/* .pagination a:hover {
  background-color: #2c3e50;
  color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
} */

/* 左右箭头对齐 */
#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

/* 响应式：屏幕小于 500px 时 */
@media (max-width: 500px) {
  .pagination {
    flex-direction: column;
    gap: 10px;
    width: 90%;
  }
  .pagination a {
    flex: unset;
    text-align: center;
  }
}
</style>
