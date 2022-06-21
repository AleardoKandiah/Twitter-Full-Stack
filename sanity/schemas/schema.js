// This is where everything gets tied together
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import tweet from './tweet'
import comment from './comment'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // Name our schema
  name: 'default',
  // Then we concatenate our document type
  // to ones provided from plugins that are installed
  type: schemaTypes.concat([ tweet,comment ]),
})
