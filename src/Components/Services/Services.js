import React from 'react';
import useCourseData from '../../hooks/useCourseData';
import Courses from '../Courses/Courses';

const Services = () => {

    // Import Data from fake data using Custom Hook (userCourseData)
    const [courseList] = useCourseData('./fakedata.JSON');

    return (
        <div className="container my-5">
            {/* Dispaly the Courses data loaded from fake Data */}
            <Courses courses={courseList} />
        </div>
    );
};

export default Services;