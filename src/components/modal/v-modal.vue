<template>
  <transition name="modal">
    <div class="modal modal-mask">
    <div class="modal__wrapper">
      <div class="modal__container">
        <div class="modal__header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal__body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal__footer">
          <slot name="footer">
            default footer
          </slot>
        </div>
      </div>
    </div>
  </div>
  </transition>

</template>

<script>
  export default {
    name: "v-modal",
    // props:{
    //     show:{
    //         type: Boolean,
    //         default:false
    //     }
    // },
    // methods:{
    //     close: function() {
    //         this.show = false;
    //     }
    // }
  }
</script>

<style scoped lang="scss">
  .modal{
    &-mask{
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;
    }
    &__wrapper{
      display: table-cell;
      vertical-align: middle;
    }
    &__container{
      min-width: 300px;
      max-width: 600px;
      margin: 0px auto;
      padding: 20px 20px 30px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: 'Lato', sans-serif;
    }
    &__body{
      margin: 20px 0;
    }

    &-enter-active,
    &-leave-active {
      transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }

  }
</style>
