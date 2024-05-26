import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { StudentsPage } from './context/AppContext';
import StudentList from './components/StudentList';
import { CoursesPage } from './context/AppContext';
import StudentCoursesPage from './components/StudentCoursesPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    exact path="/"
                    element={
                        <StudentsPage>
                            <div className='container'>
                                <h1 className='mt-3'>Students</h1>
                                <div className='row '>
                                    <div className='col-sm'>
                                        <StudentList />
                                    </div>
                                </div>
                            </div>
                        </StudentsPage>}
                />
                 <Route path="/courses" element={<CoursesPage />}
                />
                <Route 
                path="/studentcourses/:id" 
                        // path="/:id"
                element={<StudentCoursesPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;