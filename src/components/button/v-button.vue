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
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    width: 100%;
    line-height: 21px;

    font-family: 'PT Sans', sans-serif;
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
      padding: 0;
      width: auto;
      &:hover{
        border: none;
        background-color: none;
        transform: scale(1.1);
      }
    }
    &.info {
      background-color: #000;
      border-color: #000;
      color: #fff;
      &:hover{
        background-color: #59606D;
        border-color: #59606D;
      }
    }

  }
</style>
