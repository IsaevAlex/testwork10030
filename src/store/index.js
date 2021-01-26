import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartOpen: false
  },
  mutations: {
    DELETE_PRODUCT_FROM_CART(state,index){
      state.cart.splice(index, 1);
    },
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    SET_PRODUCT(state, product){
      if (state.cart.length){
        let isProductExist = false;
        state.cart.map((item) =>{
          if (item.id === product.id){
            isProductExist = true;
            item.quantity = item.quantity + 1;
            item.total = item.total + item.price;
          }
        });
        if (!isProductExist){
          state.cart.push(product);
        }
      }
      else{
        state.cart.push(product);
      }
      state.priceTotal = state.cart.reduce((amount, total) =>{
        return amount.total + total.total
      },0)
    },
    TOGGLE_CART(state){
      state.cartOpen = !state.cartOpen;
      console.log(12312);
      console.log(state.cartOpen);

    }
  },
  actions: {
    GET_PRODUCTS({commit}){
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data);
          return response.data;
        })
        .catch(e => {
          console.log(e);
          return e;
        });
    },
    DELETE_PRODUCT_FROM_CART({commit},index){
      commit('DELETE_PRODUCT_FROM_CART', index);
    },
    ADD_PRODUCT({commit}, product){
      commit('SET_PRODUCT', product);
    },
    TOGGLE_CART({commit}){
      commit('TOGGLE_CART');
      console.log('sdad');
    }
  },
  getters:{
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    },
    CARTOPEN(state){
      return state.cartOpen;
    }
  },
  modules: {
  }
})
