import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            user: '',
            users: ['Aaron', 'Liz', 'Sam']
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
})


const app = createApp(App)

app.use(router);
app.use(store);
app.mount('#app');
