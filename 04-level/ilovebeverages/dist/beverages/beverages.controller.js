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
exports.BeveragesController = void 0;
const common_1 = require("@nestjs/common");
const beverages_service_1 = require("./beverages.service");
const create_beverage_dto_1 = require("./dto/create-beverage.dto");
const update_beverage_dto_1 = require("./dto/update-beverage.dto");
let BeveragesController = class BeveragesController {
    constructor(beveragesService) {
        this.beveragesService = beveragesService;
    }
    create(createBeverageDto) {
        return this.beveragesService.create(createBeverageDto);
    }
    findAll() {
        return this.beveragesService.findAll();
    }
    findOne(id) {
        console.log(typeof id);
        return this.beveragesService.findOne(+id);
    }
    update(id, updateBeverageDto) {
        return this.beveragesService.update(+id, updateBeverageDto);
    }
    remove(id) {
        return this.beveragesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beverage_dto_1.CreateBeverageDto]),
    __metadata("design:returntype", void 0)
], BeveragesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeveragesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BeveragesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_beverage_dto_1.UpdateBeverageDto]),
    __metadata("design:returntype", void 0)
], BeveragesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BeveragesController.prototype, "remove", null);
BeveragesController = __decorate([
    (0, common_1.Controller)('beverages'),
    __metadata("design:paramtypes", [beverages_service_1.BeveragesService])
], BeveragesController);
exports.BeveragesController = BeveragesController;
//# sourceMappingURL=beverages.controller.js.map