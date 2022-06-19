import React from 'react'

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
          <div> Icons </div>

          <form>Tweet</form>

        </div>
      </form>
    </div>

    </div>
  )
}

export default TweetBox