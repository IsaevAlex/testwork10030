<template>
  <div class="mainLayout">
    <v-header/>
    <v-cart/>
    <v-order-modal/>
    <slot/>
  </div>
</template>

<script>
import vHeader from '@/components/header/v-header';
import vOrderModal from '@/components/modal/v-order-modal'
import vCart from '@/components/cart/v-cart'
export default {
  name: 'mainLayout',
  components:{
    vHeader,
    vCart,
    vOrderModal
  }
}
</script>

<style scoped>

</style>
