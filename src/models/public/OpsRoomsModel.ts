import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('ops_rooms')
export class OpsRoomsModel {
  @Random('{{lorem.word}}')
  static ops_unit_id: string

  @Random('{{lorem.word}}')
  static bathroom_type: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static room_id: string
}