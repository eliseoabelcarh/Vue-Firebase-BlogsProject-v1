<template>
  <div>
    <div class="navBarUser" v-if="emailOfCurrentUser">
      <div class="userInfo">props: {{emailOfCurrentUser}}</div>
      <div class="userInfo linkeable" @click="this.logout">Logout</div>
    </div>
    <div class="navBarUser" v-else>
      <router-link to="/auth/login" class="userInfo linkeable">Login</router-link>
      <router-link to="/auth/register" class="userInfo linkeable">Register</router-link>
    </div>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
export default {
  props: {
    emailOfCurrentUser: String
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logOutUser");
    }
  }
};
</script>

<style scoped>
.navBarUser {
  background-color: rgba(0, 0, 0, 0.496);
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}
.userInfo {
  color: white;
  font-weight: 600;
  margin-right: 15px;
}
.linkeable:hover {
  color: #5899e9;
  cursor: pointer;
}
a {
  text-decoration: none;
}
</style>