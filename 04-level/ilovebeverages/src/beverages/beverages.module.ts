import { Module } from '@nestjs/common';
import { BeveragesService } from './beverages.service';
import { BeveragesController } from './beverages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beverage } from './entities/beverage.entity';
import { Flavor } from './entities/flavor.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Beverage, Flavor])],
  controllers: [BeveragesController],
  providers: [BeveragesService],
})
export class BeveragesModule {}
