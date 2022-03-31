import React from 'react'

const Pyramids = ({pyramid, currentQtsNum}) => {
  
  return (
    <div className='col-span-1 bg-gradient-to-r to-gray-700 from-indigo-900 text-white flex flex-col justify-center items-center'>
      {pyramid.map(step => (
        <div key={step.id} className={ `${currentQtsNum === step.id ? 'bg-teal-500' : null} flex w-[80%] rounded-lg justify-around items-center p-[6px]`}>
          <div className="amountId ">{step.id}</div>
          <div className="amountNumber text-xl">{step.amount}</div>
        </div>
      ))}
    </div>
  )
}

export default Pyramids