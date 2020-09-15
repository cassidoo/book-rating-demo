import React from 'react'
import ReactDOM from 'react-dom'
import { HarperDBProvider } from 'use-harperdb'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HarperDBProvider
      url="https://book-demo-cassidoo.harperdbcloud.com"
      user="cassidy"
      password="demodemo"
    >
      <App />
    </HarperDBProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
