<template>
  <v-modal class="vProductModal" v-show="GET_PRODUCT_MODAL_OPEN">
    <div slot="header">
      <div class="vProductModal__header">
        <div class="vProductModal__title">
          <h1 class="title">Описание товара</h1>
        </div>
        <v-button type="withIcon" @click="closeModal">
          <img src="@/assets/icons/close-icon.svg"  alt="">
        </v-button>
      </div>
    </div>
    <div slot="body">
      <div v-if="GET_PRODUCT_INFO_MODAL" class="vProductModal__Info">
        <div class="vProductModal__imgWrapper">
          <img class="vProductModal__img" :src="GET_PRODUCT_INFO_MODAL.image" alt="">
        </div>
        <div class="vProductModal__name">
          <h5 class="orderText">{{ GET_PRODUCT_INFO_MODAL.title }}</h5>
        </div>
        <div class="vProductModal__description">
          <h5 class="subTitle">{{ GET_PRODUCT_INFO_MODAL.description }}</h5>
        </div>
        <div class="vProductModal__price">
          <h5 class="orderText">{{ GET_PRODUCT_INFO_MODAL.price }} P</h5>
        </div>
      </div>
    </div>
    <div slot="footer">
      <div class="vOrderModal__btn vOrderModal__btn-submit">
        <v-button @click="addToCart(GET_PRODUCT_INFO_MODAL)" type="info">Добавить в корзину</v-button>
      </div>
    </div>
  </v-modal>
</template>

<script>
import VButton from '@/components/button/v-button';
import VModal from '@/components/modal/v-modal';
import {mapGetters,mapActions} from 'vuex';
export default {
  name: "v-product-modal",
  computed:{
    ...mapGetters([
      'GET_PRODUCT_INFO_MODAL',
      'GET_PRODUCT_MODAL_OPEN'
    ])
  },
  components:{
    VButton,
    VModal
  },
  methods:{
    ...mapActions([
      'CLOSE_PRODUCT'
    ]),
    addToCart(){
      this.$emit('addToCart', this.GET_PRODUCT_INFO_MODAL);
    },
    closeModal() {
      this.CLOSE_PRODUCT();
    }
  }
}
</script>

<style scoped lang="scss">
  .vProductModal{
    &__info{
      overflow-y: auto;
      @media screen and (max-height: 700px){
        max-height: 400px;
      }
    }
    &__header{
      display: flex;
      justify-content: space-between;
    }
    &__img{
      max-width: 100%;
      height: 250px;
    }
    &__description{
      padding: 1em 0;
    }
  }
</style>
