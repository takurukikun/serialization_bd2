import React from 'react'
import { Container } from './styles'

interface ICol extends React.HTMLAttributes<HTMLDivElement> {
  col?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
}
const Col: React.FC<ICol> = ({
  // reponsividade breakpoints (Extra small <576px)
  col = '12',
  // reponsividade breakpoints (Small >=576px)
  sm = '12',
  // reponsividade breakpoints (Medium >=768px)
  md = '12',
  // reponsividade breakpoints (Large >=992px)
  lg = '6',
  // reponsividade breakpoints (Extra Large >=1200px)
  xl = '6',
  className = '',
  children,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      className={`col-${col} col-sm-${sm} col-md-${md} col-lg-${lg} col-xl-${xl} ${className}`}
    >
      {children}
    </Container>
  )
}
export default Col
