import React, { useEffect } from 'react'
import Nav from '../assets/components/Nav'
import android from '../assets/images/google-play.svg'
import apple from '../assets/images/apple-store.svg'
// import facebook from '../assets/images/facebook.svg'
import Footer from '../assets/components/Footer'
// import { Helmet } from 'react-helmet';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default function Landing() {
  // const apiKey = process.env.REACT_APP_API_KEY;

  const scriptUrl = "https://cdn.jsdelivr.net/gh/maro-okegbero/mhapy-widget@v1.0.6/embed.js?api_key=d7873832749d4aa468150284206d7997ee64662992bfa05926ec4df6bd6522ec";

  // Use the useScript hook to dynamically add the script to the body
  useScript(scriptUrl);
 

  return (
    <>
    <div className='overflow-x-hidden h-screen'>
      
      <Nav />
      <div className='items-center w-[75%] text-center mx-auto  '>
        <h1 className='text-primary  font-semibold text-[30px] text-center'>Ruby is a mental health chatbot that performs mental health assessments and connects with support. Talk to ruby about your depression, anxiety or stress.</h1>
        <p className='text-primary font-bold text-[25px] pt-[30px]'>Click the chat button at the bottom right corner of your device to talk to Ruby</p>
        <button className='bg-primary text-white px-[20px] py-[15px] my-[50px] rounded-lg hover:bg-transparent hover:text-primary border border-primary text-[20px] '>Get Your Own Charbot</button>
        <div className='flex md:flex-row flex-col gap-5 justify-center items-center' >
          
          <button className='flex flex-row items-center justify-center gap-1 bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-9 border border-primary hover:border-transparent rounded-lg'>
             <img src={android} />
            
            Google Play</button>
          <button className='flex flex-row items-center justify-center gap-1 bg-transparent hover:bg-primary text-primary hover:text-white py-2 px-9  border border-primary hover:border-transparent rounded-lg'><img src={apple} />Apple Store</button>
        </div>
        </div>

        <div className=" mx-auto px-16 mt-10 justify-center items-center w-[90%]">
          <Footer />
          </div>
          
     
     
    </div>
    
    </>
  )
}
