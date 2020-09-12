import React from 'react'

export const StatContainer = ({
  children
}) => {
  return <>
    <div
      // bg-darkened
      className='w-full sm:w-5/12 flex-grow rounded-lg my-1 px-4 trans'
    >
      {children}
    </div>
  </>
}