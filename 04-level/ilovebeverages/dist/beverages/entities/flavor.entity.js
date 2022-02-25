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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flavor = void 0;
const typeorm_1 = require("typeorm");
const beverage_entity_1 = require("./beverage.entity");
let Flavor = class Flavor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Flavor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Flavor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => beverage_entity_1.Beverage, (beverage) => beverage.flavors),
    __metadata("design:type", Array)
], Flavor.prototype, "beverages", void 0);
Flavor = __decorate([
    (0, typeorm_1.Entity)()
], Flavor);
exports.Flavor = Flavor;
//# sourceMappingURL=flavor.entity.js.map