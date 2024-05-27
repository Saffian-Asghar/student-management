import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Students</h2>
            <ul className="space-y-2">
                {students.map(student => (
                    <li
                        key={student.id}
                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded cursor-pointer"
                    >
                        <Link to={`/student/${student.id}/courses`}>{student.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/add-student" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg">Add Student</Link>
        </div>
    );
};

export default StudentList;
