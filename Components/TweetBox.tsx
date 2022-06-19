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
    <div>
      {/* object cover to take avai;able space */}
        <img className='h-14 w-14 object-cover rounded-full mt-4' 
        src="https://links.papareact.com/gll" 
        alt="" 
        />

      {/* Build submission form which allows to tweet     */}
    <div>
      
      <form>
        <input type='text' placeholder="What's Happening?"/>

        {/* Build a div for tweet icons and submission */}
        <div>
          
          <div> 
            <SearchCircleIcon className='h-5 w-5'/>
            <EmojiHappyIcon className='h-5 w-5'/>
            <CalendarIcon className='h-5 w-5'/>
            <LocationMarkerIcon className='h-5 w-5' />   
          </div>

          <form>Tweet</form>

        </div>
      </form>
    </div>

    </div>
  )
}

export default TweetBox