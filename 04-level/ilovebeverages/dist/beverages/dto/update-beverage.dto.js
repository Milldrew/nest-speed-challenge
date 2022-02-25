"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBeverageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_beverage_dto_1 = require("./create-beverage.dto");
class UpdateBeverageDto extends (0, mapped_types_1.PartialType)(create_beverage_dto_1.CreateBeverageDto) {
}
exports.UpdateBeverageDto = UpdateBeverageDto;
//# sourceMappingURL=update-beverage.dto.js.map