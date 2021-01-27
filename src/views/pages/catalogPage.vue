<template>
  <div class="catalogPage catalogPage-padding">
    <div class="catalogPage__title">
      <h1 class="title">Каталог</h1>
    </div>
    <div class="catalogPage__products">
        <v-preloader v-if="GET_PRELOADER_STATUS"/>
        <v-catalog  v-else></v-catalog>

    </div>

  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import vCatalog from '@/components/catalog/v-catalog'
import vPreloader from '@/components/preloader/v-preloader'
export default {
  name: 'catalogPage',
  components:{
    vCatalog,
    vPreloader
  },
  computed:{
    ...mapGetters([
      'GET_PRELOADER_STATUS'
    ])
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
