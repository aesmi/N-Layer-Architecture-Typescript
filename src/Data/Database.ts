// TODO: Create Adapter
export class Database {
  create<T>(payload: T) {
    return payload as T
  }
}

export const database = new Database()
