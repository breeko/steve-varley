import { Col, Row } from "antd"
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
        <Col xs={8} sm={8} md={0} style={{textAlign: "left"}}>
          <StyledHeaderIcons direction="horizontal" >
            <Link href="/">
              <a>
                <BiHome size="30px"/>
              </a>
            </Link>
          </StyledHeaderIcons>
        </Col>
          <Col xs={0} sm={0} md={22}>
          { showTitle && 
            <Link href="/">
              <StyledHeaderTitle center={false}>
                <div>Steve Varley Reviews</div>
              </StyledHeaderTitle>
            </Link>
            }
          </Col>
        <Col xs={16} md={2}>
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
