import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const AddStudentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateOfBirth: '',
        address: '',
        phoneNumber: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/students', formData);
            navigate('/');
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudentForm;
