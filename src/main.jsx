import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from "@emotion/react";
import { BrowserRouter } from "react-router-dom"

import App from './App'
import { global, reset } from './styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Global styles={reset} />
    <Global styles={global} />
    <App />
  </BrowserRouter>,
)
