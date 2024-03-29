import { Row } from "antd"
import Title from "antd/lib/typography/Title"
import styled from "styled-components"
import Colors from "./utils/colors"

export const SplashContainer = styled.div<{ padded: boolean, size: "large" | "medium" }>`
  width: ${(p) => p.size === "large" ? "50%" : "35%"};
  margin: auto;
  text-align:center;
  padding: ${p => p.padded ? "20px" : "0px"};
`

export const RoundImage = styled.img`
    border-radius: 50%;
    max-width: 150px;
    width: 35vh;
    background: white;
    box-shadow: 0 0 10px  rgba(255,255,255,0.6);
`

export const MediaLink = styled.div`
  padding: 10px;
  font-size: 24px;
  :hover {
    cursor: pointer;
  };
`


export const MainLink = styled.div<{ white?: boolean }>`
  color: ${({ white }) => white ? Colors.white : Colors.black};
  font-size: 24px;
  :hover {
    cursor: pointer;
  };
`

export const MainTagLine = styled.div`
  font-size: 32px;
  text-align: center;
  padding: 20px;
  color: ${Colors.black};
`

export const LatestVideosRow = styled(Row)`
  text-align: center;
  font-size: 20px;
`

export const IconRow = styled(Row)`
  text-align: center;
  padding: 20px;
  margin: 0px;
  background-color: ${Colors.red} !important;
  :hover {
    cursor: pointer;
    font-style: bold;
  }
`

export const DottedTitle = styled(Title)`
  text-align: center;
  border-style: dotted;
  margin: 10px;
  /* border-color: #FFB20D; */
`
