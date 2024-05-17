import React, { useContext } from 'react';
import Student from './Student';
import { AppContext } from '../context/AppContext';

const StudentList = () => {
    const { students } = useContext(AppContext);

    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
            <tbody>
            {students.map((student) => (
                <Student id={student.id} key={student.id} name={student.name} />
            ))}
            </tbody>
        </table>
    );
};

export default StudentList;