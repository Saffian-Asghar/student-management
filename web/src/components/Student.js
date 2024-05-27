import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Student = (props) => {
    const navigate = useNavigate();

    const showCourses = (id) => {
        // navigate(id);
        console.log('Navigating to student courses page with ID:', id); // Debug log
        navigate(`/students/${id}`);
    };

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
               <FaArrowAltCircleRight style={{ cursor: 'pointer' }} size='1.5em' onClick={() => showCourses(props.id)} />
            </td>
            <td>
                {props.children}
            </td>
        </tr>
    );
};

export default Student;