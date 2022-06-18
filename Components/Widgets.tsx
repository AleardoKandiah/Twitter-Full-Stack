import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

// Widgets on the right-hand side ofthe [age]
function Widgets() {
  return (
    // React twitter embed library
    // Create a search box
    // Margin-top 2 to prevent touching top of page 
    <div className='px-2 mt-2'>
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
            options={{height: 100}}
            
            />

    </div>
  )
}

export default Widgets