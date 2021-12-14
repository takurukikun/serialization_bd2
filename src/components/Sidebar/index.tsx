import React, { memo, useEffect, useState } from 'react'
import { FaHome, FaUsers, FaDatabase } from 'react-icons/fa'
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar'

import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { ContainerSidebar, Header } from './styled'
import Collapse from './Collapse'

// import { signOut } from '~/store/modules/auth/actions'

const SidebarFunc: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    setCollapsed(isTabletOrMobile)
  }, [isTabletOrMobile])

  return (
    <>
      <Collapse
        collapsed={collapsed}
        mobile={isTabletOrMobile}
        style={
          isTabletOrMobile
            ? {
                left: collapsed ? '20px' : '80px',
                zIndex: '3',
                transition: 'ease-out all .3s',
              }
            : {
                left: collapsed ? '80px' : '230px',
                zIndex: '3',
                transition: 'ease all .3s',
              }
        }
        onClick={() => setCollapsed(!collapsed)}
      />
      <ContainerSidebar>
        <ProSidebar
          style={
            isTabletOrMobile
              ? {
                  boxShadow: '0px 0px 12px 0px #eee',
                  minWidth: '80px',
                  width: '80px',
                  display: collapsed ? 'none' : '',
                }
              : {
                  boxShadow: '0px 0px 12px 0px #eee',
                  minWidth: collapsed ? '80px' : '230px',
                  width: collapsed ? '80px' : '230px',
                }
          }
          collapsed={isTabletOrMobile ? !collapsed : collapsed}
        >
          <SidebarHeader>
            <Header>
              <FaDatabase size="40px" />
            </Header>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem title="Início" icon={<FaHome size="18px" />}>
                Início <Link to="/" />{' '}
              </MenuItem>
              <MenuItem title="Serialização" icon={<FaUsers size="18px" />}>
                Serialização <Link to="/serializacao" />{' '}
              </MenuItem>
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem
                title="Sair"
                onClick={handleSignOut}
                icon={<FaSignOutAlt />}
              >
                Sair
              </MenuItem>
            </Menu>
          </SidebarFooter> */}
        </ProSidebar>
      </ContainerSidebar>
    </>
  )
}

export default memo(SidebarFunc)
