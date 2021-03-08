export class CreateUserRequestDto {
  public name: string

  constructor(payload: CreateUserRequestDto) {
    this.name = payload.name
  }
}
