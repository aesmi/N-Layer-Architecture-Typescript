export class CoreValidationException extends Error {
  constructor(message: string = 'Validation in entity went wrong') {
    super(message)
  }
}
