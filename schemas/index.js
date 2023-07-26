// import createSchema from 'part:@sanity/base/schema-creator'
// import schemaTypes from 'all:part:@sanity/base/schema-type'

import comment from './comment';
import pin from './pin';
import postedBy from './postedBy';
import save from './save';
import user from './user';

export const schemaTypes = [
  user, pin, postedBy, save, comment
]
