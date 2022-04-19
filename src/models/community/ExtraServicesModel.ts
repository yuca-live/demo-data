import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('extra_services')
export class ExtraServicesModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string
}