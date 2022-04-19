import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('spatial_ref_sys')
export class SpatialRefSysModel {
  @Random('{{datatype.number(100000)}}')
  static srid: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static auth_name: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static auth_srid: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static srtext: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static proj4text: string
}