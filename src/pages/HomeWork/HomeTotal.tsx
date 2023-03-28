type Props = {
  total: number
  currencyType: string
  exchangeRate: number
}
const HomeTotal = ({ exchangeRate, total, currencyType }: Props) => {
  return (
      <div>
          Total: {total * exchangeRate} {currencyType}
      </div>
  )
}
export default HomeTotal