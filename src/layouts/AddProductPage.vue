<template>
      <header>
            <slot name="header"></slot>
      </header>

      <div id="body">
            <div id="addProductForm">
                  <slot name="addProductForm"></slot>
            </div>

            <div id="productsListing">
                  <slot name="productsListing"></slot>
            </div>
      </div>
</template>

<script>
export default {
      name: "AddProductPage",
};
</script>

<style lang="scss">
#body {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
}
</style>
