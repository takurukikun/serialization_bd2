import React from 'react'

import { Container } from './styles'
// interface IWrapper {
//   children: JSX.Element
// }

const Wrapper: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Wrapper
