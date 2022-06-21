import {
    createClient,
} from 'next-sanity'
import { config } from 'process'


// sanityConfig.io dataset pased into 'production'
const sanityConfig = {
    // Find project ID and dataset in 'sanity.json'
    // These aee considered publu=ic but environmental variables can also be found
    // to differe between local dev and production
    dataset: process.env.NEXT_PUBLIC_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    // set Usecdn to 'false' and authenticated data will bypass CDN
    useCdn: process.env.NODE_ENV === 'production',
}

// Add sanity client for fetching data in the getPros page function
// This constant wil be used to communicate with sanity's market
export const sanityClient = createClient(config)

