<template>
  <div class="notFoundPage">
     <h1 class="notFoundPage__title title">Страница не найдена</h1>
     <div class="notFoundPage__btn">
       <v-button type="info" @click="$router.push('/')">Вернуться на страницу каталога</v-button>
     </div>
  </div>
</template>

<script>
  import vButton from '@/components/button/v-button'
export default {
  name: 'notFoundPage',
  components:{
    vButton
  }
}
</script>

<style scoped lang="scss">
  .notFoundPage{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title{
      margin-bottom: 0.5em;
    }
  }
</style>
