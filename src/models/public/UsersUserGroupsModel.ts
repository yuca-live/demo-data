import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('users_user_groups')
export class UsersUserGroupsModel {
  @Random('{{lorem.word}}')
  static user_id: string

  @Random('{{lorem.word}}')
  static user_group: string
}