import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const StudentCoursesPage = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { state, dispatch } = useContext(AppContext);
    const [studentCourses, setStudentCourses] = useState([]);

    useEffect(() => {
        const fetchStudentCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:5010/api/students/${id}`);
                console.log(response.data);
                setStudentCourses(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchStudentCourses();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading student courses</div>;

    return (
        <div className="container">
            <h2 className="mt-3">Courses for {id}</h2>
            {/* <h2>Courses for {id}</h2> */}
            {/* <h2>{student.name}'s Courses for {id}</h2> */}
            <table className="table">
                <thead className="thead-light">
                <tr>
                        {/* <th scope="col">Course ID</th> */}
                        <th scope="col">Course Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
            {studentCourses.length > 0 ? (
                <ul>
                    {studentCourses.map(course => (
                        <tr key={course.id}>
                            <li>{course.name}</li>
                            <li>{course.description}</li>
                        </tr>
                    ))}
                </ul>
            ) : (
                <p>No courses assigned to this student</p>
            )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentCoursesPage;
