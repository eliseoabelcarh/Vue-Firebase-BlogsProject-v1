<template>
  <div class="container">
    <h2>Login</h2>
    <form>
      <div class="error" v-if="this.errorMessage">{{this.errorMessage}}</div>
      <input v-model="user.email" type="text" placeholder="Email" />
      <input v-model="user.password" type="password" placeholder="Password" />
      <button v-on:click.prevent="login" class="btnPrimary">Login</button>
    </form>
    <button v-on:click="logout" class="btnPrimary">logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errorMessage: null
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("user/loginUser", this.user)
        .then(() => {
          this.errorMessage = null;
        })
        .catch(error => {
          console.log("en loginnsss", error);
          this.errorMessage = error.message;
        });
    },
    logout() {
      this.$store.dispatch("user/logOutUser");
    }
  }
};
</script>

<style scoped>
.container {
  padding: 30px;
  background-color: white;
  min-height: 80%;
}

input[type="text"],
input[type="password"] {
  font-size: 1.1rem;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="text"]:focus,
input[type="password"]:focus {
  outline: none !important;
  border: 1px solid gray;
}
.btnPrimary {
  background-color: #186ed6;
  margin-top: 20px;
  border-radius: 4px;
  border: 0px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 10px 31px;
  text-decoration: none;
}

.btnPrimary:hover {
  background-color: #4a8ad7;
}
.btnPrimary:focus {
  outline: none !important;
}
.btnPrimary:active {
  position: relative;
  top: 1px;
  outline: none !important;
}
.error {
  color: red;
}
</style>