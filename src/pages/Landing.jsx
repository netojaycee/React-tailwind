import React from 'react'
import Nav from '../assets/components/Nav'
import android from '../assets/images/google-play.svg'
import apple from '../assets/images/apple-store.svg'
import facebook from '../assets/images/facebook.svg'

export default function Landing() {
  return (
    <>
    <div className='overflow-x-hidden'>
      
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

        <div className='bg-primary w-[97%] items-center justify-center text-center h-[40vh] md:mt-[150px] mt-[75px] mx-auto rounded-lg '>
        <div className=''>
          <div className='flex'>
          <div>
          <ul className='flex gap-5 text-white py-[40px] px-[40px] '>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Demo</a>
            </li>
            <li>
              <a>Ruby API Licence</a>
            </li>
            </ul>
          </div>
          <div className='flex gap 10'>
            <img src='../assests/images/bottom-andriod-icon.svg'/>
            <img src='../assests/images/bottom-ios-icon.svg'/>
          </div>
          </div>
          
          <hr className='w-[90%] mx-auto' />
          <div>
            <div>

            </div>
            <h3 className='text-white py-[30px] '>@2023 mHapy. All Right Reserved</h3>
          </div>
        </div>
      </div>
     
     
    </div>
    
    </>
  )
}
