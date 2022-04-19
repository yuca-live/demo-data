import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('fines')
export class FinesModel {
  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static description: string

  @Random('{{lorem.word}}')
  static start_date: string

  @Fixed('yuca')
  @FillInFrequency(50)
  static beneficiary: string
}