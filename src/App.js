import React, {useState, useEffect} from "react"
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  //states
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  //functions
  const removeTour = (id) => {
      setTours(tours.filter(tour => tour.id !== id))
  }

  //fetch data
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }    
  }
  useEffect(() =>{
    fetchTours()
  },[])

  //renders
  if(loading) {
    return (
      <main className="App">
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
    <main className="App">
      <h1>No Tours Available</h1>
      <button className="refresh" onClick={() => fetchTours()}>Refresh Tours</button>
    </main>
  )
  }

  return (
    <main className="App">
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
