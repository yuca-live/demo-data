import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('partnerships_units')
export class PartnershipsUnitsModel {
  @Random('{{lorem.word}}')
  static unit_id: string

  @Fixed('0'::double precision)
  static discount: string

  @Random('{{datatype.number(100000)}}')
  static distance: string

  @Random('{{lorem.word}}')
  static published_at: string

  @Random('{{lorem.word}}')
  static partner_id: string
}