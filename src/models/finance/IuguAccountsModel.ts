import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('iugu_accounts')
export class IuguAccountsModel {
  @Random('{{lorem.word}}')
  static yuca_company_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static account_token: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static iugu_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static slug: string
}