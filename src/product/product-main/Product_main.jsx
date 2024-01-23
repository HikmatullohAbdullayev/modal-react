import React from 'react';
import Card from '../../components/card/Card';
// import Card from '../../components/card/Card';



    
    function ProductMain(props) {
        return (
            <div className=' flex m-6 flex-wrap gap-4 items-center justify-between overflow-auto h-screen '>
                <div className="flex flex-col w-[220px] h-[300px] bg-[#1F1D2B] text-center justify-center items-center align-middle cursor-pointer rounded-md border-dashed border-2 border-[#EA7C69]  ">
                    <p className='text-[#EA7C69] text-3xl'>+</p>
                    <p className='text-[#EA7C69]'>Add new dish</p>
                </div>
                
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
            </div>
        );
    }
    
    export default ProductMain;