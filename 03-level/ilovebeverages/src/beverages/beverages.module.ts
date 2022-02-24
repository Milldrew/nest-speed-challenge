import { Module } from '@nestjs/common';
import { BeveragesService } from './beverages.service';
import { BeveragesController } from './beverages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beverage } from './entities/beverage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beverage])],
  controllers: [BeveragesController],
  providers: [BeveragesService],
})
export class BeveragesModule {}
