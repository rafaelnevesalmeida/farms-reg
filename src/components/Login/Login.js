import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
import messages from '../../messages'
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

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

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
    this.login = this.login.bind(this)
  }

  login () {
    console.log(this.state.user, this.state.password)
  }

  render () {
    const { login } = this
    const { lang } = this.props

    return (
      <IntlProvider locale={lang} messages={messages[lang]} >
        <MainFrame backgroundColor='blue'>
          <ContainerLine justifyContent='center' paddingBottom='30px'>
            <LabelTitle>
              <FormattedMessage id='login.label.title' />
            </LabelTitle>
          </ContainerLine>
          <ContainerLine justifyContent='flex-end' paddingBottom='30px'>
          </ContainerLine>
          <ContainerLine paddingBottom='30px'>
            <LabelTitle>
              <FormattedMessage id='login.label.user'/> :
            </LabelTitle>
            <Edit
              value={this.state.user}
              onChange={(e) => this.setState({ user: e.target.value })}
              width='200px'
            />
          </ContainerLine>
          <ContainerLine paddingBottom='30px'>
            <LabelTitle>
              <FormattedMessage id='login.label.password' /> :
            </LabelTitle>
            <Edit
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              width='200px'
            />
          </ContainerLine>
          <ContainerLine justifyContent='flex-end' paddingBottom='30px'>
            <ButtonMedium onClick={login}>
              <FormattedMessage id='login.button.login' />
            </ButtonMedium>
          </ContainerLine>
        </MainFrame>
      </IntlProvider>
    )
  }
}

export default Login
