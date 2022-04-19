import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('discounts')
export class DiscountsModel {
  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static description: string

  @Random('{{datatype.boolean}}')
  static recurrent: string

  @Random('{{lorem.word}}')
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static end_date: string

  @Fixed('yuca')
  @FillInFrequency(50)
  static beneficiary: string
}