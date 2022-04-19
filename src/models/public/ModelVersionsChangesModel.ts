import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('public')
@Table('model_versions_changes')
export class ModelVersionsChangesModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static path: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static document: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static diff: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static revision_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static user_id: string
}