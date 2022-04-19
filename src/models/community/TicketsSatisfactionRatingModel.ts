import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('tickets_satisfaction_rating')
export class TicketsSatisfactionRatingModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static answered_at: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static satisfied: string

  @Random('{{lorem.word}}')
  static status: string

  @Random('{{datatype.number(100000)}}')
  static ticket_id: string
}