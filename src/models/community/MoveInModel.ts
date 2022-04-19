import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('move_in')
export class MoveInModel {
  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{lorem.word}}')
  static yuker_id: string

  @Random('{{lorem.word}}')
  static date_time: string
}