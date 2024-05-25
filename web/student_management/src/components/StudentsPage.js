import React, { useState } from 'react';
import StudentList from './StudentList';
import { AddStudent } from './AddStudent';

const StudentsPage = () => {
    const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

    const handleAddStudentClose = () => {
        setIsAddStudentOpen(false);
    };

    const handleStudentAdded = () => {
        setIsAddStudentOpen(false);
    };

    return (
        <div className="container">
            <h1 className="mt-3">Students</h1>
            <button onClick={() => setIsAddStudentOpen(true)}>Add Student</button>
            <div className="row">
                <div className="col-sm">
                    <StudentList />
                </div>
            </div>
            {isAddStudentOpen && <AddStudent student_name={new_student} onClose={handleAddStudentClose} onStudentAdded={handleStudentAdded} />}
            
        </div>
    );
};

export default StudentsPage;
