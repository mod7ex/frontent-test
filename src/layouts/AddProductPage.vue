<template>
      <header>
            <slot name="header"></slot>
      </header>

      <div id="body">
            <slot name="addProductForm"></slot>

            <slot name="productsListing"></slot>
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
      grid-template-columns: $base-width auto;
      grid-column-gap: $base-margin;
      align-items: start;
}

@media only screen and (max-width: $screen-small * 1.3) {
      #body {
            grid-template-columns: $base-width;
            grid-row-gap: $base-margin;
            justify-content: center;
      }
}
</style>
