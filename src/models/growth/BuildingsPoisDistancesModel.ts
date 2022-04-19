import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('buildings_pois_distances')
export class BuildingsPoisDistancesModel {
  @Random('{{lorem.word}}')
  static building_id: string

  @Random('{{lorem.word}}')
  static poi_id: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static distance: string
}