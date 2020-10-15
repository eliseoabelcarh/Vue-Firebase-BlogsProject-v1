<template>
  <div id="contenedor">
    <input type="text" placeholder="Filter by Word" v-model="searchTerm" />
    <div>
      <div
        class="noBlogsMessage"
        v-if="!filtrados.existenBlogs"
      >Ningún resultado coincide con la búsqueda</div>
    </div>
    <div class="singleBlog" v-for="blog in filtrados.array" v-bind:key="blog.id">
      <ShortBlogPost v-bind:blog="blog"></ShortBlogPost>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "BlogList",
  components: {
    ShortBlogPost: () => import("./ShortBlogPost.vue")
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    ...mapGetters("blogs", ["filtrarPorTermino"]),
    filtrados: function() {
      let array = this.filtrarPorTermino(this.searchTerm);
      return {
        array: array,
        existenBlogs: array.length !== 0
      };
    }
  }
};
</script>


<style scoped>
#contenedor {
  padding-top: 30px;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica;
  letter-spacing: 0.02em;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

.singleBlog {
  display: inline-flex;
}
.noBlogsMessage {
  margin: 70px auto;
  border: 2px dotted white;
  padding: 20px;
  max-width: 30%;
  color: white;
  font-size: 1.1rem;
}
input[type="text"] {
  border: 1px solid #ccc;
  margin: 0 auto 30px auto;
  width: 100%;
  padding: 10px;
  max-width: 120px;
}
</style>