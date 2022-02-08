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
      grid-template-columns: repeat(auto-fit, minmax(14.5em, auto));
      grid-column-gap: 1em;
      grid-row-gap: 1em;
      justify-content: right;
}

@media screen and (min-width: $screen-large) {
      #productsListing {
            grid-template-columns: repeat(3, 1fr);
      }
}
</style>
