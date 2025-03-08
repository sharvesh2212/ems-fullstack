import { useState } from 'react'
import './App.css'
import EmployeeListComponents from './components/EmployeeListComponents'
import Header from './components/Header'
import { Footer } from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Addemployee } from './components/Addemployee'
function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
         <Route path="/" element={<EmployeeListComponents/>}></Route> 
         <Route path="/Employees" element={<EmployeeListComponents/>}></Route>
         <Route path="/Addemployee" element={<Addemployee/>}></Route>
         <Route path="/editemployee/:id" element={<Addemployee/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
