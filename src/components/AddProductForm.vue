<template>
      <form action="" @submit.prevent="onSubmit">
            <div class="form-area" :class="{ invalid: validity.title.invalid }">
                  <label for="title">Наименование товара *</label>
                  <input
                        type="text"
                        placeholder="Введите наименование товара"
                        id="title"
                        v-model="productDetails.title"
                  />
                  <small class="error">{{ validity.title.err }}</small>
            </div>

            <div
                  class="form-area"
                  :class="{ invalid: validity.description.invalid }"
            >
                  <label for="description">Описание товара</label>
                  <textarea
                        rows="7"
                        placeholder="Введите описание товара"
                        id="description"
                        v-model="productDetails.description"
                  ></textarea>
                  <small class="error">{{ validity.description.err }}</small>
            </div>

            <div class="form-area" :class="{ invalid: validity.link.invalid }">
                  <label for="link">Ссылка на изображение товара *</label>
                  <input
                        type="text"
                        placeholder="Введите ссылку"
                        id="link"
                        v-model="productDetails.link"
                  />
                  <small class="error">{{ validity.link.err }}</small>
            </div>

            <div class="form-area" :class="{ invalid: validity.price.invalid }">
                  <label for="price">Цена товара *</label>
                  <input
                        type="number"
                        placeholder="Введите цену"
                        id="price"
                        v-model="productDetails.price"
                  />
                  <small class="error">{{ validity.price.err }}</small>
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

import { urlRegex, validLengh } from "../helpers";

export default {
      name: "AddProductForm",

      data: () => {
            return {
                  btnDisabled: true,

                  productDetails: {},

                  validity: {},
            };
      },

      methods: {
            ...mapActions({
                  addProduct: "addProduct",
            }),

            resetVlidity() {
                  this.validity = {
                        title: {},
                        description: {},
                        price: {},
                        link: {},
                  };
            },

            resetProductDetails() {
                  this.productDetails = {
                        title: null,
                        description: null,
                        price: null,
                        link: "",
                  };
            },

            validate() {
                  let title = this.productDetails.title,
                        description = this.productDetails.description,
                        price = this.productDetails.price,
                        link = this.productDetails.link,
                        bool = false;

                  if (!title || !validLengh(title)) {
                        this.validity.title.invalid = true;
                        this.validity.title.err = "неверный заголовок";
                        bool = true;
                  }

                  if (!description || !validLengh(description)) {
                        this.validity.description.invalid = true;
                        this.validity.description.err = "неверное описание";
                        bool = true;
                  }

                  if (!price) {
                        this.validity.price.invalid = true;
                        this.validity.price.err = "недействительная цена";
                        bool = true;
                  }

                  if (!link || !validLengh(link) || !link.match(urlRegex)) {
                        this.validity.link.invalid = true;
                        this.validity.link.err = "неправильная ссылка";
                        bool = true;
                  }

                  return bool;
            },

            onSubmit() {
                  this.resetVlidity();

                  let invalidForm = this.validate();
                  if (invalidForm) return;

                  this.addProduct(this.productDetails);
                  this.resetVlidity();
                  this.resetProductDetails();
            },
      },

      beforeMount() {
            this.resetVlidity();
            this.resetProductDetails();
      },

      watch: {
            productDetails: {
                  handler: function (obj) {
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
      width: $base-width;

      .form-area {
            margin-bottom: $base-margin * 2;

            .error {
                  font-size: 11px;
                  color: transparent;
            }

            &.invalid {
                  .error {
                        color: red;
                  }

                  input,
                  textarea {
                        border: 1px solid red;
                  }
            }

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
