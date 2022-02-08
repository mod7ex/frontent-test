<template>
      <div id="header">
            <h1>Добавление товара</h1>

            <div id="head-filter">
                  <button
                        @blur="showFilter = false"
                        @click="showFilter = !showFilter"
                  >
                        <span>По умолчанию</span
                        ><span class="down-arrow">&#8964;</span>
                  </button>

                  <transition name="fade">
                        <ul class="options" v-if="showFilter">
                              <li
                                    :class="{ checkedFilter: filter == 0 }"
                                    @click="reOrder(0)"
                              >
                                    <span class="checked">&#10003;</span>
                                    min price
                              </li>
                              <li
                                    :class="{
                                          checkedFilter: filter == 1,
                                    }"
                                    @click="reOrder(1)"
                              >
                                    <span class="checked">&#10003;</span>
                                    max price
                              </li>
                              <li
                                    :class="{
                                          checkedFilter: filter == 2,
                                    }"
                                    @click="reOrder(2)"
                              >
                                    <span class="checked">&#10003;</span>
                                    name
                              </li>
                        </ul>
                  </transition>
            </div>
      </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
      name: "Header",

      setup() {
            let store = useStore();

            let showFilter = ref(false);
            let filter = ref(null);

            let orderByMinPrice = () => store.dispatch("orderByMinPrice");
            let orderByMaxPrice = () => store.dispatch("orderByMaxPrice");
            let orderByName = () => store.dispatch("orderByName");

            let reOrder = (num) => {
                  filter.value = num;

                  switch (num) {
                        case 0:
                              orderByMinPrice();
                              break;

                        case 1:
                              orderByMaxPrice();
                              break;

                        case 2:
                              orderByName();
                              break;

                        default:
                              break;
                  }
            };

            return {
                  showFilter,
                  filter,
                  reOrder,
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

#header {
      @include flex($wrap: wrap);
      padding: 2.5em 0 1em 0;

      #head-filter {
            position: relative;
            button {
                  cursor: pointer;
                  padding: 0.7em 1em;
                  background-color: $items-bg-color;
                  color: #c8c8c8;
                  font-weight: 0.9rem;

                  @extend .shape;

                  @include flex($justify: center);

                  .down-arrow {
                        font-weight: 900;
                        font-size: medium;
                        margin-top: -0.3em;
                  }
            }

            ul.options {
                  z-index: 10;
                  @extend .shape;
                  position: absolute;
                  background-color: $items-bg-color;
                  right: 0;
                  left: 0;
                  li {
                        padding: 0.7em 1em;
                        cursor: pointer;
                        &:hover {
                              background-color: $bg-color;
                        }

                        .checked {
                              display: none;
                        }

                        &.checkedFilter {
                              .checked {
                                    display: inline;
                              }
                        }
                  }
            }
      }
}

@media screen and (max-width: $screen-small) {
      #header {
            @include flex($direction: column, $justify: center);
            #head-filter {
                  margin-top: 0.4em;
            }
      }
}
</style>
