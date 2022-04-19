import { Table, Schema, Random, Fixed, FillInFrequency, Association, List } from '../../yuca-faker/decorators';
import { UsersModel } from './UsersModel';

const maritalStatusList = ['single', 'maried'];

@Schema('public')
@Table('yukers')
export class YukersModel {
  @Association({schema: 'public', table: 'users', modelClass: UsersModel, by: 'id'})
  static user_id: string

  @Random('{{name.gender}}')
  static gender: string

  @List(maritalStatusList)
  static marital_status: string

  @Random('{{name.jobTitle}}')
  static profession: string

  @Random('{{finance.amount}}')
  static income: string

  @Fixed(true)
  static income_complement: string

  @Fixed(false)
  static allow_bio_sharing: string
}