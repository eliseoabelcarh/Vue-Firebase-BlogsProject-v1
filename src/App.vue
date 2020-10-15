<template>
  <div id="app">
    <NavHeader></NavHeader>
    <UserNav v-bind:emailOfCurrentUser="userEmail"></UserNav>
    <div class="error" v-if="this.error">{{this.error}}</div>
    <keep-alive include="BlogFormView">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Router from "./router";

export default {
  name: "App",
  router: Router,
  components: {
    NavHeader: () => import("./components/NavHeader.vue"),
    UserNav: () => import("./components/UserNav.vue")
  },
  data() {
    return {
      error: null
    };
  },
  computed: {
    userEmail: function() {
      let user = this.$store.getters["user/getUser"];
      if (user) {
        return user.email;
      } else {
        return null;
      }
    }
  },
  created() {
    this.$store.dispatch("blogs/cargarBlogsDeApi").catch(error => {
      this.error = error.message;
    });

    this.$store.dispatch("user/setUser");
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  min-height: 100%;
  background-size: cover;
}

#app {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image: url(http://bit.ly/2gPLxZ4);
  min-height: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.title {
  color: white;
  margin: 20px auto 0 0;
}
.error {
  color: red;
  font-size: 1.5rem;
  background-color: white;
  border: 1px solid red;
  max-width: 450px;
  margin: 20px auto;
}
</style>
