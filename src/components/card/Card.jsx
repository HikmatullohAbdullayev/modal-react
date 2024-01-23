import React from 'react';
const cardDataa=   {
    id:"1",
    img:"../.././../src/assets/img/img_2.png",
    title:"Spicy seasoned seafood noodles",
    price:"$ 2.29",
    nimadur:"30 bowls",
    edit:"Edit dish"
}

function Card(props) {
    return (
        <div className='flex w-[221px] flex-col rounded-md border-solid border-2 border-[#121019a7] '>
        <div className='px-10 py-3  text-center' >
            <img className='rounded-full' src={cardDataa.img} alt="img" />
            <h2 className='w-[144px] pt-3 font-medium text-white  text-[14px]'>{cardDataa.title}</h2>
            <div className="flex ml-5 font-normal  text-[#ABBBC2]">
                <p className='text-center' >{cardDataa.price}</p>
                <p className='text-center'>{cardDataa.nimadur}</p>
            </div>
            ``
        </div>
            <p className='mt-0 text-center py-3   bg-[#ea7c69] rounded-md  cursor-pointer  '>{cardDataa.edit}</p></div>
    );
}

export default Card;