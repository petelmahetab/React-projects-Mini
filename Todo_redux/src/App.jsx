import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './index.css';
import { addReducer } from './slice/Slice'

function App() {
  const [input, setInput] = useState(''); // State for input

  const state = useSelector((state) => state.todo.arr)
  const dispatch = useDispatch();
  function handleClick() {

    const obj = {
      title: input,
      id: Date.now()
    }

    dispatch(addReducer(obj))
    setInput('')
  }
  console.log(state);

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center space-y-4">
      {/* Input Field */}
      <input
        value={input}
        placeholder="Enter text"
        onChange={(e) => setInput(e.target.value)} // Update input state
        className="p-3 text-black rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button */}
      <button
        onClick={handleClick}
        className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        TODO's
      </button>

      {/* Display Todos */}
      <div className="text-white mt-4 w-full  space-y-3">
        {/* Display todos or any content here */}

        {state && state.length > 0 ? (
          state.map((item, idx) => (
            <div key={idx} className='flex justify-center gap-10'>

              <h5 className='text-center py-2'>{item.title}</h5>
              <button className="bg-red-500 text-black rounded-full px-3 py-1 w-[100px] h-[50px] hover:bg-red-600 transition duration-200">Delete</button>
            </div>
          ))

        )
          : (
            <div className='text-center text-white'>No Todo's there</div>
          )}

      </div>

    </div>

  );
}

export default App;
