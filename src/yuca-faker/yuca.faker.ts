import { isDecoratedWith, getDecoratorParameter, IAssociationDetails } from './decorators';
import faker = require("@faker-js/faker/locale/pt_BR");
import ObjectsToCsv = require('objects-to-csv');
import { BaseModelClass } from './base.model';


export interface IFakeData {
  schema: string
  table: string
  order: number
  record: Object
}

export interface IFakeOrderedData {
  schema: string
  table: string
  records: Object[]
}

export interface ICsvData {
  name: string
  data: ObjectsToCsv
}

export class YucaFaker {

  fakeCsv(ModelClass: any, quantity: number): ICsvData[] {
    const records = this.fakeJson(ModelClass, quantity);
    const data = records.map(element => { return { name: `${element.schema}.${element.table}`, data: new ObjectsToCsv(element.records) } });
    return data;
  }

  fakeJson(ModelClass: any, quantity: number) {
    const records = this.fakeData(ModelClass, quantity);
    return this.orderRecords(records);
  }


  private fakeData(ModelClass: any, quantity: number, depth: number = 0): IFakeData[] {
    let records = [];
    for (let i = 0; i < quantity; i++) {
      const builtRecords = this.buildRecords(ModelClass, depth);
      records.push(...builtRecords);
    }
    return records;
  }

  private buildRecords(ModelClass: any, depth: number): IFakeData[] {
    const fakeData = [];
    const record = this.buildBaseRecord();
    for (const key of Object.keys(ModelClass)) {
      if (isDecoratedWith(ModelClass, key, 'Association')) {
        const association = getDecoratorParameter(ModelClass, key, 'Association') as IAssociationDetails;
        const associatedRecord = this.fakeData(association.modelClass, 1, depth + 1);
        const fk = associatedRecord[associatedRecord.length - 1].record[association.by];
        record[key] = this.resolveFieldValue(ModelClass, key, fk);
        fakeData.push(...associatedRecord);
      }
      else {
        record[key] = this.resolveFieldValue(ModelClass, key);
      }
    }
    const o = new ModelClass();
    fakeData.push({ schema: o.schema, table: o.table, order: depth, record });
    return fakeData;
  }

  private buildBaseRecord() {
    const record = {};
    for (const key of Object.keys(BaseModelClass)) {
      record[key] = this.resolveFieldValue(BaseModelClass, key);
    }
    return record;
  }

  private resolveFieldValue(ModelClass: any, key: string, value?: any) {
    if (isDecoratedWith(ModelClass, key, 'FillInFrequency')) {
      const frequency = getDecoratorParameter(ModelClass, key, 'FillInFrequency');
      if (Math.floor(Math.random() * 100) + 1 > frequency) {
        return undefined;
      }
    }
    if (value !== undefined) {
      return JSON.stringify(value).replace(/"/g, '');
    }
    if (isDecoratedWith(ModelClass, key, 'Enum') || isDecoratedWith(ModelClass, key, 'List')) {
      return JSON.stringify(faker.random.arrayElement(ModelClass[key])).replace(/"/g, '');
    }
    if (isDecoratedWith(ModelClass, key, 'Function')) {
      return JSON.stringify(ModelClass[key]()).replace(/"/g, '');
    }
    if (isDecoratedWith(ModelClass, key, 'Fixed')) {
      return JSON.stringify(ModelClass[key]).replace(/"/g, '');
    }

    return JSON.stringify(faker.fake(ModelClass[key])).replace(/"/g, '');
  }


  private orderRecords(records: IFakeData[]): IFakeOrderedData[] {
    const orderedRecords = [] as IFakeOrderedData[];
    let deepestChain = 0;
    for (const record of records) { deepestChain = Math.max(deepestChain, record.order); }

    for (let i = deepestChain; i >= 0; i--) {
      for (const record of records) {
        let added = false;
        if (record.order === i) {
          for (const orderedRecord of orderedRecords) {
            if (orderedRecord.schema === record.schema && orderedRecord.table === record.table) {
              orderedRecord.records.push(record.record);
              added = true;
            }
          }
          if (!added) {
            orderedRecords.push({ schema: record.schema, table: record.table, records: [record.record] });
          }
        }
      }
    }
    return orderedRecords;
  }
}
