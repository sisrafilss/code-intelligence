import React from 'react';
import useCourseData from '../../hooks/useCourseData';
import Courses from '../Courses/Courses';
import { useHistory } from 'react-router';

const Home = () => {

    // Loading Fakedata from Root using Custom Hook (useCourseData)
    const [firstFourCourses] = useCourseData('./fakedata2.JSON');

    const history = useHistory();
    // Direct the page to All Services
    const handleBtnClick = () => {
        history.push('/services');
    }

    return (
        <div>
            <div className="mt-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <h1 className="display-2 fw-bold text-center">Welcome to <span className="text-success">Code Intelligence</span> </h1>
                    <h3 className="text-center">Learn Code with fun and be a professional Programmer.</h3>
                </div>
            </div>
            <div className="container my-5 border p-5 rounded">

                <Courses courses={firstFourCourses}>
                    <div className="d-flex align-items-center mt-5" style={{ flexDirection: 'column' }}>
                        <button onClick={handleBtnClick} className="btn btn-secondary btn-lg  text-center" >View All Courses</button>
                    </div>
                </Courses>

            </div>
        </div>
    );
};

export default Home;