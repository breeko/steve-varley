import React, { useState } from "react"
import { Button, Layout, Space } from "antd"
import { BiLogOut, BiPlus } from "react-icons/bi"
import { Auth } from "aws-amplify"
import { useRouter } from "next/router"

const { Sider } = Layout

interface AdminSiderProps {
  setShowAdd: (s: boolean) => void
}

const AdminSider: React.FunctionComponent<AdminSiderProps> = ({ setShowAdd }) => {
  const router = useRouter()
  return(
    <Sider collapsed style={{backgroundColor: "white", textAlign: "center", padding: "10px"}}>
      <Space direction="vertical">
        <Button icon={<BiPlus/>} size="large" onClick={() => setShowAdd(true)}/>
        <Button icon={<BiLogOut/>} size="large" onClick={() => {Auth.signOut(); router.push("/")}}/>
      </Space>
    </Sider>
  )
}

export default AdminSider