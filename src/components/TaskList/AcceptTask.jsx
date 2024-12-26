import React from 'react'

const AcceptTask = ({ data, i }) => {
    return (
        <div
            key={i}
            className={`h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl overflow-auto`}
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
            <div className='flex justify-between mt-4' >
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
