import React from 'react'
import Register from './Register'
import Login from './Login'
import VerifyEmail from './VerifyEmail'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/VerifyEmail' element={<VerifyEmail/>}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default App