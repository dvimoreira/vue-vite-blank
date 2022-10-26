<route lang="yaml">
path: /login
meta:
  layout: Default
  title: "Login"
</route>

<template>
  <C2YInput v-model="email" label="E-mail" type="text" />
  <C2YInput v-model="password" label="E-mail" type="text" />
  <C2YButton label="Teste" />
  {{ email }}
  {{ password }}
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");
</script>

<style lang="sass"></style>
