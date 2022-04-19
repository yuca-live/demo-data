import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('supply_leads')
export class SupplyLeadsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static real_estate_broker_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static business_type: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static building_type: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static condominium_fee: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static price: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static size: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static zip_code: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static city: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static address: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static number: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static complement: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static owner_national_id: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static num_bedrooms: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static num_bathrooms: string

  @Fixed(false)
  @FillInFrequency(50)
  static possible_duplicate: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static iptu_value: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static parking_spaces: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static floor_plan_url: string

  @Fixed(false)
  @FillInFrequency(50)
  static yuca_team: string

  @Fixed('')
  @FillInFrequency(50)
  static ad_link: string

  @Fixed('not provided')
  static pipedrive_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static source: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static grower_email: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string
}