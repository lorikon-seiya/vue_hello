<script setup>
import EventCard from "@/components/EventCard.vue";
import { onMounted, ref } from "vue";
// import axios from "axios";
import EventService from "@/services/EventService";
const events = ref(null);

onMounted(() => {
  EventService.getEvents()
    // axios
    //   .get("https://my-json-server.typicode.com/lorikon-seiya/test_db_json/events")
    .then((res) => {
      // console.log(res);
      events.value = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
