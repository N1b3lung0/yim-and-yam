<template>
  <v-btn
    :class="options.class && options.class"
    :color="options.color && options.color"
    :dark="options.dark && options.dark"
    :depressed="options.depressed && options.depressed"
    :disabled="options.disabled && options.disabled"
    :elevation="options.elevation && options.elevation"
    :fab="options.fab && options.fab"
    :icon="options.icon && options.icon"
    :large="options.large && options.large"
    :outlined="options.outlined && options.outlined"
    :plain="options.plain && options.plain"
    :raised="options.raised && options.raised"
    :rounded="options.rounded && options.rounded"
    :small="options.small && options.small"
    :text="options.text && options.text"
    :tile="options.tile && options.tile"
    :x-large="options.xlarge && options.xlarge"
    :x-small="options.xsmall && options.xsmall"
    @click="options.click && options.click"
  >
    <v-icon dark>
      {{ options.iconContent }}
    </v-icon>
    {{ options.textContent }}
  </v-btn>
</template>

<script>
export default {
  props: {
    options: Object,
  },
};
</script>
