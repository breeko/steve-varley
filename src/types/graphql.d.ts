import { MEDIA_TYPE, VIDEO_TYPE } from "../API";

interface Video {
  __typename: "Video";
  id: string;
  type: VIDEO_TYPE;
  name: string;
  lengthSeconds: number;
  published: string;
  path: string;
  season: number | null;
  episode: number | null;
  score: number | null;
  createdAt: string;
  updatedAt: string;
}

interface Media {
  __typename: "Media";
  id: string;
  type: MEDIA_TYPE;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface MediaFull {
  __typename: "Media";
  id: string;
  type: MEDIA_TYPE;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  videos: Video[]
}

interface VideoFull {
  __typename: "Video";
  id: string;
  type: VIDEO_TYPE;
  name: string;
  lengthSeconds: number;
  published: string;
  path: string;
  season: number | null;
  episode: number | null;
  score: number | null;
  createdAt: string;
  updatedAt: string;
  media: {
    id: string
    name: string
    image: string
    type: MEDIA_TYPE
  }
}
