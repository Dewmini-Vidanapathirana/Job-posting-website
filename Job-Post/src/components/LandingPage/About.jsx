import React from 'react';
import AboutI from '../Image/im26.jpg';

const About = () => {
  return (
    <div className='h-[70vh]'>
      <div className='flex w-[90%] mx-auto  bg-purple-50 shadow-lg rounded-lg  mt-10 h-[500px] hover:drop-shadow-xl'>
        <div className='w-[50%] px-4 mt-10 mb-2'>
          {/* <h3 className='text-4xl text-green-500 font-semibold  w-[50%] mt-10'>About Us</h3> */}
          <p className='mb-8 font-sans text-4xl font-bold'>Connecting Talent with Opportunity: Your Gateway to Success
            </p>
          <p className='text-1xl'> Welcome to our job posting website! We are dedicated to connecting job seekers with exciting
           opportunities and helping employers find the perfect candidates for their organizations.
            At our website, we understand that finding the right job or the right candidate can be a 
            challenging and time-consuming process. That's why we have created a user-friendly platform that streamlines
             the job search and recruitment process, making it easier for both job seekers and employers to connect.For job seekers,
              our website offers a wide range of job listings across various industries and sectors. Whether you are a fresh graduate 
              looking to kickstart your career or an experienced professional seeking a new challenge, our platform provides you with 
              access to a diverse range of job opportunities. Our advanced search filters allow you to narrow down your search based on 
              your preferences, such as location, salary range, and job type, making it
              easier for you to find the perfect job that matches your skills and interests. </p>

        </div>
        <div className='h-[100%] w-[50%] px-14'>
          {<img className='mt-20 w-[200%] ' src={AboutI} alt="" />}
        </div>
      </div>
    </div>
  )
}

export default About