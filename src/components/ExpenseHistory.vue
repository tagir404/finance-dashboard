<script setup lang="ts">
import type { ExpenseHistoryItem } from '@/types/types'
import { formatAmount, formatDate } from '@/utils/functions'
import { reactive, ref, useTemplateRef } from 'vue'
// import LabelText from './LabelText.vue'
import SectionTitle from './ui/SectionTitle.vue'
import IconPlus from './icons/IconPlus.vue'
import ModalBackdrop from './ModalBackdrop.vue'
import TextField from './ui/TextField.vue'
import BaseButton from './ui/BaseButton.vue'

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

const newExpense: Omit<ExpenseHistoryItem, 'created_at'> = reactive({
    name: '',
    type: '',
    amount: 0
})

const addExpense = () =>
    expenseHistoryItems.value.unshift({ ...newExpense, created_at: new Date() })

const dialogBlock = useTemplateRef('dialogRef')
const openModal = () => {
    dialogBlock.value?.open()
}
</script>

<template>
    <div class="p-5 border border-gray-200 rounded-3xl shadow-md">
        <div class="flex justify-between mb-4">
            <SectionTitle>История расходов</SectionTitle>
            <button
                @click="openModal"
                class="rounded cursor-pointer w-10 h-10 bg-transparent text-primary hover:text-hover-primary transition outline-none"
            >
                <IconPlus />
            </button>
        </div>
        <table class="w-full">
            <thead class="text-xl">
                <tr>
                    <th class="font-normal p-2.5 text-left">Название</th>
                    <!-- <th class="font-normal p-2.5 text-center">Тип</th> -->
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
                    <!-- <td class="p-2.5 border-b border-gray-100 text-center">
                        <LabelText
                            :text="item.type"
                            color="bg-amber-500"
                        />
                    </td> -->
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
    <Teleport to="#app">
        <ModalBackdrop ref="dialogRef">
            <div
                class="w-[500px] max-w-11/12 bg-white rounded-3xl p-10 flex flex-col gap-4"
            >
                <TextField
                    v-model="newExpense.name"
                    type="text"
                    label="Название"
                    placeholder="Хлеб"
                />
                <TextField
                    v-model="newExpense.amount"
                    type="number"
                    label="Сумма"
                    placeholder="1000 ₽"
                />
                <BaseButton @click="addExpense">Добавить</BaseButton>
            </div>
        </ModalBackdrop>
    </Teleport>
</template>

<style scoped></style>
