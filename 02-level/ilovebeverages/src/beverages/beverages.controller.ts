import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BeveragesService } from './beverages.service';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';

@Controller('beverages')
export class BeveragesController {
  constructor(private readonly beveragesService: BeveragesService) {}

  @Post()
  create(@Body() createBeverageDto: CreateBeverageDto) {
    return this.beveragesService.create(createBeverageDto);
  }

  @Get()
  findAll() {
    return this.beveragesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(typeof id);
    return this.beveragesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateBeverageDto: UpdateBeverageDto,
  ) {
    return this.beveragesService.update(id, updateBeverageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.beveragesService.remove(id);
  }
}
