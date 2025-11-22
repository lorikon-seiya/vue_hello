<script setup>
import { ref } from "vue";

defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'event-details', params: { id: event.id } }"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
/* 卡片外观 */
.event-card {
  padding: 20px;
  width: 250px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  margin-bottom: 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 悬停效果 */
.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* 标题样式 */
.event-card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

/* 时间和日期样式 */
.event-card span {
  font-size: 0.9rem;
  color: #6b7280; /* 灰色文字 */
}

/* 去掉 RouterLink 默认样式 */
.event-link {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}
</style>
