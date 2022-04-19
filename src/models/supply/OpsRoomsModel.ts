import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('ops_rooms')
export class OpsRoomsModel {
  @Random('{{lorem.word}}')
  static ops_unit_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static room_id: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static bathroom_type: string
}