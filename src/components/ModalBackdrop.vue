<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

const onKeydown = (e: KeyboardEvent) =>
    e.key === 'Escape' ? dialogElement.value?.close() : false
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

const dialogElement = useTemplateRef('dialogRef')
const open = () => dialogElement.value?.showModal()

defineExpose({
    open
})
</script>

<template>
    <dialog
        ref="dialogRef"
        class="w-screen h-screen fixed top-0 left-0 bg-transparent backdrop:bg-[rgba(0,0,0,0.2)]"
    >
        <div class="flex items-center justify-center w-full h-full">
            <slot />
        </div>
    </dialog>
</template>
