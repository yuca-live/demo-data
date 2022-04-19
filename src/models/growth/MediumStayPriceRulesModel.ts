import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('medium_stay_price_rules')
export class MediumStayPriceRulesModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  static porcentage_values: string
}