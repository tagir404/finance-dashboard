<script setup lang="ts">
import ExpenseHistory from '@/components/ExpenseHistory.vue'
import FinanceSummary from '@/components/FinanceSummary.vue'
import GoalList from '@/components/GoalList.vue'
</script>

<template>
    <main class="p-10">
        <div class="grid grid-cols-2 gap-8">
            <FinanceSummary
                title="Текущий расход"
                :total="25000"
                class="flex-1"
            />
            <FinanceSummary
                title="Месячный лимит"
                :total="50000"
                class="flex-1"
            />
            <ExpenseHistory />
            <GoalList />
        </div>
    </main>
</template>
