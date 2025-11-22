<template>
  <div v-highlight>
    <pre><code class="language-js">
import axios from "axios";
 
const i = axios.create({ 
  baseURL: 'Japan' 
})

i.get('')
.then((res) => {
  console.log(res.data)
})
.catch((e) => {
  console.log(e)
})
    </code></pre>
  </div>
</template>

<script setup>
import 'highlight.js/styles/github.css'
</script>

<style scoped>
pre {
  padding: 1em;
  border-radius: 6px;
  /* background-color: #282c34; */
  color: #fff;
  overflow-x: auto;
}
</style>
