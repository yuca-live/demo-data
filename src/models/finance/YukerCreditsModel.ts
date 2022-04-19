import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('yuker_credits')
export class YukerCreditsModel {
  @Random('{{lorem.word}}')
  static yuker_id: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static description: string

  @Fixed(0)
  @FillInFrequency(50)
  static applied_cents: string

  @Fixed('yuca')
  @FillInFrequency(50)
  static beneficiary: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static meta: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static deleted_at: string

  @Fixed(true)
  @FillInFrequency(50)
  static is_available: string
}