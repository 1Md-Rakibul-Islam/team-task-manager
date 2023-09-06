import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    return (
        <div>
            <Link to="/">
                <div className='flex items-center gap-2'>
                    <h2 className='text-2xl font-semibold'>Taskera</h2>
                </div>
            </Link>
        </div>
    );
};

export default Brand;