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

                  <transition name="slide-fade">
                        <ul class="options" v-if="showFIlter">
                              <li>filter 1</li>
                              <li>filter 2</li>
                              <li>filter 3</li>
                        </ul>
                  </transition>
            </div>
      </div>
</template>

<script>
export default {
      name: "Header",

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

.slide-fade-enter-active {
      transition: all 0.3s ease;
}
.slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-to,
.slide-fade-enter {
      transform: translateY(-100px);
      opacity: 0;
}
</style>
