<template>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <chat v-if="loggedIn"></chat>
      <login v-if="!loggedIn"></login>
    </div>
  </footer>
</template>

<script>
import Login from './Login';
import Chat from './Chat';
import { mapState } from 'vuex'

export default {
  components: {
    Login,
    Chat
  },
  computed: mapState(['loggedIn'])
}
</script>
