export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}

export interface HttpResponse<T> {
  statusCode: HttpStatusCode
  body: T
}

export interface HttpGetParams<P> {
  url: string
  params?: P
}

export interface HttpPostParams<B> {
  url: string
  body: B
}

export interface HttpClient<I> {
  instance: I
  get: <R, P = Record<string, unknown>>(
    params: HttpGetParams<P>
  ) => Promise<HttpResponse<R>>
  post: <R, B = Record<string, unknown>>(
    params: HttpPostParams<B>
  ) => Promise<HttpResponse<R>>
}
