import React from 'react'
import PropTypes from 'prop-types'

export class Marker extends React.Component {
  componentDidMount () {
    this.renderMarker()
  }

  componentDidUpdate (prevProps) {
    if (this.marker) {
      this.marker.setMap(null)
    }
    this.renderMarker()
  }

  componentWillUnmount () {
    if (this.marker) {
      this.marker.setMap(null)
    }
  }

  renderMarker () {
    if (this.props.map !== null) {
      const {
        visible,
        map,
        position,
        icon,
        label,
        draggable,
        title
      } = this.props

      console.log(this.props)

      console.log(position)

      const google = window.google // ????
      if (!google) {
        return null
      }

      if (position !== null && !(position instanceof google.maps.LatLng)) {
        console.log('yes')
        var pos = new google.maps.LatLng(position.latitude, position.longitude)
      }

      const pref = {
        visible,
        map,
        position: pos,
        icon,
        label,
        title,
        draggable
      }
      console.log(pref)
      this.marker = new google.maps.Marker(pref)
    }
  }

  render () {
    return null
  }
}

Marker.propTypes = {
  position: PropTypes.object,
  map: PropTypes.object
}

Marker.defaultProps = {
  name: 'Marker'
}

export default Marker
