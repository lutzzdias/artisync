import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
  providers: [], // Add seeder
  exports: [TypeOrmModule],
})
export class TypeormModule {}
