import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('property_owners')
export class PropertyOwnersModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static phone: string

  @Random('{{lorem.word}}')
  static email: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static user_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static profile: string
}