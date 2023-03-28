import { Button } from '@mui/material'
import { useState } from 'react'

type Props = {}
const ChangeCount = (props: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    return (
        <Button onClick={onIncrement} variant="outlined">
            change count ({count})
        </Button>
    )
}
export default ChangeCount
