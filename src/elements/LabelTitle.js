import styled from 'styled-components'

import Label from './Label'

const LabelTitle = styled(Label)`
  width: ${props => props.width || '100px'};
  font-size: ${props => props.fontSize || props.theme.fontSize.medium};
  font-weight: normal;
`

export default LabelTitle
