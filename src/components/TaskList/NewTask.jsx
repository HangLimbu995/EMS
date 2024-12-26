import React from 'react'

const NewTask = ({data,i}) => {
    console.log('data is',data)
  return (
    <div
            key={i}
            className={`h-full w-[300px] p-5 flex-shrink-0 bg-green-400 rounded-xl overflow-auto`}
            style={{ scrollbarWidth: "none" }}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-sm bg-red-600 px-3 py-1 rounded">High</h3>
                <h4 className="text-white text-sm"> {data?.date}</h4>
            </div>
            <h2 className="mt-5 text-3xl font-semibold">{data?.title}</h2>
            <p className="text-[18px] mt-2">
                {data?.description}
            </p>
            <div className=' mt-4 ' >
                <button className='bg-green-600 py-2 px-3 rounded-sm hover:shadow-lg'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask
