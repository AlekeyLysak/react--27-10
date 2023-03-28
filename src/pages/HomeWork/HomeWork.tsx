import { Typography } from '@mui/material'
import { useState } from 'react'
import { HomeProduct } from 'redux/productsHomeArray'
import ChangeCount from './ChangeCount'
import TaskTwo from './TaskTwo'

type Props = {
    productsObject?: {
        [id: number]: HomeProduct
    }
}
const HomeWork = (props: Props) => {
    const [currencyType, setCurrencyType] = useState<string>('USD')

    const [exchangeRate, setExchangeRate] = useState<number>(1)

    const [total, setTotal] = useState<number>(0)

    const totalAdd = (price: number) => {
        setTotal(total + price)
    }

    const onChangeCurrencyToUSD = () => {
        setCurrencyType(() => 'USD')
        setExchangeRate(1)
    }
    const onChangeCurrencyToUAH = () => {
        setCurrencyType(() => 'UAH')
        setExchangeRate(40)
    }
    const onChangeCurrencyToEUR = () => {
        setCurrencyType(() => 'EUR')
        setExchangeRate(0.94)
    }

    return (
        <>
            <Typography
                component={'h1'}
                variant={'h4'}
                sx={{
                    margin: '40px 0 40px 0',
                    textAlign:'center',
                }}
            >
                Homework 1
            </Typography>

            <ChangeCount />
            <ChangeCount />
            <ChangeCount />

            <Typography
                component={'h1'}
                variant={'h4'}
                sx={{
                    margin: '40px 0 40px 0',
                    textAlign:'center',
                }}
            >
               Homework 2
            </Typography>
            <TaskTwo
                total={total}
                totalAdd={totalAdd}
                exchangeRate={exchangeRate}
                currencyType={currencyType}
                onChangeCurrencyToUSD={onChangeCurrencyToUSD}
                onChangeCurrencyToEUR={onChangeCurrencyToEUR}
                onChangeCurrencyToUAH={onChangeCurrencyToUAH}
            />
        </>
    )
}
export default HomeWork