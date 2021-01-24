<template>
  <div class="vCatalog">
    <v-catalog-item
      v-for="product in products"
      :key="product.id"
      :productData="product"
    />
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item';
export default {
  name: 'v-catalog',
  data(){
    return{
      products: [],
      errors: []
    }
  },
  components:{
    vCatalogItem
  },
  created(){
    this.$axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
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
