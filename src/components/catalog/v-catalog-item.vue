<template>
  <div class="vCatalogItem" >
    <div class="vCatalogItem__wrapper" @click="openCatalogItem">
      <div class="vCatalogItem__header">
        <img class="vCatalogItem__img vCatalogItemImg" :src="productData.image" alt="">
      </div>
      <div class="vCatalogItem__content">
        <div class="vCatalogItem__title productTitle productTitle-grey">
          <p>{{ productData.title }}</p>
        </div>
        <div class="vCatalogItem__price productPrice productPrice-pt productPrice-dark">
          <p>{{ productData.price }} P</p>
        </div>
      </div>
    </div>

    <div class="vCatalogItem__button">
      <v-button type="info" @click="addToCart">Добавить в корзину</v-button>
    </div>
  </div>
</template>

<script>
import vButton from '@/components/button/v-button'
export default {
  name: 'v-catalog-item.vue',
  props:{
    productData:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  components: {
    vButton
  },
  methods:{
    addToCart(){
      this.$emit('addToCart');
    },
    openCatalogItem(){
      this.$emit('openCatalogItem');
    }
  }
}
</script>

<style scoped lang="scss">
  .vCatalogItem{
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    padding: 1em;
    transition: all .2s ease-in-out;
    &__img{
      height: 230px;
      width: 200px;
    }
    &__content{
      padding: 1em 0;
    }
    &__wrapper{
      text-align: center;
    }
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  }

</style>
