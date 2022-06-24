import React from 'react'
import { Tweet } from '../typings'


// feed tweets through
interface Props {
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div>Tweet</div>
  )
}

export default Tweet