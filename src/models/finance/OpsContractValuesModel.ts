import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('ops_contract_values')
export class OpsContractValuesModel {
  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static value: string

  @Random('{{lorem.word}}')
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static end_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static readjustment_index: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static readjustment_value: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static readjustment_value_type: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static value_cents: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static readjustment_value_cents: string
}