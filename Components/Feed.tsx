import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { serialize } from 'v8'
import TweetBox from './TweetBox'

// ===========MIDDLE SECTION FEED COMPONENT ===============

function Feed() {
  return (

    // Main Feed given a column size of 5 ot of 9
    // At smaller screen serialize, the feed will take up the additional 2 columns from the widget
    // At default the feed wil take up 7 columns, whichis then increased to 7 at larger screen size
    <div className='col-span-7 lg:col-span-5 border-x'>
           {/* Top of Feed  */}
           {/* give flex property so that are made into a row 
           and centered in the axis and be pushed apart by justify-between*/}
        <div className='flex items-center justify-between'>

            {/* Add style 
            Home= padding extra large and bold*/}
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>

            {/* Style refresh icon to animate and ease out of animation */}
            <RefreshIcon className='h-8 w-8 cursor-pointer
            text-twitter transition-all duration-500
             ease-out hover:rotate-180 active:scale-125'/>
        </div>

        {/* Tweet box for middle section */}
        <TweetBox/>

    </div>
  )
}

export default Feed