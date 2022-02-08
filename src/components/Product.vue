<template>
      <li
            class="product"
            @mouseenter="showDelet = true"
            @mouseleave="showDelet = false"
      >
            <div class="image">
                  <a :href="productDetails.link">
                        <img :src="productDetails.image" />
                  </a>
            </div>
            <div class="details">
                  <a class="title" :href="productDetails.link">
                        <h3>{{ productDetails.title }}</h3>
                  </a>
                  <p class="description">
                        {{ productDetails.description }}
                  </p>
                  <h3 class="price">{{ productDetails.price }} руб.</h3>
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
import { useStore } from "vuex";
import { ref } from "vue";

export default {
      name: "Product",

      props: {
            productDetails: {
                  type: Object,
                  /*
                        default() {
                              return {
                                    id: String,

                                    image: String,

                                    title: String,

                                    description: String,

                                    price: Number,

                                    link: String,
                              };
                        },
                  */
            },
      },

      setup(props) {
            const store = useStore();

            let showDelet = ref(false);
            let bool = ref(false);

            let deleteProduct = (id) => store.dispatch("deleteProduct", id);

            return {
                  showDelet,
                  bool,
                  deleteProduct,
            };
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

li.product {
      background-color: $items-bg-color;
      cursor: pointer;
      @extend .shape;
      position: relative;

      .delete {
            position: absolute;
            top: -0.5em;
            right: -0.4em;
            background-color: $red;
            @extend .shape;
            padding: 0.3em;
      }

      &:hover {
            box-shadow: 0px 20px 30px rgba(black, 0.1),
                  0px 6px 10px rgba(black, 0.2);
      }

      .details {
            padding: 1.3em;
            font-weight: normal;

            .description {
                  margin: 1em 0 2em 0;
            }

            .title {
                  text-decoration: none;
                  color: $text-color;
            }

            .price {
                  font-size: 1.3rem;
            }
      }

      .image {
            img {
                  width: 100%;
            }
      }
}
</style>
