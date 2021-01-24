<template>
  <div class="catalogPage">
    <div class="catalogPage__title">
      <h1 class="title">Каталог</h1>
    </div>
    <div class="catalogPage__products">
      <v-catalog></v-catalog>
    </div>
  </div>
</template>

<script>
  import vCatalog from '@/components/v-catalog'
  export default {
    name: 'catalogPage',
    components:{
      vCatalog
    }
  }
</script>

<style lang="scss">
  .catalogPage{
    padding: 32px 88px;
    &__title{
      display: flex;
      justify-content: space-between;
    }
  }
</style>
