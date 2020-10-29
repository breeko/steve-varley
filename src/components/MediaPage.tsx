
import { AutoComplete, Col, Divider, Row } from "antd"
import { debounce } from "lodash"
import React, { useCallback, useEffect, useState } from "react"
import AppLayout from "../../src/components/AppLayout"
import MediaCard from "../../src/components/MediaCard"
import { StyledContent } from "../../src/components/style"
import { Media } from "../types/graphql"

interface MediaPageProps {
  media: Media[]
  type: "tv" | "movies"
  isLoading: boolean
}

const MediaPage: React.FunctionComponent<MediaPageProps> = ({ media, type, isLoading }) => {

  const [filteredMedia, setFilteredMedia] = useState<Media[]>(media)
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    debounceSearch(search)
  }, [media, search])

  const debounceSearch = useCallback(debounce((searchString: string) => {
    
    const f = searchString.length === 0 ? media : media.filter(s => s.name.toLowerCase().search(searchString.toLowerCase()) !== -1)
    if (f.length > 0) {
      setFilteredMedia(f)
    }
  }, 500), [media, search])


  return(
    <AppLayout isLoading={isLoading}>
      <StyledContent>
        <AutoComplete
          autoFocus
          style={{width: "100%"}}
          options={media.map(tv => ({value: tv.name}))}
          placeholder="Search"
          filterOption={(inputValue, option) =>
            option?.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
          }
          onSelect={s => setSearch(s)}
          onSearch={s => setSearch(s)}
          
        />
        <Divider />
        <Row gutter={[16, 16]}>
          {filteredMedia.map(show => (
            <Col xs={24} sm={12} md={8} lg={6} key={show.name}>
              <MediaCard baseUrl={type} media={show}/>
            </Col>
          ))}
        </Row>
      </StyledContent>
    </AppLayout>
  )
}

export default MediaPage
