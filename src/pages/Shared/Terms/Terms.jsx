import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Accept Terms & Conditions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus reiciendis eum soluta ducimus nam fugiat hic accusantium voluptates consectetur odio dolor esse iste explicabo sequi, vel doloribus! Recusandae id dolor deleniti laudantium dignissimos reprehenderit, culpa vel esse impedit nemo ipsum nam. Explicabo, iste recusandae debitis error vitae fugiat dolor eum itaque quam? Sint consectetur repudiandae harum dolorum beatae quam a eaque deleniti suscipit, saepe voluptates quis. Optio beatae minima quam dignissimos totam reiciendis ipsa sapiente rem odit! Temporibus vitae quibusdam voluptatem corporis ipsam similique odio modi aliquam facilis id, illum necessitatibus totam sed recusandae et impedit deleniti facere pariatur.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;