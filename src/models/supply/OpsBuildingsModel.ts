import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('ops_buildings')
export class OpsBuildingsModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static address: string

  @Random('{{lorem.word}}')
  static number: string

  @Random('{{lorem.word}}')
  static neighborhood: string

  @Random('{{lorem.word}}')
  static zipcode: string

  @Random('{{lorem.word}}')
  static city: string

  @Random('{{lorem.word}}')
  static state: string

  @Random('{{lorem.word}}')
  static country: string

  @Random('{{lorem.word}}')
  static location: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static building_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static move_in_rules: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static observation: string
}