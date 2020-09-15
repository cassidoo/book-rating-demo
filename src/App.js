import React from 'react'
import './App.css'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="App">
      <h1>My Ratings</h1>
      <div className="reviews">
        <Reviews />
      </div>
    </div>
  )
}

export default App
