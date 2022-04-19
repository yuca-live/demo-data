import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('pois')
export class PoisModel {
  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static icon: string

  @Random('{{lorem.word}}')
  static location: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static parameters: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string
}