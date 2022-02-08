<template>
      <form action="" @submit.prevent="onSubmit">
            <div class="form-area" :class="{ invalid: validity.title.invalid }">
                  <label for="title"
                        >Наименование товара <span class="important"> </span
                  ></label>
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
                  <label for="link"
                        >Ссылка на изображение товара
                        <span class="important"></span>
                  </label>
                  <input
                        type="text"
                        placeholder="Введите ссылку"
                        id="link"
                        v-model="productDetails.link"
                  />
                  <small class="error">{{ validity.link.err }}</small>
            </div>

            <div class="form-area" :class="{ invalid: validity.price.invalid }">
                  <label for="price"
                        >Цена товара <span class="important"></span>
                  </label>
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
      background-color: $items-bg-color;
      padding: 2em;
      @extend .shape;

      .form-area {
            margin-bottom: 2em;

            ::placeholder {
                  font-weight: normal;
                  font-size: 0.9rem;
            }

            label {
                  @include flex($justify: flex-start, $align: flex-start);

                  .important {
                        margin-left: 0.2em;
                        padding: 3px;
                        border-radius: 50%;
                        background-color: $red;
                  }

                  max-width: fit-content;
            }

            textarea {
                  resize: none;
            }

            input,
            textarea {
                  margin-top: 0.3em;
                  display: block;
                  width: 100%;
                  border: 1px solid rgba($bg-color, 0.5);
                  padding: 0.7em;
                  border-radius: $border-radius;
                  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

                  &:focus {
                        border: 1px solid rgba(black, 0.3);
                  }
            }

            small.error {
                  color: $red;
                  font-size: 0.7rem;
            }

            .addProductBtn {
                  border-radius: 10px;
                  background-color: $green;
                  cursor: pointer;

                  &.disabled {
                        background-color: #eee;
                        cursor: auto;
                  }
            }
      }
}

@media screen and (max-width: $screen-small) {
      form {
            margin-bottom: 1em;
      }
}
</style>
