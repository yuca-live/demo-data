import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('supply_leads_status')
export class SupplyLeadsStatusModel {
  @Random('{{lorem.word}}')
  static lead_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static status: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static udpated_by: string

  @Fixed(false)
  static internal: string
}