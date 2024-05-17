import React, { createContext, useReducer } from 'react';

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
        { id: "18246258", name: 'Stephanie' },
    ]
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
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
