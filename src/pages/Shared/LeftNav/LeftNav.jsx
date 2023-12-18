import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories , setCategories] = useState([]);

    useEffect(() => {
        try {
            fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        } catch (error) {
            console.error(error);
        }
    } , []);

    return (
        <div>
            <h2>All Caterogy</h2>
            <div className='p-4'>
                {
                    categories?.map(category => <div key={category.id} className='p-2'><Link to={`/category/${category.id}`} className='text-secondary text-decoration-none'>{category.name}</Link></div>)
                }
            </div>
        </div>
    );
};

export default LeftNav;