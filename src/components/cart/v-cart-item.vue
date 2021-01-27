<template>
  <div class="vCartItem">
    <div class="vCartItem__header">
      <img class="vCartItem__img vCartItemImg" :src="cartData.image" alt="">
    </div>
    <div class="vCartItem__content">
      <div class="vCartItem__title productTitle">
        <p>{{ cartData.title }}</p>
      </div>
      <div class="vCartItem__price productPrice-pt productPrice-dark productPrice">
        <p>{{ cartData.total }} P</p>
      </div>
      <div class="vCartItem__count productPrice-pt productPrice-dark productPrice">
        <p>
          <v-button type="withIcon"> + </v-button>
          {{ cartData.quantity }} шт.
          <v-button type="withIcon"> - </v-button>
        </p>
      </div>
    </div>
    <div class="vCart__button" @click="deleteProductFromCart">
      <v-button type="withIcon">
        <img src="@/assets/icons/delete-cart-icon.svg" alt="">
      </v-button>
    </div>
  </div>
</template>

<script>
import vButton from '@/components/button/v-button';

export default {
  name: 'v-cart-item',
  props:{
    cartData:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    deleteProductFromCart(){
      this.$emit('deleteProductFromCart');
    }
  },
  components: {
    vButton
  }
}
</script>

<style scoped lang="scss">
  .vCartItem{
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 16px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__img{
      width: 80px;
      height: 90px;
    }
    &__content{
      padding: 0 22px;
    }
  }
</style>
