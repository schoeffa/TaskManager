// import Vue from 'vue';
import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            user: '',
            users: ['Aaron', 'Liz', 'Sam'],
            tasks: [
                {
                    title: 'Wash Dishes',
                    frequency: 'Daily',
                    assignedTo: 'Aaron',
                    status: 'To Do'
                },
                {
                    title: 'Vacuum',
                    frequency: 'Weekly',
                    assignedTo: 'Aaron',
                    status: 'To Do'
                },
                {
                    title: 'Mow the Lawn',
                    frequency: 'Weekly',
                    assignedTo: 'Aaron',
                    status: 'To Do'
                },
            ]
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
})