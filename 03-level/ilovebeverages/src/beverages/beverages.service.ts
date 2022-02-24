import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { Beverage } from './entities/beverage.entity';

@Injectable()
export class BeveragesService {
  constructor(
    @InjectRepository(Beverage)
    private readonly beverageRepository: Repository<Beverage>,
  ) {}
  findAll() {
    return this.beverageRepository.find();
  }
  async findOne(id: number) {
    const beverage = await this.beverageRepository.findOne(id);
    if (!beverage) {
      throw new NotFoundException(`Beverage ${id} not found.`);
    }
    return beverage;
  }
  create(createBeverageDto: CreateBeverageDto) {
    const beverage = this.beverageRepository.create(createBeverageDto);
    return this.beverageRepository.save(beverage);
  }

  async update(id: number, updateBeverageDto: UpdateBeverageDto) {
    const beverage = await this.beverageRepository.preload({
      id,
      ...updateBeverageDto,
    });
    if (!beverage) {
      throw new NotFoundException(`Beverage #${id} not found.`);
    }
    Object.assign(beverage, updateBeverageDto);
    return this.beverageRepository.save(beverage);
  }

  async remove(id: number) {
    const beverage = await this.beverageRepository.findOne(id);
    return this.beverageRepository.remove(beverage);
  }
}
