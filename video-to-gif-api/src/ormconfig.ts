import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/database.db',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
