import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'

// yarn add react-timeago/ yarn --dev @types/react-timeago


// feed tweets through
interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div>
        <div className='flex space-x-3'>
            <img 
            className='h-10 w-10 rounded-full object-cover' 
            src={tweet.profileImg} 
            alt=''/>


            <div>
                <div className='flex items-center space-x-1'>
                    {/* direct reference to poster tag */}
                    <p className='mr-1 font-bold'>{tweet.username}</p>
                    <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/q, '').toLowerCase()}</p>


                    <TimeAgo
                    className='text-sm text-gray-500'
                    date={tweet._createAt}
                    />
                </div>
                <p className='pt-1'>{tweet.text}</p>

                {/* only when there is an image */}
                {tweet.img && (
                    <img src={tweet.img} alt='' className='m-5 ml-0 mb-1 max-h-60
                    rounded-lg object-cover shadow'/>
                )}
             </div>
        </div>
    </div>
  )
}

export default Tweet