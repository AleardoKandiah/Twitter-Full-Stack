export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    // Structure content to reference the tweet itself
    {
      // name: 'image'
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the tweet the comment is associated to:',
      type:'reference',
      to: {
        type: 'tweet'
      }
    }

  ],
}
