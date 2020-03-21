<template>
  <div class="row">
    <div class="col-md-4">
      <div class="mb-3">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">@</span>
          </div>
          <input type="text" class="form-control" v-model="username" placeholder="Username" required="">
          <div class="invalid-feedback" style="width: 100%;">
            Your username is required.
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="mb-3">
        <input type="email" class="form-control" v-model="email" placeholder="you@example.com">
        <div class="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="mb-3">
        <button class="btn btn-primary btn-block" @click="login">Join</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    username: '',
    email: '',
  }),
  methods: {
    login() {
      this.$store.dispatch('login', { email: this.email, username: this.username })
    }
  }
}
</script>
