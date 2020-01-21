import React from 'react'
import { FormattedMessage } from 'react-intl'

import {
  MainFrame,
  ContainerLine,
  LabelTitle,
  Edit,
  ButtonMedium
} from '../../elements'

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

    return (
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
    )
  }
}

export default Login
