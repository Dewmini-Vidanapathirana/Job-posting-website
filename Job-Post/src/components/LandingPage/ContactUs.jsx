import React from 'react';




const ContactUs = () => {
  return (
    
    <body className="relative z-0 font-sans bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} >
    <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 -z-20"></div>
    <div className="flex items-center justify-center h-screen ">
        <div className="px-8 py-8 text-black bg-transparent border border-white rounded-lg shadow-lg w-96">
            <h1 className="text-4xl font-semibold text-center ">Contact Us</h1>
            <div className="flex flex-col mt-2"> 
                <label className="mb-1 text-xl font-semibold ">Email</label>
                <input className="px-2 py-1 text-black bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
                    type="email" placeholder="Enter Email" 
                    // onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
            <div className="flex flex-col mt-2">
                <label className="mb-1 text-xl font-semibold " >Password</label>
                <input className="px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
                    type="password" placeholder="Enter Password"
                    // onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <div className="flex flex-col mt-2">
                <label className="mb-1 text-xl font-semibold " >Message</label>
                <input className="px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
                    type="password" placeholder=""
                    // onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
           
            {/* <button
                className="w-full py-2 mt-6 text-white bg-purple-900 border rounded-md hover:bg-transparent hover:text-white hover:border-white" onClick={onLogin}>Login</button> */}
        </div>
    </div>
</body>
  )
}

export default ContactUs