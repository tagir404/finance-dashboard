<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue'

const model = defineModel()

const props = defineProps<{
    type: InputTypeHTMLAttribute
    label: string
    placeholder: string
}>()
</script>

<template>
    <label>
        <p class="mb-1">{{ props.label }}</p>
        <input
            v-model="model"
            :type="props.type"
            :placeholder="props.placeholder"
            class="border border-gray-200 focus:border-gray-500 outline-none transition p-2 rounded w-full"
        />
    </label>
</template>
