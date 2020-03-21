<template>
  <div class="row">
    <div class="col-md-8">
      <div class="mb-3">
        <input type="email" class="form-control" v-model="message" placeholder="Put your message">
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="mb-3">
        <button class="btn btn-primary btn-block btn-success" @click="sendMessage">Send</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      message: ''
    }
  },
  computed: mapGetters(['ws', 'email', 'username']),
  methods: {
    sendMessage() {
      if (this.message !== '') {
        this.ws.send(JSON.stringify({
          email: this.email,
          username: this.username,
          message: this.message
        }))

        this.message = ''
      }
    }
  }
}
</script>
