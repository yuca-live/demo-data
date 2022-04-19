import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('yuker_credits_lock')
export class YukerCreditsLockModel {
  @Random('{{lorem.word}}')
  static invoice_id: string

  @Random('{{lorem.word}}')
  static yuker_credit_id: string

  @Fixed(0)
  static value_cents: string
}