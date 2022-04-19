import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('acquisition_status')
export class AcquisitionStatusModel {
  @Random('{{lorem.word}}')
  static lead_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static status: string
}