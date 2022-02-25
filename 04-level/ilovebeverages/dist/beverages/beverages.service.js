"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeveragesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const beverage_entity_1 = require("./entities/beverage.entity");
const flavor_entity_1 = require("./entities/flavor.entity");
let BeveragesService = class BeveragesService {
    constructor(beverageRepository, flavorRepository) {
        this.beverageRepository = beverageRepository;
        this.flavorRepository = flavorRepository;
    }
    async preloadFlavorByName(name) {
        const existingFlavor = await this.flavorRepository.findOne({ name });
        if (existingFlavor) {
            return existingFlavor;
        }
        return this.flavorRepository.create({ name });
    }
    async create(createBeverageDto) {
        const flavors = await Promise.all(createBeverageDto.flavors.map((name) => this.preloadFlavorByName(name)));
        const beverage = this.beverageRepository.create(Object.assign(Object.assign({}, createBeverageDto), { flavors }));
        return this.beverageRepository.save(beverage);
    }
    findAll() {
        return this.beverageRepository.find({
            relations: ['flavors'],
        });
    }
    async findOne(id) {
        const beverage = await this.beverageRepository.findOne(id, {
            relations: ['flavors'],
        });
        if (!beverage) {
            throw new common_1.NotFoundException(`Beverage #${id} not found.`);
        }
        return beverage;
    }
    async update(id, updateBeverageDto) {
        const flavors = updateBeverageDto.flavors &&
            (await Promise.all(updateBeverageDto.flavors.map((name) => this.preloadFlavorByName(name))));
        const beverage = await this.beverageRepository.preload(Object.assign(Object.assign({ id }, updateBeverageDto), { flavors }));
        if (!beverage) {
            throw new common_1.NotFoundException(`Beverage #${id} not found.`);
        }
        return this.beverageRepository.save(beverage);
    }
    async remove(id) {
        const beverage = await this.beverageRepository.findOne(id, {
            relations: ['flavors'],
        });
        return this.beverageRepository.remove(beverage);
    }
};
BeveragesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(beverage_entity_1.Beverage)),
    __param(1, (0, typeorm_1.InjectRepository)(flavor_entity_1.Flavor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BeveragesService);
exports.BeveragesService = BeveragesService;
//# sourceMappingURL=beverages.service.js.map