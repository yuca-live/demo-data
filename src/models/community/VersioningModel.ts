import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('versioning')
export class VersioningModel {
  @Random('{{lorem.word}}')
  static app_version: string

  @Random('{{lorem.word}}')
  static date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string
}