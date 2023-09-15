import PropTypes from 'prop-types';

const Course = ({course,handleAddCourseName}) => {
    const {course_img,course_name,details,price,credit} = course;
    return (
        <div className='w-[312px] h-[402px] p-4 bg-white rounded-xl'>
            <img src={course_img} alt="" />
            <h1 className='font-semibold text-lg mt-4'>{course_name}</h1>
            <p className='text-sm text-[#1c1b1b99] mt-1 mb-4'>{details}</p>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none">
                        <path d="M12 1V23" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 className='text-[#1c1b1b99] font-medium'>Price : {price}</h2>
                </div>
                <div className='flex gap-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <h2 className='text-[#1c1b1b99] font-medium'>Credit : {credit}hr</h2>
                </div>
            </div>
            <button onClick={() => handleAddCourseName(course)} className='bg-[#2F80ED] mt-6 py-2 text-white rounded-lg w-[280px]'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddCourseName: PropTypes.func
};

export default Course;