// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ButtonAddGeoPoint from './ButtonAddGeoPoint.js'

const ButtonAddGeoPointComponent = (props) => {
  return (<ButtonAddGeoPoint {...props} label='+' />)
}

const addGeoPointMutation = gql`
  mutation addGeoPoint ($name: String! $latitude: Float! $longitude: Float! $altitude: Float!) {
    addGeoPoint (
      name: $name
      latitude: $latitude
      longitude: $longitude
      altitude: $altitude
    )
  {
    id
  }
}
`
export default graphql(addGeoPointMutation)(ButtonAddGeoPointComponent)
