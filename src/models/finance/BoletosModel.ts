import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('boletos')
export class BoletosModel {
  @Random('{{lorem.word}}')
  static invoice_id: string

  @Random('{{lorem.word}}')
  static issuer_invoice_id: string

  @Random('{{lorem.word}}')
  static issuer: string

  @Random('{{lorem.word}}')
  static status: string

  @Random('{{lorem.word}}')
  static url: string

  @Random('{{lorem.word}}')
  static barcode: string

  @Random('{{lorem.word}}')
  static digitable_line: string

  @Random('{{lorem.word}}')
  static due_date: string
}