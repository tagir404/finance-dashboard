<script setup lang="ts">
const props = defineProps<{
    title: string
    total: number
}>()
</script>

<template>
    <div class="p-5 border border-gray-200 rounded-xl flex flex-col gap-2">
        <h2>{{ props.title }}</h2>
        <p>{{ props.total }}</p>
    </div>
</template>
