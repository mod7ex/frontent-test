<template>
      <li
            class="product"
            @mouseenter="showDelet = true"
            @mouseleave="showDelet = false"
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
            <transition name="fade">
                  <span
                        class="delete"
                        v-if="showDelet"
                        @click="deleteProduct(productDetails.id)"
                  >
                        <img src="../assets/delete.svg" alt="" />
                  </span>
            </transition>
      </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
      name: "Product",

      data: () => {
            return {
                  showDelet: false,
                  bool: false,
            };
      },

      methods: {
            ...mapActions({
                  deleteProduct: "deleteProduct",
            }),
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
.fade-enter-active,
.fade-leave-active {
      transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
      opacity: 0;
}

.product {
      @include theme-shape();
      // margin: $base-margin * 0.5;
      width: $base-width !important;
      height: 423px !important;
      position: relative;

      transition: box-shadow 0.5s ease;

      &:hover {
            box-shadow: 0 2px 3px rgba($black, 0.5);
      }

      .delete {
            background-color: #ff8484;
            position: absolute;
            padding: 7px;
            border-radius: $border-radius * 2;
            top: -10px;
            right: -10px;
            cursor: pointer;
            transition: all 0.5s ease;
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
