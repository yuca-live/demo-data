import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('ops_units')
export class OpsUnitsModel {
  @Random('{{lorem.word}}')
  static ops_building_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static lead_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static unit_id: string

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

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static pet_friendly: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static launch_date: string

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

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static parking_spaces: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static num_pets_allowed: string

  @Fixed(true)
  static commission: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static move_in_required_days: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static observation: string

  @Fixed(false)
  static pet_screen: string
}