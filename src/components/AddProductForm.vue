<template>
      <form action="" @submit.prevent="onSubmit">
            <div class="form-area">
                  <label for="title">Наименование товара *</label>
                  <input
                        type="text"
                        placeholder="Введите наименование товара"
                        id="title"
                        v-model="productDetails.title"
                  />
            </div>

            <div class="form-area">
                  <label for="description">Описание товара</label>
                  <textarea
                        rows="7"
                        placeholder="Введите описание товара"
                        id="description"
                        v-model="productDetails.description"
                  ></textarea>
            </div>

            <div class="form-area">
                  <label for="link">Ссылка на изображение товара *</label>
                  <input
                        type="text"
                        placeholder="Введите ссылку"
                        id="link"
                        v-model="productDetails.link"
                  />
            </div>

            <div class="form-area">
                  <label for="price">Цена товара *</label>
                  <input
                        type="text"
                        placeholder="Введите цену"
                        id="price"
                        v-model="productDetails.price"
                  />
            </div>

            <div class="form-area">
                  <input
                        type="submit"
                        value="Добавить товар"
                        class="addProductBtn"
                        :class="{ disabled: btnDisabled }"
                  />
            </div>
      </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
      name: "AddProductForm",

      data: () => {
            return {
                  btnDisabled: true,

                  productDetails: {
                        title: null,
                        description: null,
                        price: null,
                        link: null,
                  },
            };
      },

      methods: {
            ...mapActions({ addProduct: "addProduct" }),

            onSubmit() {
                  this.addProduct(this.productDetails);
                  this.productDetails = {};
            },
      },

      watch: {
            productDetails: {
                  handler: function (obj) {
                        console.log(obj);

                        for (let field of Object.keys(obj)) {
                              if (!obj[field]) {
                                    this.btnDisabled = true;
                                    return;
                              }
                        }
                        this.btnDisabled = false;
                        return;
                  },
                  deep: true,
            },
      },
};
</script>

<style lang="scss">
form {
      position: -webkit-sticky;
      position: sticky;
      top: 20px;
      @include theme-shape();
      background-color: white;
      margin: $base-margin * 0.5;
      padding: $base-padding * 3;

      .form-area {
            margin-bottom: $base-margin * 2;

            .addProductBtn {
                  cursor: pointer;
                  background-color: $green;
                  color: white;
                  font-weight: bolder;

                  &.disabled {
                        background-color: $grey;
                        color: $black-gray;
                        pointer-events: none;
                  }
            }
      }
}
</style>
