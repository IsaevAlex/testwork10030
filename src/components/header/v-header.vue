<template>
  <header class="header">
    <div class="header__container">
      <div class="header__title">
        Online shop
      </div>
      <div class="header__icon">
        <v-button type="withIcon">
          <img src="@/assets/icons/cart-icon.svg" alt="">
        </v-button>
      </div>
    </div>
  </header>
</template>

<script>
import vButton from '@/components/button/v-button';
export default {
  name: 'v-header',
  components:{
    vButton
  }
}
</script>

<style scoped lang="scss">
  .header{
    position: sticky;
    width: 100%;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    &__container{
      height: 66px;
      display: flex;
      align-items: center;
      padding: 0 88px;
      justify-content: space-between;
    }
  }
</style>
