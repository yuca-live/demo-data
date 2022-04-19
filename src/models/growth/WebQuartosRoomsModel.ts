import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('web_quartos_rooms')
export class WebQuartosRoomsModel {
  @Random('{{lorem.word}}')
  static room_id: string

  @Random('{{lorem.word}}')
  static unit_id: string

  @Fixed(false)
  static activated: string
}