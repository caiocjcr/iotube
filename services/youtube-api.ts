import {
  SearchVideosPayload,
  SearchVideosResponse,
  GetVideosPayload,
  GetVideosResponse,
} from '@/types'
import axios from 'axios'
import AxiosHttpAdapter from './axios-adapter'

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
})

const httpClient = new AxiosHttpAdapter(youtubeApi)

export const searchVideos = async ({
  q,
  maxResults = 10,
  pageToken,
  part,
}: SearchVideosPayload): Promise<SearchVideosResponse> => {
  const { body } = await httpClient.get<
    SearchVideosResponse,
    SearchVideosPayload
  >({
    url: '/search',
    params: {
      part,
      q,
      maxResults,
      ...(pageToken ? { pageToken } : {}),
    },
  })
  return body
}

export const getVideos = async ({
  part,
  pageToken,
  maxResults = 10,
  chart,
}: GetVideosPayload): Promise<GetVideosResponse> => {
  const { body } = await httpClient.get<GetVideosResponse, GetVideosPayload>({
    url: '/videos',
    params: {
      part,
      maxResults,
      ...(pageToken ? { pageToken } : {}),
      ...(chart ? { chart } : {}),
    },
  })
  return body
}

export default httpClient
