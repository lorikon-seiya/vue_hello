<template>
  <div v-if="event" class="container">
    <!-- 标题 -->
    <h1 class="title">{{ event.title }}</h1>

    <!-- 时间、地点信息卡片 -->
    <div class="info-card">
      <p><span class="label">📅 日期：</span>{{ event.date }}</p>
      <p><span class="label">⏰ 时间：</span>{{ event.time }}</p>
      <p><span class="label">📍 地点：</span>{{ event.location }}</p>
    </div>

    <!-- 描述 -->
    <p class="description">{{ event.description }}</p>
  </div>
</template>

<style scoped>
/* 外层容器 */
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

/* 标题 */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #111;
}

/* 信息卡片 */
.info-card {
  background-color: #f5f5f5;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  padding: 20px 25px;
  margin-bottom: 30px;
}

.info-card p {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #444;
}

.label {
  font-weight: bold;
}

/* 描述 */
.description {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #555;
  white-space: pre-line; /* 保持换行 */
}

/* 响应式 */
@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }
  .info-card {
    padding: 15px 20px;
  }
  .description {
    font-size: 1rem;
  }
}
</style>

<script setup>
defineProps(["event"]);
</script>
