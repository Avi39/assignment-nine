import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import JobCatagory from '../JobCatagory/JobCatagory';
import JobInfo from '../JobInfo/JobInfo';
const Home = () => {
    const jobsCategories = useLoaderData();
    const jobInfos = useLoaderData();
    return (
        <div>
             <section className='header-image-part'>
                <div className='header-paragraph'>
                    <h1>One Step <br /> Closer To Your <br /><span className='dream'>Dream Job</span></h1>
                    <p className='paragraph-into'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='get-btn'>Get Started</button>
                </div>
                <div className='header-image'>
                    <img src="../../../public/All Images/man.png" alt="" />
                </div>
            </section>
            <section className='job'>
                <h2>Job Category List</h2>
                <p className='job-p'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='jobscategory-container'>
                {
                    jobsCategories.map(jobsCategory=><JobCatagory key={jobsCategory.id} jobsCategory={jobsCategory}></JobCatagory>)
                }

                </div>
               
            </section>

            <section className='feature'> 
                <h2>Featured Jobs</h2>
                <p className='job-p'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='jobInfo-container'>
                    {
                        jobInfos.map(jobInfo=><JobInfo key={jobInfo.id} jobInfo={jobInfo}></JobInfo>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;