import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('rooms')
export class RoomsModel {
  @Random('{{lorem.word}}')
  static unit_id: string

  @Random('{{lorem.word}}')
  static slug: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  static size: string

  @Random('{{lorem.word}}')
  static size_unit: string

  @Random('{{datatype.boolean}}')
  static shared: string

  @Fixed('{}'::jsonb)
  static details: string

  @Random('{{lorem.word}}')
  static images: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static price: string

  @Random('{{datatype.boolean}}')
  static available: string

  @Random('{{datatype.boolean}}')
  static suite: string

  @Fixed('2021-09-03'::date)
  static availability_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static discount: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static medium_stay_price_rules_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static ops_room_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static blueprint_for_contract: string
}