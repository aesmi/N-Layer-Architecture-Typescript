import { injectable } from 'inversify'

@injectable()
export class LocalDatabase {
  create<T>(payload: T) {
    return payload as T
  }
}
