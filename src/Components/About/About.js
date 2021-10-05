import React from 'react';
import './About.css'
import img from '../../images/about-us.jpg'

const About = () => {
    return (
        <div className="about-container">
            <div className="about-top">
                <h2 className="my-5 py-5 text-center text-light display-4 fw-bold">About Us</h2>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Teaching Programming in Fun way is our Mission</h2>
                        <p>One of the greatest challenges a professor faces when intending to teach computer science is to capture the attention of their students. Gamification as a means of learning to code while having fun is certainly one the best ways of doing so.</p>

                        <p>Today, tons of developers – beginner and experts alike – use CodinGame to hone their coding skills and have fun by solving programming puzzles. Each exercise is sorted by level of difficulty and is available in more than 25 different programming languages.</p>

                        <p>Because it is easier to learn to code by playing, we believe the CodinGame platform can also be a source of inspiration for teachers willing to diversify their computer science courses.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;