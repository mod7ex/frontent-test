<template>
      <div id="header">
            <h1>Добавление товара</h1>

            <div id="head-filter">
                  <button
                        @blur="showFIlter = false"
                        @click="showFIlter = !showFIlter"
                  >
                        <span>По умолчанию</span>
                        <span>&#8964;</span>
                  </button>

                  <transition name="fade">
                        <ul class="options" v-if="showFIlter">
                              <li @click="orderByMinPrice">min price</li>
                              <li @click="orderByMaxPrice">max price</li>
                              <li @click="orderByName">name</li>
                        </ul>
                  </transition>
            </div>
      </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
      name: "Header",

      methods: {
            ...mapActions({
                  orderByMinPrice: "orderByMinPrice",
                  orderByMaxPrice: "orderByMaxPrice",
                  orderByName: "orderByName",
            }),
      },

      data: () => {
            return {
                  showFIlter: false,
            };
      },
};
</script>

<style lang="scss">
#header {
      @include flex();
      margin-bottom: $base-margin * 2;
      padding: $base-padding $base-padding * 2;

      #head-filter {
            position: relative;
            li,
            button {
                  cursor: pointer;
                  color: $black-gray;
                  padding: $base-padding;
                  background-color: white;
                  width: 140px;
                  text-align: center;
                  font-weight: bolder;
                  @include theme-shape();
            }

            button {
                  margin-bottom: 3px;
                  padding: $base-padding * 1.3;
                  @include flex();
            }
            .options {
                  z-index: 10;
                  position: absolute;
                  li {
                        border-bottom: 1px solid $black-gray;
                        &:hover {
                              background-color: $white;
                        }
                  }
            }
      }
}

.fade-enter-active,
.fade-leave-active {
      transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
      opacity: 0;
}
</style>
