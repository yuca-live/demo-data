import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('geography_columns')
export class GeographyColumnsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static f_table_catalog: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static f_table_schema: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static f_table_name: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static f_geography_column: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static coord_dimension: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static srid: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static type: string
}