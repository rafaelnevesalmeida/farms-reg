import styled from 'styled-components'

import Button from './Button'

const ButtonMedium = styled(Button)`
  width: ${props => props.width || '100px'};
`

export default ButtonMedium
