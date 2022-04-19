import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('wifi_units')
export class WifiUnitsModel {
  @Random('{{lorem.word}}')
  static wifi_id: string

  @Random('{{lorem.word}}')
  static ops_unit_id: string
}