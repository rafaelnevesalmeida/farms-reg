import styled from 'styled-components'

const Header = styled.div`
  height: ${props => props.height || '30px'};
  width: ${props => props.width || 'auto'};
  padding-top: ${props => props.paddingTop || null};
  margin-bottom: ${props => props.marginBottom || '10px'};
 

  display: flex;
  justify-content: ${props => props.justifyContent || 'flex-start'};
`

export default Header
