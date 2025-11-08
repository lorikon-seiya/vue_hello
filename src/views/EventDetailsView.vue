<script setup>
import { ref, onMounted } from "vue";
import EventService from "@/services/EventService";

const props = defineProps({
  id: {
    required: true,
  },
});
const event = ref(null);
// const id = ref(123);

onMounted(() => {
  console.log(props.id);
  EventService.getEvent(props.id)
    .then((res) => {
      event.value = res.data;
      // console.log(event.title);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
