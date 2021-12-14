import React from 'react'
import { Container } from './styles'

const Row: React.FC = ({ children, ...rest }) => {
  return (
    <Container className="row" {...rest}>
      {children}
    </Container>
  )
}
export default Row
