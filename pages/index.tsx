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
  return(
    <AppLayout >
      <Row style={{backgroundColor: Colors.red}}>
        <Col xs={0} sm={24}>
          <SplashContainer size="large">
            <Space direction="horizontal">
              <RoundImage src="/steve-varley-animated.jpg" alt="Steve Varley"></RoundImage>
              <StyledHeaderTitle center={false} color="light">
                Steve<br/>Varley
              </StyledHeaderTitle>
            </Space>
          </SplashContainer>
        </Col>
        <Col xs={24} sm={0}>
          <SplashContainer size="large">
            <Space direction="horizontal">
              <RoundImage src="/steve-varley-animated.jpg" alt="Steve Varley"></RoundImage>
            </Space>
          </SplashContainer>
        </Col>
        <Col xs={24} sm={0}>
          <StyledHeaderTitle center={true} color="light">
            Steve Varley
          </StyledHeaderTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <MainTagLine>
            <Space direction="vertical" style={{width: "100%"}}>
              <span>Honest, genuine, funny&nbsp;
              <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                <span>television reviews</span>
                <span>movie reviews</span>
                <span>celebrity interviews</span>
              </TextLoop>
              </span>
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
                <Link href={MediaLinks.imdb}>
                  <a>
                    <MediaLink>
                      <BiCameraMovie size={40} color={Colors.black}/>
                    </MediaLink>
                  </a>
                </Link>
              </Space>
            </Space>
          </MainTagLine>
        </Col>
      </Row>
      <IconRow align="middle" justify="space-around">
        <Col xs={24} sm={8}>
          <Link href="/tv">
            <a>
              <Space direction="vertical">
                <BiTv size={60} color={Colors.white} />
                <MainLink white >
                  <div className="glitch" data-text="Television">Television</div>
                </MainLink>
              </Space>
            </a>
          </Link>
        </Col>
        <Col xs={24} sm={8}>
          <Link href="/movies">
            <a>
              <Space direction="vertical">
                <BiMovie size={60} color={Colors.white}/>
                <MainLink white>
                  <div className="logo-1">Movies</div>
                </MainLink>
              </Space>
            </a>
          </Link>
        </Col>
        <Col xs={24} sm={8}>
          <Link href="/interviews">
            <a >
              <Space direction="vertical">
                <BiMicrophone size={60} color={Colors.white}/>
                <MainLink white>
                  <div className="flash">Interviews</div>
                </MainLink>
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
