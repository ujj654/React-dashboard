import React from 'react'
import Img1 from '../../assets/images/img1.jpg'
import Img2 from '../../assets/images/Img2.png'
import Img3 from '../../assets/images/Img3.jpg'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const Main = () => {
  return (
    <div className='px-2'>
<div className='flex flex-col gap-3 md:flex-row mt-5'>
    <div className='flex flex-col w-full md:w-[70%]'>
        <div className='flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-center bg-green-200 h-52 p-2 text-[#022c22] rounded-lg'>
        <div className='flex flex-col px-3 gap-1 md:ap-2 md:w-[45%]'>
            <div className='text-sm md:text-2xl font-bold'lass>All best recipe in one place</div>
            <div className='text-sm md:text-lg'>Upload your honmemade recipe here.....</div>
            <div className='flex items-center gap-3 w-28 bg-green-500 text-white rounded-lg p-2'>
            <div>Order Now</div>
            <div></div>
             </div>
        </div>
        <div className='flex items-center justify-center w-full md:w-[55%] '>
            <img src={Img2} className='w-2/3 h-[6rem] -mt-8 md:mt-0 md:w-58 md:h-[180px] rounded-full'/>
        </div>
        </div>
        <div className='my-4 text-[#475569] font-bold'>
            Categories
        </div>
        <div className='grid md:grid-cols-3 gap-3 lg:grid-cols-5 text-[#475569]'>
            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'>
                <div className='w-full px-2'>
                    <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                        <div className='flex items-center h-full justify-center'>
                        <img src={Img1} className='w-28 md:w-14'/>
                        </div>
                    </div>
                </div>
                <div className='font-semibold'>
                    All
                </div>
                <div className='flex text-green-500 text-xl'>
                <IoIosArrowDropdownCircle className='w-28 md:w-14'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'>
                <div className='w-full px-2'>
                    <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                        <div className='flex items-center h-full justify-center'>
                        <img src={Img1} className='w-28 md:w-14'/>
                        </div>
                    </div>
                </div>
                <div className='font-semibold'>
                    Groceries
                </div>
                <div className='flex text-green-500 text-xl'>
                <IoIosArrowDropdownCircle className='w-28 md:w-14'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'>
                <div className='w-full px-2'>
                    <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                        <div className='flex items-center h-full justify-center'>
                        <img src={Img1} className='w-28 md:w-14'/>
                        </div>
                    </div>
                </div>
                <div className='font-semibold'>
                    Milk Product
                </div>
                <div className='flex text-green-500 text-xl'>
                <IoIosArrowDropdownCircle className='w-28 md:w-14'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'>
                <div className='w-full px-2'>
                    <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                        <div className='flex items-center h-full justify-center'>
                        <img src={Img1} className='w-28 md:w-14'/>
                        </div>
                    </div>
                </div>
                <div className='font-semibold'>
                    Fruits
                </div>
                <div className='flex text-green-500 text-xl'>
                <IoIosArrowDropdownCircle className='w-28 md:w-14'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 items-center py-3 bg-white w-full md:w-28 rounded-md'>
                <div className='w-full px-2'>
                    <div className='bg-[#f0abfc] h-28 md:h-14 rounded-lg'>
                        <div className='flex items-center h-full justify-center'>
                        <img src={Img1} className='w-28 md:w-14'/>
                        </div>
                    </div>
                </div>
                <div className='font-semibold'>
                    Vegetables
                </div>
                <div className='flex text-green-500 text-xl'>
                <IoIosArrowDropdownCircle className='w-28 md:w-14'/>
                </div>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4 text-[#475569]'>
        <div className='bg-white p-1 rounded-lg w-full md:w-48'>
            <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
               <div className='flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                15%
                </div> 
                <div className='flex flex-col gap-2 items-center justify-center'>
                <img src={Img1} className='w-28 h-28 rounded-full'/> 
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg'>Pulse</div>
                    <div className='text-sm'>Taste our Natural Juice</div>
                </div>
                <div className='flex w-full justify-between items-center'>
                <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-green-600'>
                        <div><FaPlus /></div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className='bg-white p-1 rounded-lg w-full md:w-48'>
            <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
               <div className='flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                15%
                </div> 
                <div className='flex flex-col gap-2 items-center justify-center'>
                <img src={Img1} className='w-28 h-28 rounded-full'/> 
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg'>Rice</div>
                    <div className='text-sm'>Taste our Natural Juice</div>
                </div>
                <div className='flex w-full justify-between items-center'>
                <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-green-600'>
                        <div><FaPlus /></div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className='bg-white p-1 rounded-lg w-full md:w-48'>
            <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
               <div className='flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                15%
                </div> 
                <div className='flex flex-col gap-2 items-center justify-center'>
                <img src={Img1} className='w-28 h-28 rounded-full'/> 
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg'>Potato</div>
                    <div className='text-sm'>Taste our Natural Juice</div>
                </div>
                <div className='flex w-full justify-between items-center'>
                <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-green-600'>
                        <div><FaPlus /></div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className='bg-white p-1 rounded-lg w-full md:w-48'>
            <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
               <div className='flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                15%
                </div> 
                <div className='flex flex-col gap-2 items-center justify-center'>
                <img src={Img1} className='w-28 h-28 rounded-full'/> 
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg'>Paneer</div>
                    <div className='text-sm'>Taste our Natural Juice</div>
                </div>
                <div className='flex w-full justify-between items-center'>
                <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-green-600'>
                        <div><FaPlus /></div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className='bg-white p-1 rounded-lg w-full md:w-48'>
            <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
               <div className='flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                15%
                </div> 
                <div className='flex flex-col gap-2 items-center justify-center'>
                <img src={Img1} className='w-28 h-28 rounded-full'/> 
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg'>Tomato</div>
                    <div className='text-sm'>Taste our Natural Juice</div>
                </div>
                <div className='flex w-full justify-between items-center'>
                <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-green-600'>
                        <div><FaPlus /></div>
                    </div>
                
                </div>
            </div>
        </div>
        <div className='bg-white p-1 rounded-lg w-full md:w-48'>
            <div className='flex flex-col gap-3 bg-[#fef2f2] text-[#475569] p-3 rounded-lg'>
               <div className='flex justify-center ml-4 w-14 p-1 text-xs font-bold rounded-md bg-[#fecaca] text-[#f87171]'>
                15%
                </div> 
                <div className='flex flex-col gap-2 items-center justify-center'>
                <img src={Img1} className='w-28 h-28 rounded-full'/> 
                </div>
                <div className='flex flex-col w-full items-center justify-center'>
                    <div className='font-semibold text-[#022c22] text-lg'>Onion</div>
                    <div className='text-sm'>Taste our Natural Juice</div>
                </div>
                <div className='flex w-full justify-between items-center'>
                <div className='font-bold text-[#022c22]'>15%</div>
                    <div className='bg-white rounded-md p-2 text-green-600'>
                        <div><FaPlus /></div>
                    </div>
                
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className='flex flex-col items-center w-full md:w-[30%] bg-white rounded-md'>
        <div className='flex flex-col w-full'>
            <div className='mb-8 px-4'>
                <div className='bg-green-200 p-3 rotate-2 h-48 w-full lg:w-[95%]'>
                    <div className='bg-green-400 -rotate-3 h-48 rounded-md w-full'>
                        <div className='flex flex-col py-4 text-white h-full items-center justify-between'>
                            <div className='flex w-full justify-between items-center px-4'>
                                <div className='font-semibold'>State Bank of India</div>
                                <div><MdSavings /></div>
                            </div>
                            <div>
                                <div className='text-xl lg:text-2xl md:font-semibold'>
                                4487 5548 2341
                                </div>
                            </div>
                            <div className='flex w-full justify-between items-center px-4'>
                                <div>
                                    <div className='text-xs'>Cardholder Name</div>
                                    <div>XYZ</div>
                                </div>
                                <div>Expiry Date</div>
                                <div>10/30</div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className='flex w-full justify-between items-center px-3'>
                <div className='font-semibold text-[#475569]'>Order Now</div>
                <div className='flex gap-2 items-center'>
                    <div className='text-green-400'>View All</div>
                    <div className='text-green-400'>
                    <IoIosArrowDroprightCircle />
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
            <div className='flex w-full justify-between items-center px-4 my-4'>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center bg-[#fecaca] rounded-md'>
                        <div className=' '>
                            <img src={Img3} className='w-8 h-8 rounded-full'/>
                        </div>
                    </div>
                    <div className='text-[#475569]'>
                        <div className='font-semibold'>Green Peas</div>
                        <div className='text-sm'>$22</div>
                    </div>  
                </div>
                <div className='text-[#475569]'>X3</div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
