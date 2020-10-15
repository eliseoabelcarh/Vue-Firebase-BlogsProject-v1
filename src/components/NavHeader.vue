<template>
  <nav href="#" class="topnav" v-on:click="toggle" id="myTopnav">
    <router-link to="/" exact class="router">Home</router-link>
    <router-link to="/blogs" exact class="router">Blogs</router-link>
    <router-link to="/add" exact class="router">Add</router-link>

    <a class="icon">
      <i class="fa fa-bars"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: "NavHeader",
  props: {
    menus: Array
  },
  methods: {
    toggle: function() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
};
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: rgb(2, 2, 2);
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
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

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>