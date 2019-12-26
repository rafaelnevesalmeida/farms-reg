import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  width: 100%
  min-width: 200px;
  max-width: 100%

  margin-top: ${props => props.marginTop || '5px'};
  margin-bottom: ${props => props.marginBottom || '5px'};

  border-radius: 4px;
`

export default Container
