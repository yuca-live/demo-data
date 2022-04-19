import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('supply_leads_qualifier_formulas')
export class SupplyLeadsQualifierFormulasModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  static business_type: string

  @Random('{{lorem.word}}')
  static formula: string

  @Random('{{lorem.word}}')
  static status: string

  @Random('{{lorem.word}}')
  static created_by: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static published_by: string
}