const ignoredSchemas = ['pg_toast', 'pg_temp_1', 'pg_toast_temp_1', 'pg_catalog', 'information_schema'].map(e => `'${e}'`);

export const Queries = {
  GetSchemas: `select schema_name as name from information_schema.schemata where schema_name not in (${ignoredSchemas.join(',')})`,
  GetSingleTableFromSchema: `select table_name as name, table_schema as schema from information_schema.tables where table_schema = $1 and table_name = $2`,
  GetTablesFromSchema: `select table_name as name, table_schema as schema from information_schema.tables where table_schema = $1 and table_name not like 'SequelizeMeta%'`,
  GetColumnsFromTable: `select column_name as name, table_name as table, table_schema as schema, data_type, is_nullable, column_default from information_schema.columns where table_schema = $1 and table_name = $2`,
}