type OkResult<T> = {
  status: "ok"
  data: T
}

type ErrorResult = {
  status: "error"
  data: undefined
}

type LoadingResult = {
  status: "loading"
  data: undefined
}

export type Result<T> = OkResult<T> | ErrorResult | LoadingResult;