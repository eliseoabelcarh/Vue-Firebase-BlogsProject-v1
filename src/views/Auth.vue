<template>
  <div>
    <h2 class="title">Auth Page</h2>
    <div class="topnav">
      <router-link to="/auth/login" class="tab inactive">Login</router-link>
      <router-link to="/auth/register" class="tab">Register</router-link>
    </div>
    <div class="containerAuth">
      <div class="boo">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped >
.topnav {
  overflow: hidden;

  width: 350px;
  margin: 0 auto;
}

.topnav .router-link-active {
  display: block;

  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a {
  background-color: white;

  float: left;
  display: block;
  color: #000000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: rgb(44, 159, 231);
  color: black;
}

.topnav .router-link-active {
  background-color: rgb(2, 138, 222);
  color: white;
}
.containerAuth {
  margin: 0 auto;
  width: 350px;
  height: 400px;
  background-color: rgb(2, 138, 222);
  padding-top: 10px;
}
.boo {
  background-color: white;
  margin: 0 auto;
  width: 330px;
  height: 390px;
}
</style>