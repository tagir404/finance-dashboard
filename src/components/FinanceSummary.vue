<script setup lang="ts">
import { formatAmount } from '@/utils/functions'
import SectionTitle from './ui/SectionTitle.vue'

const props = defineProps<{
    title: string
    total: number
}>()
</script>

<template>
    <div class="p-5 border border-gray-200 rounded-3xl shadow-md">
        <SectionTitle class="mb-4">{{ props.title }}</SectionTitle>
        <p class="text-2xl">{{ formatAmount(props.total) }}</p>
    </div>
</template>
