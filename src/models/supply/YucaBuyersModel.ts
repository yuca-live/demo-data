import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('yuca_buyers')
export class YucaBuyersModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static email: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static user_id: string
}