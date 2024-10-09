import React from 'react'
import NoInfo from "../assets/no-info.png";


const Students = () => {
  return (
    <div className='w-full'>
    <div className='flex items-center justify-center'>
        <img src={NoInfo} alt="No Info" />
    </div>
    <button className="fixed bottom-[120px] right-[60px] px-6 py-[22px] bg-[#152259] hover:bg-[#152259]/70 text-white flex items-center justify-start space-x-2 rounded-[30px] w-[181px]">
        <span>Support</span>
      </button>
</div>
  )
}

export default Students