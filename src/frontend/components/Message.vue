<template>
  <div class="alert alert-primary my-2" role="alert">
    {{ message }}
  </div>
</template>
<script>

export default {
  props: ['message']
}
</script>
