<script setup lang="ts">
import type { ExpenseHistoryItem } from '@/types/types'
import { formatAmount, formatDate } from '@/utils/functions'
import { ref } from 'vue'

const expenseHistoryItems = ref<ExpenseHistoryItem[]>([
    {
        name: 'Тест',
        type: 'Тест',
        created_at: new Date(),
        amount: 2000000
    }
])
</script>

<template>
    <div class="p-5 border border-gray-200 rounded-xl">
        <h2 class="text-4xl mb-4">История расходов</h2>
        <table>
            <thead>
                <tr>
                    <th class="font-normal p-2.5">Название</th>
                    <th class="font-normal p-2.5">Тип</th>
                    <th class="font-normal p-2.5">Дата</th>
                    <th class="font-normal p-2.5">Сумма</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in expenseHistoryItems"
                    :key="item.created_at.toString()"
                >
                    <td class="p-2.5 border-b border-gray-100">
                        {{ item.name }}
                    </td>
                    <td class="p-2.5 border-b border-gray-100">
                        {{ item.type }}
                    </td>
                    <td class="p-2.5 border-b border-gray-100">
                        {{ formatDate(item.created_at) }}
                    </td>
                    <td class="p-2.5 border-b border-gray-100 text-right">
                        {{ formatAmount(item.amount) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
