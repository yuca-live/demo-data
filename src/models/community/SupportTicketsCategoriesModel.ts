import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('support_tickets_categories')
export class SupportTicketsCategoriesModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static description: string

  @Fixed('default')
  @FillInFrequency(50)
  static icon_name: string

  @Fixed(true)
  static enabled: string
}