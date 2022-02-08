<template>
      <form action="" @submit.prevent="onSubmit">
            <div class="form-area" :class="{ invalid: !form.title.valide }">
                  <label for="title"
                        >Наименование товара <span class="important"> </span
                  ></label>
                  <input
                        type="text"
                        placeholder="Введите наименование товара"
                        id="title"
                        v-model="form.title.value"
                        @input="form.title.validate"
                  />
                  <small class="error">{{ form.title.err }}</small>
            </div>

            <div
                  class="form-area"
                  :class="{ invalid: !form.description.valide }"
            >
                  <label for="description">Описание товара</label>
                  <textarea
                        rows="7"
                        placeholder="Введите описание товара"
                        id="description"
                        v-model="form.description.value"
                        @input="form.description.validate"
                  ></textarea>
                  <small class="error">{{ form.description.err }}</small>
            </div>

            <div class="form-area" :class="{ invalid: !form.link.valide }">
                  <label for="link"
                        >Ссылка на изображение товара
                        <span class="important"></span>
                  </label>
                  <input
                        type="text"
                        placeholder="Введите ссылку"
                        id="link"
                        v-model="form.link.value"
                        @input="form.link.validate"
                  />
                  <small class="error">{{ form.link.err }}</small>
            </div>

            <div class="form-area" :class="{ invalid: !form.price.valide }">
                  <label for="price"
                        >Цена товара <span class="important"></span>
                  </label>
                  <input
                        type="number"
                        placeholder="Введите цену"
                        id="price"
                        v-model="form.price.value"
                        @input="form.price.validate"
                  />
                  <small class="error">{{ form.price.err }}</small>
            </div>

            <div class="form-area">
                  <input
                        @click="$event.target.blur()"
                        ref="submitButton"
                        type="submit"
                        value="Добавить товар"
                        class="addProductBtn"
                        :class="{ disabled: !formIsValid }"
                  />
            </div>
      </form>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";

import { urlRegex, validLengh, debounce } from "../helpers";

export default {
      name: "AddProductForm",

      setup() {
            const store = useStore();

            let submitButton = ref(null);

            let form = ref({
                  title: {
                        value: null,
                        valide: false,
                        err: null,
                        validate: function () {
                              this.valide =
                                    this.value && validLengh(this.value);
                              this.err = this.valide
                                    ? null
                                    : "неверный заголовок";
                        },
                  },
                  description: {
                        value: null,
                        valide: false,
                        err: null,
                        validate: function () {
                              this.valide =
                                    this.value && validLengh(this.value);
                              this.err = this.valide
                                    ? null
                                    : "неверное описание";
                        },
                  },
                  price: {
                        value: null,
                        valide: false,
                        err: null,
                        validate: function () {
                              this.valide =
                                    typeof this.value == "number" &&
                                    this.value > 0;
                              this.err = this.valide
                                    ? null
                                    : "недействительная цена";
                        },
                  },
                  link: {
                        value: null,
                        valide: false,
                        err: null,
                        validate: function () {
                              this.valide =
                                    this.value &&
                                    validLengh(this.value) &&
                                    this.value.match(urlRegex);
                              this.err = this.valide
                                    ? null
                                    : "неправильная ссылка";
                        },
                  },
            });

            let product = computed(() => {
                  return {
                        title: form.value.title.value,
                        description: form.value.description.value,
                        price: form.value.price.value,
                        link: form.value.link.value,
                  };
            });

            let formIsValid = computed(() => {
                  return (
                        form.value.title.valide &&
                        form.value.description.valide &&
                        form.value.price.valide &&
                        form.value.link.valide
                  );
            });

            let resetFields = () => {
                  for (let key of Object.keys(form.value)) {
                        form.value[key].value = null;
                        form.value[key].valide = false;
                  }
            };

            let addProduct = () => store.dispatch("addProduct");

            let onSubmit = () => {
                  // submitButton.value.blur();

                  if (!formIsValid) return;

                  // @ts-ignore
                  addProduct(product);
                  resetFields();
            };

            return {
                  addProduct,
                  onSubmit,
                  form,
                  formIsValid,
                  submitButton,
            };
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
                  color: transparent;
                  font-size: 0.7rem;
            }

            &.invalid {
                  small.error {
                        color: $red;
                  }
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
