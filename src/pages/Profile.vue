<route lang="yaml">
    path: /profile
    meta:
        layout: Default
</route>

<template>
    {{ getTitle.title }}2
</template>

<script setup>
    const getTitle = useDemo()
</script>

<style lang="sass"></style>