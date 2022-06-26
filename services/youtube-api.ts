import { SearchVideosPayload, SearchVideosResponse } from '@/types'
import axios from 'axios'

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
})

export const searchVideos = async ({
  q,
  maxResults = 10,
  pageToken,
}: SearchVideosPayload): Promise<SearchVideosResponse> => {
  const { data } = await youtubeApi.get<SearchVideosResponse>('/search', {
    params: {
      part: 'snippet',
      q,
      maxResults,
      ...(pageToken ? { pageToken } : {}),
    },
  })
  return data
}

export default youtubeApi
