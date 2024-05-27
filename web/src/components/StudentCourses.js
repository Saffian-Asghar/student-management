import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const StudentCourses = ({ studentId }) => {
    const [courses, setCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await axios.get(`/studentcourses/${studentId}`);
            setCourses(response.data);
        };

        const fetchAllCourses = async () => {
            const response = await axios.get('/courses');
            setAllCourses(response.data);
        };

        fetchCourses();
        fetchAllCourses();
    }, [studentId]);

    const handleEnroll = async () => {
        await axios.post('/enroll', null, { params: { studentId, courseId: selectedCourse } });
        setCourses([...courses, allCourses.find(course => course.id === parseInt(selectedCourse))]);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-semibold mb-4">Student Courses</h2>
            <ul className="space-y-2 mb-4">
                {courses.map(course => (
                    <li key={course.id} className="p-2 bg-gray-100 rounded">
                        {course.name}
                    </li>
                ))}
            </ul>
            <select
                className="block w-full p-2 mb-4 border rounded"
                value={selectedCourse}
                onChange={e => setSelectedCourse(e.target.value)}
            >
                <option value="">Select a course</option>
                {allCourses.map(course => (
                    <option key={course.id} value={course.id}>
                        {course.name}
                    </option>
                ))}
            </select>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleEnroll}
            >
                Enroll
            </button>
        </div>
    );
};

export default StudentCourses;
