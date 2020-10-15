<template>
  <div>
    <BlogForm></BlogForm>
  </div>
</template>

<script>
export default {
  name: "BlogFormView",
  components: {
    BlogForm: () => import("../components/BlogForm.vue")
  }
};
</script>

<style>
</style>