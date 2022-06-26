import { AxiosInstance } from 'axios'
import {
  HttpClient,
  HttpGetParams,
  HttpPostParams,
  HttpResponse,
} from './http-client'

class AxiosHttpAdapter implements HttpClient<AxiosInstance> {
  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  instance: AxiosInstance

  async get<R, P>({ url, params }: HttpGetParams<P>): Promise<HttpResponse<R>> {
    const { data: body, status: statusCode } = await this.instance.get<R>(url, {
      params,
    })
    return { body, statusCode }
  }

  async post<R, B>({
    url,
    body: data,
  }: HttpPostParams<B>): Promise<HttpResponse<R>> {
    const { data: body, status: statusCode } = await this.instance.post(
      url,
      data
    )
    return { body, statusCode }
  }
}

export default AxiosHttpAdapter
