import { Image, Typography } from "antd"
import React from "react"
import AppLayout from "../src/components/AppLayout"
import { SplashContainer } from "./style"

const { Title } = Typography

const NotFound: React.FunctionComponent = () => {
  return(
    <AppLayout showHeaderTitle>
      <SplashContainer size="medium">
        <Image src="/popcorn.png" alt="Popcorn" />
        <Title>Page not found</Title>
      </SplashContainer>
    </AppLayout>
  )
}

export default NotFound
