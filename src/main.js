import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";

import "vue3-lottie/dist/style.css";
import "./assets/main.css";

const app = createApp(App);

app.use(Vue3Lottie);
app.use(router);

app.mount("#app");
