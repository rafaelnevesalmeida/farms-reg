// eslint-disable-next-line
import React from 'react'
import { FormattedMessage, addLocaleData, IntlProvider } from 'react-intl'
// TODO move the lang things to the app.js
import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import messages from '../../messages'

import {
  Header,
  RoundContainer,
  AreaContainer,
  ButtonContainer,
  Label,
  Button,
  LinkButton
} from '../../elements'

addLocaleData(en)
addLocaleData(pt)

class Home extends React.Component {
  render () {
    const { lang } = this.props

    return ( // TODO change the visual props (backgroundColor) to modifier and move IntlProvider to App.js
      // TODO move sensorDates to DB
      <IntlProvider locale={lang} messages={messages[lang]} >
        <AreaContainer>
          <Header>
            <Label>
              <FormattedMessage id='app.label' />
            </Label>
          </Header>

          <RoundContainer backgroundColor='#888888' >
            <Header>
              <Label>
                <FormattedMessage id='plant.label' />
              </Label>
            </Header>

            <ButtonContainer>
              <Button>
                <Label>
                  <nav>
                    <LinkButton to="/changeName">
                      <FormattedMessage id='geo.button.new' />
                    </LinkButton>
                  </nav>
                </Label>
              </Button>
              <Button>
                <Label>
                  <nav>
                    <LinkButton to="/changeName">
                      <FormattedMessage id='geo.button.list' />
                    </LinkButton>
                  </nav>
                </Label>
              </Button>
              <Button>
                <Label>
                  <nav>
                    <LinkButton to="/changeName">
                      <FormattedMessage id='geo.button.search' />
                    </LinkButton>
                  </nav>
                </Label>
              </Button>

            </ButtonContainer>
          </RoundContainer>
        </AreaContainer>
      </IntlProvider>
    )
  }
}

export default Home
