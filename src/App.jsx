import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  const [addCourseName, setAddCourseName] =useState([]);

  const handleAddCourseName = (course) =>{
    const newAddCourseName = [...addCourseName,course];
    setAddCourseName(newAddCourseName);
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>
        <Courses handleAddCourseName={handleAddCourseName}></Courses>
        <Cart addCourseName={addCourseName}></Cart>
      </div>
      
    </>
  )
}

export default App
