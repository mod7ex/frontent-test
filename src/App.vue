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

export default {
      name: "App",
      components: {
            Header,
            AddProductForm,
            AddProductPage,
            ProductsListing,
      },
};
</script>

<style lang="scss">
body {
      background-color: $white;
}
#app {
      max-width: $screen-width;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-top: $base-margin * 2;
}
</style>
