<script setup lang="ts"></script>

<template>
    <button
        :class="[
            'font-medium text-white rounded bg-primary p-2 cursor-pointer',
            'hover:bg-hover-primary focus:bg-hover-primary transition outline-none'
        ]"
    >
        <slot />
    </button>
</template>
