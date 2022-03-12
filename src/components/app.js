import { useState, lazy, Suspense } from 'react'
import React from 'react'
import Trend from './axios.js'

import Search from './search.js'
//import Lazy from './lazy.js'
import spinner from './image/Spin-1s-200px.gif'
const Question = lazy(() => import('./question.js'))

const App = () => {

    const [tag, setTag] = useState(['javascript'])
    const [searchTag, setsearchTag] = useState([]);
    const [update, setUpdate] = useState('');
    return (


        <div className='app'>

            <div className='navbar'>
                <Search search={setsearchTag} Searching={setTag} setUpdate={setUpdate} />
                <Trend select={setTag} searchTag={searchTag} update={update} />

            </div>

            <Suspense fallback={<Spinner />}>
                <Question select={tag} searchTag={searchTag} />
            </Suspense>


        </div>

    )
}


const Spinner = () => (<label for="check">
    <div class="check-icon"></div>
</label>
)




export default App