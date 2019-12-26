import styled from 'styled-components'

const Button = styled.div`
  border: 0px;
  margin: 0px;

  height: ${props => props.height || '100%'};
  width: ${props => props.width || null};
  padding-top: ${props => props.paddingTop || '3px'};
  padding-right: ${props => props.paddingRight || '15px'};
  padding-left: ${props => props.paddingLeft || '15px'};
  padding-bottom: ${props => props.paddingBottom || '6px'};
  background-color: ${props => props.backgroundColor || props.theme.backgroundColor.button};

  margin-top: ${props => props.marginTop || '5px'};
  margin-bottom: ${props => props.marginBottom || '5px'};
  margin-left: ${props => props.marginLeft || '5px'};
  margin-right: ${props => props.marginRight || '5px'};

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
