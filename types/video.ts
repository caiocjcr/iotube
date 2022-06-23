import { PageInfo, Thumbnails } from './youtubeApi'

export type SearchVideosResponse = {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: FoundVideo[]
}

export type FoundVideo = {
  kind: string
  etag: string
  id: VideoIds
  snippet: VideoSnippet
}

export type VideoSnippet = {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export type VideoIds = {
  kind: string
  videoId: string
}
