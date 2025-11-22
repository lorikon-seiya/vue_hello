<template>
  <p>Registertion from here</p>

  <button @click="register">Register Me!</button>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

defineProps(["event"]);

const router = useRouter()

const register = () => {
  GStore.flashMessage = 'You are successfully registered for ' + event.title

  setTimeout(() => {
    GStore.flashMessage = ""
  }, 3500)
  router.replace({
    name: 'event-details'
  })
}

const GStore = inject('GStore')


</script>
