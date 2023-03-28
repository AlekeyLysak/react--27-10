import ProductsList from 'components/ProductsList/ProductsList'
import Reviews from 'components/Reviews/Reviews'
import HomeWork from 'pages/HomeWork/HomeWork'

type Props = {
  addProductToCart: (count: number, price: number) => void
}


const Home = ({addProductToCart}: Props) => {
    return (
        <div>
            <ProductsList addProductToCart={addProductToCart}/>
            <Reviews/>
            <HomeWork/>
        </div>
    )
}

export default Home
