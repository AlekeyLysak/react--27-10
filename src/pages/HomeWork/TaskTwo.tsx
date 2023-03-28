import { Grid, Typography } from '@mui/material'
import Currency from './Currency'
import HomeProductListItem from './HomeProductListItem'
import './TaskTwo.scss'
import HomeTotal from './HomeTotal'
import productsHomeArray from 'redux/productsHomeArray'

type Props = {
    totalAdd: (price: number) => any
    total: number
    exchangeRate: number
    currencyType: string
    onChangeCurrencyToUAH: () => void
    onChangeCurrencyToUSD: () => void
    onChangeCurrencyToEUR: () => void
}

const TaskTwo = ({
    totalAdd,
    total,
    exchangeRate,
    currencyType,
    onChangeCurrencyToUAH,
    onChangeCurrencyToUSD,
    onChangeCurrencyToEUR,
}: Props) => {
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
                Our shop page
            </Typography>
            <div className="center">
                <Currency
                    onChangeCurrencyToUAH={onChangeCurrencyToUAH}
                    onChangeCurrencyToUSD={onChangeCurrencyToUSD}
                    onChangeCurrencyToEUR={onChangeCurrencyToEUR}
                />
            </div>

            <Grid container spacing={3}>
                {productsHomeArray.map(({ title, description, price, id }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        {' '}
                        <HomeProductListItem
                            totalAdd={totalAdd}
                            exchangeRate={exchangeRate}
                            currencyType={currencyType}
                            id={id}
                            description={description}
                            title={title}
                            price={price}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className="center">
                <HomeTotal
                    exchangeRate={exchangeRate}
                    total={total}
                    currencyType={currencyType}
                />
            </div>
        </>
    )
}


export default TaskTwo