import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('calendar_events')
export class CalendarEventsModel {
  @Random('{{lorem.word}}')
  static ops_unit_id: string

  @Random('{{lorem.word}}')
  static type: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static participants: string

  @Random('{{lorem.word}}')
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static end_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static good_to_know: string

  @Random('{{lorem.word}}')
  static requesters: string

  @Random('{{lorem.word}}')
  static address: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static approved_by: string

  @Fixed(false)
  @FillInFrequency(50)
  static is_canceled: string

  @Fixed(false)
  @FillInFrequency(50)
  static is_rescheduled: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static update_description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static recurrence_rule: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static exclude_dates: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static parent_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static ops_room_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static until_date: string
}