// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import sanity client
import {sanityClient} from '../../sanity'
// import typyings d
import {Tweet} from '../../typings'
type Data = {
    // define what the tweet response we want looks like
  tweets: Tweet[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    // use grock to query sanity CMS and grab backend API
    
    res.status(200).json({ name: 'John Doe' })
}
