export const formatDate = (date: Date) => date.toLocaleString()
export const formatAmount = (amount: number) =>
    amount.toLocaleString('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    })
