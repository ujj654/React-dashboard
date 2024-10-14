import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";

import Img2 from "../../assets/images/Img2.png"

export const Sidebar = () => {
  return (
    <div className='w-[10%] lg:w-[15%] h-screen bg-white p-4 text-[#475569]'>
        <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='font-bold text-2xl text-green-500 uppercase'>
                <div className='hidden md:flex'>Food</div>
                <div className='flex md:hidden'><FaBowlFood /></div>
            </div>
            <div className='flex flex-col gap-10 items-center md:items-start'>
                <div className='flex gap-2 items-center justify-center cursor-pointer hover:border-l-2 hover:border-green-500 px-2'>
                    <div><AiFillHome /></div>
                    <div className='hidden lg:flex'>Home</div>   
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer hover:border-l-2 hover:border-green-500 px-2'>
                    <div><MdFastfood /></div>
                    <div className='hidden lg:flex'>Food Order</div>   
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer hover:border-l-2 hover:border-green-500 px-2'>
                    <div><GiSelfLove /></div>
                    <div className='hidden lg:flex'>Favorite Menu</div>   
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer hover:border-l-2 hover:border-green-500 px-2'>
                    <div><MdOutlineMessage /></div>
                    <div className='hidden lg:flex'>Message</div>   
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer hover:border-l-2 hover:border-green-500 px-2'>
                    <div><MdOutlineHistoryEdu /></div>
                    <div className='hidden lg:flex'>Order History</div>   
                </div>
                <div className='flex gap-2 items-center justify-center cursor-pointer hover:border-l-2 hover:border-green-500 px-2'>
                    <div><IoMdNotificationsOutline /></div>
                    <div className='hidden lg:flex'>Notification</div>   
                </div>
            </div>
            </div>
            <div className='flex flex-col items-center justify-center h-32 rounded-lg'>
                <div className='flex flex-col gap-1 items-center h-full rounded-md lg:bg-green-100'>
                    <div className='hidden md:flex w-28 -mt-14'>
                        <img src={Img2}/>
                    </div>
                    <div className='flex flex-col px-5 gap-1 mt-3 text-sm'>
                        <div className='hidden md:flex'>Share your thought</div>
                    </div>
                    <div>
                        <div className='hidden md:flex items-center px-2 py-2 bg-green-600 text-white text-xs rounded-md'>Upload Now</div>
                        <div className='flex md:hidden text-4xl text-green-500'><FaCloudUploadAlt /></div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
