<route lang="yaml">
path: /
meta:
  layout: Default
  title: "Home"
</route>

<template>
  {{ getTitle.title }}
</template>

<script setup>
const getTitle = useDemo();
</script>

<style lang="scss"></style>
