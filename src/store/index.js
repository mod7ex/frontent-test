import { createStore } from "vuex";

import {
      compareMin,
      compareMax,
      compareName,
      storeLocally,
      fetchProducts,
} from "../helpers";

// Create a new store instance.
export default createStore({
      state() {
            return {
                  products: [],
            };
      },

      mutations: {
            prepareProducts(state) {
                  state.products = fetchProducts();
            },

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

            orderByMinPrice(state) {
                  state.products.sort(compareMin);
            },

            orderByMaxPrice(state) {
                  state.products.sort(compareMax);
            },

            orderByName(state) {
                  state.products.sort(compareName);
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

            orderByMinPrice({ commit }) {
                  commit("orderByMinPrice");
            },

            orderByMaxPrice({ commit }) {
                  commit("orderByMaxPrice");
            },

            orderByName({ commit }) {
                  commit("orderByName");
            },

            saveProducts({ getters }) {
                  storeLocally(getters.PRODUCTS);
            },

            prepareProducts({ commit }) {
                  commit("prepareProducts");
            },
      },
});
