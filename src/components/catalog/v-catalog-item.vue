<template>
  <div class="vCatalogItem">
    <div class="vCatalogItem__header">
      <img class="vCatalogItem__img vCatalogItemImg" :src="productData.image" alt="">
    </div>
    <div class="vCatalogItem__content">
      <div class="vCatalogItem__title productTitle productTitle-grey">
        <p>{{ productData.title }}</p>
      </div>
      <div class="vCatalogItem__price productPrice productPrice-pt productPrice-dark">
        <p>{{ productData.price }}</p>
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
    }
  }
}
</script>

<style scoped lang="scss">
  .vCatalogItem{
    width: 264px;
    height: auto;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;
    padding: 1em;

    &__img{
      height: 230px;
      width: 200px;
    }

    &__content{
      padding: 1em 0;
    }
  }

</style>
