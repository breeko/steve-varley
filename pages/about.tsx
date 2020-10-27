import Link from 'next/link'
import Layout from '../src/components/AppLayout'
import { Typography } from 'antd'
import React from "react"
import YouTube from 'react-youtube'
import { SplashContainer } from '../src/style'

const { Title } = Typography

const AboutPage: React.FunctionComponent = () => {
  const FAQ_ID = "TyxUWjIP5xY"
  const opts = {
    height: '390',
    width: '640',
  };

  return (
    <Layout>
      <SplashContainer size="medium">
        <Title level={1}>About Steve Varley</Title>
        <YouTube
          videoId={FAQ_ID}                  // defaults -> null
          opts={opts}                        // defaults -> {}
        />
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
      </SplashContainer>
    </Layout>
  )
}

export default AboutPage
