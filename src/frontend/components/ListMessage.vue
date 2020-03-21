<template>
  <div class="container">
      <div class="pt-5 pb-2"></div>
      <div class="my-3 p-3 bg-white rounded shadow-sm mt-6">
        <h6 class="border-bottom border-gray pb-2 mb-0">Messages</h6>
        <message v-for="(message, index) in messages" :message="message" :key="index"></message>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Message from './Message';

export default {
  components: {
    Message
  },
  computed: mapGetters(['messages'])
}
</script>
