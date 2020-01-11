import React from 'react'

import { ContainerMap } from '../../elements'

class GoogleMap extends React.Component {
  componentDidMount () {
    let map = null
    if (window.google !== undefined) {
      map = new window.google.maps.Map(document.getElementById('map'), { ...this.props.mapParams })
      if (map) {
        console.log(map)
        this.props.setGoogleMap(map)
      }

      map.addListener('zoom_changed', () => {
        this.props.setMapZoom(map.getZoom())
      })

      map.addListener('maptypeid_changed', () => {
        this.props.setMapTypeId(map.getMapTypeId())
      })

      map.addListener('center_changed', () => {
        this.props.setMapCenter({
          lat: map.getCenter().lat(),
          lng: map.getCenter().lng()
        })
      })
    } else {
      console.log('offline')
    }
  }

  render () {
    return (
      <ContainerMap id='map' />
    )
  }
}

export default GoogleMap
