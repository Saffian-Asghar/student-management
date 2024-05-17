import React from 'react';

const Student = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
        </tr>
    );
};

export default Student;