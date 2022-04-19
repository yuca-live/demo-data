import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('bookings')
export class BookingsModel {
  @Random('{{lorem.word}}')
  static room_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static price: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static package_config: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static reservation_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static check_in_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static check_out_date: string
}