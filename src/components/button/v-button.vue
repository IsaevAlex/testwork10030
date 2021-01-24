<template>
  <button class="normal"
          :class="[
                type,
                size
            ]"
          :disabled="disabled"
          @click="callback($event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    type:{
      type: String,
      default: ''
    },
    size:{
      type: String,
      default: ''
    },
    disabled: Boolean
  },
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    padding: 10px 20px;
    border: 1px solid #000;
    color: #333;
    background-color: #fff;
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    outline: none;
    cursor: pointer;

    &[disabled]{
      cursor: not-allowed;
    }
    &.full{
      width: 100%;
    }
    &.withIcon{
      border: none;
      transition: all .2s ease-in-out;
      &:hover{
        border: none;
        background-color: none;
        transform: scale(1.1);
      }
    }
    &.danger {
      background-color: #dc3545;
      border-color: #dc3545;
      color: #fff;
      &:hover{
        background-color: #c82333;
        border-color: #bd2130;
      }
    }
    &.success {
      background-color: #28a745;
      border-color: #28a745;
      color: #fff;
      &:hover{
        background-color: #218838;
        border-color: #1e7e34;
      }
    }
    &.edit{
      color: #000;
      background-color: #ffc107;
      border-color: #ffc107;
      &:hover{
        background-color: #ffca2c;
        border-color: #ffc720;
      }
    }
    &.info {
      background-color: #007bff;
      border-color: #007bff;
      color: #fff;
      &:hover{
        background-color: #0069d9;
        border-color: #0062cc;
      }
    }

  }
</style>
