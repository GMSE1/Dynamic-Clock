import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
   const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="clock-container">
      <p className="clock">{format(time, 'HH:mm:ss')}</p>
    </div>
  )
}

export default App