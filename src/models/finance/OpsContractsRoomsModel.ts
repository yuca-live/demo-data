import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('finance')
@Table('ops_contracts_rooms')
export class OpsContractsRoomsModel {
  @Random('{{lorem.word}}')
  static ops_room_id: string

  @Random('{{lorem.word}}')
  static ops_contract_id: string

  @Random('{{lorem.word}}')
  static room_data: string

  @Fixed(0)
  @FillInFrequency(50)
  static revision: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static yuker_id: string
}