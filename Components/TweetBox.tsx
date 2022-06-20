import React from 'react'
import{
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox() {
  return (
    <div className='flex space-x-2 p-5'>
      {/* object cover to take avai;able space */}
        <img className='h-14 w-14 object-cover rounded-full mt-4'
        src="https://links.papareact.com/gll"
        alt=""
        />

      {/* Build submission form which allows to tweet     */}
    <div className='flex flex-1 pl-2 items-center'>

      <form className='flex flex-1 flex-col'>
        {/* Input form styling  */}
        <input type='text'
        placeholder="What's Happening?"
        className='h-24 w-full outline-none text-xl placeholder:text-xl '/>

        {/* Build a div for tweet icons and submission */}
        <div className='flex items-center'>
          {/* Flex-1 = flex: 1 1 0% */}

          {/* only add the animation and effect for photographicon */}

          <div className='flex flex-1 space-x-2 text-twitter'>
            <PhotographIcon className='h-5 w-5 cursor-pointer 
            transition-transform duration-150 ease-out hover:scale-150'/>
            <SearchCircleIcon className='h-5 w-5'/>
            <EmojiHappyIcon className='h-5 w-5'/>
            <CalendarIcon className='h-5 w-5'/>
            <LocationMarkerIcon className='h-5 w-5' />
          </div>

          <button className='bg-twitter px-5 py-2 font-bold
          rounded-full text-white'>Tweet</button>

        </div>
      </form>
    </div>

    </div>
  )
}

export default TweetBox