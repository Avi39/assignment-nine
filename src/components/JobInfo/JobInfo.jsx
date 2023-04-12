import React from 'react';
import './JobInfo.css'
const JobInfo = ({jobInfo}) => {
    const{company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location,salary} = jobInfo;
    return (
        <div className='job-info'>
            <img src={company_logo} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <button>{remote_or_onsite}</button>
            <button>{fulltime_or_parttime} </button>
            <p>{location}  salary:{salary}</p>
            <button className='btn-view'>view details</button>
        </div>
    );
};

export default JobInfo;