import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('rooms_room_items')
export class RoomsRoomItemsModel {
  @Random('{{lorem.word}}')
  static room_id: string

  @Random('{{lorem.word}}')
  static item_type: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static room_item_option_id: string
}