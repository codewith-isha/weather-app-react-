import React from 'react'
import Weather from './components/Weather/Weather'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='app'>
      <Weather/>
    
      <Toaster position="top-center" reverseOrder={false} />
      </div>
  )
}

export default App