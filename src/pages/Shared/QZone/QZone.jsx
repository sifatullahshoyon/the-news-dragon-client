import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light rounded p-4 mb-4'>
            <h4 className='mb-4'>Q-Zone</h4>
            <div>
                <img className='mb-3' src={qZone1} alt="kids img" />
                <img className='mb-3' src={qZone2} alt="kids img" />
                <img className='mb-3' src={qZone3} alt="kids img" />
            </div>
        </div>
    );
};

export default QZone;