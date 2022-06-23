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
