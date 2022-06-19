import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

// Widgets on the right-hand side ofthe [age]
function Widgets() {
  return (
    // React twitter embed library
    // Create a search box
    // Margin-top 2 to prevent touching top of page 
    // Apply responsivenes Mobile first and then introduce breakpoints to account for medium size etc
    // Hide the widget when in mobile screen size of 375px which increases columns size availability by 2
    // Reapper at large screen size {lg:inline}
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 border-gray-100 
        p-3 rounded-full mt-2'>
            <SearchIcon className='h-5 w-5 text-gray-400'/>
            <input 
            type='text' 
            placeholder='Search Twitter'
            className='flex-1 outline-none bd-transparent' //Flex-1 allows the input to take the available space
            />
        </div>

        {/* Create the Twitter timeline embed with linked twitter account activity*/}
        <TwitterTimelineEmbed
            sourceType='profile'
            screenName="Aleardo21"
            options={{height: 600}}
            
            />

    </div>
  )
}

export default Widgets