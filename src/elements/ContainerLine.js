import styled from 'styled-components'

import Container from './Container'

const ContainerLine = styled(Container)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '30px'};
`

export default ContainerLine
