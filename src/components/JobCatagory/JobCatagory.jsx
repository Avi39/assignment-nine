import React from 'react';
import './JobCatagory.css'
const JobCatagory = ({jobsCategory}) => {
    const {name,available,icon} = jobsCategory;
    return (
        <div className='jobcategory'>
            <img src={icon} alt="" />
            <h4>{name}</h4>
            <p>{available} jobs available</p>
        </div>
    );
};

export default JobCatagory;