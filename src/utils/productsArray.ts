type ProductProps = {
  title: string
  description: string
  type: string
  capacity: string
  price: number
}

const productsArray: ProductProps [] = [
  {
      title: 'iPhone 14 Pro',
      description:'This is iPhone 14 Pro',
      type:'phone',
      capacity:"256",
      price: 2000
  },
  {
    title: 'iPhone 13 Pro',
    description:'This is iPhone 13 Pro',
    type:'phone',
    capacity:"512",
    price: 1500
},
{
  title: 'iPhone 12 Pro',
  description:'This is iPhone 12 Pro',
  type:'phone',
  capacity:"128",
  price: 1200
},
{
  title: 'iPhone 11 Pro',
  description:'This is iPhone 11 Pro',
  type:'phone',
  capacity:"256",
  price: 1000
},
{
  title: 'iPhone X',
  description:'This is iPhone X',
  type:'phone',
  capacity:"128",
  price: 800
},
{
  title: 'iPhone 8 Plus',
  description:'This is iPhone 8 Plus',
  type:'phone',
  capacity:"64",
  price: 500
},
]

export default productsArray