import React from 'react'
import { geolocated, geoPropTypes } from 'react-geolocated'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import messages from '../../messages'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'
import contextualize from '../../hoc/contextualize'

import {
  ContainerLine,
  LabelTitle,
  Label
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

class GeoLocation extends React.Component {
  render () {
    const { coords, isGeolocationAvailable, isGeolocationEnabled, updateLocation, positionError, lang } = this.props

    return (
      <IntlProvider locale={lang} messages={messages[lang]} >
        <React.Fragment>
          {!isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation.</div>
          ) : !isGeolocationEnabled ? (
            <div>Geolocation is not enabled.</div>
          ) : coords ? (
            <React.Fragment>
              { updateLocation(coords) }

              <ContainerLine>
                <LabelTitle>
                  <FormattedMessage id='geo.label.latitude' /> :
                </LabelTitle>
                <Label>
                  {coords.latitude}
                </Label>
              </ContainerLine>

              <ContainerLine>
                <LabelTitle>
                  <FormattedMessage id='geo.label.longitude' /> :
                </LabelTitle>
                <Label>
                  {coords.longitude}
                </Label>
              </ContainerLine>

              {coords.altitude ? (
                <ContainerLine>
                  <LabelTitle>
                    <FormattedMessage id='geo.label.altitude' /> :
                  </LabelTitle>
                  <Label>
                    {coords.altitude}
                  </Label>
                </ContainerLine>
              ) : null}.
            </React.Fragment>
          ) : (
            <div>Getting the location data&hellip;</div>
          )}
          {!!positionError && (
            <div>
              <br />
                Last position error:
              <pre>{JSON.stringify(positionError)}</pre>
            </div>
          )}
        </React.Fragment>
      </IntlProvider>
    )
  }
}

GeoLocation.propTypes = { ...GeoLocation.propTypes, ...geoPropTypes }

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000,
  watchPosition: true,
  suppressLocationOnMount: false
})(contextualize(GeoLocation))
