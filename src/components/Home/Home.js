// eslint-disable-next-line
import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
// TODO move the lang things to the app.js
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import {
  Header,
  Container,
  Label,
  Button
} from '../../elements'

import { Link } from 'react-router-dom'

addLocaleData(en)
addLocaleData(pt)

class Home extends React.Component {
  render () {
    const { lang } = this.props

    return ( // TODO change the visual props (backgroundColor) to modifier and move IntlProvider to App.js
      // TODO move sensorDates to DB
      <IntlProvider locale={lang} messages={messages[lang]} >
        <Container backgroundColor='#888888' >
          <Header paddingTop="5px">
            <Label>
              <FormattedMessage id='app.label' />
            </Label>
          </Header>

          <Container justifyContent="center" marginBottom="10px" >
            <Button width='75px' marginLeft='15px' >
              <Label>
                <nav>
                  <Link to="/changeName">
                    <FormattedMessage id='geo.button.new' />
                  </Link>
                </nav>
              </Label>
            </Button>
          </Container>
        </Container>
      </IntlProvider>
    )
  }
}

export default Home
