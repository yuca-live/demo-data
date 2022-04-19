import { YucaFaker } from './yuca-faker/yuca.faker';
import { OpsContractsModel } from './models/finance/OpsContractsModel';
import * as fs from 'fs';

if (!fs.existsSync(`./data/`)) { fs.mkdirSync(`./data`); }

const faker = new YucaFaker();
const csvData = faker.fakeCsv(OpsContractsModel, 10);
csvData.map((csv, index) => { csv.data.toDisk(`./data/${csv.name}.csv`) });