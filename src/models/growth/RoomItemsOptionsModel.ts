import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('room_items_options')
export class RoomItemsOptionsModel {
  @Random('{{lorem.word}}')
  static room_items_type: string

  @Random('{{lorem.word}}')
  static description: string
}