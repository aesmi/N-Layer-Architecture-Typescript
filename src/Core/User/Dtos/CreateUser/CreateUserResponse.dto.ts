export class CreateUserResponseDto {
  id: string
  name: string
  createdAt: Date

  constructor(payload: CreateUserResponseDto) {
    this.id = payload.id
    this.name = payload.name
    this.createdAt = payload.createdAt
  }
}
