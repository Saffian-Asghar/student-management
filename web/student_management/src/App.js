import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import StudentList from './components/StudentList';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Students</h1>
                <h3 className='mt-3'>Student List</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <StudentList />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;