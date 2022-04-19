import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('units')
export class UnitsModel {
  @Random('{{lorem.word}}')
  static building_id: string

  @Random('{{lorem.word}}')
  static slug: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  static floor: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static number: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static complement: string

  @Random('{{lorem.word}}')
  static size: string

  @Random('{{lorem.word}}')
  static size_unit: string

  @Random('{{datatype.number(100000)}}')
  static parking_spaces: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static smoker: string

  @Random('{{lorem.word}}')
  static gender_category: string

  @Random('{{lorem.word}}')
  static launch_date: string

  @Fixed('[]'::jsonb)
  static images: string

  @Random('{{lorem.word}}')
  static blueprints: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static published_at: string

  @Fixed('apartment')
  static type: string

  @Fixed('ready')
  static status: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static pet_friendly: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static tour_link: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static supply_lead_id: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static electronic_lock: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static shared: string

  @Fixed('weekly'::enum_cleaning_interval)
  static cleaning_interval: string

  @Fixed(true)
  static visible: string

  @Random('{{datatype.number(100000)}}')
  static num_pets_allowed: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static available_pet_spaces: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static available_parking_spaces: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static ops_units_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static video: string

  @Fixed(20000)
  @FillInFrequency(50)
  static parking_space_value_cents: string
}