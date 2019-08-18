import React from 'react'

import Context from './Context'

export class ContextProvider extends React.Component {
  constructor () {
    super()
    this.state = {
      lang: 'en',
      geolocation: {
        latitude: 0,
        longitude: 0,
        altitude: 0
      }
    }
    this.updateLocation = this.updateLocation.bind(this)
  }

  updateLocation (coords) {
    this.state.geolocation.latitude = coords.latitude
    this.state.geolocation.longitude = coords.longitude
    this.state.geolocation.alatitude = coords.altitude
  }

  currentDate () {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1)
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    let newDate = ''
    newDate = newDate.concat(year, month, day)
    return newDate
  }

  render () {
    return (
      <Context.Provider value={{
        lang: this.state.lang,
        geolocation: this.state.geolocation,
        updateLocation: this.updateLocation
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider
