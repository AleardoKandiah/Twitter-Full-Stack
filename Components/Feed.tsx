import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

// ===========MIDDLE SECTION FEED COMPONENT ===============

function Feed() {
  return (
    <div>
           {/* Top of Feed  */}
           {/* give flex property so that are made into a row 
           and centered in the axis and be pushed apart by justify-between*/}
        <div className='flex items-center justify-between'>

            {/* Add style 
            Home= padding extra large and bold*/}
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>

            {/* Style refresh icon to animate and ease out of animation */}
            <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter
            transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>

    </div>
  )
}

export default Feed