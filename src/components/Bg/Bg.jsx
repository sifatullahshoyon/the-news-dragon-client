import React from 'react';
import './Bg.css';
import { Button } from 'react-bootstrap';

const Bg = () => {
    return (
        <div>
            <div className='content p-4'>
                <h4>Create an Amazing Newspaper</h4>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default Bg;