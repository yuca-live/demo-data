import { IColumn } from '../model.generator';

export interface builtModel {
  className: string,
  code: string
}

const baseAttributes = ['id', 'created_at', 'updated_at', 'version'];
const forbidenAttributeNames = ['name'];

const importA = `import { Table, Schema, Random, Fixed, FillInFrequency } from '../../yuca-faker/decorators';\n`;
const importB = `import faker = require('@faker-js/faker/locale/pt_BR');\n\n`;

export class ModelBuilder {

  build(schema: string, table: string, columns: IColumn[]): builtModel {
    const imports = importA.concat(importB);
    const className = this.buildClassName(table);
    const classDecorators = `@Schema('${schema}')\n@Table('${table}')\n`;
    const classHeader = classDecorators.concat(`export class ${className} `)
    const classBody = this.processClassBody(columns);
    const code = imports.concat(classHeader).concat(classBody);
    return { className, code };
  }

  private buildClassName(tableName: string) {
    let name = tableName.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    return name.charAt(0).toUpperCase() + name.slice(1).concat('Model');
  }

  private processClassBody(columns: IColumn[]) {
    let body = '';
    columns.map(c => { const prop = this.processProperty(c); body = body.concat(prop) });
    return `{\n${body}}`.replace('\n}', '}');
  }

  private processProperty(column: IColumn) {
    if (baseAttributes.includes(column.name)) { return '' }

    if (forbidenAttributeNames.includes(column.name)) {
      column.name = column.name.concat('_x');
    }

    let property = `  static ${column.name}: string\n\n`;
    let decorators = '';

    if (column.column_default) {
      decorators = decorators.concat(`  @Fixed(${column.column_default.replace('::character varying', '')})\n`);
    }
    else {
      switch (column.data_type) {
        case 'boolean':
          decorators = decorators.concat(`  @Random('{{datatype.boolean}}')\n`); break;
        case 'integer':
          decorators = decorators.concat(`  @Random('{{datatype.number(100000)}}')\n`); break;
        default:
          decorators = decorators.concat(`  @Random('{{lorem.word}}')\n`);
      }
    }
    if (column.is_nullable === 'YES') {
      decorators = decorators.concat(`  @FillInFrequency(50)\n`);
    }

    return decorators.concat(property);
  }
}