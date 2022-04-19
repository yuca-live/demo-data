import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('candidate_applications')
export class CandidateApplicationsModel {
  @Random('{{lorem.word}}')
  static room_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static iugu_invoice_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static invoice_url: string

  @Random('{{datatype.number(100000)}}')
  static contract_duration: string

  @Fixed('pending'::growth.enum_candidate_applications_invoice_status)
  static invoice_status: string

  @Random('{{lorem.word}}')
  static yuker_id: string

  @Fixed('active'::growth.enum_candidate_applications_status)
  static status: string

  @Fixed(false)
  static parking_space: string

  @Fixed(false)
  static has_pet: string

  @Fixed(false)
  static accept_another_pet: string

  @Random('{{lorem.word}}')
  static expiration_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static payment_receipt_date: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static pet_screen: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pet_type: string

  @Random('{{datatype.number(100000)}}')
  static current_room_value_cents: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static current_mid_stay_rule: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pipedrive_deal_id: string
}