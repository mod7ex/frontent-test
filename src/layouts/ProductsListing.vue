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
      transition: all 1s;
}
.list-enter,
.list-leave-to {
      opacity: 0;
      transform: translateY(-30px);
}

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
            $justify: center,
            $align: flex-start,
            $wrap: wrap
      );
}
</style>
