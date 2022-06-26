import { PageInfo, Thumbnails } from './youtubeApi'

export type SearchVideosPayload = {
  q: string
  part: string
  pageToken?: string
  maxResults?: number
}

export type SearchVideosResponse = {
  kind: string
  etag: string
  nextPageToken: string
  prevPageToken?: string
  regionCode: string
  pageInfo: PageInfo
  items: FoundVideo[]
}

export type GetVideoResponse = {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: VideoWithPlayer[]
}

export type GetVideoPayload = {
  part: string
  id: string
}

export type FoundVideo = {
  kind: string
  etag: string
  id: VideoIds
  snippet: VideoSnippet
}

export type VideoWithPlayer = FoundVideo & { player: Player }

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

export type Player = {
  embedHtml: string
}
