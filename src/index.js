import React from 'react'
import ReactDOM from 'react-dom'
import { HarperDBProvider } from 'use-harperdb'
import './index.css'
import App from './App'

let url = process.env.REACT_APP_DB_URL
let user = process.env.REACT_APP_USER
let pw = process.env.REACT_APP_PASSWORD

ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider url={url} user={user} password={pw}>
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
