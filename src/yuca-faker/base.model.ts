import { Random, Fixed, Function } from './decorators';
import faker = require("@faker-js/faker/locale/pt_BR");

export class BaseModelClass {
  @Random('{{datatype.uuid}}')
  static id: string
  
  @Function(faker.date.recent)
  static created_at: string

  @Function(faker.date.recent)
  static updated_at: string

  @Fixed(0)
  static version: string
}