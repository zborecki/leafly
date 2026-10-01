export type ResponseAPI<T> = {
  data: T;
}

export type ResponseItemAPI<T> = T & {
  id: number | string;
}
