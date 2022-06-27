export type Thumbnails = {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
}

export type Thumbnail = {
  url: string
  width: number
  height: number
}

export type PageInfo = {
  totalResults: number
  resultsPerPage: number
}

export type YoutubeResponseHead = {
  kind: string
  etag: string
}

export type PaginatedYoutubeResponseHead<T> = YoutubeResponseHead & {
  nextPageToken?: string
  prevPageToken?: string
  regionCode: string
  pageInfo: PageInfo
  items: T[]
}
