/* eslint-disable react/button-has-type */
import Col from 'components/Bootstrap/Col'
import React from 'react'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  divClass?: string
}

const Button: React.FC<IButton> = ({
  col = '12',
  md = '12',
  sm = '12',
  lg = '6',
  xl = '6',
  className,
  label,
  children,
  divClass,
  name,
  ...rest
}) => {
  return (
    <Col col={col} md={md} sm={sm} lg={lg} xl={xl} className={divClass}>
      <div className="form-group w-100">
        {label && <label htmlFor={name}>{label}</label>}
        <button {...rest} className={`form-control ${className}`}>
          {children}
        </button>
      </div>
    </Col>
  )
}

export default Button
