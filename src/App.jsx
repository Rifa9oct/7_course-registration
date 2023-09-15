import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  const [addCourseName, setAddCourseName] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [totalHour, setTotalHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddCourseName = (course) =>{
    const isExist = addCourseName.find(item => item.id === course.id);
    let totalAmount =course.price;
    let hour = course.credit;
    if(isExist){
      return alert('already exist');
    }
    else{
      addCourseName.forEach(item => {
        totalAmount +=item.price;
        hour += item.credit;
      });
      const totalRemaining = 20 - hour;
      const newAddCourseName = [...addCourseName,course];
      setAddCourseName(newAddCourseName);
      setRemainingHour(totalRemaining);
      setTotalHour(hour);
      setTotalPrice(totalAmount);
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className='flex justify-between'>
        <Courses handleAddCourseName={handleAddCourseName}></Courses>
        <Cart 
        addCourseName={addCourseName}
        remainingHour={remainingHour}
        totalHour={totalHour}
        totalPrice={totalPrice}
        ></Cart>
      </div>
      
    </>
  )
}

export default App
