import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('supply_leads_qualifier_regions_prices')
export class SupplyLeadsQualifierRegionsPricesModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static data: string

  @Random('{{lorem.word}}')
  static created_by: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static published_by: string

  @Fixed('testing')
  static status: string
}