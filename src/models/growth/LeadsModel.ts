import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';
import faker = require('@faker-js/faker/locale/pt_BR');

@Schema('growth')
@Table('leads')
export class LeadsModel {
  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static email: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pipe_card_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static invitation_code: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static full_name: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static nickname: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static age: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static company: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static document_number: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static friends: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static gender: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static income: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static bathroom: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static cleaning: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static coliving: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static feedback: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static garage: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static limit_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static mixed_apartment: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pet: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static smoking: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static social: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static start_date: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static region: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static fully_registered: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static registration_code: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static marital_status: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static phone_number: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static region_other: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static profession: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static origin: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static share: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static heard_about_us: string

  @Fixed(false)
  @FillInFrequency(50)
  static income_complement: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static age_range: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static work_or_study: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static birthdate: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static recommendation_rooms: string

  @Random('{{datatype.boolean}}')
  @FillInFrequency(50)
  static allow_whatsapp_contact: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pipedrive_id: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static document_type: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static willing_to_pay: string

  @Random('{{datatype.number(100000)}}')
  @FillInFrequency(50)
  static contract_duration: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static checkout_rooms: string

  @Random('{{lorem.word}}')
  @FillInFrequency(50)
  static pipedrive_person_id: string
}