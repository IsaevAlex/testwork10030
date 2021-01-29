<template>
  <v-modal class="vOrderSuccessFullModal" v-show="GET_ORDER_SUCCESSFULL_MODAL_OPEN">
    <div slot="header">
      <div class="vOrderSuccessFullModal__header">
        <h2 class="vOrderSuccessFullModal__title title">Заказ оформлен</h2>
        <v-button type="withIcon" @click="closeModal">
          <img src="@/assets/icons/close-icon.svg" alt="">
        </v-button>
      </div>
    </div>
    <div slot="body">
      <div class="vOrderSuccessFullModal__content">
        <div class="vOrderSuccessFullModal__successIcon">
          <img class="vOrderSuccessFullModal__img" src="@/assets/icons/success-icon.png" alt="">
        </div>
        <div class="vOrderSuccessFullModal__text">
          <p class="orderText-min">Поздравляем Вас с успешным выполнением заказа!!!</p>
        </div>
      </div>
    </div>
    <div slot="footer"></div>
  </v-modal>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VButton from '@/components/button/v-button';
import VModal from '@/components/modal/v-modal';
export default {
  name: "v-order-successfull-modal",
  components:{
    VButton,
    VModal
  },
  computed:{
    ...mapGetters([
      'GET_ORDER_SUCCESSFULL_MODAL_OPEN',
      'GET_USER_INFO'
    ])
  },
  methods:{
    ...mapActions([
      'TOGGLE_ORDER_SUCCESSFULL_MODAL',
    ]),
    closeModal(){
      this.TOGGLE_ORDER_SUCCESSFULL_MODAL();
    }
  }
}
</script>

<style scoped lang="scss">
  .vOrderSuccessFullModal{
    &__header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__successIcon{
      margin: 1em 0;
    }
    &__img{
      height: 200px;
      max-width: 100%;
    }
    &__text{
      text-align: center;
    }
  }
</style>
