import axios from 'axios'
const { HOST } = require('../../helper/env')

const state = () => {
  return {
    product: [],
    detail: [],
    cart: []
  }
}

const mutations = {
  SET_PRODUCT (state, payload) {
    state.product = payload
  },
  SET_DETAIL (state, payload) {
    state.detail = payload
  },
  SET_CART (state, payload) {
    const addItem = state.cart.find(product => product.id === payload.id)
    if (addItem) {
      addItem.qty++
    } else {
      state.cart.push({ ...payload, qty: 1 })
    }
  }
}

const getters = {
  product: state => state.product,
  dettail: state => state.detail,
  cartt: state => state.cart
}

const actions = {
  getProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/product`)
        .then((response) => {
          context.commit('SET_PRODUCT', response.data.data)
          resolve()
        }).catch((err) => {
          reject(err)
        })
    })
  },
  searchProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/product?search=${payload}`)
        .then((response) => {
          context.commit('SET_PRODUCT', response.data.data)
          resolve()
        }).catch((err) => {
          reject(err)
        })
    })
  },
  addProduct (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('name', payload.name)
      fd.append('price', payload.price)
      fd.append('image', payload.image)
      fd.append('category', payload.id_category)
      axios.post(`${HOST}/product/add`, fd)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  deleteProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${HOST}/product/delete/${payload}`)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => [
          reject(err)
        ])
    })
  },
  detailProduct (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/product/${payload}`)
        .then((response) => {
          context.commit('SET_DETAIL', response.data.data)
          console.log(response.data)
        }).catch((err) => [
          reject(err)
        ])
    })
  },
  updateProduct (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('name', payload.name)
      fd.append('price', payload.price)
      fd.append('image', payload.image)
      fd.append('category', payload.id_category)
      axios.put(`${HOST}/product/edit/${payload.id}`, fd)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  sortNew (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/product?sortBy=id_product&type=desc`)
        .then((response) => {
          context.commit('SET_PRODUCT', response.data.data)
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  sortPrice (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${HOST}/product?sortBy=price`)
        .then((response) => {
          context.commit('SET_PRODUCT', response.data.data)
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  addCart (context, payload) {
    context.commit('SET_CART', payload)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
