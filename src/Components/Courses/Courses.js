import React from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = (props) => {
    // Destructing 
    const { courses } = props;

    return (
        <div>
            <h2 className="text-center display-6 mb-5 fw-bold">Our Courses</h2>
            <Row xs={1} md={4} className="g-4">
                {/* Displaying every single course */}
                {courses.map(course => <SingleCourse
                    key={course.id}
                    course={course}
                />)}
            </Row>
            {props.children}
        </div>
    );
};

export default Courses;