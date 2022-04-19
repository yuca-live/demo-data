import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('invoice_lines')
export class InvoiceLinesModel {
  @Random('{{lorem.word}}')
  static invoice_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static yukers_service_id: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  static status: string

  @Random('{{lorem.word}}')
  static due_date: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static end_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static fine_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static discount_id: string

  @Fixed('')
  static hash: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static credit_id: string

  @Fixed('yuca')
  @FillInFrequency(50)
  static beneficiary: string
}