<template>
  <div id="notificationContainer">
    <div
      v-for="(mensaje, index) in data.messages"
      v-bind:key="index"
      id="successMessage"
    >{{mensaje}}</div>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    data: Object
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>