// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import ButtonAddPlantWithGeoPoint from './ButtonAddPlantWithGeoPoint.js'

const ButtonAddPlantWithGeoPointComponent = (props) => {
  return (<ButtonAddPlantWithGeoPoint {...props} label='+' />)
}

const addPlantWithGeoPointMutation = gql`
  mutation addPlantWithGeoPoint ($name: String! $latitude: Float! $longitude: Float! $altitude: Float!) {
    addPlantWithGeoPoint (
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
export default graphql(addPlantWithGeoPointMutation)(ButtonAddPlantWithGeoPointComponent)
