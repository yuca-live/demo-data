import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('supply_leads_qualification_results')
export class SupplyLeadsQualificationResultsModel {
  @Random('{{lorem.word}}')
  static lead_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static supply_leads_parameters_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static qualification_formula_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static qualifier_regions_prices_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static other_params: string

  @Random('{{lorem.word}}')
  static result: string
}