import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('ops_unit_deals')
export class OpsUnitDealsModel {
  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static yuca_company_id: string

  @Random('{{lorem.word}}')
  static ops_unit_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static acquisition_cost_cents: string

  @Random('{{lorem.word}}')
  static contract_start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static contract_end_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static contract_url: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static renovation_cost_cents: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static ffe_cost_cents: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static renovation_start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static renovation_end_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static owner_name: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static owner_email: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static owner_cpf: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static iptu_value_cents: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static condominium_value_cents: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static expenditure_value_cents: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static yuca_service_tax_cents: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static tenant_text: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static observations: string

  @Fixed(false)
  @FillInFrequency(50)
  static has_commissioning: string

  @Fixed(true)
  @FillInFrequency(50)
  static should_create_boleto: string

  @Fixed(true)
  @FillInFrequency(50)
  static should_process_payment: string
}