<script setup lang="ts">
import type { ExpenseHistoryItem } from '@/types/types'
import { formatAmount, formatDate } from '@/utils/functions'
import { ref } from 'vue'
import LabelText from './LabelText.vue'
import SectionTitle from './SectionTitle.vue'

const expenseHistoryItems = ref<ExpenseHistoryItem[]>([
    {
        name: 'Тест',
        type: 'Тест',
        created_at: new Date(),
        amount: 2000000
    },
    {
        name: 'Еще одна покупка',
        type: 'Новый тип',
        created_at: new Date(),
        amount: 545
    }
])
</script>

<template>
    <div class="p-5 border border-gray-200 rounded-3xl shadow-md">
        <SectionTitle class="mb-4">История расходов</SectionTitle>
        <table class="w-full">
            <thead class="text-xl">
                <tr>
                    <th class="font-normal p-2.5 text-left">Название</th>
                    <th class="font-normal p-2.5 text-center">Тип</th>
                    <th class="font-normal p-2.5 text-center">Дата</th>
                    <th class="font-normal p-2.5 text-right">Сумма</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in expenseHistoryItems"
                    :key="item.created_at.toString()"
                >
                    <td class="p-2.5 border-b border-gray-100 text-left">
                        {{ item.name }}
                    </td>
                    <td class="p-2.5 border-b border-gray-100 text-center">
                        <LabelText
                            :text="item.type"
                            color="bg-amber-500"
                        />
                    </td>
                    <td class="p-2.5 border-b border-gray-100 text-center">
                        {{ formatDate(item.created_at) }}
                    </td>
                    <td
                        class="p-2.5 border-b border-gray-100 text-right font-medium"
                    >
                        {{ formatAmount(item.amount) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
