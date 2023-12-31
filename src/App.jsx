import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.warn("Already Exist !", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark"
      });
    }
    else{
      addCourseName.forEach(item => {
        totalAmount +=item.price;
        hour += item.credit;
      });
      const totalRemaining = 20 - hour;
      if(hour > 20 ){
        toast.error("You can take up to 20 credit hour.", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark"
        });
      }

      else{
        const newAddCourseName = [...addCourseName,course];
        setAddCourseName(newAddCourseName);
        setRemainingHour(totalRemaining);
        setTotalHour(hour);
        setTotalPrice(totalAmount);
      }
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='flex flex-col md:flex-row justify-center lg:justify-between gap-6 mb-16 md:mb-0'>
          <Courses 
          handleAddCourseName={handleAddCourseName}
          ></Courses>
          <Cart 
          addCourseName={addCourseName}
          remainingHour={remainingHour}
          totalHour={totalHour}
          totalPrice={totalPrice}
          ></Cart>
          <ToastContainer/>
      </div>
    </div>
  )
}

export default App
