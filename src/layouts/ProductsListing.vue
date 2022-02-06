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
      display: grid;
      // grid-template-columns: repeat(3, 1fr);
      // grid-template-columns: repeat(auto-fit, minmax($base-width * 1.3, 1fr));
      grid-template-columns: repeat(auto-fit, $base-width);

      grid-column-gap: $base-margin;
      grid-row-gap: $base-margin;

      grid-auto-flow: row !important;

      justify-content: right;
}

// @media only screen and (max-width: $screen-1) {
//       #productsListing {
//             grid-template-columns: repeat(2, 1fr);
//       }
// }

// @media only screen and (max-width: $screen-2) {
//       #productsListing {
//             grid-template-columns: 1fr;
//       }
// }
</style>
