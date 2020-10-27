import { Space } from "antd"
import Link from "next/link"
import React from "react"
import { FiGithub, FiMail } from "react-icons/fi"
import Colors from "../utils/colors"
import { StyledFooter } from "./style"

const AppFooter = () => {
  return(
    <StyledFooter>
      <Space direction="horizontal">
        <Link href="https://www.github.com/breeko/steve-varley">
          <a>
            <FiGithub color={Colors.white} size="20px"/>
          </a>
        </Link>
        <Link href="mailto:stevevarleyshow@gmail.com">
          <a>
            <FiMail color={Colors.white} size="20px"/>
          </a>
        </Link>
      </Space>
    </StyledFooter>
  )
}

export default AppFooter
