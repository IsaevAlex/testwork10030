<template>
  <div class="mainLayout">
    <v-header/>
    <slot/>
  </div>
</template>

<script>
  import vHeader from '@/components/header/v-header';
  export default {
    name: 'mainLayout',
    components:{
      vHeader
    }
  }
</script>

<style scoped>

</style>
