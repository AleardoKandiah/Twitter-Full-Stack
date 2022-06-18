import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../Components/Feed'
import Sidebar from '../Components/Sidebar'
import Widgets from '../Components/Widgets'

// 3 sections for twitter: Sidebar to the screenLeft, feed in the middle and Widget on the right


const Home: NextPage = () => {
  return (
    // Apply contstraint to bigger screen view but not on mobile view
    <div className=" lg:max-w-6xl">
      <Head>
        <title>Twitter TS</title>
      </Head>

    {/* Layout into 9 columns */}
      <main className='grid grid-cols-9'>
      {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed/>

        {/* Widget */}
        <Widgets/>


      </main>
    </div>
  )
}

export default Home
