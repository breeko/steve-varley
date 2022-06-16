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
    <StyledHeader showshadow={showTitle ? "true" : "false"}>
      <Row>
        <Col xs={6} sm={6} md={0} style={{textAlign: "left"}}>
          { showTitle && <StyledHeaderIcons direction="horizontal" style={{float: "left"}} >
            <Link href="/">
              <a>
                <BiHome size="30px"/>
              </a>
            </Link>
          </StyledHeaderIcons> }
        </Col>
        <Col xs={0} sm={0} md={22}>
          { showTitle && 
            <StyledHeaderTitle center={false} color="light">
              <Link href="/">
<<<<<<< HEAD
                <a>Steve Varley Show</a>
=======
                <a>Steve Varley</a>
>>>>>>> 9edd31af24fdc202c3144a3d5cd934a427074d41
              </Link>
            </StyledHeaderTitle>
            }
          </Col>
        <Col xs={18} md={2}>
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
