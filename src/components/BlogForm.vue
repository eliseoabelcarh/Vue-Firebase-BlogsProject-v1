<template>
  <div id="contenedor" v-theme:halfScreen="{background: '#0000006e'}">
    <form v-if="!this.blog.submitted">
      <h3 v-mayusculas>Crear Blog</h3>

      <label for="titulo">Título:</label>
      <input name="titulo" type="text" v-model="blog.title" />
      <div v-if="this.errors.title" style="color:red">No debe estar vacío</div>

      <label for="contenido">Contenido:</label>
      <textarea name="contenido" v-model="blog.body"></textarea>
      <div v-if="this.errors.content" style="color:red">No debe estar vacío</div>

      <label for="categoria">Categoría:</label>
      <div id="contenedorCheckboxes">
        <div class="checkboxOption">
          <input type="checkbox" id="checkbox1" value="Tecnología" v-model="blog.categoria" />
          <label for="checkbox1">Tecnología</label>
        </div>
        <div class="checkboxOption">
          <input type="checkbox" id="checkbox2" value="Naturaleza" v-model="blog.categoria" />
          <label for="checkbox2">Naturaleza</label>
        </div>
        <div class="checkboxOption">
          <input type="checkbox" id="checkbox3" value="Mascotas" v-model="blog.categoria" />
          <label for="checkbox3">Mascotas</label>
        </div>
      </div>
      <div v-if="this.errors.checkboxes" style="color:red">Elige al menos una catergoría</div>

      <button class="btnPrimary" v-on:click.prevent="enviarForm">Agregar Blog</button>
    </form>

    <minified-blog-preview
      v-if="!this.blog.submitted"
      v-bind:title="blog.title"
      v-bind:content="blog.body"
      v-bind:categoria="blog.categoria"
    ></minified-blog-preview>

    <complete-blog-preview
      v-if="!this.blog.submitted"
      v-bind:title="blog.title"
      v-bind:content="blog.body"
      v-bind:categoria="blog.categoria"
    ></complete-blog-preview>

    <notification v-else v-notificationTheme="'successTheme'" v-bind:data="this.successData">
      <button slot="button" v-on:click.prevent="resetForm" class="btnPrimary">Agregar Nuevo</button>
    </notification>
  </div>
</template>

<script>
export default {
  name: "BlogForm",
  components: {
    "complete-blog-preview": () => import("./CompleteBlogPreview.vue"),
    "minified-blog-preview": () => import("./MinifiedBlogPreview.vue"),
    notification: () => import("./Notification.vue")
  },
  data() {
    return {
      blog: {
        title: "",
        body: "",
        categoria: [],
        submitted: false
      },
      //formularioValido: true,
      successData: {
        messages: ["Blog agregado correctamente!!!"]
      },
      errors: {
        title: false,
        content: false,
        checkboxes: false
      }
    };
  },
  methods: {
    enviarForm: function() {
      try {
        this.$store.dispatch("blogs/addBlog", this.blog);
        this.blog.submitted = true;
      } catch (error) {
        for (let key in this.errors) {
          this.errors[key] = error[key];
        }
      }
    },
    resetForm: function() {
      for (let key in this.errors) {
        this.errors[key] = false;
      }
      this.blog = {
        title: "",
        body: "",
        categoria: [],
        submitted: false
      };
    }
  }
};
</script>

<style scoped>
#contenedor * {
  box-sizing: border-box;
}
#contenedor {
  margin: 20px auto;
  max-width: 500px;
  color: rgb(221, 221, 221);
}
label {
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
.greyColor {
  color: rgb(186, 180, 180);
}
#preview {
  padding: 10px 20px;
  border: 2px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
pre {
  font-size: 1.2rem;
}

#contenedorCheckboxes {
  max-width: 100%;
}
.checkboxOption {
  display: inline-flex;
  margin-right: 5px;
}
input[type="checkbox"] {
  margin: 10px;
}
input[type="text"]:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid gray;
}
.btnPrimary {
  background-color: #186ed6;
  border-radius: 4px;
  border: 0px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 10px 31px;
  text-decoration: none;
  margin-top: 20px;
  min-width: 50%;
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
</style>
