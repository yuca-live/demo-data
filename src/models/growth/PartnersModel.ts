import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('partners')
export class PartnersModel {
  @Random('{{lorem.word}}')
  static location: string

  @Random('{{lorem.word}}')
  static company_name: string

  @Random('{{lorem.word}}')
  static company_slug: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static discount: string
}