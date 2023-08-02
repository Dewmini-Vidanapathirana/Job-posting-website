import React from 'react';
import { BsBookHalf } from "react-icons/bs";
import { SlCalender} from "react-icons/sl";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Side = () => {
    return (
        <div className='h-[100vh] bg-purple-900 text-white mt-[-25px] cursor-pointer'>
            <Link to='/admin'><div className='px-6 py-4 mt-6'>
                <h1 className='text-2xl font-bold '>Dashboard </h1>
            </div>
            </Link>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-purple-300 cursor-pointer hover:bg-purple-400'>
                <h2 className='mt-6 text-xl'><Link to='/admin/postajob'>Post A Job</Link></h2>
                    <p className='ml-10 '><AiOutlineUserAdd /></p>
                
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-purple-300 cursor-pointer hover:bg-purple-400'>
                <h2 className='mt-6 text-xl'><Link to='/admin/budgeplan-home'>Add Jobs</Link></h2>
                <p className='ml-10 '><BsBookHalf /></p>
            </div>
            <div className='flex items-center justify-between gap-4 px-6 py-2 ml-4 border-b-2 border-purple-300 cursor-pointer hover:bg-purple-400'>
                <h2 className='mt-6 text-xl'><Link to='/admin/doctor-list'>All Jobs</Link></h2>
                    <p className='ml-10 '><AiOutlineUserAdd /></p>
                
            </div>
           
            

        </div>
    )
}

export default Side