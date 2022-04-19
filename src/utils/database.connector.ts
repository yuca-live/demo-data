import { DATA_SOURCES } from '../conf/index';
import { Pool } from 'pg';

const ds = DATA_SOURCES.mySqlDataSource;

export class DBConnector {
  pool: Pool

  init() {
    try {
      this.pool = new Pool({
        host: ds.DB_HOST,
        port: ds.DB_PORT,
        user: ds.DB_USER,
        password: ds.DB_PASSWORD,
        database: ds.DB_DATABASE,
      });
      console.debug('PG adapter pool generated successfully');
    } catch (error) {
      console.error('[pg.connector][init][Error]: ', error);
      throw new Error('failed to initialized connection pool');
    }
  }

  async execute(query: string, params?: string[]) {
    try {
      if (!this.pool) { this.init() }
      const client = await this.pool.connect();
      const result = await client.query(query, params || []);
      await client.release();
      return result.rows;
    } catch (error) {
      console.error(error);
    }
  }

}