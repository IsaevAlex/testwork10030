<template>
  <div class="vCatalog">
    <div class="vCatalog__preloader" v-if="GET_PRELOADER_STATUS">
      <v-preloader/>
    </div>
    <template v-else>
      <template v-if="filteredProducts.length">
        <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.id"
          :productData="product"
          @addToCart="addToCart(product)"
          @openCatalogItem="openCatalogItem(product)"
        />
        <v-product-modal @addToCart="addToCart"/>
      </template>
      <template v-else>
        <div class="vCatalog__noresults orderText">
          <h2>По вашему запросу не найдено товаров </h2>
        </div>
      </template>

    </template>

  </div>
</template>

<script>
import vProductModal from '@/components/modal/v-product-modal'
import vPreloader from '@/components/preloader/v-preloader'
import vCatalogItem from '@/components/catalog/v-catalog-item';
import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'v-catalog',
  data(){
    return{

    }
  },
  components:{
    vCatalogItem,
    vPreloader,
    vProductModal
  },
  mounted(){
    this.GET_PRODUCTS();
  },
  computed:{
    ...mapGetters([
      'PRODUCTS',
      'GET_PRELOADER_STATUS',
      'GET_SEARCH_VALUE'
    ]),
    filteredProducts() {
      return this.PRODUCTS.filter(product => {

        return product.title.toLowerCase().includes(this.GET_SEARCH_VALUE.toLowerCase())

      })
    }
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_PRODUCT',
      'SHOW_PRODUCT'
    ]),
    openCatalogItem(product){
      this.SHOW_PRODUCT(product);
    },
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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    &__preloader{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
