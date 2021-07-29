import React, { useState } from 'react'
import {Button} from 'antd'
import Counter from './Counter';

const ItemList = React.lazy(() => import("App2/ItemList"));

const App = () => {
    return (
        <div>
             <React.Suspense fallback="Dis Guy ...">
                <ItemList />
            </React.Suspense>
            <hr />
            <br />
            <br />
            <Counter/>
        </div>
    )
}

export default App