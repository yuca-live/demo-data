import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('poi_types')
export class PoiTypesModel {
  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static icon: string
}