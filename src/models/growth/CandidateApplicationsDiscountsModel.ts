import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('candidate_applications_discounts')
export class CandidateApplicationsDiscountsModel {
  @Random('{{lorem.word}}')
  static application_id: string

  @Random('{{lorem.word}}')
  static title: string

  @Random('{{lorem.word}}')
  static discount_destination: string

  @Random('{{datatype.number(100000)}}')
  static value_cents: string

  @Random('{{lorem.word}}')
  static start_date: string

  @Random('{{lorem.word}}')
  static end_date: string
}