import styled from 'styled-components'

const RoundContainer = styled.div`
  width: ${props => props.width || 'auto'};
  max-width: ${props => props.maxWidth || 'auto'};
  min-width: ${props => props.minWidth || 'auto'};
  height: ${props => props.height || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};
  margin-top: ${props => props.marginTop || '5px'};
  margin-bottom: ${props => props.marginBottom || null};
  margin-left: ${props => props.marginLeft || null};
  margin-right: ${props => props.marginRight || null};
  padding-top: ${props => props.paddingTop || '5px'};
  padding-bottom: ${props => props.paddingBottom || '5px'};
  padding-right: ${props => props.paddingRight || '5px'};
  padding-left: ${props => props.paddingLeft || '5px'};

  background-color: ${props => props.backgroundColor || null};
  overflow: ${props => props.overFlow || null};

  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-content: ${props => props.alignContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  flex-grow:  ${props => props.flexGrow || '1'};
  flex-shrink: 1;
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-wrap: ${props => props.flexWrap || 'wrap'}; // -reverse;

  border-radius: 4px;
`

export default RoundContainer
