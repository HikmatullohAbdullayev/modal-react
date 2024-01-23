import { useState } from 'react'
import Sidebar from './sidebar/sidebar'
import Setting from "./setting/setting"
import './App.css'
import Product from './product/product'

function App() {

  return (
  <>
   <div className="flex bg-[#252836]">
   <div className="sticky top-0  w-[104px] h-screen gap-6">
    <Sidebar/>

    </div>
    <div className="flex-col ml-6">
      <header className='text-start flex w-full flex-col'>
        <header className='p-6 text-white text-3xl'>
          Setting
        </header>
      </header>
      <div className="flex gap-6">
        <div className="rounded-2xl sticky top-28 ">
          <Setting/>
        </div>
        <div className="bg-[#1F1D2B] rounded-2xl">
          <Product/>
        </div>
      </div>
    </div>
   </div>
   
  </>
  )
}

export default App
