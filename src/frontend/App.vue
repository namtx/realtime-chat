<template>
  <div class="container d-flex flex-column h-100">
    <page-header></page-header>
    <main role="main" class="flex-shrink-0">
      <list-message></list-message>
    </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import ListMessage from './components/ListMessage';

export default {
  components: {
    PageFooter,
    PageHeader,
    ListMessage
  },
  created() {
    const ws = new WebSocket(`ws://${window.location.host}/ws`);
    ws.addEventListener('message', (e) => {
      const { message } = JSON.parse(e.data);
      this.$store.dispatch('sendMessage', message);
    });

    this.$store.dispatch('initializeWebsocket', ws);
  }
}
</script>
