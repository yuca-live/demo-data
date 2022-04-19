import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('transfers')
export class TransfersModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static invoice_id: string

  @Random('{{lorem.word}}')
  static from_company_id: string

  @Random('{{lorem.word}}')
  static to_company_id: string

  @Random('{{lorem.word}}')
  static issuer_transfer_id: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  static transfer_date: string
}