import { DBConnector } from './utils/database.connector';
import { ModelBuilder } from './utils/model.builder';
import { Queries } from './utils/queries';
import * as fs from 'fs';

export interface ISchema {
  name: string
}

export interface ITable {
  name: string
  schema: string
}

export interface IColumn {
  name: string
  table: string
  schema: string
  data_type: string
  is_nullable: string
  column_default?: string
}

class ModelUpdater {
  db = new DBConnector();
  modelBuilder = new ModelBuilder();

  async createSingleModel(schema: string, table: string) {
    const tables = await this.db.execute(Queries.GetSingleTableFromSchema, [schema, table]);
    if (tables.length > 0) {
      if (!fs.existsSync(`./src/models/${schema}`)) {
        fs.mkdirSync(`./src/models/${schema}`);
      }
      await this.update([tables]);
    }
  }

  async createModelsFromSchema(schema: string) {
    const tables = await this.db.execute(Queries.GetTablesFromSchema, [schema]);
    if (tables.length > 0) {
      if (!fs.existsSync(`./src/models/${schema}`)) {
        fs.mkdirSync(`./src/models/${schema}`);
      }
      await this.update([tables]);
    }
  }

  async createAllModels() {
    const schemas = await this.db.execute(Queries.GetSchemas);
    schemas.map((s: ISchema) => { if (!fs.existsSync(`./src/models/${s.name}`)) fs.mkdirSync(`./src/models/${s.name}`) });
    const tables = await Promise.all(schemas.map(async (s: ISchema) => { return this.db.execute(Queries.GetTablesFromSchema, [s.name]) }));
    await this.update(tables);
  }

  private async update(groupedTables: ITable[][]) {
    const tables = [] as ITable[];
    groupedTables.map(row => { row.map(t => { tables.push(t) }) });
    for (const t of tables) {
      const columns = await this.db.execute(Queries.GetColumnsFromTable, [t.schema, t.name]) as IColumn[];
      const modelCode = this.modelBuilder.build(t.schema, t.name, columns);
      if (!fs.existsSync(`./src/models/${t.schema}/${modelCode.className}.ts`)) {
        fs.writeFileSync(`./src/models/${t.schema}/${modelCode.className}.ts`, modelCode.code);
      }
    }
  }
}

const md = new ModelUpdater();

// md.createAllModels().then(() => { console.log('process finished') });
// md.createModelsFromSchema('finance').then(() => { console.log('process finished') });
md.createSingleModel('finance', 'invoices').then(() => { console.log('process finished') });
