<template>
  <div>
    <div class="containerSingleBlog">
      <div class="imageAndTitleContainer">
        <img class="imageBlogBackground" src="https://picsum.photos/500/250" alt />
        <div class="onImageEffectSquare"></div>
        <div class="onImageEffect"></div>
        <div class="categoryContainer">
          <div
            class="categoryItem"
            v-for="(categoria,index) in singleBlog.categoria"
            v-bind:key="index"
          >{{categoria}}</div>
          <div class="categoryItem">Default</div>
        </div>
        <div class="titleBlog">{{singleBlog.title}}</div>
        <i id="iconEffect" class="fa fa-pencil"></i>
      </div>
      <div class="contentContainer">
        <div class="leftSideContent">
          <div class="contentInfoAuthor">
            <img class="avatar" src="../assets/img_avatar.png" alt />
            <div class="infoAuthor">
              <h3>{{singleBlog.author}}</h3>
              <div class="infoDate">
                <h5 class="sideRedBar">07 January</h5>
              </div>
              <div class="socialIcons">
                <i id="iconAuthor" class="fa fa-facebook-square" aria-hidden="true"></i>
                <i id="iconAuthor" class="fa fa-linkedin-square" aria-hidden="true"></i>
                <i id="iconAuthor" class="fa fa-twitter-square" aria-hidden="true"></i>
                <i id="iconAuthor" class="fa fa-youtube" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="rightSideContent">
          <div class="contentBlog">
            <div>{{singleBlog.body}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("blogs", ["getBlogById"]),
    singleBlog() {
      return this.getBlogById(this.$route.params.id);
    }
  }
};
</script>

<style scoped>
.containerSingleBlog {
  max-width: 500px;
  background-color: white;
  position: relative;
  text-align: center;
  justify-content: center;
  margin: 50px auto;
  -webkit-box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.29);
  box-shadow: 6px 6px 7px -1px rgba(0, 0, 0, 0.29);
}
.imageAndTitleContainer {
  height: 250px;
  background-color: rgb(226, 226, 226);
  position: relative;
}
.imageBlogBackground {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  min-height: 100%;
  contain: cover;
}
.onImageEffectSquare {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.351);
}
.onImageEffect {
  position: absolute;
  right: 0;
  width: 0;
  height: 0;
  border-top: 125px solid transparent;
  border-right: 125px solid rgba(0, 0, 0, 0.531);
  border-bottom: 125px solid rgba(0, 0, 0, 0.531);
  border-left: 125px solid transparent;
}
#iconEffect {
  position: absolute;
  font-size: 5rem;
  color: white;
  right: 20px;
  bottom: -40px;
  text-shadow: -6px 9px 11px rgba(0, 0, 0, 1);
}
.titleBlog {
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 1.9rem;
  line-height: 1;
  text-align: left;
  top: 24%;
  left: 30px;
  max-width: 70%;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
}
.categoryContainer {
  position: absolute;
  color: rgb(200, 200, 200);
  display: flex;
  top: 12%;
  left: 30px;
  font-size: 0.75rem;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
}
.categoryItem::before {
  content: "";
  display: inline-block;
  margin-right: 4px;
  width: 6px;
  height: 6px;
  -moz-border-radius: 9.5px;
  -webkit-border-radius: 9.5px;
  border-radius: 9.5px;
  background-color: #7f00be;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 1);
}
.categoryItem {
  margin-right: 15px;
}
.contentContainer {
  display: flex;
  max-height: 250px;
  max-width: 500px;
}
.leftSideContent {
  max-width: 40%;
  text-align: center;
  padding: 5%;
}
.rightSideContent {
  height: 100%;
  max-width: 60%;
}
.contentBlog {
  padding: 50px 15px;
  line-height: 1.2;
  max-height: 100%;
  text-align: left;
  justify-content: left;
}
.contentInfoAuthor {
  height: 80%;
  min-width: 100%;
  text-align: left;
  display: flexbox;
}
.avatar {
  height: 70px;
  margin-right: 10px;
}
.infoAuthor {
  min-width: 60%;
  height: 100px;
  margin: 0 auto;
}
.infoDate {
  text-align: left;
  font-size: 0.8rem;
  color: rgb(108, 104, 104);
}
.sideRedBar {
  border-left: 2px solid rgb(205, 0, 86);
  padding-left: 10px;
}
.socialIcons {
  max-width: 100%;
  display: flex;
  text-align: left;
  color: rgb(104, 104, 104);
  padding: 10px 0px;
}
#iconAuthor {
  margin-right: 14px;
  color: rgb(162, 162, 162);
}
</style>