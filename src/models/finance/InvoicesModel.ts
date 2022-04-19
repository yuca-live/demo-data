import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('invoices')
export class InvoicesModel {
  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{lorem.word}}')
  static status: string

  @Random('{{datatype.number(100000)}}')
  static ref_month: string

  @Random('{{lorem.word}}')
  static due_date: string

  @Random('{{datatype.number(100000)}}')
  static ref_year: string

  @Random('{{lorem.word}}')
  static close_date: string

  @Random('{{lorem.word}}')
  static open_date: string

  @Fixed(0)
  static value_rental_cents: string

  @Fixed(0)
  static value_utilities_cents: string

  @Fixed(0)
  static value_yuca_service_tax_cents: string

  @Fixed(0)
  static value_yuca_split_cents: string

  @Fixed(0)
  @FillInFrequency(50)
  static total_value_cents: string

  @Fixed(true)
  @FillInFrequency(50)
  static is_approved: string

  @Fixed(false)
  @FillInFrequency(50)
  static is_first: string

  @Fixed(false)
  @FillInFrequency(50)
  static is_last: string

  @Fixed(0)
  static value_landlord_split_cents: string

  @Fixed('boleto')
  static payment_method: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static deleted_at: string
}