import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
const JobDetails = () => {
    const jobDetails = useLoaderData();
    // console.log(jobDetails);
    return (
        <div>
            <h2>Job details</h2>
            <div className='job-details-all'>
                <div>
                 <p> <span className='details-surname'>Job description</span>: <span className='details-info'>{jobDetails.job_description}</span> </p>   
                 <p> <span className='details-surname'>Job Responsibility</span>: <span className='details-info'>{jobDetails.job_responsibility}</span> </p>
                 <p> <span className='details-surname'>Educational Requirement</span>: <span className='details-info'>{jobDetails.educational_requirements}</span> </p>
                 <p> <span className='details-surname'>Experiences</span>: <span className='details-info'>{jobDetails.experiences}</span> </p>

                </div>
                <div className='job-details-right'>
                    <p className='details-surname'>job details</p>
                    <p>salary: <span className='details-info'>{jobDetails.salary}</span> </p>
                    <p>Job Title: <span className='details-info'>{jobDetails.job_title}</span></p>
                    <p className='details-surname'>Contact information</p>
                    <p>phone: <span className='details-info'>{jobDetails.phone}</span> </p>
                    <p>email: <span className='details-info'>{jobDetails.email}</span> </p>
                    <p>Address: <span className='details-info'>{jobDetails.location}</span> </p>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;