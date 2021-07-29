
import React, { useState } from 'react'
import {Button} from 'antd'


const Counter = () => {
    const [Count, setCount] = useState<number>(0)
    return (
        <div>
            <label>Count: {Count}</label>
            <Button onClick={() => setCount(Count + 1)}>+</Button>
            <Button onClick={() => setCount(Count -1 )}>-</Button>
        </div>
    )
}

export default Counter