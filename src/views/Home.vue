<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

      <Post />
  </div>
</template>

<script>
// @ is an alias to /src
import Post from './Posts.vue'

export default {
  name: 'Home',
  components: {
    Post
  }
}
</script>
