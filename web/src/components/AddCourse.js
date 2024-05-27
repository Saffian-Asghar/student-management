import React, { useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import axios from '../api/axios';

const AddCourseForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        instructor: '',
        dateCreated: '',
        dateEnded: ''
    });

    const navigate  = useNavigate ();

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
            await axios.post(`/courses`, formData);
            navigate(`/student/${id}/courses`);
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="instructor" className="block text-sm font-medium text-gray-700">Instructor</label>
                    <input type="text" id="instructor" name="instructor" value={formData.instructor} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="dateCreated" className="block text-sm font-medium text-gray-700">Date Created</label>
                    <input type="date" id="dateCreated" name="dateCreated" value={formData.dateCreated} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="dateEnded" className="block text-sm font-medium text-gray-700">Date Ended</label>
                    <input type="date" id="dateEnded" name="dateEnded" value={formData.dateEnded} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourseForm;
