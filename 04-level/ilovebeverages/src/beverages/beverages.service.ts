import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { Beverage } from './entities/beverage.entity';
import { Flavor } from './entities/flavor.entity';

@Injectable()
export class BeveragesService {
  constructor(
    @InjectRepository(Beverage)
    private readonly beverageRepository: Repository<Beverage>,
    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
  ) {}

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorRepository.findOne({ name });
    if (existingFlavor) {
      return existingFlavor;
    }
    return this.flavorRepository.create({ name });
  }

  async create(createBeverageDto: CreateBeverageDto) {
    const flavors = await Promise.all(
      createBeverageDto.flavors.map((name) => this.preloadFlavorByName(name)),
    );
    const beverage = this.beverageRepository.create({
      ...createBeverageDto,
      flavors,
    });
    return this.beverageRepository.save(beverage);
  }

  findAll() {
    return this.beverageRepository.find({
      relations: ['flavors'],
    });
  }

  async findOne(id: number) {
    const beverage = await this.beverageRepository.findOne(id, {
      relations: ['flavors'],
    });
    if (!beverage) {
      throw new NotFoundException(`Beverage #${id} not found.`);
    }
    return beverage;
  }

  async update(id: number, updateBeverageDto: UpdateBeverageDto) {
    const flavors =
      updateBeverageDto.flavors &&
      (await Promise.all(
        updateBeverageDto.flavors.map((name) => this.preloadFlavorByName(name)),
      ));
    const beverage = await this.beverageRepository.preload({
      id,
      ...updateBeverageDto,
      flavors,
    });
    if (!beverage) {
      throw new NotFoundException(`Beverage #${id} not found.`);
    }

    return this.beverageRepository.save(beverage);
  }

  async remove(id: number) {
    const beverage = await this.beverageRepository.findOne(id, {
      relations: ['flavors'],
    });
    return this.beverageRepository.remove(beverage);
  }
}
