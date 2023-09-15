import PropTypes from 'prop-types';

const Cart = ({addCourseName,remainingHour,totalHour,totalPrice}) => {
    return (
        <div>
            <div className="w-[312px]  bg-white rounded-xl mt-8 p-6 mx-auto">
            <h1 className="text-[#2F80ED] text-lg font-bold border-b-2 pb-4">Credit Hour Remaining {remainingHour} hr</h1>
            <h1 className="mt-4 font-bold text-[20px]">Course Name</h1>
            <div className='my-5'>
                {
                    addCourseName.map((courseName, idx) => (
                        <li className='list-decimal text-[#1c1b1b99]' key={idx}>{courseName.course_name}</li>
                    ))
                }
            </div>
            <h3 className="font-medium py-4 border-y-2 mt-6 text-[#1c1b1bcc]">Total Credit Hour : {totalHour}</h3>
            <h2 className="font-semibold mt-4 text-[#1c1b1bcc]">Total Price : {totalPrice} USD</h2>
        </div>
        </div>
    );
};

Cart.propTypes = {
    addCourseName: PropTypes.array,
    remainingHour: PropTypes.number,
    totalPrice: PropTypes.number,
    totalHour: PropTypes.number
};

export default Cart;