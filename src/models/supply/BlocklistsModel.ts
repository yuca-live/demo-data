import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('supply')
@Table('blocklists')
export class BlocklistsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static lead_id: string

  @Random('{{lorem.word}}')
  static zip_code: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static min_number: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static max_number: string

  @Random('{{lorem.word}}')
  static reason: string
}