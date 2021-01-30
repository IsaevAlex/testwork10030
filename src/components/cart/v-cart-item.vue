<template>
  <div class="vCartItem vCartItem-padding">
    <div class="vCartItem__header">
      <img class="vCartItem__img vCartItemImg" :src="cartData.image" alt="">
    </div>
    <div class="vCartItem__content">
      <div class="vCartItem__title productTitle">
        <p>{{ cartData.title }}</p>
      </div>
      <div class="vCartItem__price productPrice-pt productPrice-dark productPrice">
        <p>{{ cartData.total.toFixed(2) }} P</p>
      </div>
      <div class="vCartItem__count productPrice-pt p">
          <v-button type="withIcon" @click="increaseCountCartItem()"> + </v-button>
          <span class="vCartItem__countSpan roductPrice-dark productPrice">{{ cartData.quantity }} шт.</span>
          <v-button type="withIcon"  @click="decreaseCountCartItem()"> - </v-button>
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
    increaseCountCartItem(){
      this.$emit('increaseCountCartItem');
    },
    decreaseCountCartItem(){
      this.$emit('decreaseCountCartItem');
    },
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-padding{
      padding: 16px 22px;
      @media screen and (max-width: 500px){
        padding: 16px 0;
      }
    }
    &__countSpan{
      padding: 0 10px;
    }
    &__count{
      margin-top: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__img{
      width: 80px;
      height: 90px;
    }
    &__content{
      text-align: center;
      padding: 0 22px;
    }
  }
</style>
