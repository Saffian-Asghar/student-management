import React, { useState } from 'react';
import axios from '../api/axios';

const AddStudent = ({ onStudentAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleAddStudent = async () => {
        const newStudent = { name, email, dateOfBirth, address, phoneNumber };
        const response = await axios.post('/students', newStudent);
        onStudentAdded(response.data);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Add Student</h2>
            <input
                className="block w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                className="block w-full p-2 mb-4 border rounded"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className="block w-full p-2 mb-4 border rounded"
                type="date"
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={e => setDateOfBirth(e.target.value)}
            />
            <input
                className="block w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Address"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <input
                className="block w-full p-2 mb-4 border rounded"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleAddStudent}
            >
                Add Student
            </button>
        </div>
    );
};

export default AddStudent;
