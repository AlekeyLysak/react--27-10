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

type ProductsInCart = {
  [id: number]: number
}

const App = (props: Props) => {
const [ProductsInCart, setProductsInCart] = useState<ProductsInCart>({
    1: 5,
    2: 5,
  })

  const addProductToCart = (count: number, price: number) => {}

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header ProductsInCart={ProductsInCart} />
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
