<template>
      <div id="productsListing">
            <Product />
            <Product />
            <Product />
      </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
      name: "ProductsListing",

      components: {
            Product,
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
