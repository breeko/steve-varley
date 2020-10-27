import React from "react"
import { StyledFooter } from "./style"
import { Button, Space, Typography } from "antd"
import Link from "next/link"
import { FiGithub, FiMail } from "react-icons/fi"
import Colors from "../utils/colors"

const { Text } = Typography

const AppFooter = () => {
  return(
    <StyledFooter>
      <Space direction="horizontal">
        <Link href="https://www.github.com/breeko/steve-varley">
          <a>
            <FiGithub color={Colors.white} size="20px"/>
          </a>
        </Link>
        <Link href="mailto:branko.blagojevic@gmail.com">
          <a>
            <FiMail color={Colors.white} size="20px"/>
          </a>
        </Link>
      </Space>
    </StyledFooter>
  )
}

export default AppFooter
