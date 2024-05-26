import React, { useEffect, createContext, useReducer } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import CoursesList from '../components/CoursesList';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COURSES':
            return { ...state, courses: action.payload };
        case 'DELETE_COURSE':
            return { ...state, courses: state.courses.filter(course => course.id !== action.payload) };
        case 'SET_STUDENTS':
            return { ...state, students: action.payload };
        case 'DELETE_STUDENT':
            return { ...state, students: state.students.filter(student => student.id !== action.payload) };
        case 'ADD_STUDENT':
            return { ...state, students: [...state.students, action.payload] };
        // todo: add course?
        default:
            return state;
    }
};

const initialState = {
    students: [],
    courses: []
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        axios.get("http://localhost:5010/api/students")
            .then(response => {
                dispatch({ type: 'SET_STUDENTS', payload: response.data });
            })
            .catch(error => {
                console.log(error);
            });

        axios.get("http://localhost:5010/api/courses")
            .then(response => {
                dispatch({ type: 'SET_COURSES', payload: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const StudentsPage = (props) => {
    return (
        <AppProvider>
            {props.children}
        </AppProvider>
    );
};

export const CoursesPage = (props) => {
    const { id } = useParams();
    const text = ''
    if (id > 0) {
        text = 'for' + id
    }
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Courses {text}</h1>
                {/* <h1 className='mt-3'>Courses for {id}</h1> */}
                <div className='row '>
                    <div className='col-sm'>
                        <CoursesList />
                    </div>
                </div>
            </div>
            
            {props.children}
        </AppProvider>
    );
};
