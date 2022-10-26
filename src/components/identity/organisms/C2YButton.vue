<script setup>
const props = defineProps({
  label: String,
  type: {
    type: String,
    default: "standard",
  },
  size: String,
  round: Boolean,
  rounded: Boolean,
  square: Boolean,
  outline: Boolean,
  flat: Boolean,
  unelevated: Boolean,
  expand: Boolean,
  disabled: Boolean,
  color: String,
});
</script>

<template>
  <q-btn
    :class="`btn__${props.type}`"
    :color="props.color"
    :disable="props.disabled"
    :flat="props.flat"
    :label="props.label"
    :outline="props.outline"
    :round="props.round"
    :rounded="props.rounded"
    :size="props.size"
    :square="props.square"
    :unelevated="props.unelevated"
  />
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/theme.scss";

.btn {
  &__standard {
    background: $colorStandard;
  }
  &__primary {
    background: $colorPrimary;
  }
  &__secundary {
    background: $colorSecundary;
  }
  &__info {
    background: $colorInfo;
  }
  &__success {
    background: $colorSuccess;
  }
  &__warning {
    background: $colorWarning;
  }
  &__danger {
    background: $colorDanger;
  }
}
</style>
