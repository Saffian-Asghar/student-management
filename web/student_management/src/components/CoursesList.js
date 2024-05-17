import React, { useContext } from 'react';
import Course from './Course';
import { AppContext } from '../context/AppContext';

const CoursesList = () => {
    const { courses, studentID } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Course Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
            <tbody>
            {courses.map((course) => (
                <Course id={course.id} key={course.id} name={course.name} description={course.description} />
            ))}
            </tbody>
        </table>
    );
};

export default CoursesList;