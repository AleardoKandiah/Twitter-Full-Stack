// .d.td for type definition files in order to define what a tweet is
// the tweet APi comes with a TON of info
// this need to be broken up into tweet and body


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
export const TweetBody ={
    text: string,
    username: string,
    prolfileImg: string,
    // the image will be optional and not 100% required and so ?
    Image?: string 

}