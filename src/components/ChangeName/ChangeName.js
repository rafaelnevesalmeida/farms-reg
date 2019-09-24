import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import messages from '../../messages'
import GeoLocation from '../GeoLocation'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import { ButtonAddPlantWithGeoPoint } from '../Buttons'

import {
  MainFrame,
  // Header,
  ContainerLine,
  LabelTitle,
  Edit,
  ButtonMedium
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

class ChangeName extends React.Component {
  constructor (props) {
    super(props)

    this.getInnerRef = this.getInnerRef.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  innerRef
  getInnerRef (ref) {
    this.innerRef = ref
  }

  getLocation () {
    this.innerRef && this.innerRef.getLocation()
  }

  render () {
    const { getInnerRef, getLocation } = this
    const { setStateProvider, lang } = this.props

    return (
      <IntlProvider locale={lang} messages={messages[lang]} >
        <MainFrame backgroundColor='blue'>
          <GeoLocation onError={error => console.log(error)} ref={getInnerRef} />
          <ContainerLine justifyContent='flex-end' paddingBottom='30px'>
            <ButtonMedium onClick={getLocation}>
              <FormattedMessage id='geo.button.update' />
            </ButtonMedium>
          </ContainerLine>
          <ContainerLine paddingBottom='30px'>
            <LabelTitle>
              <FormattedMessage id='geo.label.name' /> :
            </LabelTitle>
            <Edit
              width='200px'
              onChange={(e) => setStateProvider({ geoPoint: { name: e.target.value } })}
            />
          </ContainerLine>
          <ContainerLine justifyContent='flex-end' paddingBottom='30px'>
            <ButtonAddPlantWithGeoPoint />
          </ContainerLine>
        </MainFrame>
      </IntlProvider>
    )
  }
}

export default ChangeName
