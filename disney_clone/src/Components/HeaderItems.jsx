import React from 'react'

const HeaderItems = ({name, Icon}) => {
  return (
    <div className=' flex justify-center items-center mx-2 cursor-pointer text-white gap-2 text-sm'>
        <Icon/>
        <h1 className='hidden md:block'>{name}</h1>
    </div>
  )
}

export default HeaderItems