<template>
      <div
            class="product"
            @mouseenter="switchDelete"
            @mouseleave="switchDelete"
      >
            <div class="image">
                  <a href="{{productDetails.link}}">
                        <img src="../assets/product.jpg" />
                  </a>
            </div>
            <div class="details">
                  <a href="{{productDetails.link}}">
                        <h3 class="title">{{ productDetails.title }}</h3>
                  </a>
                  <p class="description">
                        {{ productDetails.description }}
                  </p>
                  <h3>{{ productDetails.price }} руб.</h3>
            </div>
            <span
                  class="delete"
                  v-if="showDelet"
                  @click="deleteProduct(productDetails.id)"
            >
                  <img src="../assets/delete.svg" alt="" />
            </span>
      </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
      name: "Product",

      data: () => {
            return {
                  showDelet: false,
            };
      },

      methods: {
            switchDelete() {
                  this.showDelet = !this.showDelet;
            },

            ...mapActions({ deleteProduct: "deleteProduct" }),
      },

      props: {
            productDetails: {
                  type: Object,
                  default() {
                        return {
                              id: Math.random().toString(),

                              title: "Наименование товара",

                              description: `Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк`,

                              price: 1039,

                              link: "#",
                        };
                  },
            },
      },
};
</script>

<style lang="scss">
.product {
      @include theme-shape();
      margin: $base-margin * 0.5;
      // flex: 1;
      width: 300px !important;
      height: 423px !important;
      position: relative;

      .delete {
            background-color: #ff8484;
            position: absolute;
            padding: 7px;
            border-radius: $border-radius * 2;
            top: -10px;
            right: -10px;
            cursor: pointer;
      }

      .details {
            color: $black;
            margin: $base-margin * 1.3;
            .title,
            .description {
                  margin-bottom: $base-margin * 1.3;
            }
      }

      .image {
            // background-color: green;
            margin-bottom: $base-margin;
            height: 230px;
            width: 100%;
            // background-image: url("../assets/product.jpg");

            img {
                  vertical-align: top;
                  height: 100%;
                  width: 100%;
            }
      }
}
</style>
