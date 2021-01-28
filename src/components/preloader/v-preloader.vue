<template>
  <div class="loader"  :style="{height: `${size }px`, width: `${size }px`}" role="status">
  </div>
</template>

<script>
  export default {
    name: 'v-preloader',
    props:{
      size: {
        type: Number,
        default: 120
      }
    }

  }
</script>

<style scoped lang="scss">
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #000; /* Blue */
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
