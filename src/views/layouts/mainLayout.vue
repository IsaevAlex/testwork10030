<template>
  <div class="mainLayout">
    <v-header/>
    <v-cart/>
    <v-order-modal/>
    <v-order-successfull-modal/>
    <slot/>
  </div>
</template>

<script>
  import VOrderSuccessfullModal from '@/components/modal/v-order-successfull-modal';

  import vHeader from '@/components/header/v-header';
import vOrderModal from '@/components/modal/v-order-modal'
import vCart from '@/components/cart/v-cart'
export default {
  name: 'mainLayout',
  components:{
    vHeader,
    vCart,
    vOrderModal,
    VOrderSuccessfullModal
  }
}
</script>

<style scoped>

</style>
