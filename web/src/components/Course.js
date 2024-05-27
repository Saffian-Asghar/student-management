import React from 'react';

const Course = (props) => {
    return (
        <tr>
            {/* todo: rm id */}
            {/* <td>{props.id}</td> */}
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.children}</td>
        </tr>
    );
};

export default Course;
