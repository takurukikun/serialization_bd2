import React from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'

interface ICollapse {
  collapsed: boolean
  mobile: boolean
  style: React.CSSProperties
  onClick: () => void
}

const Collapse: React.FC<ICollapse> = ({
  collapsed = false,
  mobile = false,
  style,
  onClick,
}: ICollapse) => {
  return (
    <>
      <button
        style={style}
        onClick={onClick}
        type="button"
        className="collapse-sidebar"
      >
        {!mobile &&
          (collapsed ? (
            <FiChevronsRight size="28" />
          ) : (
            <FiChevronsLeft size="28" />
          ))}
        {mobile &&
          (collapsed ? <FaBars size="17" /> : <FiChevronsLeft size="28" />)}
      </button>
    </>
  )
}
export default Collapse
