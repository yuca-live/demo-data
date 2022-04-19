import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('ops_units')
export class OpsUnitsModel {
  @Random('{{lorem.word}}')
  static ops_building_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static lead_id: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static floor: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static number: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static complement: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static business_type: string

  @Random('{{lorem.word}}')
  static yuca_company: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static pet_friendly: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static launch_date: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static unit_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static contract_signature_date: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static total_size: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static total_size_unit: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static yuca_company_id: string
}