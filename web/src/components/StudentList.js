import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const StudentList = ({ onSelectStudent }) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await axios.get('/students');
            setStudents(response.data);
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
                        onClick={() => onSelectStudent(student.id)}
                    >
                        {student.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
