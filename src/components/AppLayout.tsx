import { Spin } from 'antd';
import React, { ReactNode } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import { StyledInnerLayout, StyledLayout } from './style';

type Props = {
  sider?: ReactNode
  children?: ReactNode
  isLoading?: boolean
}

const AppLayout = ({ children, sider, isLoading }: Props) => (
  <StyledLayout>
    <AppHeader/>
    <StyledInnerLayout>
      {sider}
      <Spin spinning={isLoading === true} size="large">
        {children}
      </Spin>
    </StyledInnerLayout>
    <AppFooter />
  </StyledLayout>
)

export default AppLayout
