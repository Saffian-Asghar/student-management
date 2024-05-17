import React, { createContext, useReducer } from 'react';
import { useParams } from "react-router-dom";
import CoursesList from '../components/CoursesList';

export const AppReducer = (state, action) => {
    switch (action.type) {

        // add actions here if necessary

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    students: [
        { id: "17285930", name: 'Tom' },
        { id: "19378532", name: 'Clara' },
        { id: "18337492", name: 'Sophie' },
        { id: "17638241", name: 'Chad' },
        { id: "18246258", name: 'Stephanie' }
    ],
    courses: [
        { id: "1", name: "Maths", description: "Cool math course" },
        { id: "2", name: "English", description: "Cool english course" },
        { id: "3", name: "Physics", description: "Cool physics course" },
        { id: "4", name: "Arts", description: "Cool arts course" }
    ]
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

export const StudentsPage = (props) => {
    const [state] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                students: state.students
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export const CoursesPage = (props) => {
    const { id } = useParams();
    const [state] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                courses: state.courses,
                studentID: id
            }}
        >
            <div className='container'>
                <h1 className='mt-3'>Courses for {id}</h1>
                <div className='row '>
                    <div className='col-sm'>
                        <CoursesList />
                    </div>
                </div>
            </div>
            {props.children}
        </AppContext.Provider>
    );
};
