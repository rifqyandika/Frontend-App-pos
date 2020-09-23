import axios from 'axios'
const { HOST } = require('../../helper/env')

const state = () => {
  return {
    token: localStorage.getItem('token') || null,
    id: null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  },
  isId: state => state.id
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${HOST}/user/login`, payload)
        .then((response) => {
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('id', response.data.data.id_user)
          localStorage.setItem('refresh', response.data.data.refresh)
          if (response.data.data.token === undefined || response.data.data.token === null) {
            alert('Email or Password Invalid')
            localStorage.removeItem('token')
            window.location = '/login'
          } else {
            resolve(response.data.message)
          }
        }).catch((err) => {
          reject(err)
        })
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${HOST}/user/register`, payload)
        .then((response) => {
          resolve(response.data.message)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  logout (context, payload) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      const id = localStorage.getItem('id')
      localStorage.removeItem('id')
      localStorage.removeItem('refresh')
      axios.delete(`${HOST}/user/logout/${id}`)
        .then((response) => {
          resolve(response.data.data)
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
  getters
}
