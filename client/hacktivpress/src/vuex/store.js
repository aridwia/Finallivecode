import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  articles: []
}

const mutation = {
  setArticles (state, payload) {
    state.articles = payload
  }
}

const action = {
  getallarticles({commit}){
    http.get('/article')
    .then(({data}) => {
      console.log('inidataaxios', data)
      commit('setArticles', data)
    })
    .catch(err => console.error(err))
  }
}

const store = new Vuex.store({
  state,
  action
})

module.exports = store;
