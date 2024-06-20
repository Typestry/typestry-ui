function jsonDeepCopy<T>(data: T) {
  return JSON.parse(JSON.stringify(data)) as T
}

export default jsonDeepCopy
