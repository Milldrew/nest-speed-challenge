import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { Beverage } from './entities/beverage.entity';

@Injectable()
export class BeveragesService {
  beverages: Beverage[] = [
    {
      id: 1,
      name: 'bev name',
      brand: 'bev brand',
      flavors: ['flav 1', 'flav 2', 'flav 3'],
    },
  ];
  create(createBeverageDto: CreateBeverageDto) {
    const id = Math.floor(Math.random() * 1000);
    const beverage: Beverage = { id, ...createBeverageDto };
    this.beverages.push(beverage);
    return beverage;
  }

  findAll() {
    return this.beverages;
  }

  findOne(id: number) {
    const beverage = this.beverages.find((beverage) => beverage.id === id);
    if (!beverage) {
      throw new NotFoundException(`Beverage ${id} not found.`);
    }
    return beverage;
  }

  update(id: number, updateBeverageDto: UpdateBeverageDto) {
    const beverage = this.beverages.find((beverage) => beverage.id === id);
    if (!beverage) {
      throw new NotFoundException(`Beverage #${id} not found.`);
    }
    Object.assign(beverage, updateBeverageDto);
    return beverage;
  }

  remove(id: number) {
    const bevIndex = this.beverages.findIndex((beverage) => beverage.id === id);
    if (bevIndex < 0) {
      throw new NotFoundException(`Beverage #${id} not found`);
    }
    return this.beverages.splice(bevIndex, 1);
  }
}
