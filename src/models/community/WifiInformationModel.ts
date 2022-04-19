import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('community')
@Table('wifi_information')
export class WifiInformationModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static password: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static is_repeater: string
}