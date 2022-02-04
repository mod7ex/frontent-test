<template>
      <transition-group name="list" tag="ul" id="productsListing">
            <Product
                  v-for="product in products"
                  :key="product.id"
                  :productDetails="product"
            />
      </transition-group>
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
.list-enter-active,
.list-leave-active {
      transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
      opacity: 0;
      transform: translateY(-30px);
}

#productsListing {
      // @include flex(
      //       $direction: row-reverse,
      //       $justify: flex-start,
      //       $align: flex-start,
      //       $wrap: wrap
      // );

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: $base-margin;
      grid-row-gap: $base-margin;
      grid-auto-flow: row dense;
}
</style>
