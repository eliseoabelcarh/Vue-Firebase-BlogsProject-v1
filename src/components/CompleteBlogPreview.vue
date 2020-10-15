<template>
  <div>
    <div id="preview">
      <h3 class="greyColor">Complete Blog Preview</h3>
      <div>
        <h3>{{title | to-uppercase}}</h3>
        <a>{{content}}</a>
      </div>
      <br />
      <div style="display:inline-flex" v-for="(element, index) in categoria" v-bind:key="index">
        <div id="badges" style="margin-right:20px">{{element}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompleteBlogPreview",
  props: {
    title: String,
    content: String,
    categoria: Array
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categoria: []
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
#preview {
  padding: 10px 20px;
  border: 2px dotted #ccc;
  margin: 30px 0;
}
a {
  font-size: 1.2rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;
  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

.greyColor {
  color: rgb(186, 180, 180);
}
#badges {
  background-color: indigo;
  border-radius: 50px;
  color: white;
  font-size: 0.7rem;
  padding: 4px 10px;
}
</style>
