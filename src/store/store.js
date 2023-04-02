import {createStore} from 'vuex';

const store = createStore({
    state : {
        // cart: [],
        // items: [
        //     {
        //         id: 1,
        //         name: 'iphone ',
        //         price: 500,
        //         quantity: 90
        //     },
        //     {
        //         id: 2,
        //         name: 'Notebook',
        //         description: 'Xiaomi Notebook Pro 15.6',
        //         price: 400,
        //         quantity: 100
        //     },
        // ],
        users: [],
        token: null,

    },
    mutations: {

        addUser(state, user) {
            state.users.push(user);
        }
    },
    actions: {
        addUsers(context, user) {
            context.commit('addUser', user);
        }
    }
});

export default store;