import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('user_types')
export class UserTypesModel {
  @Random('{{lorem.word}}')
  static type: string
}