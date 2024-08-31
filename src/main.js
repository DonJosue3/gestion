import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import Vue Router if used
import store from './store';    // Import Vuex store if used

createApp(App)
    .use(router)  // Use Vue Router if applicable
    .use(store)   // Use Vuex store if applicable
    .mount('#app');
