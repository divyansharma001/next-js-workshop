import { useEffect, useState } from 'react'
import Usercard from './components/Usercard'

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
      <Usercard/>
     
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
