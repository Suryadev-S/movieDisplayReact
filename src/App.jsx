import { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Grid from './pages/Grid'
import Info from './pages/Info'
import Book from './pages/Book'

function App() {
  useEffect(()=>{
    const name = localStorage.getItem("name");
    if(!name){
      localStorage.setItem("name","Suryadev")
    }
  },[])
  return (
    <>
      <Routes>
        <Route path='/' element={<Grid />} />
        <Route path='/info' element={<Info />} />
        <Route path='/book' element={<Book />} />
      </Routes>
    </>
  )
}

export default App
