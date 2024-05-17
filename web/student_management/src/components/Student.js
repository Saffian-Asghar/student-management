import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Student = (props) => {
    const navigate = useNavigate();

    const showCourses = (id) => {
        navigate(id);
    };

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
                <FaArrowAltCircleRight style={{ cursor: 'pointer' }} size='1.5em' onClick={(event) => showCourses(props.id)} />
            </td>
        </tr>
    );
};

export default Student;