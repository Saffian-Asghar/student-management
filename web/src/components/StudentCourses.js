import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../api/axios';

const StudentCourses = () => {
    const { id } = useParams();
    const [studentCourses, setStudentCourses] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');

    useEffect(() => {
        const fetchStudentCourses = async () => {
            const response = await axios.get(`/studentcourses/${id}`);
            setStudentCourses(response.data);
        };

        const fetchAllCourses = async () => {
            const response = await axios.get('/courses');
            setAllCourses(response.data);
        };

        fetchStudentCourses();
        fetchAllCourses();
    }, [id]);

    const handleEnrollCourse = async () => {
        try {
            await axios.post(`/enroll?studentId=${id}&courseId=${selectedCourse}`);
            // Reload student courses after enrolling
            const response = await axios.get(`/studentcourses/${id}`);
            setStudentCourses(response.data);
        } catch (error) {
            console.error('Error enrolling in course:', error);
        }
    };

    const availableCourses = allCourses.filter(course => !studentCourses.some(sc => sc.id === course.id));

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Student Courses</h2>
            <ul>
                {studentCourses.map(course => (
                    <li key={course.id} className="mb-2">{course.name}</li>
                ))}
            </ul>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Enroll in a new course</h3>
                <select
                    value={selectedCourse}
                    onChange={e => setSelectedCourse(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                >
                    <option value="">Select a course</option>
                    {availableCourses.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
                <button
                    onClick={handleEnrollCourse}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600"
                >
                    Enroll
                </button>
                <Link
                    to={`/student/${id}/add-course`}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                    Add a new course
                </Link>
            </div>
        </div>
    );
};

export default StudentCourses;
