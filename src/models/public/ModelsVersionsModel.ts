import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('models_versions')
export class ModelsVersionsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static model: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static document: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static operation: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static document_id: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static revision: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static user_id: string
}