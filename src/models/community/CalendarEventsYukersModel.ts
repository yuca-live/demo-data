import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('calendar_events_yukers')
export class CalendarEventsYukersModel {
  @Random('{{lorem.word}}')
  static event_id: string

  @Random('{{lorem.word}}')
  static yuker_id: string
}