import React from 'react'
import { Route } from 'react-router'

import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { addLocaleData, IntlProvider } from 'react-intl'

import Home from './components/Home'
import Login from './components/Login'
import ChangeName from './components/ChangeName'

import theme from './theme.js'
import ApolloClient from 'apollo-boost'
import messages from './messages'
import contextualize from './hoc/contextualize'

import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

addLocaleData(en)
addLocaleData(pt)

const client = new ApolloClient({ uri: process.env.REACT_APP_SERVER })

class App extends React.Component {
  render () {
    const { lang } = this.props
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={lang} messages={messages[lang]} >
            <BrowserRouter>
              <React.Fragment>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/changeName' exact component={ChangeName} />
              </React.Fragment>
            </BrowserRouter>
          </IntlProvider>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default contextualize(App)
