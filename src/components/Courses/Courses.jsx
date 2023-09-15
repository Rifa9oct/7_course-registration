import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddCourseName,ToastContainer}) => {
    const [courses, setCourses] =useState([]);
    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 mb-20">
                {
                    courses.map(course => <Course 
                        key={course.id} 
                        course={course}
                        handleAddCourseName={handleAddCourseName}
                        ToastContainer={ToastContainer}
                        ></Course>)
                } 
            </div>
        </div>
    );
};
Courses.propTypes = {
    handleAddCourseName: PropTypes.func,
    ToastContainer: PropTypes.elementType
};

export default Courses;