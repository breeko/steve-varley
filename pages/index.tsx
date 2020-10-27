import { Col, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import { BiMicrophone, BiMovie, BiTv } from 'react-icons/bi'
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi"
import { RiPaypalLine } from "react-icons/ri"
import AppLayout from "../src/components/AppLayout"
import LatestVideos from '../src/components/landing/LatestVideos'
import { StyledHeaderTitle } from '../src/components/style'
import Colors from '../src/utils/colors'
import { MediaLinks } from '../src/utils/mediaLinks'
import { IconRow, MainLink, MainTagLine, MediaLink, RoundImage, SplashContainer } from '../src/style'

const IndexPage: React.FunctionComponent = () => {
  return(
    <AppLayout >
      <Row style={{margin: "0px", backgroundColor: "#b13633"}}>
        <Col xs={24}>
          <SplashContainer size="large">
            <Space direction="horizontal">
              <RoundImage src="/steve-varley-animated.jpg" alt="Steve Varley"></RoundImage>
              <StyledHeaderTitle center={false}>
                Steve<br/>Varley<br/>Reviews
              </StyledHeaderTitle>
            </Space>
          </SplashContainer>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <MainTagLine>
            <Space direction="vertical">
            Honest, genuine, funny reviews
            <Space direction="horizontal">
              <Link href={MediaLinks.youtube}>
                <a>
                  <MediaLink>
                    <FiYoutube size={40} color={Colors.black}/>
                  </MediaLink>
                </a>
              </Link>
              <Link href={MediaLinks.twitter}>
                <a>
                  <MediaLink>
                    <FiTwitter size={40} color={Colors.black}/>
                  </MediaLink>
                </a>
              </Link>
              <Link href={MediaLinks.instagram}>
                <a>
                  <MediaLink>
                    <FiInstagram size={40} color={Colors.black}/>
                  </MediaLink>
                </a>
              </Link>
              <Link href={MediaLinks.paypal}>
                <a>
                  <MediaLink>
                    <RiPaypalLine size={40} color={Colors.black}/>
                  </MediaLink>
                </a>
              </Link>
            </Space>
          </Space>
          </MainTagLine>
        </Col>
      </Row>
      <IconRow gutter={[16, 16]} align="middle" justify="space-around">
        <Col xs={24} sm={8}>
          <Link href="/tv">
            <a>
              <Space direction="vertical">
                <BiTv size={60} color={Colors.white}/>
                <MainLink white>Television</MainLink>
              </Space>
            </a>
          </Link>
        </Col>
        <Col xs={24} sm={8}>
          <Link href="/movies">
            <a>
              <Space direction="vertical">
                <BiMovie size={60} color={Colors.white}/>
                <MainLink white>Movies</MainLink>
              </Space>
            </a>
          </Link>
        </Col>
        <Col xs={24} sm={8}>
          <Link href="/interviews">
            <a>
              <Space direction="vertical">
                <BiMicrophone size={60} color={Colors.white}/>
                <MainLink white>Interviews</MainLink>
              </Space>
            </a>
          </Link>
        </Col>
      </IconRow>
      <LatestVideos />
    </AppLayout>
  )
}

export default IndexPage
