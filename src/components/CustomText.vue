<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: "CustomText",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    size: {
      type: String,
      default: "normal", //normal:14px,small:12px,xsmall:11px,xxs:10px
      validator: function(value) {
        return ["normal", "small", "xsmall", "xxsmall"].indexOf(value) == !-1;
      }
    }
  }
};
</script>

<style scoped>
.normal {
}
.small {
  font-size: 12px;
}
.xsmall {
  font-size: 11px;
}
.xxsmall {
  font-size: 10px;
}
</style>