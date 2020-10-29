import { Image, Space } from "antd"
import React from "react"
import AppLayout from "../src/components/AppLayout"
import { StyledHeaderTitle } from "../src/components/style"
import { SplashContainer } from "../src/style"

const NotFound: React.FunctionComponent = () => {
  return(
    <AppLayout showHeaderTitle>
      <SplashContainer size="large">
        <Space direction="horizontal">
        <Image src="/popcorn.png" alt="Popcorn" />
        <StyledHeaderTitle center={false} color="dark">Page<br/>not<br/>found</StyledHeaderTitle>
        </Space>
      </SplashContainer>
    </AppLayout>
  )
}

export default NotFound
