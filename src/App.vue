<template>
      <AddProductPage>
            <template v-slot:header>
                  <Header />
            </template>

            <template v-slot:addProductForm>
                  <AddProductForm />
            </template>

            <template v-slot:productsListing>
                  <ProductsListing />
            </template>
      </AddProductPage>
</template>

<script>
import Header from "./components/Header.vue";
import AddProductForm from "./components/AddProductForm.vue";
import AddProductPage from "./layouts/AddProductPage.vue";
import ProductsListing from "./layouts/ProductsListing.vue";
import { mapActions, mapGetters } from "vuex";

export default {
      name: "App",
      components: {
            Header,
            AddProductForm,
            AddProductPage,
            ProductsListing,
      },

      computed: {
            ...mapGetters({ products: "PRODUCTS" }),
      },

      methods: {
            ...mapActions({
                  prepareProducts: "prepareProducts",
                  saveProducts: "saveProducts",
            }),
      },

      mounted() {
            setTimeout(this.prepareProducts, 500);
      },

      watch: {
            products: {
                  handler: function (val) {
                        this.saveProducts();
                  },
                  deep: true,
            },
      },
};
</script>

<style lang="scss">
body {
      background-color: $bg-color;
}

#app {
      max-width: $screen-max-width;
      margin: 0 auto;
      padding: 0 1em 1em 1em;
}
</style>
