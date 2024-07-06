import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import DeleteBook from '../pages/DeleteBook'
import Home from '../pages/Home';
import CreateBook from '../pages/CreateBook';
import EditBook from '../pages/EditBook';
import ShowBook from '../pages/ShowBook';
function App() {
  return (
    <div className="main">
  <h1>Welcome to My Bookstore</h1>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/books/create' element={<CreateBook />}/>
    <Route path='/books/details/:id' element={<ShowBook />}/>
    <Route path='/books/edit/:id' element={<EditBook />}/>
    <Route path='/books/delete/:id' element={<DeleteBook />}/>
  </Routes>  
  </div>
  )
}

export default App
