// eslint-disable-next-line
import React from 'react'
import { FormattedMessage } from 'react-intl'

import {
  Header,
  RoundContainer,
  AreaContainer,
  ButtonContainer,
  Label,
  Button,
  LinkButton
} from '../../elements'

import { GoogleMap, Marker } from '../../components'

class Home extends React.Component {
  render () {
    const {
      data: { loading, error, allPlants }
    } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }

    if (error) {
      return <p>{error.message}</p>
    }

    return ( // TODO change the visual props (backgroundColor) to modifier
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
            {/* <Button>
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
              </Button> */}

          </ButtonContainer>
        </RoundContainer>
        <GoogleMap />

        {allPlants.map((Plant, i) =>
          <Marker key={i}
            position={Plant.geoPoint}
            visible={true}
          />
        )}

      </AreaContainer>
    )
  }
}

export default Home
