import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import messages from '../../messages'
import { ButtonMedium } from '../../elements'

import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

addLocaleData(en)
addLocaleData(pt)

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
    const { lang } = this.props
    return (
      <IntlProvider locale={lang} messages={messages[lang]} >
        <ButtonMedium onClick={() => this.onClick()}>
          <FormattedMessage id='geo.button.save' />
        </ButtonMedium>
      </IntlProvider>
    )
  }
}

export default ButtonAddGeoPoint
