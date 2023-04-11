import React from 'react';

const Home = () => {
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
        </div>
    );
};

export default Home;