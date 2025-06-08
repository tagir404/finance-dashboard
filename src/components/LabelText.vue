<script setup lang="ts">
const props = defineProps<{
    text: string
    color: string
}>()
</script>

<template>
    <p
        class="rounded text-white text-center px-2"
        :class="color"
    >
        {{ props.text }}
    </p>
</template>
