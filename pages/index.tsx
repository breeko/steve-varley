import { Col, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import { BiMicrophone, BiMovie, BiTv } from 'react-icons/bi'
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi"
import { BiCameraMovie } from "react-icons/bi"
import TextLoop from "react-text-loop"
import AppLayout from "../src/components/AppLayout"
import LatestVideos from '../src/components/landing/LatestVideos'
import { StyledHeaderTitle } from '../src/components/style'
import { IconRow, MainLink, MainTagLine, MediaLink, RoundImage, SplashContainer } from '../src/style'
import Colors from '../src/utils/colors'
import { MediaLinks } from '../src/utils/mediaLinks'

const IndexPage: React.FunctionComponent = () => {
  return (
    <AppLayout >
      <Row style={{ backgroundColor: Colors.red }}>
        <Col xs={0} sm={24}>
          <SplashContainer padded={true} size="large">
            <Space direction="horizontal">
              <RoundImage src="/steve-varley-animated.png" alt="Steve Varley"></RoundImage>
              <StyledHeaderTitle center={false} color="light">
                Steve<br />Varley<br />Show
              </StyledHeaderTitle>
            </Space>
          </SplashContainer>
        </Col>
        <Col xs={24} sm={0}>
          <SplashContainer padded={false} size="large">
            <Space direction="horizontal">
              <RoundImage src="/steve-varley-animated.png" alt="Steve Varley"></RoundImage>
            </Space>
          </SplashContainer>
        </Col>
        <Col xs={24} sm={0}>
          <StyledHeaderTitle center={true} color="light">
            Steve Varley Show

          </StyledHeaderTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <MainTagLine>
            <Space direction="vertical" style={{ width: "100%" }}>
              <span>Honest, genuine, funny&nbsp;
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                  <span>television reviews</span>
                  <span>movie reviews</span>
                  <span>celebrity interviews</span>
                </TextLoop>
              </span>
              <Space direction="horizontal">
                <Link href={MediaLinks.youtube}>

                  <MediaLink>
                    <FiYoutube size={40} color={Colors.black} />
                  </MediaLink>
                </Link>
                <Link href={MediaLinks.twitter}>
                  <MediaLink>
                    <FiTwitter size={40} color={Colors.black} />
                  </MediaLink>
                </Link>
                <Link href={MediaLinks.instagram}>
                  <MediaLink>
                    <FiInstagram size={40} color={Colors.black} />
                  </MediaLink>
                </Link>
                <Link href={MediaLinks.imdb}>
                  <MediaLink>
                    <BiCameraMovie size={40} color={Colors.black} />
                  </MediaLink>
                </Link>
              </Space>
            </Space>
          </MainTagLine>
        </Col>
      </Row>
      <IconRow align="middle" justify="space-around">
        <Col xs={24} sm={8}>
          <Link href="/tv">
            <Space direction="vertical">
              <BiTv size={60} color={Colors.white} />
              <MainLink white >
                <div className="glitch" data-text="Television">Television</div>
              </MainLink>
            </Space>
          </Link>
        </Col>
        <Col xs={24} sm={8}>
          <Link href="/movies">
            <Space direction="vertical">
              <BiMovie size={60} color={Colors.white} />
              <MainLink white>
                <div className="logo-1">Movies</div>
              </MainLink>
            </Space>
          </Link>
        </Col>
        <Col xs={24} sm={8}>
          <Link href="/interviews">
            <Space direction="vertical">
              <BiMicrophone size={60} color={Colors.white} />
              <MainLink white>
                <div className="flash">Interviews</div>
              </MainLink>
            </Space>
          </Link>
        </Col>
      </IconRow>
      <LatestVideos />
    </AppLayout>
  )
}

export default IndexPage
