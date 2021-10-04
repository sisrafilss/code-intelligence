import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const WhyCoding = () => {
    return (
        <div className="container my-5">
                <CardGroup>
                    <Card className="me-4">
                        <Card.Img variant="top" src="https://images.ctfassets.net/mrop88jh71hl/15Z0zxdmFdpemyPhQJbVae/bca8fe28bf097ccc7557fdab4f2e6d8e/child-coding-to-learn-life-skills.jpeg?w=800&q=100" />
                        <Card.Body>
                            <Card.Title>Learn Programming with Passion</Card.Title>
                            <Card.Text>

                                Programming is a rewarding career as well as an engaging hobby for developers. If you keep the approach to programming as a hobby than a job, you will sharpen your skills in a practical way.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="me-4">
                        <Card.Img variant="top" src="https://d.wildapricot.net/images/newsblog/build-vs-buy-membership-management-software.jpg" />
                        <Card.Body>
                            <Card.Title>Build Software</Card.Title>
                            <Card.Text>
                            In software development, a build is the process of converting source code files into standalone software artifact(s) that can be run on a computer, or the result of doing so.
                            </Card.Text>
                        </Card.Body>
                       
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.seeklearning.com.au/media/images/career-guide/module/programmer.jpg" />
                        <Card.Body>
                            <Card.Title>Get Your Programming Job</Card.Title>
                            <Card.Text>
                            Computer programming is a good career for those who enjoy learning new coding languages and want to work in the technology industry. ... It's also a great role to pursue if you'd like to receive a good salary, work traditional office hours and spend your time behind the computer in an office environment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
    );
};

export default WhyCoding;