import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('rooms_rooms')
export class RoomsRoomsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static parent_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static child_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string
}