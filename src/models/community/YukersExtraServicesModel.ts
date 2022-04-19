import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('yukers_extra_services')
export class YukersExtraServicesModel {
  @Random('{{lorem.word}}')
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static end_date: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static is_recurrent: string

  @Random('{{datatype.number(100000)}}')
  static original_value_cents: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static frequency: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static week_day: string

  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{lorem.word}}')
  static extra_service_id: string
}