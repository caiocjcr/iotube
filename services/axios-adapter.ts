import axios, { AxiosInstance, AxiosResponse } from 'axios'
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

  private async request<R>(
    req: Promise<AxiosResponse>
  ): Promise<HttpResponse<R>> {
    try {
      const { data: body, status: statusCode } = await req
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

  async get<R, P>({ url, params }: HttpGetParams<P>): Promise<HttpResponse<R>> {
    const response = await this.request<R>(
      this.instance.get<R>(url, {
        params,
      })
    )

    return response
  }

  async post<R, B>({
    url,
    body: data,
  }: HttpPostParams<B>): Promise<HttpResponse<R>> {
    const response = await this.request<R>(this.instance.post(url, data))

    return response
  }
}

export default AxiosHttpAdapter
