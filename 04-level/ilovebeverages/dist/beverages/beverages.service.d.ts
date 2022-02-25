import { Repository } from 'typeorm';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { Beverage } from './entities/beverage.entity';
import { Flavor } from './entities/flavor.entity';
export declare class BeveragesService {
    private readonly beverageRepository;
    private readonly flavorRepository;
    constructor(beverageRepository: Repository<Beverage>, flavorRepository: Repository<Flavor>);
    private preloadFlavorByName;
    create(createBeverageDto: CreateBeverageDto): Promise<Beverage>;
    findAll(): Promise<Beverage[]>;
    findOne(id: number): Promise<Beverage>;
    update(id: number, updateBeverageDto: UpdateBeverageDto): Promise<Beverage>;
    remove(id: number): Promise<Beverage>;
}
