import { useState } from 'react'
import api from './services/api'

const App = () => {
  const [user, setUser] = useState([])

  const fetchData = () => {
    api
      .get()
      .then((response) => {
        setUser(response.data.results[0])
      })
      .catch((error) => {
        console.log('ERROR' + error)
      })
    console.log(user)
  }
  return (
    <>
      <button onClick={fetchData}>click</button>
    </>
  )
}

export default App
