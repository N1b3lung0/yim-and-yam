<template>
  <div>
    <Button :options="options" />
    <Button :options="options2" />
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
  name: "Home",

  components: {
    Button,
  },
  data: () => ({
    options: {
      class: "ma-2",
      color: "red darken-3",
      dark: true,
      depressed: false,
      disabled: false,
      elevation: "2",
      fab: true,
      icon: true,
      iconContent: "mdi-minus",
      large: false,
      outlined: true,
      plain: false,
      raised: false,
      rounded: false,
      small: false,
      text: false,
      textContent: "",
      tile: false,
      xlarge: false,
      xsmall: false,
    },
    options2: {
      class: "ma-2",
      color: "indigo",
      elevation: "4",
      fab: true,
      icon: true,
      iconContent: "mdi-file-sign",
    },
  }),
};
</script>
