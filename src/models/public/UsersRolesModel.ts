import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('users_roles')
export class UsersRolesModel {
  @Random('{{lorem.word}}')
  static user_id: string

  @Random('{{lorem.word}}')
  static role_id: string
}