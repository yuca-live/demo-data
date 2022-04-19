import { Table, Schema, Random, Fixed } from '../../yuca-faker/decorators';

@Schema('public')
@Table('users')
export class UsersModel {
  @Random('{{name.findName}}')
  static name_x: string

  @Random(`{{helpers.replaceSymbolWithNumber(+55119########)}}`)
  static phone: string

  @Random('{{internet.email}}')
  static email: string

  @Random(`{{helpers.replaceSymbolWithNumber(###.###.###-##)}}`)
  static document_number: string

  @Fixed(true)
  static email_verified: string

  @Fixed(0)
  static revision: string

  @Fixed('CPF')
  static document_type: string
}