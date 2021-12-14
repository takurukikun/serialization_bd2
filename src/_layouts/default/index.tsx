import React from 'react'

import Wrapper from '../../components/Wrapper'

import ContentWrapper from '../../components/ContentWrapper'
import Sidebar from '../../components/Sidebar'

// import { NavbarCustom } from '~/components/NavbarCustom'
// interface IDefaultLayout {
//   children: JSX.Element
// }

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      {/* <NavbarCustom /> */}
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  )
}
export default DefaultLayout
