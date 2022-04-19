import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('qualification_results')
export class QualificationResultsModel {
  @Random('{{lorem.word}}')
  static lead_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static other_params: string

  @Random('{{lorem.word}}')
  static result: string
}