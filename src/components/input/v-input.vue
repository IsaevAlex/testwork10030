<template>
    <div class="vInput" :class="{'customInput-error': error}">
        <template v-if="mask">
          <input v-mask="{mask: '9 999-999-9999', greedy: true}" type="text" :placeholder="placeholder" ref="input" :name="placeholder" class="vInput__input"  :value="value" @input="updateValue($event.target.value)">
        </template>
      <template v-else>
        <input type="text" :placeholder="placeholder" ref="input" :name="placeholder" class="vInput__input"  :value="value" @input="updateValue($event.target.value)">
      </template>
    </div>
</template>

<script>
export default {
  name: "v-input",
  props:{
    mask:{
      type: Boolean,
      default: false
    },
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
    .vInput{
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
            font-size: 18px;
            padding-top: 5px;
            display: block;
            box-sizing: border-box;
            width: 100%;
            height: 50px;
            bottom:0px;
            @media screen and (max-width: 500px){
              font-size: 14px;
            }
            &:focus {
                outline: none;
            }
        }
    }
</style>
