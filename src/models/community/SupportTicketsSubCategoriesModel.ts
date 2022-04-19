import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('support_tickets_sub_categories')
export class SupportTicketsSubCategoriesModel {
  @Random('{{lorem.word}}')
  static category_id: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Fixed(true)
  static enabled: string

  @Fixed(false)
  static has_reporting_channel: string
}