<template>
  <div class="catalogPage catalogPage-padding">
    <div class="catalogPage__title">
      <h1 class="title">Каталог</h1>
    </div>
    <div class="catalogPage__products">
      <v-catalog></v-catalog>
    </div>
    <v-cart></v-cart>
  </div>
</template>

<script>
import vCart from '@/components/cart/v-cart'
import vCatalog from '@/components/catalog/v-catalog'
export default {
  name: 'catalogPage',
  components:{
    vCatalog,
    vCart
  }
}
</script>

<style lang="scss">
  .catalogPage{
    &-padding{
      padding: 32px 88px;
      @media screen and (max-width: 1500px){
        padding: 32px 30px;
      }
    }
    &__title{
      display: flex;
      justify-content: space-between;
      margin-bottom: 1em;
    }
  }
</style>
