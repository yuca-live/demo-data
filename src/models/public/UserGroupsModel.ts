import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('user_groups')
export class UserGroupsModel {
  @Random('{{lorem.word}}')
  static group: string

  @Random('{{lorem.word}}')
  static slug: string
}