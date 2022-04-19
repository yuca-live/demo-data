import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('yukers_preferences')
export class YukersPreferencesModel {
  @Random('{{lorem.word}}')
  static yuker_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bathroom: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static garage: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static limit_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static mixed_apartment: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pet: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static smoking: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static social: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static region: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static age_range: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static share: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static willing_to_pay: string
}