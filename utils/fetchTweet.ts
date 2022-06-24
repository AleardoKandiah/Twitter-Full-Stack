// utility folder for functions 

// create a async function for fetchingtweets
export const fetchTweets = async () => {
    // connect to backend endpoint

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`)
}