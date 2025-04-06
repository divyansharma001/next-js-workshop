import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [age, setAge] = useState(0)

  // useEffect(() => {
  //   console.log('Component mounted')
  // }, [])

  useEffect(()=>{
    console.log("Component mounted")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setAge((age) => age + 1)}>
          age is {age}
        </button>
        </div>
     
    </>
  )
}

export default App

// export default function App(props) {
//   return(
//     <>
//     <div>hello</div>
//    <div>{props.age}</div>
//    </>
//   )
// }
