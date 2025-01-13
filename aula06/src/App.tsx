import { useState } from 'react'
import Emoji from './pages/Emoji/Emoji'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Emoji />
    </>
  )
}

export default App
