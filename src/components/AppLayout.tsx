import React, { ReactNode } from 'react'
import AppHeader from './AppHeader';
import { StyledContent, StyledInnerLayout, StyledLayout } from './style';
import AppFooter from './AppFooter';
import Head from 'next/head'

type Props = {
  sider?: ReactNode
  children?: ReactNode
  showHeaderTitle?: boolean
}

const AppLayout = ({ children, sider }: Props) => (
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
      {children}
    </StyledInnerLayout>
    <AppFooter />
  </StyledLayout>
)

export default AppLayout
