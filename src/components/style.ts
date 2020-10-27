import { Card, Layout, Space } from "antd"
import styled from "styled-components"
import Colors from "../utils/colors"

const { Header, Content, Footer } = Layout

export const StyledMediaCard = styled(Card)`
  width: 100%;
  height: 35vh;
  img {
    object-fit: cover;
    width: 100%;
    height: 25vh;
  }
`

export const StyledContent = styled(Content)`
  margin: 10px;
`

export const StyledHeader = styled(Header)<{showshadow: "true" | "false"}>`
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 64px;
  font-size: 24px;
  text-align: center;
  background-color: ${Colors.red};
  color: ${Colors.white};
  box-shadow: ${({showshadow}) => showshadow === "true" ? "0px 0px 3px 3px rgba(41,41,41,0.15)" : "inherit"};
  & > div {
    align-items: center;
  }
`

export const StyledHeaderTitle = styled.div<{center?: boolean}>`
  margin: 0px;
  text-align: ${({center}) => center ? "center" : "left"};
  font-size: 40px;
  font-family: Ultra, serif;
  color: ${Colors.white};
  .a {
    cursor: pointer; 
  }
`

export const StyledHeaderIcons = styled(Space)`
  cursor: pointer;
  > div > a {
    color: ${Colors.white};
    margin-left: 15px;
    :hover {
      /* background-color: green; */
    }
  }
`

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background-color: white;
  /* background-image: url("45-degree-fabric-dark.png") */
  /* background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%) */
`

export const StyledInnerLayout = styled(Layout)`
  padding-top: 64px; /* height of header */
`

export const StyledFooter = styled(Footer)`
  text-align: center;
  background-color: ${Colors.red};
  color: white;
  font-size: 20px;
`
