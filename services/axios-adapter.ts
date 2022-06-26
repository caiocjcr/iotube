import axios, { AxiosInstance } from 'axios'
import {
  HttpClient,
  HttpGetParams,
  HttpPostParams,
  HttpResponse,
} from './http-client'

class AxiosHttpAdapter implements HttpClient {
  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  private instance: AxiosInstance

  async get<R, P>({ url, params }: HttpGetParams<P>): Promise<HttpResponse<R>> {
    try {
      const { data: body, status: statusCode } = await this.instance.get<R>(
        url,
        {
          params,
        }
      )
      return { body, statusCode }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw {
          statusCode: error?.response?.status,
          data: error?.response?.data,
        }
      } else {
        throw error
      }
    }
  }

  async post<R, B>({
    url,
    body: data,
  }: HttpPostParams<B>): Promise<HttpResponse<R>> {
    try {
      const { data: body, status: statusCode } = await this.instance.post(
        url,
        data
      )
      return { body, statusCode }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw {
          statusCode: error?.response?.status,
          data: error?.response?.data,
        }
      } else {
        throw error
      }
    }
  }
}

export default AxiosHttpAdapter
