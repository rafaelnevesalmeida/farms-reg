import styled from 'styled-components'

const Button = styled.div`
  border: 0px;
  margin: 0px;

  height: ${props => props.height || '100%'};
  width: ${props => props.width || null};
  padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  background-color: ${props => props.backgroundColor || props.theme.backgroundColor.button};

  font-family: ${props => props.theme.fontFamily.default || null};
  font-size: ${props => props.fontSize || props.theme.fontSize.small};
  font-weight: bold;

  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow:  ${props => props.grow || 0};
  cursor: default;
`

export default Button
