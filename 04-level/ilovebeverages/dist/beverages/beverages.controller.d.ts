import { BeveragesService } from './beverages.service';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
export declare class BeveragesController {
    private readonly beveragesService;
    constructor(beveragesService: BeveragesService);
    create(createBeverageDto: CreateBeverageDto): Promise<import("./entities/beverage.entity").Beverage>;
    findAll(): Promise<import("./entities/beverage.entity").Beverage[]>;
    findOne(id: number): Promise<import("./entities/beverage.entity").Beverage>;
    update(id: string, updateBeverageDto: UpdateBeverageDto): Promise<import("./entities/beverage.entity").Beverage>;
    remove(id: string): Promise<import("./entities/beverage.entity").Beverage>;
}
