import { IsString } from 'class-validator';

export class CreateBeverageDto {
  @IsString()
  name: string;
  @IsString()
  brand: string;
  @IsString({each: true})
  flavors: string[];
}
