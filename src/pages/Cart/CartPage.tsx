import { Grid, Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

type Props = {
    removeProductFromCart:(id:number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({removeProductFromCart, changeProductQuantity }: Props) => {

  const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to='/checkout'>Proceed to checkout</Link>
        </div>
    )
}

export default CartPage
