<template>
      <div id="productsListing">
            <Product
                  v-for="product in products"
                  :key="product.id"
                  :productDetails="product"
            />
      </div>
</template>

<script>
import Product from "../components/Product.vue";

import { mapGetters } from "vuex";

export default {
      name: "ProductsListing",

      components: {
            Product,
      },

      computed: {
            ...mapGetters({ products: "PRODUCTS" }),
      },
};
</script>

<style lang="scss">
#productsListing {
      // display: grid;
      // grid-template-columns: repeat(3, 1fr);
      // grid-template-rows: 1fr;
      // grid-column-gap: 0px;
      // grid-row-gap: 0px;

      // align-items: start;
      // justify-items: center;

      @include flex(
            $direction: row,
            $justify: flex-start,
            $align: flex-start,
            $wrap: wrap
      );
}
</style>
