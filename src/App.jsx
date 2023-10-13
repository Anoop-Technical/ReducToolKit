import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice'

function App() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <div className=' flex space-x-3 justify-center items-center h-screen'>
                <div className="">

                    {/* Read  */}
                    <p className=' text-6xl font-bold text-center mb-5'>{count}</p>

                    {/* Increment Button  */}
                    <button
                        className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={()=>dispatch(increment())}
                    >
                        Increment
                    </button>

                    {/* Decrement Button  */}
                    <button
                        className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={()=>dispatch(decrement())}
                    >
                        Decrement
                    </button>

                    {/* Increment By User */}
                    <button
                        className=' ml-20 bg-orange-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={()=>dispatch(incrementByAmount(5))}
                    >
                        Inc. By User
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
