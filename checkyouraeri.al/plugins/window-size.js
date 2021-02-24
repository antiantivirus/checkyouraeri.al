import { createApp } from 'vue';
import App from "./App.vue";  // your App component
import { VueWindowSizePlugin } from 'vue-window-size/option-api';

const app = createApp(App);
app.use(VueWindowSizePlugin);