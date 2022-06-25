// .d.td for type definition files in order to define what a tweet is
// the tweet APi comes with a TON of info
// this need to be broken up into tweet and body

import { type } from "os"


// build interface to extend tweet body with all other twtitter API info
export interface Tweet extends TweetBody {
    _id: string
    _createAt: string
    _updateAt: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}






// this const wil be accessible to the client
// setup similar to schema
export type TweetBody ={
    text: string
    username: string
    prolfileImg: string
    // the image will be optional and not 100% required and so ?
    Image?: string 

}

export type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Comment extends CommentBody{
    _createAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updateAt: string
    // create a reference field
    tweet: {
        _ref: string
        _type: 'reference'
    }
}