import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('users_permissions')
export class UsersPermissionsModel {
  @Random('{{lorem.word}}')
  static user_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static permissions: string

  @Fixed(true)
  static enabled: string
}