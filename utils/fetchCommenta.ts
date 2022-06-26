import { Comment } from '../typings'
// create call to backned
export const fetchComments = async (tweetId: string) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

    // boilerplate
    const comments: Comment[] = await res.json()

    return comments
}