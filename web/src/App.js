import React, { useState } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import StudentCourses from './components/StudentCourses';
import './index.css';

const App = () => {
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const handleSelectStudent = (studentId) => {
        setSelectedStudentId(studentId);
    };

    const handleStudentAdded = () => {
        setSelectedStudentId(null); // Refresh the student list
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Student Management</h1>
            <div className="max-w-4xl mx-auto">
                <AddStudent onStudentAdded={handleStudentAdded} />
                <StudentList onSelectStudent={handleSelectStudent} />
                {selectedStudentId && <StudentCourses studentId={selectedStudentId} />}
            </div>
        </div>
    );
};

export default App;
