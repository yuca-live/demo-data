import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('neighborhoods')
export class NeighborhoodsModel {
  @Random('{{lorem.word}}')
  static name_x: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static description: string

  @Random('{{lorem.word}}')
  static city: string

  @Random('{{lorem.word}}')
  static state: string

  @Random('{{lorem.word}}')
  static country: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static video_url: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static slug: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static subtitle: string
}