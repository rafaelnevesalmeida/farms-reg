import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Home from './HomeContexted'

export const allPlants = gql`
  query allPlants {
    allPlants {
      id
      geoPoint {
        latitude
        longitude
      }
      name
    }
  }
`

export default graphql(allPlants)(Home)
