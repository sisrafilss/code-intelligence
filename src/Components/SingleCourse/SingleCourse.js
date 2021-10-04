import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCourse = (props) => {
    
    const {title, lessons, price, thumbnail} = props?.course;
    console.log(title, lessons, price, thumbnail);
    // console.log(props)

    return (
        <Col> 
            <Card>
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text className="d-flex justify-content-between mt-3">
                        <span>Price: ${price}</span>
                        <span>Lessons:{lessons} </span>
                    </Card.Text>

                </Card.Body>
                <button className="btn btn-secondary btn-block">Course Details</button>
            </Card>
        </Col>
    );
};

export default SingleCourse;