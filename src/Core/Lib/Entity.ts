import { generateUUID } from 'Core/Lib/GenerateUUID'

export abstract class Entity<T> {
  constructor(props: Partial<T>) {
    this.validate(props)
    this.initialize(props)
  }

  protected abstract validate(props: unknown): void
  protected abstract initialize(props: unknown): void

  protected genUUID() {
    return generateUUID()
  }

  protected initOrDefaultTime(property: Date) {
    return property ? property : new Date()
  }
}
