// .d.td for type definition files in order to define what a tweet is
// the tweet APi comes with a TON of info
// this need to be broken up into tweet and body

// this const wil be accessible to the client
export const TweetBody ={
    text: string,
    username: string,
    prolfileImg: string,
    // the image will be optional and not 100% required and so ?
    Image?: string 

}