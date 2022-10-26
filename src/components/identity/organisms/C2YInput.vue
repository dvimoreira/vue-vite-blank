<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const input = ref("");
</script>

<template>
  <q-input
    v-if="props.type === 'text'"
    v-model="input"
    :label="props.label"
    outlined
    @update:model-value="emit('update:modelValue', input)"
  />

  <q-input
    v-if="props.type === 'password'"
    v-model="input"
    :label="props.label"
    outlined
    type="password"
    @update:model-value="emit('update:modelValue', input)"
  />
</template>

<style lang="scss" scoped>
@import "../../../assets/scss/theme.scss";
</style>
