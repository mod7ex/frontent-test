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

import { computed, onMounted, watch } from "vue";
import { mapActions, mapGetters, useStore } from "vuex";

export default {
      name: "App",
      components: {
            Header,
            AddProductForm,
            AddProductPage,
            ProductsListing,
      },

      setup(_, context) {
            const store = useStore();

            // getters
            let products = computed(() => store.getters.PRODUCTS);

            // actions
            let prepareProducts = () => store.dispatch("prepareProducts");
            let saveProducts = () => store.dispatch("saveProducts");

            onMounted(() => {
                  setTimeout(prepareProducts, 500);
            });

            watch(
                  products,
                  () => {
                        saveProducts();
                  },
                  { deep: true }
            );

            return {
                  products,
                  prepareProducts,
                  saveProducts,
            };
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
