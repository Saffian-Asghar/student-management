// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import StudentCourses from './components/StudentCourses';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<StudentList/>} />
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/student/:id/courses" element={<StudentCourses/>} />
        <Route path="/student/:id/add-course" element={<AddCourse/>} />
    </Routes>
    </Router>

  );
}

export default App;
