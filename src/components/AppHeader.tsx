import { Button, Col, Row } from "antd"
import Link from "next/link"
import { useRouter } from 'next/router'
import React from "react"
import { BiHome, BiMicrophone, BiMovie, BiTv } from "react-icons/bi"
import { StyledHeader, StyledHeaderIcons, StyledHeaderTitle } from "./style"

const AppHeader: React.FunctionComponent = () => {
  const router = useRouter()

  const showTitle = router.pathname !== "/"

  return(
    <StyledHeader title="Steve Varley Reviews" showshadow={showTitle ? "true" : "false"}>
      <Row>
        <Col xs={8} sm={0}>
          <StyledHeaderIcons direction="horizontal">
            <Button type="link" shape="circle" icon={<BiHome />} size="large" href="/" />
          </StyledHeaderIcons>
        </Col>
          <Col xs={0} sm={22}>
          { showTitle && 
            <Link href="/">
              <StyledHeaderTitle center={false}>
                <a>Steve Varley Reviews</a>
              </StyledHeaderTitle>
            </Link>
            }
          </Col>
        <Col xs={16} sm={2}>
          <StyledHeaderIcons direction="horizontal" style={{float: "right"}}>
            <Link href="/tv">
              <a>
                <BiTv size="30px"/>
              </a>
            </Link>
            <Link href="/movies">
              <a>
                <BiMovie size="30px"/>
              </a>
            </Link>
            <Link href="/interviews">
              <a>
                <BiMicrophone size="30px"/>
              </a>
            </Link>
          </StyledHeaderIcons>
        </Col>        
      </Row>
      <Col>
      
      </Col>
    </StyledHeader>
  )
}

export default AppHeader
