import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './index.css'
import Home from './pages/Home'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
