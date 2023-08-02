import React from 'react';
import Scan from '../Image/im19.webp';
import Scn from '../Image/im16.jpg';
import Con from '../Image/im_15.png';
import Conn from '../Image/im18.png';
import Scann from '../Image/im17.png';
import Scannnn from '../Image/im24.png';
import Scannn from '../Image/im20.png';
import Connn from '../Image/im23.png';


const Review = () => {
    return (
        <div className='w-[100%] mt-10 h-auto '>
            <h1 className='text-black  text-4xl font-semibold mx-auto text-center pt-4  w-[30%] mb-8 justify-between'>Browse Top Category</h1>
            <div className='w-[80%] flex justify-between mx-auto'>
                <div className='mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Web Development</h2>
                    <img className='w-40 mr-10 ' src={Scan} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia.</p>
                      
                 


                </div>

                <div className='mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Mobile Application</h2>
                    <img className='px-10 mr-10 w-70' src={Scn} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos .</p>
                   
                </div>

                <div className='p-4 mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Web Design</h2>
                    <img className='px-4 mr-10 w-60' src={Con} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos.</p>
                   
                </div>

                <div className='mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Softwere Engineering</h2>
                    <img className='flex justify-center w-50 ' src={Conn} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos .</p>
                  
                </div>



            </div>
            <div className='w-[80%] flex justify-between mx-auto mt-10 '>
                <div className='p-4 mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='text-2xl text-center text-black font-semi bold'>QA Engineer</h2>
                    <img className='w-60' src={Scann} alt="" />
                    <p className='px-5 py-4 mt-[-4] font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium
                        </p>
                    


                </div>

                <div className='mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Project Manager</h2>
                    <img className='mr-10 w-50' src={Scannnn} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos .</p>
                    
                </div>

                <div className='p-4 mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Data Analyst</h2>
                    <img className='w-50 ' src={Connn} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos.</p>
                  
                </div>

                <div className='mr-4 rounded-md shadow-lg bg-purple-50 hover:shadow-2xl'>
                    <h2 className='p-4 text-2xl text-center text-black font-semi bold'>Machine Learning</h2>
                    <img className='px-4 mr-10 w-50' src={Scannn} alt="" />
                    <p className='px-5 py-4 mt-4 font-sans font-thin text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus
                        ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia
                        perferendis vero sed ipsa quos .</p>
                    
                </div>



            </div>
        </div>
    )
}

export default Review