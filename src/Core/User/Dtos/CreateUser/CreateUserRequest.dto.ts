export class CreateUserRequestDto {
  name: string

  constructor(payload: CreateUserRequestDto) {
    this.name = payload.name
  }
}
