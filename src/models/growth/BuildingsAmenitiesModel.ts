import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('buildings_amenities')
export class BuildingsAmenitiesModel {
  @Random('{{lorem.word}}')
  static building_id: string

  @Random('{{lorem.word}}')
  static amenity_type: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string
}