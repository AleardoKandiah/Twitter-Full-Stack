// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// create a groq query call for comment associated with tweet
// placeholder $tweetis
const commentQuery = groq`
*[_type == 'comment' && references(*[_type== 'tweet' && _id ==$tweetId]._id] {
    _id,
    ...
    } | order (_createAt desc)}

`

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
