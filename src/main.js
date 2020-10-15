import Vue from 'vue'
import App from './App.vue'
import Store from './store'
import { theme, mayusculas, notificationTheme } from './directives'
import { toUppercase } from './filters'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvHRVq1-O4_5FnlX-nAElQ6PXz_cCXm6w",
  authDomain: "blogswebsite-788af.firebaseapp.com",
  databaseURL: "https://blogswebsite-788af.firebaseio.com",
  projectId: "blogswebsite-788af",
  storageBucket: "blogswebsite-788af.appspot.com",
  messagingSenderId: "944455304262",
  appId: "1:944455304262:web:cde0103626c7e732c03647"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let app = null

firebase.auth().onAuthStateChanged(() => {


  if (!app) {
    app = new Vue({
      store: Store,
      directives: {
        theme, mayusculas, notificationTheme
      },
      filters: {
        toUppercase
      },
      render: h => h(App),
    }).$mount('#app')
  }

  window.miapp = app;
})




