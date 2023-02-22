import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'
import { useState } from 'react'

type Props = {}

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif',
    },
})

type CartDataProps = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartDataProps>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header cartData={cartData} />
                <button onClick={() => addProductToCart(5, 500)}>
                    Add to cart (5 count, 500$ price)
                </button>
                <Main addProductToCart={addProductToCart} />
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
