import { Table, Schema, Random, Fixed, FillInFrequency, Association, Function } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');
import { YukersModel } from '../public/YukersModel'; 

@Schema('finance')
@Table('ops_contracts')
export class OpsContractsModel {
  @Association({schema: 'public', table: 'yukers', modelClass: YukersModel, by: 'id'})
  static yuker_id: string

  @Function(() => { return faker.date.recent() })
  static start_date: string

  @Function(() => { return faker.date.future() })
  static end_date: string

  @Function(() => { return faker.date.future() })
  @FillInFrequency(10)
  static close_date: string

  @Random('{{datatype.boolean}}')
  static has_pet: string

  @Fixed(0)
  static revision: string

  @Fixed('PRE_PAID')
  static payment_type: string

  @Fixed(5)
  static invoice_due_day: string
}