<template>
  <v-modal class="vOrderModal" v-show="GET_ORDER_MODAL_OPEN">
    <div slot="header">
      <div class="vOrderModal__header">
        <h2 class="vOrderModal__title title">Оформление заказа</h2>
        <v-button type="withIcon" @click="closeModal">
          <img src="@/assets/icons/close-icon.svg" alt="">
        </v-button>
      </div>
      <div class="vOrderModal__info">

      </div>
    </div>
    <div slot="body">
      <div class="vOrderModal__body">
        <div class="vOrderModal__input vOrderModal__input-mb">
          <v-input :autofocus="autofocus" :placeholder="placeholders.name" v-model="name"></v-input>
        </div>
        <div class="vOrderModal__input vOrderModal__input-mb">
          <v-input :placeholder="placeholders.phone" v-model="phone"></v-input>
        </div>
        <div class="vOrderModal__input vOrderModal__input-mb">
          <v-input :placeholder="placeholders.address" v-model="address"></v-input>
        </div>
      </div>
    </div>
    <div slot="footer">
      <div class="vOrderModal__footer">
        <div class="vOrderModal__error vOrderModal__error-margin">
          <span class="errorText">{{ errorText }}</span>
        </div>
        <div class="vOrderModal__btn vOrderModal__btn-submit">
          <v-button type="info">Оформить</v-button>
        </div>

      </div>
    </div>
  </v-modal>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VInput from '@/components/input/v-input';
import VButton from '@/components/button/v-button';
import VModal from '@/components/modal/v-modal';
export default {
  name: "v-order-modal",
  components:{
    VModal,
    VButton,
    VInput
  },
  data(){
    return{
      placeholders: {
        name: 'Ваше имч',
        phone: 'Телефон',
        address: 'Адрес'
      },
      name: '',
      address: '',
      phone: '',
      errorText: '',
      autofocus: false
    }
  },
  computed:{
    ...mapGetters([
      'GET_ORDER_MODAL_OPEN'
    ])
  },
  watch:{
    GET_ORDER_MODAL_OPEN(value){
      this.autofocus = !!value;
    }
  },
  methods:{
    ...mapActions([
      'TOGGLE_ORDER_MODAL'
    ]),
    closeModal(){
      this.TOGGLE_ORDER_MODAL();
      this.errorText = '';
    },
  }
}
</script>

<style scoped lang="scss">
  .vOrderModal{
    &__header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__footer{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;

      @media screen and (min-width: 600px) {
        justify-content: space-between;
      }
    }
    &__error{
      &-margin{
        margin-right: 8px;
        margin-bottom: 9px;
      }
    }

    &__btn{
      width: 100%;
      &-mr{
        margin-right: 8px;
      }
    }
    &__input{
      &-mb{
        margin-bottom: 1em;
      }
    }
  }
</style>
