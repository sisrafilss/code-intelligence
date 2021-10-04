import React from 'react';
import { useHistory } from 'react-router';
import img404 from '../../images/404.jpg'

const NotFound = () => {

    const history = useHistory();
    const handleBtnClick = () => {
        history.push('/home')
    }

    return (
        <div className="container my-5 ">
            <div className="d-flex align-items-center display-content-center" style={{flexDirection: 'column'}}>
                <div>
                    <img className="img-fluid mx-auto" style={{ width: '600px' }} src={img404} alt="" />
                </div>
                <div>
                    <h1 className="display-1">404 Error!</h1>
                    <h4 className="display-4">Page Not Found!</h4>
                    <button onClick={handleBtnClick} className="btn btn-secondary btn-lg">Go to Homepage</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;