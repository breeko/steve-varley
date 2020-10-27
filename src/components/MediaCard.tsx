import { Card } from "antd"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { StyledMediaCard } from "./style"

const { Meta } = Card

interface MediaCardProps {
  baseUrl: "tv" | "movies"
  media: Media
}

const MediaCard: React.FunctionComponent<MediaCardProps> = ({ media, baseUrl }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${baseUrl}/${media.id}`)
  }

  return(
    <StyledMediaCard
      hoverable
      cover={<img src={media.image} alt={media.name} onClick={handleClick}/>}
      onClick={handleClick}
    >
      <Meta title={media.name} />
    </StyledMediaCard>
  )
}

export default MediaCard