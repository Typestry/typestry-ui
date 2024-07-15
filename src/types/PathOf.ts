export type PathOf<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ?
            | `${K}`
            | (PathOf<T[K]> extends infer R
                ? R extends never
                  ? never
                  : `${K}.${R & string}`
                : never)
        : never
    }[keyof T]
  : never
