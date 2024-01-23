import React from 'react';

function Button(props) {
    return (
        <div className='flex sticky bottom-0 my-3 gap-3 ml-3 bg-[#1F1D2B]'>
            <button className='p-[14px]  bg-[#ea7c69] rounded-md  cursor-pointer text-white '>Discard Changes </button>
            <button className='p-[14px]  bg-[#ea7c69] rounded-md  cursor-pointer  text-white '>Save Changes</button>
            
        </div>
    );
}

export default Button;