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
@media screen and (min-width: $screen-small) {
      #body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1em;
            align-items: start;
      }
}

@media screen and (min-width: $screen-medium) {
      #body {
            grid-template-columns: 1fr 2fr;
      }
}

@media screen and (min-width: $screen-large) {
      #body {
            grid-template-columns: 1fr 3fr;
      }
}
</style>
