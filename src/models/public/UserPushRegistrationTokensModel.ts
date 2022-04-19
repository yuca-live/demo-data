import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('user_push_registration_tokens')
export class UserPushRegistrationTokensModel {
  @Random('{{lorem.word}}')
  static user_id: string

  @Random('{{lorem.word}}')
  static push_registration_token: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static active: string
}