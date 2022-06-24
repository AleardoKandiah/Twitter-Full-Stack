// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import sanity client
import { sanityClient } from '../../sanity'
// import typyings d
import { Tweet } from '../../typings'
// add groq
import { groq } from 'next-sanity'

// Execute Query
const feedQuery = groq`
  *[_type == "tweet" && !blockTweet] {
    _id,
    '''
  } | order[_createAt desc]
  `


type Data = {
    // define what the tweet response we want looks like
  tweets: Tweet[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // use groq to query sanity CMS and grab backend API
    // execute fetch req to get the tweets back
    
    const tweets: Tweet[] = await sanityClient.fetch(feedQuery)

    res.status(200).json({ name: 'John Doe' })
}
