import React from 'react';

const Course = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
        </tr>
    );
};

export default Course;