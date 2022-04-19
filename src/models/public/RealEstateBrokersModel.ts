import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('real_estate_brokers')
export class RealEstateBrokersModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static phone: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static brokerage: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static email: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static user_id: string

  @Fixed(true)
  @FillInFrequency(50)
  static valid: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static user_type: string
}