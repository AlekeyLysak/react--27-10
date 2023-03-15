import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'redux/hooks'

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
