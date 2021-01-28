import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    cartOpen: false,
    toggleOrderModal: false,
    toggleProductModal: false,
    countQuantity: 0,
    cartPriceSum: 0,
    preloaderStatus: false,
    productInfo: null
  },
  mutations: {
    CALL_PRELOADER(state, status){
      state.preloaderStatus = status;
    },
    DELETE_PRODUCT_FROM_CART(state,index){
      state.cart.splice(index, 1);
    },
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    CALCULATE_PRICE_COUNT(state){
      if (state.cart.length){
        state.cartPriceSum = state.cart.reduce((amount,total)=>{
          return amount + total.total;
        }, 0)
      }
    },
    COUNT_QUANTITY_FROM_CART(state){
      if (state.cart.length){
        state.countQuantity = state.cart.reduce((amount,total)=>{
          return amount + total.quantity;
        }, 0)
      }
    },
    SET_PRODUCT_INFO(state, product){
      state.productInfo = product;
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
    },
    TOGGLE_ORDER_MODAL(state){
      state.toggleOrderModal = !state.toggleOrderModal;
    },
    SET_PRODUCT_MODAL(state){
      state.toggleProductModal = !state.toggleProductModal;
    }
  },
  actions: {
    GET_PRODUCTS({commit}){
      commit('CALL_PRELOADER', true);
      return axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data);
          commit('CALL_PRELOADER', false);
        })
        .catch(e => {
          console.log(e);
          return e;
        });
    },
    DELETE_PRODUCT_FROM_CART({commit},index){
      commit('DELETE_PRODUCT_FROM_CART', index);
      commit('CALCULATE_PRICE_COUNT');
      commit('COUNT_QUANTITY_FROM_CART');
    },
    SHOW_PRODUCT({commit}, product){
      commit('SET_PRODUCT_INFO', product);
      commit('SET_PRODUCT_MODAL', true);
    },
    CLOSE_PRODUCT({commit}){
      commit('SET_PRODUCT_MODAL');
    },
    ADD_PRODUCT({commit}, product){
      commit('SET_PRODUCT', product);
      commit('COUNT_QUANTITY_FROM_CART');
      commit('CALCULATE_PRICE_COUNT');
    },
    TOGGLE_CART({commit}){
      commit('TOGGLE_CART');
    },
    TOGGLE_ORDER_MODAL({commit}){
      commit('TOGGLE_ORDER_MODAL');
    }
  },
  getters:{
    GET_PRELOADER_STATUS(state){
      return state.preloaderStatus;
    },
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    },
    CARTOPEN(state){
      return state.cartOpen;
    },
    GET_ORDER_MODAL_OPEN(state){
      return state.toggleOrderModal;
    },
    GET_COUNT_QUANTITY(state){
      return state.countQuantity;
    },
    GET_PRODUCT_INFO_MODAL(state){
      return state.productInfo;
    },
    GET_PRODUCT_MODAL_OPEN(state){
      return state.toggleProductModal;
    },
    GET_CART_PRICE_SUM(state){
      return state.cartPriceSum.toFixed(2);
    }
  },
  modules: {
  }
})
