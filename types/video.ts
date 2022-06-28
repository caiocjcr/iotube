import { PaginatedYoutubeResponseHead, Thumbnails } from './youtubeApi'

export type SearchVideosPayload = {
  q: string
  part: string
  pageToken?: string
  maxResults?: number
}

export type SearchVideosResponse = PaginatedYoutubeResponseHead<FoundVideo>

export type GetVideoPayload = {
  part: string
  id: string
}

export type GetVideoResponse = PaginatedYoutubeResponseHead<VideoWithPlayer>

export type GetVideosPayload = {
  part: string
  chart?: 'mostPopular'
  maxResults?: number
  pageToken?: string
}

export type GetVideosResponse = PaginatedYoutubeResponseHead<FoundVideo>

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
  categoryId?: string
}

export type VideoIds = {
  kind: string
  videoId: string
}

export type Player = {
  embedHtml: string
}

export type SearchedVideo = {
  term: string
  when: Date
}
