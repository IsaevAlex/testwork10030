<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title">
        Online shop
      </div>
      <div class="header__icon">
        <v-button @click="toggleCart" type="withIcon" >
          <img src="@/assets/icons/cart-icon.svg" alt="">
        </v-button>
        <div class="header__cartCount" v-if="GET_COUNT_QUANTITY !== 0">
          <div v-if="GET_COUNT_QUANTITY > 99">
            +99
          </div>
          <div v-else>
            {{ GET_COUNT_QUANTITY }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import vButton from '@/components/button/v-button';
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-header',
  components:{
    vButton
  },
  computed:{
    ...mapGetters([
      'GET_COUNT_QUANTITY'
    ]),
  },
  methods:{
    ...mapActions([
      'TOGGLE_CART'
    ]),
    toggleCart(){
      this.TOGGLE_CART();
    }
  }
}
</script>

<style scoped lang="scss">
  .header{
    position: sticky;
    width: 100%;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    &__cartCount{
      width: 25px;
      background-color: red;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      position: absolute;
      color: #fff;
      font-weight: bold;
      top: 10px;
      right: 20px;
      font-family: 'PT Sans', sans-serif;
    }

    &__container{
      height: 66px;
      display: flex;
      align-items: center;
      padding: 0 88px;
      justify-content: space-between;

      @media screen and (max-width: 1500px){
        padding: 0px 30px;
      }
    }
  }
</style>
