// utility folder for functions 

import { Tweet } from '../typings';

// create a async function for fetchingtweets
export const fetchTweets = async () => {
    // connect to backend endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`)

    // next we need to retreive the data
    const data = await res.json();
    // cast tweets inside
    // we can also use destructuring here
    const tweets: Tweet[] = data.tweets;

    // by returning we can now use it on the front end
    return tweets
}