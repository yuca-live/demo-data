import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('room_items')
export class RoomItemsModel {
  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static name_x: string
}