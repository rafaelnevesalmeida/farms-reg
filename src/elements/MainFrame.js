import styled from 'styled-components'

import Container from './Container'

const MainFrame = styled(Container)`
  width: ${props => props.width || 'auto'};
  margin-top: ${props => props.marginTop || null};
  margin-bottom: ${props => props.marginBottom || null};
  margin-left: ${props => props.marginLeft || null};
  margin-right: ${props => props.marginRight || null};
  padding-top: ${props => props.paddingTop || '15px'};
  padding-bottom: ${props => props.paddingBottom || '15px'};
  padding-right: ${props => props.paddingRight || '15px'};
  padding-left: ${props => props.paddingLeft || '15px'};
`

export default MainFrame
