import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Home from './HomeContexted'

export const allGeoPoints = gql`
  query allGeoPoints {
    allGeoPoints {
      id
      latitude
      longitude
      altitude
      time
    }
  }
`

export default graphql(allGeoPoints)(Home)
