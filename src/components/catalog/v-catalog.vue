<template>
  <div class="vCatalog">
    <v-catalog-item
      v-for="product in PRODUCTS"
      :key="product.id"
      :productData="product"
      @addToCart="addToCart(product)"
    />
  </div>
</template>

<script>
import vCatalogItem from '@/components/catalog/v-catalog-item';
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'v-catalog',
  data(){
    return{

    }
  },
  components:{
    vCatalogItem
  },
  created(){
    this.GET_PRODUCTS();
  },
  computed:{
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_PRODUCT'
    ]),
    addToCart(product){
      if (!product.quantity){
        this.$set(product, 'quantity', 1);
        this.$set(product, 'total', product.price);
      }
      this.ADD_PRODUCT(product);
    }
  }

}
</script>

<style scoped lang="scss">
  .vCatalog{
    display: grid;
    grid-gap: 1.75em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
</style>
