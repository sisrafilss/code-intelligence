import Button from 'react-bootstrap/Button'
import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import SingleCourse from '../SingleCourse/SingleCourse';
import useCourseData from '../../hooks/useCourseData';
import Courses from '../Courses/Courses';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Home = () => {

    const [firstFourCourses] = useCourseData('./fakedata2.JSON');

    const history = useHistory();

    const handleBtnClick = () => {
        history.push('/services');
    }

    return (
        <div className="container my-5 border p-5 rounded">
            <Courses courses={firstFourCourses}>
                <div className="d-flex align-items-center mt-5" style={{ flexDirection: 'column' }}>
                    <button onClick={handleBtnClick} className="btn btn-secondary btn-lg  text-center" >View All Courses</button>
                </div>
            </Courses>

        </div>
    );
};

export default Home;