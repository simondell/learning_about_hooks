import React, {
  useState
} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Counter: {count} clicks.
      <br/>
      <button
        onClick={() => { setCount(count + 1) }}
      >
        Click me!
      </button>
    </div>
  )
}

export default App
