import { useState } from 'react'
import { BTForm } from './BTForm/BTForm'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BTForm/>
   </div>
  )
}

export default App
