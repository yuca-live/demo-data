import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('ops_unit_deals_financial_details')
export class OpsUnitDealsFinancialDetailsModel {
  @Fixed('0'::double precision)
  @FillInFrequency(50)
  static reserve_fund_percent: string

  @Fixed(0)
  @FillInFrequency(50)
  static min_income_cents: string

  @Fixed('0'::double precision)
  @FillInFrequency(50)
  static administration_fee_percent: string

  @Random('{{lorem.word}}')
  static ops_unit_deals_id: string
}