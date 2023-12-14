import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
const MainLoader = () => {
  return (
    <div className='flex justify-center items-center h-screen'><ScaleLoader
    color="rgba(29, 112, 188, 1)"
    height={60}
    width={5}
  /></div>
  )
}

export default MainLoader