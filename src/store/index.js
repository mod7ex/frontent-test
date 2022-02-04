import { createStore } from "vuex";

import products from "../helpers";

console.log(products);

// Create a new store instance.
export default createStore({
      state() {
            return {
                  products,
            };
      },

      mutations: {
            addProduct(state, payload) {
                  state.products.push({
                        ...payload,
                        id: Math.random().toString(),
                  });
            },

            deleteProduct(state, payload) {
                  state.products = state.products.filter(
                        (product) => product.id != payload
                  );
            },
      },

      getters: {
            PRODUCTS(state) {
                  return state.products;
            },
      },

      actions: {
            addProduct({ commit }, payload) {
                  commit("addProduct", payload);
            },

            deleteProduct({ commit }, id) {
                  commit("deleteProduct", id);
            },
      },
});
