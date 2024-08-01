import { createStore } from 'vuex'
import axios from 'axios';
import { auth } from '@/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    todos: []
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },

    CLEAR_USER (state) {
      state.user = null;
      localStorage.removeItem('user');
    },

    storeTodos(state, payload) {
      state.todos = payload
    },

    storeTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.unshift(payload)
      }
    },

    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)
    
      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    
    }
  },

  actions: {

    async login({ commit }, { email, password }) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        commit('SET_USER', user);
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async register({ commit }, { email, password }) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        commit('SET_USER', user);
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('CLEAR_USER');
      } catch (error) {
        throw new Error(error.message);
      }
    },

    getTodos({ commit }) {
          return axios.get('http://localhost:3000/todos')
              .then((response) => {
                commit('storeTodos', response.data)
      })
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo', response.data);
      })
    },

    updateTodo({ commit }, { id, data }) {
      return axios.put(`http://localhost:3000/todos/${id}`, data).then((response) => {
        commit('storeTodo', response.data)
      })
    },

    deleteTodo({ commit }, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit('deleteTodo', id)
      })
    }
  },

  getters: {
  },

  modules: {
  }

})