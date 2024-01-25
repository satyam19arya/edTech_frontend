import React from 'react';
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div className={`w-[360px] lg:w-[30%] h-[300px] text-richblack-25 box-border cursor-pointer ${currentCard === cardData?.heading ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50" : "bg-richblack-800"}`} onClick={() => setCurrentCard(cardData?.heading)}>
      <div className='border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3'>
        <div className={`font-semibold text-[20px] ${currentCard === cardData?.heading && "text-richblack-800"}`}>
          {cardData.heading}
        </div>
        <div className='text-richblack-400'>
          {cardData.description}
        </div>
      </div>

      <div className={`flex justify-between px-6 py-3 font-medium ${currentCard === cardData.heading ? "text-blue-100" : "text-richblack-300"}`}>
        <div className='flex items-center gap-2 text-[16px]'>
          <HiUsers />
          <p>{cardData.level}</p>
        </div>
        <div className='flex items-center gap-2 text-[16px]'>
          <ImTree />
          <p>{cardData.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;