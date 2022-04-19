import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('yuca_companies')
export class YucaCompaniesModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static cnpj: string

  @Fixed(false)
  @FillInFrequency(50)
  static default_transfer_company: string
}