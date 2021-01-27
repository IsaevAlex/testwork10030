<template>
    <div class="customInput" :class="{'customInput-error': error}">
        <input type="text" :placeholder="placeholder" ref="input" :name="placeholder" class="customInput__input"  :value="value" @input="updateValue($event.target.value)">
    </div>
</template>

<script>
export default {
  name: "v-input",
  props:{
    value:{
      type: String,
      default: ''
    },
    error:{
      type: Boolean,
      default: false
    },
    placeholder:{
      type: String,
      default: ' '
    },
    autofocus:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    updateValue(value){
      this.$emit('input', value);
    }
  },
  watch:{
    autofocus(newVal){
      if (newVal){
        this.$refs.input.focus();
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .customInput{
        position: relative;
        border:1px solid #F8F8F8;
        height:50px;
        padding-left:12px;
        border-radius: 8px;
        background-color: #F8F8F8;

        &-error{
            border:1px solid red !important;
        }

        &__input{
            font-family: 'PT Sans', sans-serif;
            background-color: #F8F8F8;
            color: #000;
            border:none;
            font-size: 16px;
            padding-top: 5px;
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 50px;
            bottom:0px;
            &:focus {
                outline: none;
            }
        }
    }
</style>
