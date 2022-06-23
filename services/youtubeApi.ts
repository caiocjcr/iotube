import axios from 'axios'

const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  },
})

export default youtubeApi
