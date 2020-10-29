import { Spin } from 'antd';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import { StyledInnerLayout, StyledLayout } from './style';

type Props = {
  sider?: ReactNode
  children?: ReactNode
  showHeaderTitle?: boolean
  isLoading?: boolean
}

const AppLayout = ({ children, sider, isLoading }: Props) => (
  <StyledLayout>
    <Head>
      <title>Steve Varley Reviews</title>
      <meta property="og:title" content="Steve Varley Reviews" key="title" />
      <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Concert+One&family=Lobster&family=Ultra&display=swap" rel="stylesheet" />
      <link rel="shortcut icon" href="/public/favicon.ico" />
    </Head>
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
