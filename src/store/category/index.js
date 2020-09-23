import axios from 'axios'
const { HOST } = require('../../helper/env')

const state = () => {
  return {
    category: []
  }
}

const mutations = {
  SET_CATEGORY (state, payload) {
    state.category = payload
  }
}

const getters = {
  category: state => state.category
}

const actions = {
  getCategory (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/category`)
        .then((response) => {
          context.commit('SET_CATEGORY', response.data.data)
          resolve()
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  searchProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/product?search=${payload}`)
        .then((response) => {
          context.commit('SET_CATEGORY', response.data.data)
          resolve()
        }).catch((err) => {
          console.log(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
