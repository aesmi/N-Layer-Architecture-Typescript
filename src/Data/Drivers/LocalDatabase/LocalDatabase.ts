export class LocalDatabase {
  private state: Record<string, any> = {
    users: [],
  }

  create<T>(entity: 'users', payload: T) {
    this.state[entity] = payload

    return this.state[entity]
  }
}
