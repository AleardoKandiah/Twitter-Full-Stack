import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
}  from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

// Sidebar icons installed from heroicons by yarn add @heroicons/react


// Fuction export component rfce

function Sidebar() {
  return (
    <div>
        {/* Twitter icon, classname height and width 10 */}
        <img className='h-10 w-10' src='https://links.papareact.com/drq' alt='' />
    
        {/* Instance of sidebar needed for the icon components */}
        <SidebarRow Icon={HomeIcon} title='Home'/>
        <SidebarRow Icon={HashtagIcon} title='Explore'/>
        <SidebarRow Icon={BellIcon} title='Notifications'/>
        <SidebarRow Icon={MailIcon} title='Mesages'/>
        <SidebarRow Icon={BookmarkIcon} title='Bookmarks'/>
        <SidebarRow Icon={CollectionIcon} title='Lists'/>
        {/* User Icon will be modified to Sign  out when signed in*/}
        <SidebarRow Icon={UserIcon} title='Sign In'/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title='More'/>
    </div>
  )
}

export default Sidebar

// Reusable components for sidebar