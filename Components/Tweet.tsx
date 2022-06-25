import React, { useEffect, useState } from 'react'
import { Tweet, Comment } from '../typings'
import TimeAgo from 'react-timeago'
import {
    ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchCommenta'

// yarn add react-timeago/ yarn --dev @types/react-timeago


// feed tweets through
interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {

    // create piece of state for comments
    const [comments, setComments] = useState<Comment[]>([])

    // useeffect responsible to fetch the comments
    const refreshComments = async () => {
        const comments: Comment[] = await fetchComments(tweet._id)
        setComments(comments);
    }

    // when the components mounts, refresh the comments 
    useEffect(() => {
        refreshComments();
    }, [])


  return (
    <div>
        <div className='flex space-x-3'>
            <img 
            className='h-10 w-10 rounded-full object-cover' 
            src={tweet.prolfileImg} 
            alt=''/>


            <div>
                <div className='flex items-center space-x-1'>
                    {/* direct reference to poster tag */}
                    <p className='mr-1 font-bold'>{tweet.username}</p>
                    <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>


                    <TimeAgo
                    className='text-sm text-gray-500'
                    date={tweet._createAt}
                    />
                </div>
                <p className='pt-1'>{tweet.text}</p>

                {/* only when there is an image */}
                {tweet.Image && (
                    <img src={tweet.Image} alt='' className='m-5 ml-0 mb-1 max-h-60
                    rounded-lg object-cover shadow-sm'/>
                )}
             </div>
        </div>
{/* create icons for feed tweet */}
        <div className='flex justify-between mt-5'>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
               <ChatAlt2Icon className='h-5 w-5'/> 
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <SwitchHorizontalIcon className='h-5 w-5'/>
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <HeartIcon className='h-5 w-5'/>
            </div>
            
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <UploadIcon className='h-5 w-5'/>
            </div>
        </div>

        {/* Comment Box Logic */}
        <div>
            {comments?length > 0 && (
                <div>
                    {comments.map((comment) => (
                        <><div key={comment._id} className=' flex space-x-2'>
                            <img
                                src={comment.profileImg}
                                className='h-7 w-7 rounded-full object-cover'
                                alt='' />
                            <div>
                                <div className='flec items-center space-x-1'>
                                    <p className='mr-1 font-bold'>{comment.username}</p>
                                    <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g, '').toLowerCase()} .</p>
                                
                            <TimeAgo
                                className='text-sm text-gray-500'
                                date={comment._createAt}
                            />

                        </div>
                        <p>{comment.comment}</p>
                     </div>
                ))}
            </div>
            )}
        </div>
    </div>
  )
}

export default Tweet