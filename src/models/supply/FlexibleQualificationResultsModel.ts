import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('flexible_qualification_results')
export class FlexibleQualificationResultsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static lead_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static crawler_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static source: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static origin: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static url: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static condo_amount: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static sale_amount: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static iptu_amount: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static area: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static address: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bathrooms: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bedrooms: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static parking_lots: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static latitude: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static longitude: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static neighbourhood: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static published_at: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static policy_yuca_subregion: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static estimated_area: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static sale_amount_discounted: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static sqrtm_price: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static sqrtm_condo: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static sqrtm_iptu: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static sqrtm_filter: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static final_bedrooms: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static final_bathrooms: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bedroom_shared_bathroom: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bedroom_exclusive_bathroom: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bedroom_suite: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bathroom_shared: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bathroom_exclusive: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static suite: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static renovation_costs: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static living_costs: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static service_costs: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static utilities_costs: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static revenue: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static revenue_per_room: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static revenue_parking_lots: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static net_revenue: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static noi: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static monthly_noi: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static blocklist: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static matched_ids: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static blocklist_motive: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static closing_costs: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static total_investment: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static yield: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static approved: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static viewed: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pipedrive_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static hash: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static unwanted_location: string
}