import Col from 'components/Bootstrap/Col'
import React from 'react'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  col?: string
  // reponsividade breakpoints (Small >=576px)
  sm?: string
  // reponsividade breakpoints (Medium >=768px)
  md?: string
  // reponsividade breakpoints (Large >=992px)
  lg?: string
  // reponsividade breakpoints (Extra Large >=1200px)
  xl?: string
  className?: string
  hidden?: boolean
  label?: string
}

const Input: React.FC<IInput> = ({
  col = '12',
  md = '12',
  sm = '12',
  lg = '6',
  xl = '6',
  className,
  label,
  name,
  ...rest
}) => {
  return (
    <Col col={col} md={md} sm={sm} lg={lg} xl={xl}>
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input {...rest} className={`form-control ${className}`} />
      </div>
    </Col>
  )
}

export default Input
