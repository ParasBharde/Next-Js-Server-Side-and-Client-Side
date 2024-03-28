import React from 'react'

export default function ({children}:{
    children: React.ReactNode
}) {
  return  <div>
    <div className=' text-center border-b'>20% off for the next 30 minute</div>
    {children}
    </div>
  
}
