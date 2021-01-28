<template>
  <div>
    <transition name="slide">
      <div class="vCart" v-show="CARTOPEN" >
        <div class="vCart__header">
          <div class="vCart__title">
            <h1 class="title">Корзина</h1>
            <div class="vCart__close">
              <v-button type="withIcon" @click="closeCart">
                <img src="@/assets/icons/close-icon.svg" alt="">
              </v-button>
            </div>
          </div>
          <div v-if="CART.length" class="vCart__info">
            <div class="vCart__subTitle subTitle subTitle-grey">
              <span>Товары в корзине</span>
            </div>
          </div>
          <div v-else class="vCart__info">
            <div class="vCart__subTitle subTitle subTitle-grey">
              <span>Пока что вы ничего не добавили в корзину</span>
            </div>
            <div class="vCart__btn" @click="closeCart">
              <v-button type="info">Перейти к выбору</v-button>
            </div>
          </div>
        </div>
        <div v-if="CART.length" class="vCart__items">
          <v-cart-item
            v-for="(cartItem,index) in CART"
            :key="cartItem.id"
            :cartData="cartItem"
            @deleteProductFromCart="deleteProductFromCart(index)"
          />
        </div>
        <div v-if="CART.length" class="vCart__footer">
          <div class="vCart__totalSection vCart__totalSection-padding">
            <div class="vCart__totalTitle orderText">
              <span>Итого:</span>
            </div>
            <div class="vCart__total orderText">
              {{ GET_CART_PRICE_SUM }} P
            </div>
          </div>
          <div class="vCart__btn" @click="openOrderModal">
            <v-button type="info">Оформить заказ</v-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vCartItem from '@/components/cart/v-cart-item';
import vButton from '@/components/button/v-button';
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'v-cart',
  components:{
    vButton,
    vCartItem
  },
  methods:{
    ...mapActions([
      'DELETE_PRODUCT_FROM_CART',
      'TOGGLE_CART',
      'TOGGLE_ORDER_MODAL'
    ]),
    closeCart(){
      this.TOGGLE_CART();
    },
    openOrderModal(){
      this.TOGGLE_ORDER_MODAL();
    },
    deleteProductFromCart(index){
      this.DELETE_PRODUCT_FROM_CART(index);
    }
  },
  computed:{
    ...mapGetters([
      'CART','CARTOPEN','GET_CART_PRICE_SUM'
    ])
  }
}
</script>

<style scoped lang="scss">
  .vCart{
    position: fixed;
    right: 0;
    z-index: 99;
    height: calc(100vh - 104px);
    width: 460px;
    top: 0;
    background-color: #fff;
    padding: 52px 48px;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    display: flex;
    flex-direction: column;

    &__subTitle{
      padding: 24px 0 16px 0;
      text-align: left;
    }

    &__title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    &__items{
      flex: 1 1 auto;
      overflow-y: auto;
    }

    /*&__btn{*/
    /*  padding-top: 1em;*/
    /*}*/
    &__totalSection{
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-padding{
        padding: 1em 0;
      }
    }

    &__header, &__footer{
      flex: 0 0 auto;
    }
  }

  .slide-leave-active,
  .slide-enter-active {
    transition: 1s;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transform: translate(100%, 0);
  }



</style>
