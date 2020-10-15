<template>
  <div>
    <h2 class="title">Blogs view</h2>
    <BlogsList></BlogsList>
  </div>
</template>

<script>
export default {
  name: "BlogsView",
  components: {
    BlogsList: () => import("../components/BlogsList.vue")
  }
};
</script>

<style >
.title {
  color: white;
  margin: 20px auto 0 0;
}
</style>
