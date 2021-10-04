import React from 'react';
import useCourseData from '../../../hooks/useCourseData';
import Courses from '../../Courses/Courses';

const Services = () => {

    const [courseList] = useCourseData('./fakedata.JSON');
    console.log(courseList);


    return (
        <div className="container my-5">
            <Courses courses={courseList} />
        </div>
    );
};

export default Services;