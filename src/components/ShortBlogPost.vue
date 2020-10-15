<template>
  <div>
    <div class="singleContainer">
      <div class="leftSide">
        <div class="imageBlog">
          <img class="imageFit" v-bind:src="'https://picsum.photos/300/200?random='+ blog.id" alt />
        </div>
        <div class="leftSideBottom">
          <div id="dateBlog">
            <div class="numberDate">{{blog.dateDay}}</div>
            <div class="monthDate">{{blog.dateMonth | to-uppercase}}</div>
          </div>
          <div class="singleBlogIcons">
            <i class="fa fa-eye"></i>
            <i class="fa fa-share-alt"></i>
            <i class="fa fa-thumbs-up"></i>
            <i class="fa fa-envelope"></i>
          </div>
        </div>
      </div>
      <div class="rightSide">
        <div class="contentRightSide">
          <div class="blogTitle">
            <h4>{{blog.title | to-uppercase | short-title53 }}</h4>
            <div class="autorBadge">
              <img class="avatar" src="../assets/img_avatar.png" alt />
              {{blog.author}}
            </div>
          </div>
          <div class="blogContent">
            <p>{{blog.body | short-content210}}</p>
          </div>
        </div>
      </div>
      <router-link v-bind:to="'/blogs/'+ blog.id">
        <div class="roundDiv">
          <i class="fa fa-plus"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortBlogPost",
  props: {
    blog: Object
  }
};
</script>

<style scoped>
.flexContainer {
  background-color: pink;
  display: flex;
  max-width: 500px;
  flex-flow: wrap;
  margin: 30px 30px;
}
.flexDiv {
  background-color: purple;
  box-sizing: border-box;
  height: 230px;
  max-width: 250px;
  border: 1px solid salmon;
  margin: 0;
}
@media screen and (max-width: 1800px) {
  .flexDiv {
    width: 500px;
  }
}
@media screen and (max-width: 600px) {
  .flexContainer {
    max-width: 80%;
    min-width: 80%;
    margin: 35px auto;
  }
  .flexDiv {
    min-width: 99%;
  }
}
.singleContainer {
  background-color: white;
  border: 0px solid red;
  height: 230px;
  display: flex;
  max-width: 500px;
  flex-flow: wrap;
  margin: 30px 30px;

  position: relative;
  -webkit-box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.29);
  box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.29);
}
.leftSide {
  background-color: white;
  /*   width: 250px;
  height: 100%; */

  box-sizing: border-box;
  height: 230px;
  max-width: 250px;
  border: 1px solid white;
  margin: 0;
}
.rightSide {
  box-sizing: border-box;
  height: 230px;
  max-width: 250px;
  border: 0px solid salmon;
  margin: 0;

  background-color: white;

  justify-content: center;
  align-items: center;
  text-align: center;
}

@media screen and (max-width: 1800px) {
  .rightSide {
    width: 500px;
    height: auto;
    padding-bottom: 30px;
  }
  .leftSide {
    width: 500px;
    height: auto;
  }
}
@media screen and (max-width: 600px) {
  .singleContainer {
    max-width: 80%;
    min-width: 80%;
    margin: 35px auto;
    height: auto;
  }
  .rightSide {
    background-color: white;
    padding-left: 30px;
    min-width: 99%;
  }
  .leftSide {
    min-width: 99%;
  }
  .leftSideBottom {
    background-color: transparent;
    width: 300px;
    height: 300px;
    margin-top: 40px;
  }
}
.imageBlog {
  background-color: grey;
  max-height: 200px;
  width: 90%;
  margin: -25px auto 20px;
  -webkit-box-shadow: 0px 7px 6px -2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 7px 6px -2px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 7px 6px -2px rgba(0, 0, 0, 0.38);
}
.imageFit {
  object-fit: cover;
  object-position: center;
  display: block;
  height: 100%;
  width: 100%;
}

.leftSideBottom {
  width: 100%;
  height: 30%;
  background-color: white;
  display: flex;
}
.singleBlogIcons {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline-flex;
  padding: 30px 10px 0 40px;
  font-size: 1.3rem;
  color: rgb(152, 152, 152);
}

.singleBlogIcons i {
  margin: 0 auto;
}

#dateBlog {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 90px;
  height: 80px;
  background-color: white;
  margin: -10px 0 0 10px;
  display: block;
  color: rgb(180, 178, 178);
  bottom: 0;
}

.numberDate {
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 1;
}
.monthDate {
  font-size: 0.85rem;
  font-weight: bold;
  line-height: 0.05;
}

.rightSide .contentRightSide {
  margin: 0 auto;
  padding: 0 15px 0 0;
}
.rightSide .contentRightSide .blogTitle {
  text-align: left;
  padding: 20px 0 10px 0;
  border-bottom: 2px solid rgb(188, 188, 188);
  margin-bottom: 10px;
  line-height: 1;
}
.autorBadge {
  background: rgba(2, 138, 222, 0.8);
  border-radius: 50px;
  max-width: 90%;
  padding: 3px 2px 3px 0;
  color: white;
  font-size: 0.7rem;
  margin: 7px 0 0 0;
}
.avatar {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 6px;
}
.rightSide .contentRightSide .blogContent {
  font-size: 0.7rem;
  line-height: 1.4;
  color: gray;
  text-align: left;
}

.roundDiv {
  background-color: rgb(2, 138, 222);
  border-radius: 100%;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  position: absolute;
  bottom: -30px;
  right: 30px;
  cursor: pointer;
  -webkit-box-shadow: 6px 6px 4px -2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 6px 6px 4px -2px rgba(0, 0, 0, 0.25);
  box-shadow: 6px 6px 4px -2px rgba(0, 0, 0, 0.25);
}
.roundDiv:hover {
  background-color: rgb(73, 181, 248);
}
.roundDiv i {
  font-size: 1.2rem;
  margin: 0 auto;
  color: white;
}
</style>