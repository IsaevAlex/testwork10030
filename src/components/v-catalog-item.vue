<template>
  <div class="vCatalogItem">
    <div class="vCatalogItem__img">
      <img class="vCatalogItemImg" :src="productData.image" alt="">
    </div>
    <div class="vCatalogItem__title">
      <p>{{ productData.title }}</p>
    </div>
    <div class="vCatalogItem__price">
      <p>{{ productData.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item.vue',
  props:{
    productData:{
      type: Object,
      default(){
        return {}
      }
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
  }

  .vCatalogItemImg{
    max-width: 100%;
    height: auto;
  }
</style>
