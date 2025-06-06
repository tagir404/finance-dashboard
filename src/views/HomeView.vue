<script setup lang="ts">
import ExpenseHistory from '@/components/ExpenseHistory.vue'
import FinanceSummary from '@/components/FinanceSummary.vue'
</script>

<template>
    <main class="p-10">
        <FinanceSummary
            title="Месячный лимит"
            :total="30000"
        />
        <ExpenseHistory />
    </main>
</template>
