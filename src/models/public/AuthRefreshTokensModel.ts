import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('auth_refresh_tokens')
export class AuthRefreshTokensModel {
  @Random('{{lorem.word}}')
  static refresh_token: string

  @Random('{{lorem.word}}')
  static user_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static platform: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static device_id: string

  @Random('{{lorem.word}}')
  static expires_at: string
}