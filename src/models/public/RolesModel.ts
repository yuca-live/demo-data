import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('roles')
export class RolesModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static permissions: string

  @Fixed(true)
  static enabled: string
}