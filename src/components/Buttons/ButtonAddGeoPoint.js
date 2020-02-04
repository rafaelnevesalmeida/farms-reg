import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ButtonMedium } from '../../elements'

class ButtonAddGeoPoint extends React.Component {
  onClick () {
    const { geoPoint, geolocation, mutate } = this.props

    mutate({
      variables: {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
        altitude: geolocation.altitude,
        name: geoPoint.name
      }
    })
  }

  render () {
    return (
      <ButtonMedium onClick={() => this.onClick()}>
        <FormattedMessage id='geo.button.save' />
      </ButtonMedium>
    )
  }
}

export default ButtonAddGeoPoint
